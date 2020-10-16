<template>
    <div class="main-content">
        
        <breadcumb :page="'Card'" :folder="'Widgets'" />
        <b-row>
            <b-col lg="4" xl="4" class="mb-30">
                <b-card no-body>
                    <img class="d-block w-100 rounded rounded" src="@/assets/images/products/iphone-1.jpg" alt="corrupted">
                    <b-card-body>
                       <h5 class="card-title mb-2">Gull Admin</h5>
                       <p class="card-text text-mute">By Frontend developer</p>
                       
                       <b-button variant="primary">Download</b-button>
                       <b-button variant="outline-success" class="float-right">Preview</b-button>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="4" xl="4" class="mb-30">
                <b-card>
                    <img class="d-block w-100 rounded rounded" src="@/assets/images/products/headphone-1.jpg" alt="corrupted">
                    <b-card-body>
                       <h5 class="card-title mb-2">Gull Admin</h5>
                       <p class="card-text text-mute">By Frontend developer</p>
                       
                       <div class="ul-widget-card__info">
                            <span>
                                <p>$ 4785.78</p>
                                <p class="text-mute">Income</p>
                            </span>
                            <span>
                                <p>4/11/2019</p>
                                <p class="text-mute m-0">Deadline</p>
                            </span>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="4" xl="4" class="mb-30">
                <b-card>
                    <img class="d-block w-100 rounded rounded" src="@/assets/images/products/iphone-1.jpg" alt="corrupted">
                    <b-card-body>
                        <h5 class="card-title mb-2">Gull Admin</h5>
                        <div class="ul-widget-card__progress-rate">
                            <span>$675</span>
                            <span class="">$10000</span>
                        </div>
                        <b-progress  height="10px" :value="value" class="mb-2"></b-progress>
                        <div class="mt-4">
                            <b-button variant="primary">Download</b-button>
                            <b-button variant="outline-success" class="float-right">Preview</b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="4" xl="4" class="mb-30">
                <b-card>
                    <div class="user-profile mb-4">
                        <div class="ul-widget-card__user-info">
                            <img class="profile-picture avatar-lg mb-2" src="@/assets/images/faces/1.jpg" alt="">
                            <p class="m-0 text-24">Timothy Carlson</p>
                            <p class="text-muted m-0">Digital Marketer</p>
                        </div>
                        <div class="ul-widget-card--line mt-2">
                            <b-button variant="primary">Download</b-button>
                            <b-button variant="outline-success" class="float-right">Preview</b-button>
                        </div>
                        <div class="ul-widget-card__rate-icon">
                            <span>
                                <i class="i-Add-UserStar text-warning"></i>
                                5.0
                            </span>
                            <span>
                                <i class="i-Bag text-primary"></i>
                                78 Projects
                            </span>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="4" xl="4" class="mb-30">
                <b-card>
                    <div class="ul-widget-card__title-info text-center mb-3">
                        <p class="m-0 text-24">Jon Snow</p>
                        <p class="text-muted m-0">UI/UX</p>
                    </div>
                    <div class="user-profile mb-4">
                        <div class="ul-widget-card__user-info">
                            <img class="profile-picture avatar-lg mb-2" src="@/assets/images/faces/5.jpg" alt="">
                        </div>
                    </div>
                    <div class="ul-widget-card__full-status mb-3">
                        <div class="ul-widget-card__status1">
                            <span>797</span>
                            <span class="text-mute">Uploads</span>
                        </div>
                        <div class="ul-widget-card__status1">
                            <span>90k</span>
                            <span class="text-mute">following</span>
                        </div>
                        <div class="ul-widget-card__status1">
                            <span>2.5M</span>
                            <span class="text-mute">followers</span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <b-button block variant="primary m-1">Follow</b-button>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="4" xl="4" class="mb-30">
                <b-card>
                    <div class="user-profile mb-4">
                        <div class="ul-widget-card__user-info">
                            <img class="profile-picture avatar-lg mb-2" src="@/assets/images/faces/2.jpg" alt="">
                            <p class="m-0 text-24">Wolverine</p>
                            <p class="text-muted m-0">Mutant</p>
                        </div>
                        <div class="ul-widget-card__progress-rate">
                            <span>700 Points</span>
                            <span class="">1000</span>
                        </div>
                        <b-progress  height="5px" :value="value" class="mb-2 mt-2"></b-progress>
                        <div class="mt-4">
                            <b-button variant="primary">Download</b-button>
                            <b-button variant="outline-success" class="float-right">Preview</b-button>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="4" xl="4" class="mb-30">
                <b-card 
                    no-body
                    class="bg-dark text-white o-hidden mb-30">
                    <img class="card-img" src="@/assets/images/photo-long-1.jpg" alt="Card image">
                    <div class="card-img-overlay">
                        <div class="text-center pt-4">
                            <h5 class="card-title mb-2 text-white">Card title</h5>
                            <div class="separator border-top mb-2"></div>
                            <p class="text-small font-italic">Last updated 3 mins ago</p>
                        </div>
                        <div class="p-1 text-left card-footer font-weight-light d-flex">
                            <span class="mr-3 d-flex align-items-center"><i class="i-Speach-Bubble-6 mr-1"></i>
                            12 </span>
                            <span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="4" xl="4" class="mb-30">
                <b-card 
                    no-body
                    class="bg-dark text-white o-hidden mb-30">
                    <img class="card-img" src="@/assets/images/photo-long-2.jpg" alt="Card image">
                    <div class="card-img-overlay">

                                    <div class="text-center pt-4">
                                        <h5 class="card-title mb-2 text-white">Sunny</h5>
                                        <div class="separator border-top mb-2"></div>
                                        <h3 class="text-white">Korea</h3>

                                    </div>
                                    <div class="ul-widget-card__cloud card-icon-bg">
                                        <div class="ul-widget-card__head">
                                            <i class="i-Cloud-Sun"></i>
                                            <h1 class="m-0">32 <sup>o</sup></h1>
                                        </div>
                                        <div class="ul-widget-card__body">
                                            <div class="ul-widget-card__weather-info">
                                                <span>Precipitation</span>
                                                <span>6%</span>
                                            </div>
                                            <div class="ul-widget-card__weather-info">
                                                <span>Humidity</span>
                                                <span>64%</span>
                                            </div>
                                            <div class="ul-widget-card__weather-info">
                                                <span>Wind</span>
                                                <span>6 km/h</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-1 text-left card-footer font-weight-light d-flex">
                                        <span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span>
                                    </div>

                    </div>
                </b-card>
            </b-col>
            <b-col lg="4" xl="4" class="mb-30">
                <b-card 
                    no-body
                    class="bg-dark text-white o-hidden mb-30">
                    <img class="card-img" src="@/assets/images/photo-long-2.jpg" alt="Card image">
                    <div class="card-img-overlay">
                        <div class="text-center pt-4">
                            <h5 class="card-title mb-2 text-white">Card title</h5>
                            <div class="separator border-top mb-2"></div>
                            <p class="text-small font-italic">Last updated 3 mins ago</p>
                        </div>
                        <div class="p-1 text-left card-footer font-weight-light d-flex">
                            <span class="mr-3 d-flex align-items-center"><i class="i-Speach-Bubble-6 mr-1"></i>
                            12 </span>
                            <span class="d-flex align-items-center"><i class="i-Calendar-4 mr-2"></i>03.12.2018</span>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="4" class="mb-30 mb-30">
                <b-card>
                    <h5 class="ul-widget-card__title">Gull Admin</h5>
                    <p class="card-text text-mute">By Frontend developer</p>
                    <img class="d-block w-100 rounded" src="@/assets/images/products/headphone-1.jpg" alt="Second slide">
                    <div class="ul-widget-card__rate-icon --version-2">
                        <span>
                            <a href=""> <i class="i-Like text-success"></i></a>
                            576
                        </span>
                        <span>
                            <a href=""> <i class="i-Speach-Bubble-3 text-primary"></i></a>
                                350
                        </span>
                        <span>
                            <a href=""><i class="i-Heart1 text-danger"></i></a>
                                255
                        </span>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="8" class="mb-30">
                <b-card title="Timeline">
                    <div class="ul-widget-s6__items ul-widget-card__position">
                                        <div class="ul-widget-card__item">
                                            <span class="ul-widget-s6__badge ul-widget-card__dot">
                                                <p class="badge-dot-primary ul-widget6__dot ul-widget-card__dot-xl">
                                                    <i class="i-Add text-white"></i>
                                                </p>
                                            </span>
                                            <div class="ul-widget-card__info-v2">
                                                <span class="t-font-boldest">Add File</span>
                                                <span class="t-font-bold">It is a long established fact that a reader will be distracted.</span>
                                                <small class="text-mute">3 Days Ago</small>
                                            </div>
                                        </div>

                        </div>
                        <div class="ul-widget-s6__items ul-widget-card__position">
                                        <div class="ul-widget-card__item">
                                            <span class="ul-widget-s6__badge ul-widget-card__dot">
                                                <p class="badge-dot-success ul-widget6__dot ul-widget-card__dot-xl">
                                                    <i class="i-Like-2 text-white"></i>
                                                </p>
                                            </span>
                                            <div class="ul-widget-card__info-v2">
                                                <span class="t-font-boldest">File Completed</span>
                                                <span class="t-font-bold">It is a long established fact that a reader will be distracted.</span>
                                                <small class="text-mute">3 Days Ago</small>
                                            </div>
                                        </div>

                        </div>
                        <div class="ul-widget-s6__items ul-widget-card__position">
                                        <div class="ul-widget-card__item">
                                            <span class="ul-widget-s6__badge ul-widget-card__dot">
                                                <p class="badge-dot-danger ul-widget6__dot ul-widget-card__dot-xl">
                                                    <i class="i-Delete-File text-white"></i>
                                                </p>
                                            </span>
                                            <div class="ul-widget-card__info-v2">
                                                <span class="t-font-boldest">Delete File</span>
                                                <span class="t-font-bold">It is a long established fact that a reader will be distracted.</span>
                                                <small class="text-mute">3 Days Ago</small>
                                            </div>
                                        </div>

                        </div>
                </b-card>
            </b-col>

            <b-col lg="6" xl="6" mt="3">
                <b-card
                    title="Contact Form"
                >
                     <div>
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

                        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            v-model="form.name"
                            required
                            placeholder="Enter name"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.food"
                            :options="foods"
                            required
                            ></b-form-select>
                        </b-form-group>

                        <b-form-group id="input-group-4">
                            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                            <b-form-checkbox value="me">Check me out</b-form-checkbox>
                            <b-form-checkbox value="that">Check that out</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>

                        <b-button type="submit" variant="primary m-1">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                        </b-form>
                        
                    </div>
                </b-card>
            </b-col>

            <b-col lg="6" xl="6" mt="3">
               <b-card>
                    <div>
                        <b-tabs content-class="mb-30">
                            <b-tab title="First" active>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </b-tab>
                            <b-tab title="Second">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </b-tab>
                            <b-tab title="Disabled" >
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
       metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Card Widgets"
  },
 
    data() {
      return {
        value: 75,

        form: {
            email: '',
            name: '',
            food: null,
            checked: []
            },
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true
        }
      },
       methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
        }
        
    }
  }
</script>