<template>
  <div class="main-content">
    <breadcumb :page="'Timepicker'" :folder="'Extra Kits'" />
    
    <b-row>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Basic Timepicker">
          <label for="timepicker-invalid">Default Timepicker</label>
          <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
        </b-card>
      </b-col>
      
      <b-col md="8" class="mb-30">
        <b-card class="h-100" title="Validation states">
          <b-row>
            <b-col md="6" class="mb-30">
              <label for="timepicker-invalid">Choose a time (invalid style)</label>
              <b-form-timepicker id="datepicker-invalid" :state="false" class="mb-2"></b-form-timepicker>
            </b-col>
            <b-col md="6" class="mb-30">
              <label for="timepicker-valid">Choose a time (valid style)</label>
              <b-form-timepicker id="datepicker-valid" :state="true"></b-form-timepicker>
            </b-col>
          </b-row>
        </b-card>
      </b-col>


      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Enabling of seconds spinbutton">
          <b-form-timepicker v-model="value" show-seconds locale="en"></b-form-timepicker>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Placeholder">
          <b-form-timepicker id="timepicker-placeholder" placeholder="Choose a time" local="en"></b-form-timepicker>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Optional controls">
          <b-form-timepicker
            id="timepicker-buttons"
            now-button
            reset-button
            locale="en"
          ></b-form-timepicker>
        </b-card>
      </b-col>
      
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Optional controls">
          <b-input-group class="mb-3">
            <b-form-input
              id="example-input"
              v-model="value"
              type="text"
              placeholder="HH:mm:ss"
            ></b-form-input>
            <b-input-group-append>
              <b-form-timepicker
                v-model="value"
                button-only
                right
                button-variant="primary"
                show-seconds
                locale="en"
                aria-controls="example-input"
              ></b-form-timepicker>
            </b-input-group-append>
          </b-input-group>
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


