<template>
  <div>
      <h1>Map is here</h1>
      <div id="map" class="h-250"></div>
  </div>
</template>
<style scoped>
    #map {
        margin: 0 auto;
        background: gray;
    }
    .h-250 {
        height:250px;
    }
</style>
<script>
  import Vue from 'vue';
  export default {
    mounted() {
      this.$markers = [];
      this.$map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(this.latitude, this.longitude),
        zoom: this.zoom
      });
      this.initMap();
      Vue.nextTick().then(()=>{
        this.clearMarkers();
      });
    },
    created(){
      EventBus.$on('clear-markers', ()=>{
        this.clearMarkers();
        this.$markers = [];
      });
      EventBus.$on('add-marker', (data)=>{
        let marker = this.makeMarker(data.latitude, data.longitude);
        this.$markers.push(marker);
      });
    },
    data: () => {
        return {
          latitude: 37.3238548,
          longitude: 127.13656990000001,
          zoom: 14,
        };
    },
    methods: {
      initMap() {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log(position.coords.latitude);
              console.log(position.coords.longitude);
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              // infoWindow.setPosition(pos);
              // infoWindow.setContent("Location found.");
              // infoWindow.open(map);
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              // console.log(latitude, longitude);
            },
          );

          this.$map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(this.latitude, this.longitude),
            zoom: this.zoom
          });
        } else {
          // Browser doesn't support Geolocation
          // handleLocationError(false, infoWindow, map.getCenter());
        }
      },
      makeMarker(latitude, longitude) {
        return new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          icon: null,
          map: this.$map,
          title: null,
        });
      },
      clearMarkers(){
        for( let i = 0; i < this.$markers.length; i++ ){
          this.$markers[i].setMap(null);
        }
      }
    }
  }
</script>

