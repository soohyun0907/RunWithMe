<template>
  <div class="main-content">
    <breadcumb :page="'KakaoMap'" :folder="'Pages'" />

    <div id="map"></div>

    <!-- <section class="bottom-bar">
      <div class="latLngLabel">{{lat}}, {{lng}}</div>
      <button class="ui button green" @click="startLocationUpdates">
        <i class="circle dot outline icon large"></i>
          Start Location
      </button>
      <button class="ui button red" @click="stopLocationUpdates">
        <i class="circle dot outline icon large"></i>
          Stop Location
      </button>
    </section> -->

  </div>
</template>
<script>
export default {
  name: "kakaomap",
  data() {
    return {
      map: ""
    };
  },
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  },
  methods: {
    addScript(){
      // console.log(this.kakaomap);
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f1c07d2de50ad211c7c1df94eb1eaf69';
            document.head.appendChild(script);
    },
    initMap() {
      // console.log(this.kakaomap);
      let container = document.getElementById('map');
      let lat = 33.450701,
            lon = 126.570667;

      // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
          lat = position.coords.latitude; // 위도
          lon = position.coords.longitude; // 경도

          let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
          console.log("geolocation " + lat, lon);
          let options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
          };

          this.map = new kakao.maps.Map(container, options);
          // console.log(map);
          // this.map = map;
          console.log(this.map);

          // 마커와 인포윈도우를 표시합니다
          let marker = new kakao.maps.Marker({  
            map: map, 
            position: locPosition
          }); 
          let iwContent = message, // 인포윈도우에 표시할 내용
              iwRemoveable = true;

          // 인포윈도우를 생성합니다
          let infowindow = new kakao.maps.InfoWindow({
              content : iwContent,
              removable : iwRemoveable
          });
    
          // 인포윈도우를 마커위에 표시합니다 
          infowindow.open(map, marker);
    
          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
          // this.displayMarker(locPosition, message, kakaomap);
        });
      } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        // var locPosition = new kakao.maps.LatLng(33.450701, 126.570667), message = 'geolocation을 사용할수 없어요..'
        // this.displayMarker(locPosition, message);
        // console.log("else2 " + lat, lon);
      }
      
    },
    startLocationUpdates() {
      
      var marker = new google.maps.Marker({
        map: this.kakaomap
      });

      this.watchPositionId = navigator.geolocation.watchPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(position);
          map.setCenter(new google.maps.LatLng(this.lat, this.lng)); 
          marker.setPosition(new google.maps.LatLng(this.lat, this.lng));
        },
        error => {
          console.log(error.message);
        },
        {timeout: 5000,
          maximumAge: 0}
      );
            
    },
    stopLocationUpdates() {
      navigator.geolocation.clearWatch(this.watchPositionId);
    },

  }
};
</script>
<style scoped>
#map {
  width: 300px;
  height: 310px;
  border: 1px solid red;
}
.app-footer {
    margin-top: 2rem;
    background: #eee;
    padding: 1.25rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: none;
}
</style>