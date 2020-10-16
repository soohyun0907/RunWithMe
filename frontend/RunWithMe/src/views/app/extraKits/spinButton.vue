<template>
  <div class="main-content">
    <breadcumb :page="'Spinbutton'" :folder="'Extra Kits'" />
    
    <b-row>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Basic Button">
          <label for="demo-sb">Spin Button</label>
          <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
        </b-card>
      </b-col> 
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Min.max and step">
          <label for="sb-step">Spin button with step of 0.25</label>
          <b-form-spinbutton
            id="sb-step"
            v-model="value2"
            min="0"
            max="10"
            step="0.25"
          ></b-form-spinbutton>
          
        </b-card>
      </b-col> 

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Number wrapping">
          <label for="sb-wrap">Wrapping value spin button</label>
          <b-form-spinbutton id="sb-wrap" wrap min="1" max="25" placeholder="--"></b-form-spinbutton>
        </b-card>
      </b-col> 

      <b-col md="12" class="mb-30">
        <b-card class="h-100" title="Size">
          <label for="sb-small">Spin button - Small size</label>
          <b-form-spinbutton id="sb-small" size="sm" placeholder="--" class="mb-2"></b-form-spinbutton>

          <label for="sb-default">Spin button - Default size</label>
          <b-form-spinbutton id="sb-default" placeholder="--" class="mb-2"></b-form-spinbutton>

          <label for="sb-large">Spin button - Large size</label>
          <b-form-spinbutton id="sb-large" size="lg" placeholder="--" class="mb-2"></b-form-spinbutton>
        </b-card>
      </b-col> 

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Inline">
          <label for="sb-inline" class="mr-2">Inline spin button</label>
          <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
        </b-card>
      </b-col> 

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Vertical">
          <label for="sb-vertical">Vertical spin button</label><br>
          <b-form-spinbutton id="sb-vertical" v-model="value" vertical></b-form-spinbutton>
        </b-card>
      </b-col> 

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Days">
          <label for="sb-days" class="mt-2">Spin button with formatter</label>
          <b-form-spinbutton
            id="sb-days"
            v-model="value3"
            :formatter-fn="dayFormatter"
            min="0"
            max="6"
            wrap
          ></b-form-spinbutton>
        </b-card>
      </b-col> 

    </b-row>
  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 50,
        value2: 0,
        value3: 0,
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
      }
    },
    methods: {
      dayFormatter(value) {
        return this.days[value]
      }
    }
  }
</script>
