<template>
  <div class="main-content">
    <breadcumb :page="'Version 2'" :folder="'Dashboard'" />

    <b-row>
      <b-col lg="6" xl="6" md="12">
        <b-row>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon text-center mb-30">
              <i class="i-Data-Upload"></i>
              <p class="text-muted mt-2 mb-2">Today's Upload</p>
              <p class="text-primary text-24 line-height-1 m-0">21</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon text-center mb-30">
              <i class="i-Add-User"></i>
              <p class="text-muted mt-2 mb-2">New Users</p>
              <p class="text-primary text-24 line-height-1 m-0">21</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon text-center mb-30">
              <i class="i-Money-2"></i>
              <p class="text-muted mt-2 mb-2">Total sales</p>
              <p class="text-primary text-24 line-height-1 m-0">4021</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon-big text-center mb-30">
              <i class="i-Money-2"></i>
              <p class="text-muted mt-2 mb-2">Profit</p>
              <p class="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon-big text-center mb-30">
              <i class="i-Gear"></i>
              <p class="text-muted mt-2 mb-2">Privacy</p>
              <p class="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon-big text-center mb-30">
              <i class="i-Bell"></i>
              <p class="text-muted mt-2 mb-2">Updates</p>
              <p class="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <b-col lg="6" xl="6" md="12" class="mb-30">
        <b-card class="h-100">
          <h4 class="card-title m-0">Last Month Profit</h4>
          <div class="chart-wrapper" style="height: 300px ; width:100%">
            <v-chart :options="echart4" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>

      <!-- last-month-salary -->
      <b-col lg="6" xl="6" md="12">
        <b-card title="Last Month Summary" body-class="pb-0" class="mb-30">
          <b-row>
            <b-col md="6">
              <table class="table">
                <thead class>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Portable Speaker</td>
                    <td class="font-weight-bold text-success">+ $1200</td>
                  </tr>
                  <tr>
                    <td>Portable Headphone</td>
                    <td class="text-success">In Stock</td>
                  </tr>
                  <tr>
                    <td>Speaker</td>
                    <td class="text-danger">Out of stock</td>
                  </tr>
                  <tr>
                    <td>Watch</td>
                    <td class="text-warning">Low stock</td>
                  </tr>
                  <tr>
                    <td>Portable Headphone</td>
                    <td class="font-weight-bold">In Stock</td>
                  </tr>
                </tbody>
              </table>
            </b-col>
            <b-col md="6">
              <div class="chart-wrapper" style="height: 200px">
                <v-chart :options="echart5" :autoresize="true"></v-chart>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <!-- start::top-authors -->
      <b-col lg="6" xl="6" md="12" class="mb-30">
        <b-card class>
          <div class="card-title">Top Authors</div>
          <div
            class="d-flex flex-column flex-md-row text-center text-md-left text-lg-left flex-lg-row align-items-center border-bottom-dotted-dim pb-3 mb-3"
          >
            <img class="avatar-md rounded mr-md-3 mb-2" src="@/assets/images/faces/2.jpg" alt />
            <div class="flex-grow-1">
              <h6 class="m-0">David Hopkins</h6>
              <p class="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button class="btn btn-outline-primary btn-rounded btn-sm mt-md-0 mt-2">Follow</button>
            </div>
          </div>
          <div
            class="d-flex flex-column flex-md-row text-center text-md-left text-lg-left flex-lg-row align-items-center border-bottom-dotted-dim pb-3 mb-3"
          >
            <img class="avatar-md rounded mr-md-3 mb-2" src="@/assets/images/faces/3.jpg" alt />
            <div class="flex-grow-1">
              <h6 class="m-0">James Mitchell</h6>
              <p class="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button class="btn btn-outline-primary btn-rounded btn-sm mt-md-0 mt-2">Follow</button>
            </div>
          </div>
          <div
            class="d-flex flex-column flex-md-row text-center text-md-left text-lg-left flex-lg-row align-items-center border-bottom-dotted-dim mb-3"
          >
            <img class="avatar-md rounded mr-md-3 mb-2" src="@/assets/images/faces/4.jpg" alt />
            <div class="flex-grow-1">
              <h6 class="m-0">Jessica Mitchell</h6>
              <p class="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button class="btn btn-outline-primary btn-rounded btn-sm mt-md-0 mt-2">Follow</button>
            </div>
          </div>
        </b-card>
      </b-col>

      <!-- travel-different-countries -->
      <b-col sm="12" md="6" lg="6" xl="4" class="mb-30">
        <b-card title="Travel Different Countries" class>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <span class="text-muted text-12">From UK</span>
              <span class="text-muted text-12 ml-auto">
                75%
                <i class="i-Turn-Up-2 text-14 text-success font-weight-700"></i>
              </span>
            </div>
            <b-progress height="5px" :value="75"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <span class="text-muted text-12">From U.S.A</span>
              <span class="text-muted text-12 ml-auto">
                33%
                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
              </span>
            </div>
            <b-progress height="5px" variant="success" :value="33"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <span class="text-muted text-12">From Canada</span>
              <span class="text-muted text-12 ml-auto">
                49%
                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
              </span>
            </div>
            <b-progress height="5px" variant="dark" :value="49"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <span class="text-muted text-12">From France</span>
              <span class="text-muted text-12 ml-auto">
                13%
                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
              </span>
            </div>
            <b-progress height="5px" variant="danger" :value="13"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <span class="text-muted text-12">From Japan</span>
              <span class="text-muted text-12 ml-auto">
                25%
                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
              </span>
            </div>
            <b-progress height="5px" variant="warning" :value="25"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <span class="text-muted text-12">From Brazil</span>
              <span class="text-muted text-12 ml-auto">
                25%
                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
              </span>
            </div>
            <b-progress height="5px" variant="success" :value="25"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list">
            <div class="d-flex">
              <span class="text-muted text-12">From India</span>
              <span class="text-muted text-12 ml-auto">
                25%
                <i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
              </span>
            </div>
            <b-progress height="5px" variant="danger" :value="25"></b-progress>
          </div>
        </b-card>
      </b-col>

      <!-- mutual-friends -->
      <b-col sm="12" md="6" lg="6" xl="4" class="mb-30">
        <b-card>
          <h4 class="card-title">Payment Form</h4>

          <b-form>
            <b-form-group label="Full Name">
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-input-group-prepend>
                  <span class="input-group-text" id="basic-addon1">
                    <i class="i-Male-21 text-18"></i>
                  </span>
                </b-input-group-prepend>
                <b-input id="inline-form-input-username1" placeholder="Full Name"></b-input>
              </b-input-group>
            </b-form-group>

            <b-form-group class="mt-4">
              <div class="card-input">
                <legend class="col-form-label pt-0" for>Card Number</legend>
                <div class="ul-widget-list__payment-method mb-1">
                  <img
                    class="mr-2"
                    src="@/assets/images/master-card.png"
                  />
                  <img class="mr-2" src="@/assets/images/visa.png" />
                  <img class="mr-2" src="@/assets/images/paypal.png" />
                </div>
              </div>
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-input-group-prepend>
                  <span class="input-group-text" id="basic-addon1">
                    <i class="i-Credit-Card-2 text-18"></i>
                  </span>
                </b-input-group-prepend>
                <b-input  placeholder="card number"></b-input>
              </b-input-group>
            </b-form-group>

            <b-row class="mt-4">
              <b-col md="4">
                <b-form-group label="Expire">
                 
                  <b-form-select
                    class
                      v-model="selected" 
                    :options=" [
          { value: 'x', text: ' select an option' },
          { value: 'a', text: 'January' },
          { value: 'b', text: 'February' },
      
 
        ]"
                    id="inline-form-custom-select-pref1"
                  >
                    
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group style="margin-top:25px">
                  <b-form-select
                      v-model="selected"
                    :options="[
          { value: 'x', text: ' select an option' },
          { value: 'a', text: 'January' },
          { value: 'b', text: 'February' },
          
 
        ]"
                    id="inline-form-custom-select-pref"
                  >
                    
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group label="CVV">
                  <b-form-input></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button block variant="outline-primary mt-4">Confirm</b-button>
          </b-form>
        </b-card>
      </b-col>

      <!-- Notification -->
      <b-col sm="12" md="6" lg="6" xl="4" class="mb-30">
        <b-card body-class="p-0" class>
          <h4 class="card-title p-4 pb-0">Notification</h4>
          <div class="ul-widget-app__browser-list notification_widget">
            <div class="ul-widget-app__browser-list-1 pl-4 pr-4 pb-2 pt-2 mb-2">
              <i class="i-Bell1 text-white bg-warning ul-widget-app__roundbg-icon mr-3"></i>
              <span class="">Tasks</span>
              <span class="text-muted">in a sec</span>
            </div>

            <div class="ul-widget-app__browser-list-1 pl-4 pr-4 pb-2 pt-2 mb-2">
              <i class="i-Internet text-white green-500 ul-widget-app__roundbg-icon mr-3"></i>
              <span class="">Traffic</span>
              <span class="text-muted">4 Hours ago</span>
            </div>

            <div class="ul-widget-app__browser-list-1 pl-4 pr-4 pb-2 pt-2 mb-2">
              <i class="i-Shopping-Cart text-white cyan-500 ul-widget-app__roundbg-icon mr-3"></i>
              <span class="">Order</span>
              <span class="text-muted">yesterday</span>
            </div>

            <div class="ul-widget-app__browser-list-1 pl-4 pr-4 pb-2 pt-2 mb-2">
              <i class="i-Add-UserStar text-white teal-500 ul-widget-app__roundbg-icon mr-3"></i>
              <span class="">User</span>
              <span class="text-muted">2 April</span>
            </div>
            <div class="ul-widget-app__browser-list-1 pl-4 pr-4 pb-2 pt-2 mb-2">
              <i class="i-Internet text-white green-500 ul-widget-app__roundbg-icon mr-3"></i>
              <span class="">Traffic</span>
              <span class="text-muted">4 Hours ago</span>
            </div>

            
          </div>
        </b-card>
      </b-col>

      <!-- best_sellers -->
      <b-col sm="12" md="6" lg="6" xl="4" class="mb-30">
        <b-card title="Browser Status" class>
          <div class="ul-widget-app__browser-list">
            <div class="ul-widget-app__browser-list-1 mb-4">
              <i class="i-Chrome text-18 text-danger font-weight-600 mr-3"></i>
              <span class="">Google Chrome</span>
              <b-badge pill variant="success p-1">98%</b-badge>
            </div>

            <div class="ul-widget-app__browser-list-1 mb-4">
              <i class="i-Firefox text-18 text-warning font-weight-600 mr-3"></i>
              <span class="">Firefox</span>
              <b-badge pill variant="danger p-1">89%</b-badge>
            </div>

            <div class="ul-widget-app__browser-list-1 mb-4">
              <i class="i-Internet-Explorer text-18 text-info font-weight-600 mr-3"></i>
              <span class="">Internet Explorer</span>
              <b-badge pill variant="primary p-1">89%</b-badge>
            </div>

            <div class="ul-widget-app__browser-list-1 mb-4">
              <i class="i-Opera text-18 text-danger font-weight-600 mr-3"></i>
              <span class="">Opera Mini</span>
              <b-badge pill variant="dark p-1">119%</b-badge>
            </div>

            <div class="ul-widget-app__browser-list-1 mb-4">
              <i class="i-Android text-18 text-success mr-3"></i>
              <span class="">Android</span>

              <b-badge pill variant="danger p-1">10000%</b-badge>
            </div>
          </div>
        </b-card>
      </b-col>

      <b-col sm="12" md="6" lg="6" xl="4" class="mb-30">
        <b-card class>
          <h4 class="card-title mb-2">Poll</h4>
          <div class="ul-widget-app__header mb-4">
            <h6 class="text-muted">Your mobile app daily usage</h6>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <h5 class="heading text-14 mr-2">Trello</h5>
              <span class="text-muted">20 Minutes</span>
              <span class="ml-auto">33%</span>
            </div>
            <b-progress variant="danger" height="5px" :value="33" class="mb-3"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <h5 class="heading text-14 mr-2">Slack</h5>
              <span class="text-muted">20 Minutes</span>
              <span class="ml-auto">63%</span>
            </div>
            <b-progress variant="success" height="5px" :value="63" class="mb-3"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <h5 class="heading text-14 mr-2">Skype</h5>
              <span class="text-muted">2 Hour</span>
              <span class="ml-auto">43%</span>
            </div>
            <b-progress variant="warning" height="5px" :value="43" class="mb-3"></b-progress>
          </div>
          <div class="ul-widget-app__poll-list mb-4">
            <div class="d-flex">
              <h5 class="heading text-14 mr-2">Imo</h5>
              <span class="text-muted">8 Hour</span>
              <span class="ml-auto">3%</span>
            </div>
            <b-progress variant="primary" height="5px" :value="13" class="mb-3"></b-progress>
          </div>
        </b-card>
      </b-col>

      <!-- latest-log -->
      <b-col sm="12" md="6" lg="6" xl="4" class="mb-30">
        <b-card title="Latest Log">
          <div class="ul-widget-s6__items">
            <div class="ul-widget-s6__item mt-0 mb-4">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-primary ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text">12 new users registered</span>
              <span class="ul-widget-s6__time text-muted">Just Now</span>
            </div>
            <div class="ul-widget-s6__item mt-0 mb-4">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-success ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text">System shutdown</span>
              <span class="ul-widget-s6__time text-muted">14 mins</span>
            </div>

            <div class="ul-widget-s6__item mt-0 mb-4">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-dark ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text">
                System error -
                <!-- <a href="" class="typo_link text-danger"> Danger state text</a> -->
              </span>
              <span class="ul-widget-s6__time text-muted">2 hrs</span>
            </div>
            <div class="ul-widget-s6__item mt-0 mb-4">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-primary ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text">12 new users registered</span>
              <span class="ul-widget-s6__time text-muted">Just Now</span>
            </div>

            <div class="ul-widget-s6__item mt-0 mb-4">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-danger ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text">12 new users registered</span>
              <span class="ul-widget-s6__time text-muted">Just Now</span>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { basicLine } from "@/data/echarts";
import { echart4, echart5 } from "@/data/dashboard2";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard v2"
  },

  data: () => ({
    selected:"x",
    echart4,
    echart5,
    basicLine
  }),
  methods: {}
};
</script>
<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
