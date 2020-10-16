<style  scoped>
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
<template>
  <div class="main-content">
    <breadcumb :page="'Blank'" :folder="'Pages'" />
    <div id="map"></div>
    
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      kakaomap: null,
    };
  },
  created() {

  },
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  },
  methods: {
    addScript(){
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f1c07d2de50ad211c7c1df94eb1eaf69';
            document.head.appendChild(script);
    },
    initMap() {
      var container = document.getElementById('map');
      var lat = 33.450701,
            lon = 126.570667;

      // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
          lat = position.coords.latitude; // 위도
          lon = position.coords.longitude; // 경도

          var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
          console.log("geolocation " + lat, lon);
          var options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
          };

          var map = new kakao.maps.Map(container, options);
          this.kakaomap = map;

          // 마커와 인포윈도우를 표시합니다
          var marker = new kakao.maps.Marker({  
            map: map, 
            position: locPosition
          }); 
          var iwContent = message, // 인포윈도우에 표시할 내용
              iwRemoveable = true;

          // 인포윈도우를 생성합니다
          var infowindow = new kakao.maps.InfoWindow({
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

  }
};
</script>
