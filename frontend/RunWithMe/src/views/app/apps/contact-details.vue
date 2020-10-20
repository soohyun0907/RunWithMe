<template>
  <div class="main-content">
    <breadcumb :page="'Contact Details'" :folder="'App'" />

    <b-row>
      <b-col lg="4" xl="4" class=" mb-30">
        <b-card no-body class="o-hidden">
          <img
            src="@/assets/images/products/iphone-1.jpg"
            class="d-block w-100"
            alt=""
          />
          <b-card-body>
            <div class="ul-contact-detail__info">
              <b-row>
                <b-col md="6" class="text-center">
                  <div class="ul-contact-detail__info-1">
                    <h5>Name</h5>
                    <span>Genelia Deshmukh</span>
                  </div>
                  <div class="ul-contact-detail__info-1">
                    <h5>Name</h5>
                    <span>Genelia Deshmukh</span>
                  </div>
                </b-col>
                <b-col md="6" class="text-center">
                  <div class="ul-contact-detail__info-1">
                    <h5>Name</h5>
                    <span>Genelia Deshmukh</span>
                  </div>
                  <div class="ul-contact-detail__info-1">
                    <h5>Name</h5>
                    <span>Genelia Deshmukh</span>
                  </div>
                </b-col>
                <b-col md="12" class="text-center">
                  <div class="ul-contact-detail__info-1">
                    <h5>Address</h5>
                    <span
                      >DieSachbearbeiter Choriner Straße 49 10435 Berlin</span
                    >
                  </div>
                </b-col>
                <b-col md="12" class="text-center">
                  <div class="ul-contact-detail__social">
                    <div class="ul-contact-detail__social-1">
                      <button
                        type="button"
                        class="btn btn-facebook btn-icon m-1"
                      >
                        <span class="ul-btn__icon"
                          ><i class="i-Facebook-2"></i
                        ></span>
                      </button>
                      <span
                        class="t-font-boldest ul-contact-detail__followers"
                      ></span>
                    </div>
                    <div class="ul-contact-detail__social-1">
                      <button
                        type="button"
                        class="btn btn-twitter btn-icon m-1"
                      >
                        <span class="ul-btn__icon"
                          ><i class="i-Twitter"></i
                        ></span>
                      </button>
                      <span
                        class="t-font-boldest ul-contact-detail__followers"
                      ></span>
                    </div>
                    <div class="ul-contact-detail__social-1">
                      <button
                        type="button"
                        class="btn btn-dribble btn-icon m-1"
                      >
                        <span class="ul-btn__icon"
                          ><i class="i-Dribble"></i
                        ></span>
                      </button>
                      <span
                        class="t-font-boldest ul-contact-detail__followers"
                      ></span>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="8" xl="8">
        <b-card header="Basic Tabs" header-bg-variant="transparent">
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="Home" active>
                <div class="ul-contact-detail__timeline">
                  <div class="row">
                    <b-col lg="12" xl="12">
                      <div class="ul-contact-detail__timeline-row">
                        <b-row>
                          <b-col lg="1">
                            <div class="ul-contact-detail__left-timeline">
                              <div class="ul-widget3-img">
                                <img
                                  src="@/assets/images/faces/1.jpg"
                                  class="img-fluid"
                                  id="userDropdown"
                                  alt=""
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                />
                              </div>
                            </div>
                          </b-col>
                          <b-col lg="11">
                            <div class="ul-contact-detail__right-timeline">
                              <a href="" class="ul-widget4__title d-block"
                                >Timity Clarkson</a
                              >
                              <small class="text-mute">10 minutes</small>
                              <p>
                                assign a new task <a href="#"> Weblayout</a>
                              </p>
                              <div class="ul-contact-detail__timeline-image">
                                <img
                                  class="d-block"
                                  src="@/assets/images/products/iphone-1.jpg"
                                  alt="First slide"
                                />
                                <img
                                  class="d-block"
                                  src="@/assets/images/products/iphone-1.jpg"
                                  alt="First slide"
                                />
                                <img
                                  class="d-block"
                                  src="@/assets/images/products/iphone-1.jpg"
                                  alt="First slide"
                                />
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </div>
                </div>

                <div class="ul-contact-detail__timeline-row">
                  <b-row>
                    <b-col lg="1">
                      <div class="ul-contact-detail__left-timeline">
                        <div class="ul-widget3-img">
                          <img
                            src="@/assets/images/faces/1.jpg"
                            id="userDropdown"
                            alt=""
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                        </div>
                      </div>
                    </b-col>
                    <div class="col-lg-11">
                      <div class="ul-contact-detail__right-timeline">
                        <a href="" class="ul-widget4__title d-block"
                          >Timity Clarkson</a
                        >
                        <small class="text-mute">10 minutes</small>

                        <div class="ul-contact-detail__timeline-image-2 mt-3">
                          <img
                            class="d-block"
                            src="@/assets/images/products/iphone-1.jpg"
                            alt="First slide"
                          />
                          <div class="ul-contact-detail__timeline-image-info">
                            <p style="width:80%">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer nec odio. Praesent libero. Sed
                              cursus ante dapibus diam. Sed nisi. Nulla quis sem
                              at nibh elementum imperdiet. Duis sagittis ipsum.
                              Praesent mauris. Fusce nec tellus sed augue semper
                              porta.
                            </p>
                            <b-button variant="primary" class=" m-1"
                              >layout</b-button
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-row>
                </div>

                <div class="ul-contact-detail__timeline-row">
                  <b-row>
                    <b-col lg="1">
                      <div class="ul-contact-detail__left-timeline">
                        <div class="ul-widget3-img">
                          <img
                            src="@/assets/images/faces/1.jpg"
                            id="userDropdown"
                            alt=""
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                        </div>
                      </div>
                    </b-col>
                    <b-col lg="8">
                      <div class="ul-contact-detail__right-timeline">
                        <a href="" class="ul-widget4__title d-block"
                          >Timity Clarkson</a
                        >
                        <small class="text-mute">10 minutes</small>

                        <p class="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio. Praesent libero. Sed cursus
                          ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                          elementum imperdiet. Duis sagittis ipsum. Praesent
                          mauris. Fusce nec tellus sed augue semper
                        </p>
                      </div>
                    </b-col>
                  </b-row>
                </div>

                <div class="ul-contact-detail__timeline-row">
                  <b-row>
                    <b-col lg="1">
                      <div class="ul-widget3-img">
                        <img
                          src="/img/1.1536e831.jpg"
                          id="userDropdown"
                          alt=""
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                      </div>
                    </b-col>
                    <b-col lg="11">
                      <div class="ul-contact-detail__right-timeline">
                        <a href="" class="ul-widget4__title d-block"
                          >Timity Clarkson</a
                        >
                        <small class="text-mute">10 minutes</small>
                        <p>assign a new task <a href="#"> Weblayout</a></p>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-tab>
              <b-tab title="Profile">
                <b-row>
                  <b-col lg="12" xl="12">
                    <div class="ul-contact-detail__profile">
                 
                      <div class="ul-contact-detail__inner-profile">
                        <h4 class="heading">Full Name</h4>
                        <span class="tetx-muted">Timity Clarkson</span>
                      </div>
                    </div>
                    <div class="custom-separator"></div>
                  </b-col>
                  <b-col lg="12" xl="12">
                    <div class="ul-contact-dwtail__profile-swcription">
                      <p class="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </p>
                    </div>
                  </b-col>
                  <b-col lg="12" xl="12">
                    <h4 class="card-title mb-3">Skills</h4>
                    <div class="custom-separator"></div>

                    <span class=""> Wordpress</span>
                    <b-progress
                      :value="10"
                      show-value
                      class="mb-3"
                    ></b-progress>

                    <span class=""> HTML 5</span>
                    <b-progress
                      variant="success"
                      :value="25"
                      show-value
                      class="mb-3"
                    ></b-progress>

                    <span>React.js</span>
                    <b-progress
                      variant="info"
                      :value="50"
                      show-value
                      class="mb-3"
                    ></b-progress>

                    <span>Photoshop</span>
                    <b-progress
                      variant="warning"
                      :value="75"
                      show-value
                      class="mb-3"
                    ></b-progress>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Contact">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    label="Your Name:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-3"
                    label="Food:"
                    label-for="input-3"
                  >
                    <b-form-select
                      id="input-3"
                      v-model="form.food"
                      :options="foods"
                      required
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group id="input-group-4">
                    <b-form-checkbox-group
                      v-model="form.checked"
                      id="checkboxes-4"
                    >
                      <b-form-checkbox value="me">Check me out</b-form-checkbox>
                      <b-form-checkbox value="that"
                        >Check that out</b-form-checkbox
                      >
                    </b-form-checkbox-group>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Send</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
              </b-tab>
            </b-tabs>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>