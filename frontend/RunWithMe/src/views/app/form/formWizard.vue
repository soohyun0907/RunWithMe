<template>
  <div class="main-content">
    <breadcumb :page="'Form Wizard'" :folder="'Forms'" />

    <b-row>
      <b-col md="12 mb-30">
        <b-card title="Simple">
          <form-wizard @on-complete="onComplete">
            <tab-content title="Personal details" icon="i-Administrator">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info" icon="i-Gear">
              My second tab content
            </tab-content>
            <tab-content title="Last step" icon="i-Thumbs-Up-Smiley">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
          </form-wizard>
        </b-card>
      </b-col>

      <b-col md="12 mb-30">
        <b-card title="Square Steps">
          <form-wizard @on-complete="onComplete" shape="square" color="#3498db">
            <tab-content title="Personal details" icon="i-Administrator">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info" icon="i-Gear">
              My second tab content
            </tab-content>
            <tab-content title="Last step" icon="i-Thumbs-Up-Smiley">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
          </form-wizard>
        </b-card>
      </b-col>

      <b-col md="12 mb-30">
        <b-card title="Tabbed steps">
          <form-wizard @on-complete="onComplete" shape="tab" color="#9b59b6">
            <tab-content title="Personal details" icon="i-Administrator">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info" icon="i-Gear">
              My second tab content
            </tab-content>
            <tab-content title="Last step" icon="i-Thumbs-Up-Smiley">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
          </form-wizard>
        </b-card>
      </b-col>

      <b-col md="12 mb-30">
        <b-card title="Form Steps">
          <form-wizard
            title=""
            subtitle=""
            @on-complete="onComplete"
            shape="circle"
            color="#639"
          >
            <tab-content title="Basic Info" icon="i-Information">
              <b-form>
                <b-row>
                  <b-form-group
                    id="input-group-1"
                    label="First Name:"
                    label-for="input-1"
                    class="col-md-6"
                  >
                    <b-form-input
                      
                      type="text"
                      required
                      placeholder="Enter Your First Name"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Last Name:"
                    label-for="input-1"
                    class="col-md-6"
                  >
                    <b-form-input
                      
                      type="text"
                      required
                      placeholder="Enter Your Last Name"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="email Address:"
                    label-for="input-1"
                    class="col-md-6"
                  >
                    <b-form-input
                      
                      type="email"
                      required
                      placeholder="Enter Your Email Address"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Phone Number:"
                    label-for="input-1"
                    class="col-md-6"
                  >
                    <b-form-input
                      
                      type="number"
                      required
                      placeholder="Enter Your Number"
                    ></b-form-input>
                  </b-form-group>
                </b-row>
              </b-form>
            </tab-content>
            <tab-content title="Company Info" icon="i-Business-Mens">
              <b-row>
                <b-col md="6">
                  <h6 class="mb-2">Employees</h6>
                  <label class="checkbox checkbox-primary">
                    <input type="checkbox" checked="" />
                    <span>Designer</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-secondary">
                    <input type="checkbox" checked="" />
                    <span>Coder</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-success">
                    <input type="checkbox" checked="" />
                    <span>QA</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
                <b-col md="6">
                  <h6 class="mb-2">Company</h6>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>Less than 1 Year</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-success">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>1-5 years</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-warning">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>5+ years</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
              </b-row>
            </tab-content>
            <tab-content title="Payment info" icon="i-Car-Coins">
              <b-form>
                <b-row>
                  <b-form-group
                    id="input-group-1"
                    label="Card Number:"
                    label-for="input-1"
                    class="col-md-6"
                  >
                    <b-form-input
                      
                      type="text"
                      required
                      placeholder="Card Number"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Expires at:"
                    label-for="input-1"
                    class="col-md-6"
                  >
                    <b-form-input
                      
                      type="text"
                      required
                      placeholder="Expires at"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Security code:"
                    label-for="input-1"
                    class="col-md-6"
                  >
                    <b-form-input
                      
                      type="text"
                      required
                      placeholder="Security code"
                    ></b-form-input>
                  </b-form-group>
                </b-row>
              </b-form>
            </tab-content>
            <button
              class="btn btn-outline-primary btn-rounded"
              type="primary"
              slot="prev"
            >
              Back
            </button>
            <button
              class="btn btn-outline-primary btn-rounded"
              type="primary"
              slot="next"
            >
              Next
            </button>
            <button
              class="btn btn-outline-success btn-rounded"
              type="primary"
              slot="finish"
            >
              Finish
            </button>
          </form-wizard>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Wizard"
  },
  props: {
    title: {
      type: String,
      default: "Awesome Wizard"
    }
  },
  methods: {
    onComplete: function() {
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
};
</script>
