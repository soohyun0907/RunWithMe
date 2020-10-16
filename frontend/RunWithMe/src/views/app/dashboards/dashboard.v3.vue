<template>
  <div class="main-content">
    <breadcumb :page="'Version 3'" :folder="'Dashboard'" />
    <b-row>
      <!-- widget-chart--bar phase-3 -->
      <b-col md="6" sm="6" lg="6" xl="3" mt="3">
        <b-card class=" mb-30">
          <div class="ul-widget__row-v2">
            <div id="chart">
              <apexchart
                type="bar"
                height="100"
                :options="widgetBarChartThree.chartOptions"
                :series="widgetBarChartThree.series"
              />
            </div>
            <div class="ul-widget__content-v2">
              <h4 class="heading mt-3">698 212</h4>
              <small class=" text-muted m-0">
                50% Average
              </small>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" sm="6" lg="6" xl="3"  mt="3">
        <b-card class=" mb-30">
          <div class="ul-widget__row-v2">
            <div id="chart">
              <apexchart
                type="bar"
                height="100"
                :options="widgetBarChartFour.chartOptions"
                :series="widgetBarChartFour.series"
              />
            </div>
            <div class="ul-widget__content-v2">
              <h4 class="heading mt-3">369 212</h4>
              <small class=" text-muted m-0">
                24% Average
              </small>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" sm="6" lg="6" xl="3"  mt="3">
        <b-card class=" mb-30">
          <div class="ul-widget__row-v2">
            <div id="chart">
              <apexchart
                type="bar"
                height="100"
                :options="widgetBarChartFive.chartOptions"
                :series="widgetBarChartFive.series"
              />
            </div>
            <div class="ul-widget__content-v2">
              <h4 class="heading mt-3">369 212</h4>
              <small class=" text-muted m-0">
                24% Average
              </small>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" sm="6" lg="6" xl="3"  mt="3">
        <b-card class=" mb-30">
          <div class="ul-widget__row-v2">
            <div id="chart">
              <apexchart
                type="bar"
                height="100"
                :options="widgetBarChartSix.chartOptions"
                :series="widgetBarChartSix.series"
              />
            </div>
            <div class="ul-widget__content-v2">
              <h4 class="heading mt-3">369 212</h4>
              <small class=" text-muted m-0">
                24% Average
              </small>
            </div>
          </div>
        </b-card>
      </b-col>

      <b-col lg="12" xl="6" md="12">
        <b-row>
          <b-col md="12">
            <b-card class=" mb-30">
              <div class="card-title m-0">Network Stats</div>
              <p class="text-small text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <b-row>
                <b-col lg="6" md="12" class=" mb-30">
                  <div
                    class="p-4 rounded d-flex align-items-center bg-primary text-white"
                  >
                    <i class="i-Data-Backup text-32 mr-3"></i>
                    <div>
                      <h4 class="text-18 mb-1 text-white">Databases</h4>
                      <span>Total: 32</span>
                    </div>
                  </div>
                </b-col>
                <b-col lg="6" md="12" class=" mb-30">
                  <div
                    class="p-4 rounded d-flex align-items-center bg-primary text-white"
                  >
                    <i class="i-Big-Data text-32 mr-3"></i>
                    <div>
                      <h4 class="text-18 mb-1 text-white">Backups</h4>
                      <span> Total: 302</span>
                    </div>
                  </div>
                </b-col>
                <b-col lg="6" md="12" class=" mb-30">
                  <div
                    class="p-4 border border-light rounded d-flex align-items-center"
                  >
                    <i class="i-Data-Cloud text-32 mr-3"></i>
                    <div>
                      <h4 class="text-18 mb-1">Space</h4>
                      <span>Total: 160GB</span>
                    </div>
                  </div>
                </b-col>
                <b-col lg="6" md="12" class=" mb-30">
                  <div
                    class="p-4 border border-light rounded d-flex align-items-center"
                  >
                    <i class="i-Data-Download text-32 mr-3"></i>
                    <div>
                      <h4 class="text-18 mb-1">Download</h4>
                      <span>Total: 30GB</span>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card class="card-profile-1 mb-30 text-center">
              <div class="avatar box-shadow-2 mb-3">
                <img src="@/assets/images/faces/16.jpg" alt="" />
              </div>
              <h5 class="m-0">Jassica Hike</h5>
              <p class="mt-0 text-muted">UI/UX Designer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae cumque.
              </p>
              <button class="btn btn-primary btn-rounded">
                Contact Jassica
              </button>
              <div class="card-socials-simple mt-4">
                <a href="">
                  <i class="i-Linkedin-2"></i>
                </a>
                <a href="">
                  <i class="i-Facebook-2"></i>
                </a>
                <a href="">
                  <i class="i-Twitter"></i>
                </a>
              </div>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card class="card-profile-1 mb-30 text-center">
              <div class="avatar box-shadow-2 mb-3">
                <img src="@/assets/images/faces/2.jpg" alt="" />
              </div>
              <h5 class="m-0">James Hike</h5>
              <p class="mt-0 text-muted">VR Developer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae cumque.
              </p>
              <button class="btn btn-primary btn-rounded">
                Contact Jassica
              </button>
              <div class="card-socials-simple mt-4">
                <a href="">
                  <i class="i-Linkedin-2"></i>
                </a>
                <a href="">
                  <i class="i-Facebook-2"></i>
                </a>
                <a href="">
                  <i class="i-Twitter"></i>
                </a>
              </div>
            </b-card>
          </b-col>
          <b-col md="12" lg="6" xl="12">
            <b-card no-body class="card-ecommerce-3 o-hidden mb-30">
              <div class="d-flex flex-column flex-sm-row">
                <div>
                  <img
                    src="@/assets/images/photo-wide-1.jpg"
                    class="card-img-left"
                  />
                </div>
                <div class="flex-grow-1 p-4">
                  <h5 class="m-0">Product featured</h5>
                  <p class="m-0 text-small text-muted">By ABC Cafe</p>
                  <p class="m-0">$40 <del>$55</del></p>
                  <p class="text-muted mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt placeat esse tempore debitis.
                  </p>
                  <div class="actions">
                    <button
                      class="btn btn-sm rounded-circle btn-icon btn-outline-primary"
                    >
                      <i class="icon i-Add-Cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col md="12" lg="6" xl="12">
            <b-card no-body class="card-ecommerce-3 o-hidden mb-30">
              <div class="d-flex flex-column flex-sm-row">
                <div>
                  <img
                    src="@/assets/images/photo-wide-2.jpg"
                    class="card-img-left"
                  />
                </div>
                <div class="flex-grow-1 p-4">
                  <h5 class="m-0">Product featured</h5>
                  <p class="m-0 text-small text-muted">By Apple</p>
                  <p class="m-0">$40 <del>$55</del></p>
                  <p class="text-muted mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt placeat esse tempore debitis.
                  </p>
                  <div class="actions">
                    <button
                      class="btn btn-sm rounded-circle btn-icon btn-outline-primary"
                    >
                      <i class="icon i-Add-Cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </b-card>
          </b-col>
          <!-- author profit -->
          <b-col lg="12" xl="12" md="12" class=" mb-30">
            <b-card>
              <div class="d-flex justify-content-between">
                <h3 class="ul-widget__head-title">
                  Authors Profit
                </h3>
                <b-dropdown
                  class="d-none d-sm-block"
                  id="dropdown-1"
                  text="Latest"
                  variant="primary"
                >
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
              </div>
              <div class="ul-widget__body">
                <div class="ul-widget1">
                  <div class="ul-widget__item ul-widget4__users">
                    <div class="ul-widget4__img">
                      <img
                        src="@/assets/images/faces/1.jpg"
                        id="userDropdown"
                        alt=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    </div>
                    <div class="ul-widget2__info ul-widget4__users-info">
                      <a href="#" class="ul-widget2__title">
                        Anna Strong
                      </a>
                      <span href="#" class="ul-widget2__username">
                        Visual Designer,Google Inc
                      </span>
                    </div>
                    <span class="ul-widget4__number t-font-boldest text-success"
                      >+500</span
                    >
                  </div>

                  <div class="ul-widget__item ul-widget4__users">
                    <div class="ul-widget4__img">
                      <img
                        src="@/assets/images/faces/2.jpg"
                        id="userDropdown"
                        alt=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    </div>
                    <div class="ul-widget2__info ul-widget4__users-info">
                      <a href="#" class="ul-widget2__title">
                        Will Smith
                      </a>
                      <span href="#" class="ul-widget2__username">
                        Developer
                      </span>
                    </div>
                    <span class="ul-widget4__number t-font-boldest text-danger"
                      >+900</span
                    >
                  </div>

                  <div class="ul-widget__item ul-widget4__users">
                    <div class="ul-widget4__img">
                      <img
                        src="@/assets/images/faces/3.jpg"
                        id="userDropdown"
                        alt=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    </div>
                    <div class="ul-widget2__info ul-widget4__users-info">
                      <a href="#" class="ul-widget2__title">
                        Will Smith
                      </a>
                      <span href="#" class="ul-widget2__username">
                        Developer
                      </span>
                    </div>
                    <span class="ul-widget4__number t-font-boldest text-primary"
                      >+700</span
                    >
                  </div>
                  <div class="ul-widget__item ul-widget4__users">
                    <div class="ul-widget4__img">
                      <img
                        src="@/assets/images/faces/4.jpg"
                        id="userDropdown"
                        alt=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    </div>
                    <div class="ul-widget2__info ul-widget4__users-info">
                      <a href="#" class="ul-widget2__title">
                        Megan Fox
                      </a>
                      <span href="#" class="ul-widget2__username">
                        UI/UX
                      </span>
                    </div>
                    <span class="ul-widget4__number t-font-boldest text-warning"
                      >+100</span
                    >
                  </div>
                  <div class="ul-widget__item ul-widget4__users">
                    <div class="ul-widget4__img">
                      <img
                        src="@/assets/images/faces/2.jpg"
                        id="userDropdown"
                        alt=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    </div>
                    <div class="ul-widget2__info ul-widget4__users-info">
                      <a href="#" class="ul-widget2__title">
                        Jhon Wick
                      </a>
                      <span href="#" class="ul-widget2__username">
                        Developer
                      </span>
                    </div>
                    <span class="ul-widget4__number t-font-boldest text-danger"
                      >+900</span
                    >
                  </div>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="12" xl="6" md="12">
        <b-row>
          <b-col md="12">
            <b-card title="Basic Column chart" class=" mb-30">
              <div id="basicArea-chart" style="min-height: 365px">
                <apexchart
                  type="bar"
                  height="350"
                  :options="basicColumnChart.chartOptions"
                  :series="basicColumnChart.series"
                />
              </div>
            </b-card>
          </b-col>
          <!-- payment-form -->
          <b-col lg="12" xl="12" class=" mb-30">
            <b-card title="Payment Form #01" class="h-100">
              <div class="ul-widget-list__payment-method mb-3">
                <img
                  class="mr-2"
                  src="@/assets/images/master-card.png"
                  style="width: 50px"
                  alt=""
                  srcset=""
                />
                <img
                  class="mr-2"
                  src="@/assets/images/visa.png"
                  style="width: 50px"
                />
                <img
                  class="mr-2"
                  src="@/assets/images/paypal.png"
                  style="width: 50px"
                />
              </div>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      id="inline-form-input-username4"
                      placeholder="Full Name"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group label="Card Number" class="mt-4">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Credit-Card-2 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      id="inline-form-input-username"
                      placeholder="card number"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                       v-model="selected" 
                    :options="[
          { value: 'x', text: ' select an option' },
          { value: 'a', text: 'January' },
          { value: 'b', text: 'February' },]"
                        id="inline-form-custom-select-pref3"
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
          { value: 'b', text: 'February' },]"
                        id="inline-form-custom-select-pref"
                      >
                        
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group label="CVV">
                      <b-form-input> </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button block variant="primary mt-4">Confirm</b-button>
              </b-form>
            </b-card>
          </b-col>
          <b-col md="12" lg="6" xl="12">
            <b-card class=" mb-30">
              <h6 class="mb-2">Last 7 days traffic status</h6>
              <p class="text-24 font-weight-light mb-1">
                <i class="i-Up text-success"></i> 15%
              </p>

              <div class="chart-wrapper" style="height: 60px">
                <v-chart :options="echart3" :autoresize="true"></v-chart>
              </div>
            </b-card>
          </b-col>
          <b-col md="12" lg="6" xl="12">
            <b-card class=" mb-30">
              <h6 class="mb-2">Server failures</h6>
              <p class="text-24 font-weight-light mb-1">
                <i class="i-Down text-danger"></i> 5%
              </p>

              <div class="chart-wrapper" style="height: 60px">
                <v-chart :options="echart4" :autoresize="true"></v-chart>
              </div>
            </b-card>
          </b-col>

          <b-col xl="12" lg="12" class=" mb-30">
            <b-card
              border-variant=""
              title="Developers"
              header-bg-variant=""
              header-text-variant=""
              align="left"
            >
              <div class="ul-widget5">
                <div class="ul-widget-s5__item mb-30">
                  <div class="ul-widget-s5__content">
                    <div class="ul-widget-s5__pic">
                      <img
                        src="@/assets/images/faces/1.jpg"
                        id="userDropdown"
                        alt=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    </div>
                    <div class="ul-widget-s5__section text-left">
                      <h5>
                        Logo Design
                      </h5>
                      <p class="ul-widget-s5__desc text-left">
                        UI LIb admin .
                      </p>
                    </div>
                  </div>
                  <div class="ul-widget-s5__content">
                    <div class="ul-widget-s5__progress">
                      <div class="ul-widget-s5__stats">
                        <span>London</span>
                      </div>
                      <b-progress
                        :value="25"
                        show-value
                        variant="primary"
                        striped
                        animated
                      ></b-progress>
                    </div>
                  </div>
                  <div class="ul-widget-s5__content">
                    <b-button variant="outline-primary">
                      Follow
                    </b-button>
                  </div>
                </div>
                <div class="ul-widget-s5__item mb-30">
                  <div class="ul-widget-s5__content">
                    <div class="ul-widget-s5__pic">
                      <img
                        src="@/assets/images/faces/2.jpg"
                        id="userDropdown"
                        alt=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    </div>
                    <div class="ul-widget-s5__section text-left">
                      <h5>
                        Logo Design
                      </h5>
                      <p class="ul-widget-s5__desc text-left">
                        UI LIb admin .
                      </p>
                    </div>
                  </div>
                  <div class="ul-widget-s5__content">
                    <div class="ul-widget-s5__progress">
                      <div class="ul-widget-s5__stats">
                        <span>Germany</span>
                      </div>
                      <b-progress
                        :value="35"
                        show-value
                        variant="danger"
                        striped
                        animated
                      ></b-progress>
                    </div>
                  </div>
                  <div class="ul-widget-s5__content">
                    <b-button variant="outline-primary">
                      Follow
                    </b-button>
                  </div>
                </div>
                <div class="ul-widget-s5__item mb-30">
                  <div class="ul-widget-s5__content">
                    <div class="ul-widget-s5__pic">
                      <img
                        src="@/assets/images/faces/3.jpg"
                        id="userDropdown"
                        alt=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    </div>
                    <div class="ul-widget-s5__section text-left">
                      <h5>
                         Logo Design
                      </h5>
                      <p class="ul-widget-s5__desc text-left">
                        UI LIb admin .
                      </p>
                    </div>
                  </div>
                  <div class="ul-widget-s5__content">
                    <div class="ul-widget-s5__progress">
                      <div class="ul-widget-s5__stats">
                        <span>Finland</span>
                      </div>
                      <b-progress
                        :value="30"
                        show-value
                        variant="info"
                        striped
                        animated
                      ></b-progress>
                    </div>
                  </div>
                  <div class="ul-widget-s5__content">
                    <b-button variant="outline-primary">
                      Follow
                    </b-button>
                  </div>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { multipleYxis, basicColumnChart } from "@/data/apexChart";
import { echart1, echart3, echart2, echart4 } from "@/data/dashboard3";
import {
  widgetBarChartThree,
  widgetBarChartFour,
  widgetBarChartFive,
  widgetBarChartSix
} from "@/data/widgetStatistics";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard v3"
  },
  data: () => ({
    selected:"x",
    echart1,
    echart2,
    echart3,
    echart4,
    widgetBarChartThree,
    widgetBarChartFour,
    widgetBarChartFive,
    widgetBarChartSix,
    basicColumnChart
  })
};
</script>
