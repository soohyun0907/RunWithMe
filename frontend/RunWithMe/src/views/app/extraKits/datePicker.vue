<template>
  <div class="main-content">
    <breadcumb :page="'Datepicker'" :folder="'Extra Kits'" />
    
    <b-row>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Basic Datepicker">
          <label for="example-datepicker">Choose a date</label>
          <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
        </b-card>
      </b-col>

      <b-col md="8" class="mb-30">
        <b-card class="h-100" title="Validation states">
          <b-row>
            <b-col md="6" class="mb-30">
              <label for="datepicker-invalid">Choose a date (invalid style)</label>
              <b-form-datepicker id="datepicker-invalid" :state="false" class="mb-2"></b-form-datepicker>
            </b-col>
            <b-col md="6" class="mb-30">
              <label for="datepicker-valid">Choose a date (valid style)</label>
              <b-form-datepicker id="datepicker-valid" :state="true"></b-form-datepicker>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Control sizing">
          <label for="datepicker-sm">Small date picker</label>
          <b-form-datepicker id="datepicker-sm"  size="sm" local="en" class="mb-2"></b-form-datepicker>
          <label for="datepicker-lg">Large date picker</label>
          <b-form-datepicker id="datepicker-lg" size="lg" local="en"></b-form-datepicker>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Placeholder">
          <label for="datepicker-placeholder">Date picker with placeholder</label>
          <b-form-datepicker id="datepicker-placeholder" placeholder="Choose a date" local="en"></b-form-datepicker>
        </b-card>
      </b-col>

      


    </b-row>
  
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>

