<template>
    <div class="main-content">
        <breadcumb :page="'Widget App'" :folder="'App'" />

        <b-row>
            <!-- projects -->
            <b-col lg="4" md="6" class="mb-30">
                <!-- projects -->
                <b-card class="" title="Projects">
                    <div class="table-responsive">
                        <b-table hover :items="items">
                            <template v-slot:cell(developer)="data">
                               
                                <img class="profile-picture avatar-md  rounded-circle" :src="data.item.developer" alt="error" />
                            </template>
                            <!-- <template slot="name" slot-scope="data">
                                {{data.item.name}}
                            </template> -->
                        </b-table>
                    </div>
                </b-card>
            </b-col>
            <!-- work-list -->
            <b-col lg="4" md="6" class=" mb-30">
                <b-card class="" title="Work List">
                    <div class="ul-widget-app__task-list mb-4">
                        <label class="checkbox checkbox-primary">
                            <input type="checkbox" checked="">
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                            <b-badge pill variant="danger" class="p-2  float-right">Today</b-badge>
                            <span class="checkmark"></span>
                        </label>
                        <div class="ul-widget-app__work-list-img ml-4">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/4.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/1.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/5.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/3.jpg" alt="">
                        </div>
                    </div>
                    <div class="ul-widget-app__task-list mb-4">
                        <label class="checkbox checkbox-primary">
                            <input type="checkbox" >
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                            <b-badge pill variant="success" class="p-2  float-right">Tomorrow</b-badge>
                            <span class="checkmark"></span>
                        </label>
                        <div class="ul-widget-app__work-list-img ml-4">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/4.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/1.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/5.jpg" alt="">    
                        </div>
                    </div>
                    <div class="ul-widget-app__task-list mb-4">
                        <label class="checkbox checkbox-primary">
                            <input type="checkbox" >
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                            <b-badge pill variant="info" class="p-2  float-right">Yestarday</b-badge>
                            <span class="checkmark"></span>
                        </label>
                        <div class="ul-widget-app__work-list-img ml-4">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/4.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/1.jpg" alt="">
                            
                        </div>
                    </div>
                    <div class="ul-widget-app__task-list mb-4">
                        <label class="checkbox checkbox-primary">
                            <input type="checkbox" >
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                            <b-badge pill variant="warning" class="p-2  float-right">Week</b-badge>
                            <span class="checkmark"></span>
                        </label>
                        <div class="ul-widget-app__work-list-img ml-4">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/4.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/1.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/5.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/3.jpg" alt="">
                            
                        </div>
                    </div>
                    <div class="ul-widget-app__task-list mb-4">
                        <label class="checkbox checkbox-primary">
                            <input type="checkbox" >
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                            <b-badge pill variant="primary" class="p-2  float-right">Week</b-badge>
                            <span class="checkmark"></span>
                        </label>
                        <div class="ul-widget-app__work-list-img ml-4">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/4.jpg" alt="">
                            <img class="profile-picture avatar-sm  rounded-circle mr-1" src="@/assets/images/faces/1.jpg" alt="">

                        </div>
                    </div>
                </b-card>
            </b-col>
            <!-- developer-total-earning -->
            <b-col lg="4" md="6" class=" mb-30">
                <b-card
                    title="Developer Total Earning"
                    class=""
                >
                    <h4 class="display"> $5,8000</h4>
                    <div class="ul-widget-app__browser-list mt-3">
                        <div class="ul-widget-app__browser-list-1 mb-30 ">
                            <img class="profile-picture avatar-md  rounded-circle" src="@/assets/images/faces/4.jpg" alt="">
                            <span class="text-15 ml-3">Sara Lanson</span>
                            <b-badge pill variant="success m-1 p-1">$5000</b-badge>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-30 ">
                            <img class="profile-picture avatar-md  rounded-circle" src="@/assets/images/faces/3.jpg" alt="">
                            <span class="text-15 ml-3">Jhon Legend</span>
                            <b-badge pill variant="danger m-1 p-1">$4000</b-badge>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-30 ">
                            <img class="profile-picture avatar-md  rounded-circle" src="@/assets/images/faces/2.jpg" alt="">
                            <span class="text-15 ml-3">Chris Patt</span>
                            <b-badge pill variant="info m-1 p-1">$5500</b-badge>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-30 ">
                            <img class="profile-picture avatar-md  rounded-circle" src="@/assets/images/faces/1.jpg" alt="">
                            <span class="text-15 ml-3">Vin Diesel</span>
                            <b-badge pill variant="warning m-1 p-1">$2000</b-badge>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-30 ">
                            <img class="profile-picture avatar-md  rounded-circle" src="@/assets/images/faces/5.jpg" alt="">
                            <span class="text-15 ml-3">Ryan reynolds</span>
                            <b-badge pill variant="primary m-1 p-1">$2000</b-badge>
                        </div>

                    </div>
                </b-card>
            </b-col>
            <!-- travel-different-countries -->
            <b-col lg="4" md="6" class=" mb-30">
                <b-card title="Travel Different Countries">
                    <div class="ul-widget-app__poll-list mb-4">
                        <h3 class="heading mr-2">
                            2589
                        </h3>
                        <div class="d-flex">
                            <span class="text-muted text-12">From Uganda</span>
                            <span class="t-font-boldest ml-auto">
                                75%
                                <i class="i-Turn-Up-2 text-14 text-success font-weight-700"></i>
                            </span>
                        </div>
                        <b-progress height="5px" :value="75"></b-progress>
                    </div>
                    <div class="ul-widget-app__poll-list mb-4">
                        <h3 class="heading mr-2">
                            4589
                        </h3>
                        <div class="d-flex">
                            <span class="text-muted text-12">From U.S.A</span>
                            <span class="t-font-boldest ml-auto">
                                33%
                                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
                            </span>
                        </div>
                        <b-progress height="5px" variant="success" :value="33"></b-progress>
                    </div>
                    <div class="ul-widget-app__poll-list mb-4">
                        <h3 class="heading mr-2">
                            7589
                        </h3>
                        <div class="d-flex">
                            <span class="text-muted text-12">From Canada</span>
                            <span class="t-font-boldest ml-auto">
                                49%
                                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
                            </span>
                        </div>
                        <b-progress height="5px" variant="dark" :value="49"></b-progress>
                    </div>
                    <div class="ul-widget-app__poll-list mb-4">
                        <h3 class="heading mr-2">
                            3589
                        </h3>
                        <div class="d-flex">
                            <span class="text-muted text-12">From France</span>
                            <span class="t-font-boldest ml-auto">
                                13%
                                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
                            </span>
                        </div>
                        <b-progress height="5px" variant="danger" :value="13"></b-progress>
                    </div>
                    <div class="ul-widget-app__poll-list mb-4">
                        <h3 class="heading mr-2">
                            3589
                        </h3>
                        <div class="d-flex">
                            <span class="text-muted text-12">From japan</span>
                            <span class="t-font-boldest ml-auto">
                                25%
                                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
                            </span>
                        </div>
                        <b-progress height="5px" variant="warning" :value="25"></b-progress>
                    </div>
                </b-card>
            </b-col>

            <!-- mutual-friends -->
            <b-col lg="4" md="6"  class=" mb-30">
                <b-card no-body class="">
                    <b-card-header class="purple-500 text-purple-500 p-4">
                        <div class="d-flex align-items-center mb-30">
                            <div class="card-title text-white mb-0">Mutual Friends</div>
                            
                        </div>
                        <div class="input-group input-group-lg">
                            <input type="text" class="form-control" placeholder="search by username or email..." aria-label="Large" aria-describedby="inputGroup-sizing-sm">
                            <span class="ul-widget-app__find-font"><i class="i-Search-People font-weight-500"></i></span>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="ul-widget-app__social-site mt-4 mb-30">
                            <b-row>
                                <b-col md="6" lg="4" class="text-center">
                                    <div class="ul-widget-app__social-friends mb-4 mb-md-0">
                                        <img class="profile-picture avatar-lg mb-2" src="@/assets/images/faces/4.jpg" alt="">
                                        <div class="ul-widget-app__small-title">
                                            <span class="t-font-bolder">Elizabeth Olsen</span>
                                            <span class="text-primary"><a href="">Invite</a></span>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="6" lg="4" class="text-center">
                                    <div class="ul-widget-app__social-friends mb-4 mb-md-0">
                                        <img class="profile-picture avatar-lg mb-2" src="@/assets/images/faces/2.jpg" alt="">
                                        <div class="ul-widget-app__small-title">
                                            <span class="t-font-bolder">Jack Olsen</span>
                                            <span class="text-primary"><a href="">Invite</a></span>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="6" lg="4" class="text-center">
                                    <div class="ul-widget-app__social-friends mb-4 mb-md-0">
                                        <img class="profile-picture avatar-lg mb-2" src="@/assets/images/faces/5.jpg" alt="">
                                        <div class="ul-widget-app__small-title">
                                            <span class="t-font-bolder">Dan Olsen</span>
                                            <span class="text-primary"><a href="">Invite</a></span>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                            <div class="ul-widget-app__social-button mt-5">
                                <button type="button" class="btn btn-block btn-facebook btn-icon m-1">
                                    <span class="ul-btn__text">Invite Facebook</span>
                                    <span class="ul-btn__icon"><i class="i-Facebook-2"></i></span>
                                </button>

                                <button type="button" class="btn btn-block btn-twitter btn-icon m-1">
                                    <span class="ul-btn__text">Invite Twitter</span>
                                    <span class="ul-btn__icon"><i class="i-Twitter"></i></span>
                                </button>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            
            <!-- Notification -->
            <b-col lg="4" md="6"  class=" mb-30">
                <b-card title="Notification" class="">
                    <div class="ul-widget-app__browser-list">
                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Bell1  text-white bg-warning rounded-circle p-2  mr-3"></i>
                            <span class="text-15">You have 9 pending Tasks</span>
                            <span class="text-mute">in a sec</span>
                        </div>

                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Internet  text-white green-500 rounded-circle p-2  mr-3"></i>
                            <span class="text-15">Traffic Overloaded</span>
                            <span class="text-mute">4 Hours ago</span>
                        </div>

                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Shopping-Cart  text-white cyan-500 rounded-circle p-2  mr-3"></i>
                            <span class="text-15">New Order Received</span>
                            <span class="text-mute">yesterday </span>
                        </div>

                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Add-UserStar  text-white teal-500 rounded-circle p-2  mr-3"></i>
                            <span class="text-15">New User </span>
                            <span class="text-mute">2 April </span>
                        </div>

                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Bell  text-white purple-500 rounded-circle p-2  mr-3"></i>
                            <span class="text-15">New Update </span>
                            <span class="text-mute">2 April </span>
                        </div>

                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Shopping-Cart  text-white bg-danger rounded-circle p-2  mr-3"></i>
                            <span class="text-15">New Order Received</span>
                            <span class="text-mute">yesterday </span>
                        </div>

                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Internet  text-white green-500 rounded-circle p-2  mr-3"></i>
                            <span class="text-15">Traffic Overloaded</span>
                            <span class="text-mute">4 Hours ago</span>
                        </div>

                    </div>
                </b-card>
            </b-col>

            <!-- crypto-currency -->
            <b-col lg="4" md="6" class=" mb-30">
                <b-card title="Order"> 
                    <h5 class="text-mute mb-30">Buy & Sell Crypto Currency</h5>
                    <b-tabs content-class="mt-3 p-0">
                        <b-tab title="Home"  active>
                            <div class="ul-widget-app__buy-currency">
                                <b-form>
                                    <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
                                        <b-input-group-prepend>
                                            <span class="input-group-text" id="basic-addon1">
                                                <i class="i-Bitcoin text-20"></i>
                                            </span>
                                        </b-input-group-prepend>
                                        <b-input id="inline-form-input-username" placeholder="Amount"></b-input>
                                    </b-input-group>
                                    <b-input-group  class="mt-3 mb-2 mr-sm-2 mb-sm-0">
                                        <b-input-group-prepend>
                                            <span class="input-group-text" id="basic-addon1">
                                                <i class="i-Dollar-Sign text-20"></i>
                                            </span>
                                        </b-input-group-prepend>
                                        <b-input id="inline-form-input-username" placeholder="Price"></b-input>
                                    </b-input-group>
                                    <b-button variant="primary mt-3">Buy Coin</b-button>
                                </b-form>
                            </div>
                        </b-tab>
                        <b-tab title="Profile">
                            <div class="ul-widget-app__buy-currency">
                                <b-form>
                                    <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
                                        <b-input-group-prepend>
                                            <span class="input-group-text" id="basic-addon1">
                                                <i class="i-Bitcoin text-20"></i>
                                            </span>
                                        </b-input-group-prepend>
                                        <b-input id="inline-form-input-username" placeholder="Amount"></b-input>
                                    </b-input-group>
                                    <b-input-group  class="mt-3 mb-2 mr-sm-2 mb-sm-0">
                                        <b-input-group-prepend>
                                            <span class="input-group-text" id="basic-addon1">
                                                <i class="i-Dollar-Sign text-20"></i>
                                            </span>
                                        </b-input-group-prepend>
                                        <b-input id="inline-form-input-username" placeholder="Price"></b-input>
                                    </b-input-group>
                                    <b-button variant="success mt-3">Sell Coin</b-button>
                                </b-form>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>

            <!-- currency-trading -->
            <b-col lg="4" md="6"  class=" mb-30">
                <b-card title="Currency Trading" class="">
                    <h5 class="text-mute mb-30">Trading Currency from Here</h5>
                    <b-form>
                        <b-form-group>
                            <b-input-group class="mb-1">
                                <b-input-group-prepend>
                                    <span class="input-group-text">
                                        $
                                    </span>
                                </b-input-group-prepend>
                                <b-input id="inline-form-input-username" placeholder="Amount"></b-input>
                                
                                <b-input-group-prepend>
                                    <b-dropdown variant="outline-primary" size="sm" text="Unit" >
                                        <b-dropdown-item-button>Action</b-dropdown-item-button>
                                        <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                        <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                                    </b-dropdown>
                                </b-input-group-prepend>

                                
                            </b-input-group>   
                        </b-form-group>
                        <div class="timeline timeline--align">
                            <div class="timeline-item mt-0">
                                <div class="timeline-badge">
                                    <i class="badge-icon bg-danger text-white i-Arrow-Refresh"></i>
                                </div>
                            </div>
                        </div>
                        <div style="clear:both"></div>
                        <b-form-group>
                            <b-input-group class="mt-2">
                                <b-input-group-prepend>
                                    <span class="input-group-text">
                                        $
                                    </span>
                                </b-input-group-prepend>
                                <b-input id="inline-form-input-username" placeholder="Amount"></b-input>
                                
                                <b-input-group-prepend>
                                    <b-dropdown variant="outline-primary" size="sm" text="Unit" >
                                        <b-dropdown-item-button>Action</b-dropdown-item-button>
                                        <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                        <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                                    </b-dropdown>
                                </b-input-group-prepend>

                                
                            </b-input-group>   
                        </b-form-group>
                        <b-button   variant="primary  btn-rounded mt-2 float-right">
                            Trading Now
                        </b-button>
                    </b-form>
                </b-card>
            </b-col>

            <b-col lg="4" md="6"  class=" mb-30">
                <b-card title="Poll" class="">
                    <div class="ul-widget-app__header mb-30">
                        <h5 class="text-mute">Recent Poll</h5>
                        <h6 class="text-mute font-weight-600">Your mobile app daily usage</h6>
                    </div>
                    <b-form-radio name="some-radios" class="mb-3" value="A">A 20 minutes</b-form-radio>
                    <b-form-radio name="some-radios" class="mb-3" value="B">B More than 30 minutes</b-form-radio>
                    <b-form-radio name="some-radios" class="mb-3" value="C">C 1 Hour</b-form-radio>
                </b-card>
            </b-col>

            <b-col lg="4" md="6"  class=" mb-30">
                <b-card>
                    <div class="user-profile mb-30">
                        <div class="ul-widget-card__user-info border-bottom-gray-200 pb-3">
                                <img class="profile-picture avatar-xl mb-2" src="@/assets/images/faces/4.jpg" alt="">
                                <p class="m-0 text-24">Timothy Sara</p>
                                <p class="text-muted m-0">
                                    <a href="">timothysara@gmail.com</a>
                                </p>
                                <div class="mt-3 ul-widget-app__skill-margin">
                                    <span class="text-15">Template</span>
                                    <span class="text-15">UI</span>
                                    <span class="text-15">UX</span>
                                    
                                    <b-badge pill variant="primary" class="p-2 m-1">+4</b-badge>
                                </div>
                                
                        </div>
                        <div class="ul-widget-app__profile-footer mt-4">
                                    <div class="ul-widget-app__profile-footer-font">
                                        <a href="">
                                            <i class="i-Speach-Bubble-6 text-16 font-weight-600 mr-1"></i>
                                            <span class=" text-16 font-weight-600">Message</span>
                                        </a>
                                    </div>
                                    <div class="ul-widget-app__profile-footer-font">
                                        <a href="">
                                            <i class="i-File-Clipboard-File--Text text-16 font-weight-600 mr-1"></i>
                                            <span class=" text-16 font-weight-600">Portfolio</span>
                                        </a>
                                    </div>
                                </div>
                    </div>
                </b-card>
            </b-col>

            <b-col lg="4" md="6"  class=" mb-30">
                <b-card class="">
                    <div class="ul-widget-card__title-info text-center mb-3">
                        <p class="m-0 text-24">Jon Snow</p>
                        <p class="text-muted m-0">UI/UX</p>
                    </div>
                    <div class="user-profile mb-30">
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
                    <div class=" mt-2">
                        <button type="button" class="btn btn-primary btn-block m-1">Follow</button>
                        <button type="button" class="btn btn-primary btn-block m-1">Send Message</button>
                    </div>
                </b-card>
            </b-col>

            <b-col lg="4" md="6"  class=" mb-30">
                <b-card title="Feedback" class="">
                    <p class="text-mute">Checking the feedback</p>
                    <h3 class="heading mt-4">3450</h3>
                    <p class="text-mute">This year we got 1246 feedback</p>
                    <div class="ul-widget-app__work-list-img mt-4">
                        <img class="profile-picture avatar-md  rounded-circle mr-1" src="@/assets/images/faces/4.jpg" alt="">
                        <img class="profile-picture avatar-md  rounded-circle mr-1" src="@/assets/images/faces/1.jpg" alt="">
                        <img class="profile-picture avatar-md  rounded-circle mr-1" src="@/assets/images/faces/5.jpg" alt="">
                        <img class="profile-picture avatar-md  rounded-circle mr-1" src="@/assets/images/faces/3.jpg" alt="">
                    </div>
                    <div class=" mt-5">
                        <button type="button" class="btn btn-primary  m-1">Checkout All
                            Feedback
                        </button>
                    </div>
                </b-card>
            </b-col>

            <!-- begin-profile -->
            <b-col lg="4" md="6"  class=" mb-30">
                <b-card no-body class="o-hidden">
                    <img class="d-block w-100" src="@/assets/images/products/headphone-1.jpg" alt="Second slide">
                    <b-card-body>
                        <div class="user-profile ul-widget-app__profile--position mb-30">
                            <div class="ul-widget-card__user-info ">
                                <img class="profile-picture avatar-lg mb-2" src="@/assets/images/faces/1.jpg" alt="">
                                <p class="m-0 text-24 text-white">Timothy Carlson</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-center">
                                <h3 class="display">25K</h3>
                                <h5 class="display text-muted">Followers</h5>
                            </div>
                            <div class="col text-center">
                                <h3 class="display">200</h3>
                                <h5 class="display text-muted">Following</h5>
                            </div>
                            <div class="col text-center">
                                <h3 class="display">25K</h3>
                                <h5 class="display text-muted">Facebook</h5>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="4" md="6"   class=" mb-30">
                <b-card title="Browser Status" class="">
                    <div class="ul-widget-app__browser-list">
                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Chrome  text-18 text-danger font-weight-600 mr-3"></i>
                            <span class="text-15">Google Chrome</span>
                            <b-badge pill variant="success p-1 m-1">98%</b-badge>
                        </div>

                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Firefox  text-18 text-warning font-weight-600 mr-3"></i>
                            <span class="text-15">Firefox</span>
                            <b-badge pill variant="danger p-1 m-1">89%</b-badge>
                        </div>


                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Internet-Explorer  text-18 text-info font-weight-600 mr-3"></i>
                            <span class="text-15">Internet Explorer</span>
                            <b-badge pill variant="primary p-1 m-1">89%</b-badge>
                        </div>

                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Opera  text-18 text-danger font-weight-600 mr-3"></i>
                            <span class="text-15">Opera Mini</span>
                            <b-badge pill variant="dark p-1 m-1">119%</b-badge>
                        </div>


                        <div class="ul-widget-app__browser-list-1 mb-30">
                            <i class="i-Android  text-18 text-success mr-3"></i>
                            <span class="text-15">Android</span>
                           
                            <b-badge pill variant="danger p-1 m-1">10000%</b-badge>
                        </div>
                    </div>
                </b-card>
            </b-col>

            <b-col lg="4" md="6"  class=" mb-30">
                <b-card title="Poll" class="">
                    <div class="ul-widget-app__header mb-30">
                        <h5 class="text-mute">Recent Poll</h5>
                        <h6 class="text-mute font-weight-600">Your mobile app daily usage</h6>
                    </div>
                    <div class="ul-widget-app__poll-list mb-4">
                        <div class="d-flex">
                            <h5 class="heading mr-2">A</h5>
                            <span class="text-muted">20 Minutes</span>
                            <span class="t-font-boldest ml-auto">33%</span>
                        </div>
                        <b-progress  variant="danger" height="5px" :value="33"  class="mb-3"></b-progress>
                    </div>
                    <div class="ul-widget-app__poll-list mb-4">
                        <div class="d-flex">
                            <h5 class="heading mr-2">B</h5>
                            <span class="text-muted">Greater than 30 Minutes</span>
                            <span class="t-font-boldest ml-auto">63%</span>
                        </div>
                        <b-progress  variant="success" height="5px" :value="63"  class="mb-3"></b-progress>
                    </div>
                    <div class="ul-widget-app__poll-list mb-4">
                        <div class="d-flex">
                            <h5 class="heading mr-2">C</h5>
                            <span class="text-muted">2 Hour</span>
                            <span class="t-font-boldest ml-auto">43%</span>
                        </div>
                        <b-progress  variant="warning" height="5px" :value="43"  class="mb-3"></b-progress>
                    </div>
                    <div class="ul-widget-app__poll-list mb-4">
                        <div class="d-flex">
                            <h5 class="heading mr-2">D</h5>
                            <span class="text-muted">8 Hour</span>
                            <span class="t-font-boldest ml-auto">3%</span>
                        </div>
                        <b-progress  variant="primary" height="5px" :value="13"  class="mb-3"></b-progress>
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
    title: "App Widgets"
  },
    data() {
      return { 
        // projects
        items: [
          { developer: require('@/assets/images/faces/4.jpg'), name: 'Lucy ', priority: 'Gull Admin', Budget: '$4.9K' },
          { developer: require('@/assets/images/faces/2.jpg'), name: 'Lucy ', priority: 'Agency', Budget: '$70K' },
          { developer: require('@/assets/images/faces/1.jpg'), name: 'Dan ', priority: 'Developer', Budget: '$70K' },
          { developer: require('@/assets/images/faces/3.jpg'), name: 'Jack', priority: 'Designer', Budget: '$70K' },
          { developer: require('@/assets/images/faces/5.jpg'), name: 'Clarkson', priority: 'Programmer', Budget: '$70K' },
        ]
      }
    }
  }
</script>
<style>

</style>

