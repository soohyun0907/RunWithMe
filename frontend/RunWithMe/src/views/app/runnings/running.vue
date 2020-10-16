<template>
  <div class="main-content">
    <section class="top-bar">
    <breadcumb :page="'Record Running'" :folder="'Runnings'" />
    <h4>Run With Me?</h4>
     </section>

    <section ref="map" class="map"></section>

    <section class="bottom-bar">
        <div class="latLngLabel">{{lat}}, {{lng}}</div>
        <button class="ui button green" @click="startLocationUpdates">
            <i class="i-Start-2"></i>
            Start
        </button>
        <button class="ui button red" @click="stopLocationUpdates">
            <i class="i-Stop-2"></i>
            Stop
        </button>
    </section>
  </div>
</template>


<script>
export default {
   metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Running"
  },
    data() {
        return {
            lat:0,
            lng:0,
            watchPositionId: null,
        };
    },
    methods: {
        startLocationUpdates() {
            var map = new google.maps.Map(this.$refs["map"], {
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            var marker = new google.maps.Marker({
                map: map
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
}
</script>
<style>
.driver-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.top-bar {
  height: 100px;
  text-align: center;
  background: white;
}
.map {
  flex-grow: 1;
  width:100%;
  height:400px;
  border:1px solid red;
}
.bottom-bar {
  height: 100px;
  text-align: center;
  background: white;
}
</style>
