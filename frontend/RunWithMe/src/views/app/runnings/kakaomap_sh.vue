<template>
  <div class="main-content">
    <breadcumb :page="'KakaoMap'" :folder="'Pages'" />

    <div id="map" ref="map"></div>

    <section class="bottom-bar">
      <div class="latLngLabel">{{lat}}, {{lon}}</div>
      <button class="ui button green" @click="startLocationUpdates">
        <i class="circle dot outline icon large"></i>
          Start Location
      </button>
      <button class="ui button red" @click="stopLocationUpdates">
        <i class="circle dot outline icon large"></i>
          Stop Location
      </button>
    </section>

  </div>
</template>
<script>
export default {
  name: 'kakaomap',
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f1c07d2de50ad211c7c1df94eb1eaf69';
      document.head.appendChild(script);
    }
  },
  data() {
    return {
      map: null,
      lat: 0,
      lon: 0,
      watchPositionId: null,
      polyline: {},
    }
  },
  methods: {
    initMap() {
      const container = this.$refs.map;
      var lat = 33.450701,
          lon = 126.570667;
      var options = {
        center: new kakao.maps.LatLng(lat, lon),
      };

      var map = new kakao.maps.Map(container, options);
      
      // // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
          lat = position.coords.latitude; // 위도
          lon = position.coords.longitude; // 경도

          var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        
          options = {
            center: new kakao.maps.LatLng(lat, lon),
          };

          map = new kakao.maps.Map(container, options);
          
          var circle = new kakao.maps.Circle({
            center : new kakao.maps.LatLng(lat, lon),  // 원의 중심좌표 입니다 
            radius: 50, // 미터 단위의 원의 반지름입니다 
            strokeWeight: 5, // 선의 두께입니다 
            strokeColor: '#75B8FA', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'dashed', // 선의 스타일 입니다
            fillColor: '#CFE7FF', // 채우기 색깔입니다
            fillOpacity: 0.7  // 채우기 불투명도 입니다   
          }); 
          
          circle.setMap(map);
          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
          // console.log(map);
        });
      }
      this.map = map;
      this.lat = lat;
      this.lon = lon;
    },
    startLocationUpdates() {
      var linePath = [new kakao.maps.LatLng(this.lat, this.lon)];

      this.watchPositionId = navigator.geolocation.watchPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        
        
        console.log(position);

        linePath.push(new kakao.maps.LatLng(this.lat, this.lon));
        const container = this.$refs.map;
        var options = {
          center: new kakao.maps.LatLng(this.lat, this.lon),
        };

        var map = new kakao.maps.Map(container, options);
        map.setCenter(new kakao.maps.LatLng(this.lat, this.lon)); 

        // 지도에 표시할 선을 생성합니다
        var polyline = new kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열 입니다
          strokeWeight: 5, // 선의 두께 입니다
          strokeColor: '#FFAE00', // 선의 색깔입니다
          strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: 'solid' // 선의 스타일입니다
        });

        console.log(linePath);
        // 지도에 선을 표시합니다 
        polyline.setMap(map);  
        this.polyline = polyline;
      },
      error => {
        console.log(error.message);
      },
      {timeout: 5000,
        maximumAge: 0,
        distanceFilter: 1}
      );      
    },
    stopLocationUpdates() {
      this.polyline.setMap(null);
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