<template>
  <div class="main-content">
    <breadcumb :page="'Rating'" :folder="'Extra Kits'" />
    
    <b-row>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Basic Rating">
          <b-form-rating></b-form-rating>
        </b-card>
      </b-col>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Readonly Rating">
          <b-form-rating v-model="value" readonly></b-form-rating>
        </b-card>
      </b-col>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Number Of Stars">
          <b-form-rating id="rating-10" stars="7"></b-form-rating>
        </b-card>
      </b-col>
      <b-col md="12" class="mb-30">
        <b-card class="h-100" title="Variant & Color">
          <b-form-rating v-model="colorValue" variant="primary" class="mb-2"></b-form-rating>
          <b-form-rating v-model="colorValue" variant="warning" class="mb-2"></b-form-rating>
          <b-form-rating v-model="colorValue" variant="danger" class="mb-2"></b-form-rating>
          <b-form-rating v-model="colorValue" variant="info" class="mb-2"></b-form-rating>
          
        </b-card>
      </b-col>
      <b-col md="12" class="mb-30">
        <b-card class="h-100" title="Custom Color">
          <b-card-text>
            To apply a _custom color_, use the color prop which accepts a standard CSS color name, HEX color value (#...) or RGB/RGBA (rgb(...)/rgba(...)) color value:
          </b-card-text>
          <b-form-rating v-model="customColor" color="indigo" class="mb-2"></b-form-rating>
          <b-form-rating v-model="customColor" color="#ff00ff" class="mb-2"></b-form-rating>
          <b-form-rating v-model="customColor" color="rgb(64, 192, 128)" class="mb-2"></b-form-rating>
          <b-form-rating v-model="customColor" color="rgba(64, 192, 128, 0.75)" class="mb-2"></b-form-rating>
          
        </b-card>
      </b-col>
      <b-col md="12" class="mb-30">
        <b-card class="h-100" title="Show Value">
          <b-form-rating v-model="value" show-value variant="primary" ></b-form-rating> 
        </b-card>
      </b-col>

      <b-col md="6" class="mb-30">
        <b-card class="h-100" title="Control Sizing">
          <label for="rating-sm">Small rating</label>
          <b-form-rating id="rating-sm" v-model="value" size="sm"></b-form-rating>

          <label for="rating-md" class="mt-3">Default rating (medium)</label>
          <b-form-rating id="rating-md" v-model="value"></b-form-rating>

          <label for="rating-lg" class="mt-3">Large rating</label>
          <b-form-rating id="rating-lg" v-model="value" size="lg"></b-form-rating>
        </b-card>
      </b-col>

      <b-col md="6" class="mb-30">
        <b-card class="h-100" title="Borderless">
          <label for="rating-sm-no-border">Small rating with no border</label>
          <b-form-rating id="rating-sm-no-border" v-model="value" no-border size="sm"></b-form-rating>

          <label for="rating-md-no-border" class="mt-3">Default rating (medium) with no border</label>
          <b-form-rating id="rating-md-no-border" v-model="value" no-border></b-form-rating>

          <label for="rating-lg-no-border" class="mt-3">Large rating with no border</label>
          <b-form-rating id="rating-lg-no-border" v-model="value" no-border size="lg"></b-form-rating>
        </b-card>
      </b-col>
      <b-col md="6" class="mb-30">
        <b-card class="h-100" title="Clear Button">
          <b-form-rating v-model="value" variant="primary" show-clear show-value></b-form-rating>
        </b-card>
      </b-col>
      <b-col md="2" class="mb-30">
        <b-card class="h-100" title="Inline Mode">
          <label for="rating-inline" class="mr-2">Inline rating:</label>
          <b-form-rating id="rating-inline" inline value="4" variant="danger"></b-form-rating>
        </b-card>
      </b-col>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Icon Rating">
          <b-form-rating
            icon-empty="heart"
            icon-half="heart-half"
            icon-full="heart-fill"
            icon-clear="i-Add-Cart"
            show-clear
            variant="danger"
          ></b-form-rating>
        </b-card>
      </b-col>


    </b-row>
  
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 2.5,
        colorValue: 2.5,
        customColor: 1
      }
    }
  }
</script>

