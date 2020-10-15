<template>
  <div class="main-content">
    <breadcumb :page="'KakaoMap'" :folder="'Runnings'" />
    <h4>Kakao Map Records</h4>
    <div id="map"></div>
    <div id="lat"></div>
    <div id="lon"></div>
    <!-- <p class="modes">
      <button @click="selectOverlay('MARKER')">마커</button>
      <button @click="selectOverlay('POLYLINE')">선</button>
    </p>
    <p class="getdata">
      <button @click="getDataFromDrawingMap()">가져오기</button>
    </p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      drawingManager:null,
    };
  },
  mounted() {
    //카카오맵이 있으면 그대로 로드, 없으면 새로 생성해서 로드
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  },

  methods: {
    // div #map에 카카오맵 로드
    addScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=90262fe8162a1bfa04492a90df8f5243";
      document.head.appendChild(script);
    },
    initMap() {
      var map = new kakao.maps.Map(document.getElementById("map"), {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
      });
      
      this.currentLocationCheck();
      // var drawingOptions = {
      //   // Drawing Manager를 생성할 때 사용할 옵션입니다
      //   map: map, // Drawing Manager로 그리기 요소를 그릴 map 객체입니다
      //   drawingMode: [
      //     // drawing manager로 제공할 그리기 요소 모드입니다
      //     kakao.maps.drawing.OverlayType.MARKER,
      //     kakao.maps.drawing.OverlayType.POLYLINE,
      //   ],
      //   // 사용자에게 제공할 그리기 가이드 툴팁입니다
      //   // 사용자에게 도형을 그릴때, 드래그할때, 수정할때 가이드 툴팁을 표시하도록 설정합니다
      //   guideTooltip: ["draw", "drag", "edit"],
      //   markerOptions: {
      //     // 마커 옵션입니다
      //     draggable: true, // 마커를 그리고 나서 드래그 가능하게 합니다
      //     removable: true, // 마커를 삭제 할 수 있도록 x 버튼이 표시됩니다
      //   },
      //   polylineOptions: {
      //     // 선 옵션입니다
      //     draggable: true, // 그린 후 드래그가 가능하도록 설정합니다
      //     removable: true, // 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
      //     editable: true, // 그린 후 수정할 수 있도록 설정합니다
      //     strokeColor: "#39f", // 선 색
      //     hintStrokeStyle: "dash", // 그리중 마우스를 따라다니는 보조선의 선 스타일
      //     hintStrokeOpacity: 0.5, // 그리중 마우스를 따라다니는 보조선의 투명도
      //   },
      // };

      // // 위에 작성한 옵션으로 Drawing Manager를 생성합니다
      // var drawingManager = new kakao.maps.drawing.DrawingManager(drawingOptions);
      // this.map = map
      // this.drawingManager=drawingManager

    },
    // 버튼 클릭 시 호출되는 핸들러 입니다
    // selectOverlay(type) {
    //   console.log(this.map)
    //   alert("clicked"+type)
    //   // 그리기 중이면 그리기를 취소합니다
    //   var drawingManager = this.drawingManager
    //   // drawingManager.cancel();
    //   drawingManager.cancel
      

    //   // 클릭한 그리기 요소 타입을 선택합니다
    //   drawingManager.select(kakao.maps.drawing.OverlayType[type]);
    // },
    currentLocationCheck() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
          alert(pos.coords.latitude + " " + pos.coords.longitude);
        });
      } else {
        alert("현재위치를 가져올수 없습니다 Geolcation을 허용해주세요");
      }
    },
  },
};
</script>


<style  scoped>
.modes {
  position: absolute;
  top: 120px;
  left: 10px;
  z-index: 1;
}
.getdata {
  position: absolute;
  top: 370px;
  left: 10px;
  z-index: 1;
}
#map {
  width: 500px;
  height: 510px;
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