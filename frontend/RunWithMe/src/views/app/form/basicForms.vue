<template>
  <div class="main-content">
    <breadcumb :page="'Basic'" :folder="'Forms'" />
    <b-row>
      <b-col md="12 mb-30">
        <b-card title="Form Inputs">
          <b-form>
            <b-row>
              <b-form-group
                class="col-md-6 mb-3"
                
                label="First Name"
                label-for="input-1"
              >
                <b-form-input
                  
                  v-model="form.fName"
                  type="text"
                  required
                  placeholder="First Name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                
                label="Last Name"
                label-for="input-1"
              >
                <b-form-input
                  
                  v-model="form.lName"
                  type="text"
                  required
                  placeholder="Last Name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                
                label="Phone Number:"
                label-for="input-1"
              >
                <b-form-input
                  
                  v-model="form.phone"
                  type="text"
                  required
                  placeholder="put your phone number"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                
                label="Credit Card"
                label-for="input-1"
                class="col-md-6"
              >
                <b-form-input
                  
                  v-model="form.credit"
                  type="email"
                  required
                  placeholder="Enter Credit Card Number"
                ></b-form-input>
              </b-form-group>

              <b-form-group  label="Date" label-for="input-1" class="col-md-6">
                <!-- <v-date-picker
                                v-model="date"
                />-->
                <b-form-input v-model="date" class="input" type="date"></b-form-input>
              </b-form-group>

              <b-form-group  label="Select" label-for="input-1" class="col-md-6">
                <b-form-select
                v-model="selected1"
                  :options="options1"
                  id="inline-form-custom-select-pref1"
                >
                 
                </b-form-select>
              </b-form-group>

              <b-col md="12">
                <b-button class="mt-3" type="submit" variant="primary">Submit</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card>
      </b-col>

      <!-- form-inputs-rounded -->
      <b-col md="12 mb-30">
        <b-card class title="Form Inputs Rounded">
          <b-form>
            <b-row>
              <b-form-group
                class="col-md-6 mb-3"
                
                label="First Name"
                label-for="input-1"
              >
                <b-form-input
                  class="form-control-rounded"
                  
                  v-model="form.fName"
                  type="text"
                  required
                  placeholder="First Name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                
                label="Last Name"
                label-for="input-1"
              >
                <b-form-input
                  class="form-control-rounded"
                  
                  v-model="form.lName"
                  type="text"
                  required
                  placeholder="Last Name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  class="form-control-rounded"
                  
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                
                label="Phone Number:"
                label-for="input-1"
              >
                <b-form-input
                  class="form-control-rounded"
                  
                  v-model="form.phone"
                  type="text"
                  required
                  placeholder="put your phone number"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                
                label="Credit Card"
                label-for="input-1"
                class="col-md-6"
              >
                <b-form-input
                  class="form-control-rounded"
                  
                  v-model="form.credit"
                  type="email"
                  required
                  placeholder="Enter Credit Card Number"
                ></b-form-input>
              </b-form-group>

              <b-form-group  label="Date" label-for="input-1" class="col-md-6">
                <!-- <v-date-picker
                                    
                                    v-model='date'
                />-->
                <b-form-input v-model="date" class="input" type="date"></b-form-input>
              </b-form-group>

              <b-form-group  label="Select" label-for="input-1" class="col-md-6">
                <b-form-select
                   v-model="selected1"
                  :options="options1"
                  id="inline-form-custom-select-pref"
                >
                 
                </b-form-select>
              </b-form-group>

              <b-col md="12">
                <b-button class="mt-3" type="submit" variant="primary">Submit</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card>
      </b-col>

      <!-- switch -->
      <b-col md="12 mb-30">
        <b-card title="Switch">
          <label class="switch switch-primary mr-3">
            <span>Primary</span>
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>

          <label class="switch switch-secondary mr-3">
            <span>Secondary</span>
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
          <label class="switch switch-success mr-3">
            <span>Success</span>
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
          <label class="switch switch-warning mr-3">
            <span>Warning</span>
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
          <label class="switch switch-danger mr-3">
            <span>Danger</span>
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
          <label class="switch switch-light mr-3">
            <span>Light</span>
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
          <label class="switch switch-dark mr-3">
            <span>Dark</span>
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </b-card>
      </b-col>

      <!-- checkbox default -->
      <b-col md="6" class="mb-30">
        <b-card title="Checkbox Default">
          <label class="checkbox checkbox-primary">
            <input type="checkbox" checked />
            <span>Primary</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-secondary">
            <input type="checkbox" checked />
            <span>Secondary</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-success">
            <input type="checkbox" checked />
            <span>Success</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-warning">
            <input type="checkbox" checked />
            <span>Warning</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-danger">
            <input type="checkbox" checked />
            <span>Danger</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-info">
            <input type="checkbox" checked />
            <span>Info</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-dark">
            <input type="checkbox" checked />
            <span>Dark</span>
            <span class="checkmark"></span>
          </label>
        </b-card>
      </b-col>

      <!-- checkbox outline -->
      <b-col md="6" class="mb-30">
        <b-card title="Checkbox Outline">
          <label class="checkbox checkbox-outline-primary">
            <input type="checkbox" checked />
            <span>Primary</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-outline-secondary">
            <input type="checkbox" checked />
            <span>Secondary</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-outline-success">
            <input type="checkbox" checked />
            <span>Success</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-outline-warning">
            <input type="checkbox" checked />
            <span>Warning</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-outline-danger">
            <input type="checkbox" checked />
            <span>Danger</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-outline-info">
            <input type="checkbox" checked />
            <span>Info</span>
            <span class="checkmark"></span>
          </label>
          <label class="checkbox checkbox-outline-dark">
            <input type="checkbox" checked />
            <span>Dark</span>
            <span class="checkmark"></span>
          </label>
        </b-card>
      </b-col>

      <!-- radio button -->
      <b-col md="6" class="mb-30">
        <b-card title="Radio Button">
          <label class="radio radio-primary">
            <input type="radio" name="radio" />
            <span>Primary</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-secondary">
            <input type="radio" name="radio" />
            <span>Secondary</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-success">
            <input type="radio" name="radio" />
            <span>Success</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-warning">
            <input type="radio" name="radio" />
            <span>Warning</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-danger">
            <input type="radio" name="radio" />
            <span>Danger</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-light">
            <input type="radio" name="radio" />
            <span>Light</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-dark">
            <input type="radio" name="radio" />
            <span>Dark</span>
            <span class="checkmark"></span>
          </label>
        </b-card>
      </b-col>

      <!-- radio button outline -->
      <b-col md="6" class="mb-30">
        <b-card title="Radio Button Outline">
          <label class="radio radio-outline-primary">
            <input type="radio" name="radio" />
            <span>Primary</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-outline-secondary">
            <input type="radio" name="radio" />
            <span>Secondary</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-outline-success">
            <input type="radio" name="radio" />
            <span>Success</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-outline-warning">
            <input type="radio" name="radio" />
            <span>Warning</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-outline-danger">
            <input type="radio" name="radio" />
            <span>Danger</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-outline-light">
            <input type="radio" name="radio" />
            <span>Danger</span>
            <span class="checkmark"></span>
          </label>
          <label class="radio radio-outline-dark">
            <input type="radio" name="radio" />
            <span>Danger</span>
            <span class="checkmark"></span>
          </label>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Basic Forms"
  },
  data() {
    return {
        selected1:"x",
        options1:[
          { value: 'x', text: ' select an option' },
          { value: 'a', text: 'January' },
          { value: 'b', text: 'February' },],
      date: '',
      form: {
        name: "",
        email: "",
        fName: "",
        lName: "",
        phone: ""
      },
      selected: "first",
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" }
      ]
    };
  }
};
</script>
