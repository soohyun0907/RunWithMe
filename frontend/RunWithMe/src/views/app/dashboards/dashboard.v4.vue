<template>
  <div class="main-content">
    <breadcumb :page="'Version 4'" :folder="'Dashboard'" />

    <b-row>
      <b-col lg="6" xl="3" md="6" sm="6">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div class="ul-widget__chart-info">
            <h5 class="text-muted text-10">INCOME</h5>
            <div class="ul-widget__chart-number">
              <h2 class="t-font-boldest">$1000</h2>
              <small class="text-muted">46% compared to last year</small>
            </div>
          </div>
          <b-card-body class="ul-card__widget-chart">
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="150"
                :options="splineAreaWidget.chartOptions"
                :series="splineAreaWidget.series"
              />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="6" xl="3" md="6" sm="6">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div class="ul-widget__chart-info">
            <h5 class="text-muted text-10">APPROVE</h5>
            <div class="ul-widget__chart-number">
              <h2 class="t-font-boldest">$500</h2>
              <small class="text-muted">46% compared to last year</small>
            </div>
          </div>
          <b-card-body class="ul-card__widget-chart">
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="150"
                :options="splineAreaWidgetTwo.chartOptions"
                :series="splineAreaWidgetTwo.series"
              />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="6" xl="3" md="6" sm="6">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div class="ul-widget__chart-info">
            <h5 class="text-muted text-10">TRANSACTION</h5>
            <div class="ul-widget__chart-number">
              <h2 class="t-font-boldest">$44,909</h2>
              <small class="text-muted">46% compared to last year</small>
            </div>
          </div>
          <b-card-body class="ul-card__widget-chart">
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="150"
                :options="splineAreaWidgetThree.chartOptions"
                :series="splineAreaWidgetThree.series"
              />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="6" xl="3" md="6" sm="6">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div class="ul-widget__chart-info">
            <h5 class="text-muted text-10">SALES</h5>
            <div class="ul-widget__chart-number">
              <h2 class="t-font-boldest">$500</h2>
              <small class="text-muted">46% compared to last year</small>
            </div>
          </div>
          <b-card-body class="ul-card__widget-chart">
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="150"
                :options="splineAreaWidgetFour.chartOptions"
                :series="splineAreaWidgetFour.series"
              />
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- form-wizard -->
      <b-col sm="12" md="12" xl="8" class=" mb-30">
        <b-card
          title="Create Your Company Profile And Get Started"
          class="o-hidden"
        >
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
                    class="col-md-6 mb-30"
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

      <b-col sm="12" md="12" xl="4" class=" mb-30">
        <b-row>
          <b-col md="6" xl="12">
            <b-card class="o-hidden mb-30">
              <div class="user-profile mb-30">
                <div class="ul-widget-card__user-info">
                  <img
                    class="profile-picture avatar-lg mb-2"
                    src="@/assets/images/faces/1.jpg"
                    alt=""
                  />
                  <p class="m-0 text-24">Timothy Carlson</p>
                  <p class="text-muted">Digital Marketer</p>
                </div>
                <div class="ul-widget-card--line mt-2">
                  <b-button variant="primary">Download</b-button>
                  <b-button variant="outline-success" class="float-right"
                    >Preview</b-button
                  >
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
          <b-col md="6 " xl="12">
            <b-card
              class="o-hidden card-icon-bg card-icon-bg-primary o-hidden  text-center"
            >
              <i class="i-Data-Upload"></i>
              <div class="content">
                <p class="text-muted mt-2 mb-0">Download</p>
                <p class="text-primary text-24 line-height-1 mb-2">4021</p>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <!-- finance-summary -->
      <b-col xl="8" md="12" class=" mb-30">
        <b-card no-body class="o-hidden">
          <b-card-header header-bg-variant="transparent">
            <b-row style="align-items:center">
              <b-col md="6">
                <div class="ul-card-widget__head-label">
                  <h5 class=" card-title">
                    Finance Summary
                  </h5>
                </div>
              </b-col>
              <b-col md="6" class="text-md-right">
                <b-button variant="outline-primary">
                  Summary View
                </b-button>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body>
            <b-row>
              <b-col md="6 " class="mb-4 mb-md-0">
                <h3 class="text-muted text-14 font-weight-500">
                  Final Commission Revenue
                </h3>
                <span class="text-muted text-18 font-weight-600">$790,420</span>
              </b-col>
              <b-col md="6" class="mb-4 mb-md-0">
                <h3 class="text-muted text-14 font-weight-500">
                  Final Commission Revenue
                </h3>
                <span class="text-muted text-18 font-weight-600">
                  July 25,2019</span
                >
              </b-col>
            </b-row>
          </b-card-body>
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="area"
              height="160"
              :options="spark3.chartOptions"
              :series="spark3.series"
            />
          </div>
        </b-card>
      </b-col>
      <!-- echart-pie -->
      <b-col xl="4" md="12" class=" mb-30">
        <b-card title="Stacked Pie Chart" class=" o-hidden">
          <div class="chart-wrapper" style="height: 250px">
            <v-chart :options="stackedPie" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>

      <!-- list -->
      <b-col md="12" xl="8" class=" mb-30">
        <b-card title="" class="wrapper o-hidden h-100">
          <vue-good-table
            :fixed-header="true"
            :columns="columns"
            styleClass="tableOne text-left vgt-table"
            row-style-class="text-left"
            :rows="rows"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'img'">
                <img
                  class="rounded"
                  :src="props.row.img"
                  style="width:50px ; height:50px"
                  alt="corrupted img"
                />
              </span>
            </template>
          </vue-good-table>
        </b-card>
      </b-col>

      <b-col xl="4" md="6" class=" mb-30">
        <div class="card  o-hidden">
          <img
            class="card-img-top"
            src="@/assets/images/photo-wide-3.jpg"
            alt
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </b-col>

      <!-- mask -->
      <b-col md="6" xl="6" class=" mb-30">
        <b-card bg-variant="defualt" text-variant="black">
          <div class="d-flex align-items-center  mb-30">
            <i class="i-ID-Card text-22 mr-2"></i>
            <h5 class=" card-title m-0">
              Card Information
            </h5>
          </div>

          <b-row>
            <b-col md="6">
              <p class="font-weight-400 mb-2">CPF</p>
              <the-mask
                class="form-control"
                :mask="['###.###.###-##']"
                placeholder="999.999.999-99"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Zip Code</p>
              <the-mask
                class="form-control"
                :mask="['#####-###']"
                placeholder="99999-999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Phone</p>
              <the-mask
                class="form-control"
                :mask="['+# (###) ###-####']"
                placeholder="+9 (999) 999-9999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Master Card</p>
              <the-mask
                class="form-control"
                :mask="['#### #### #### ####']"
                placeholder="9999 9999 9999 9999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Date</p>
              <the-mask
                class="form-control"
                :mask="['##/##/####']"
                placeholder="mm/dd/yy"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">CPF/CNPJ</p>
              <the-mask
                class="form-control"
                :mask="['###.###.###-##', '##.###.###/####-##']"
                placeholder="99.999.999/9999-99"
              />
            </b-col>
          </b-row>
          <b-button variant="danger" class="float-right">Submit</b-button>
        </b-card>
      </b-col>
      <!-- Sales-stats-1 -->
      <b-col xl="6" md="6" class=" mb-30">
        <b-card no-body title="Payment Form #2" class="o-hidden">
          <b-tabs pills card content-class="mt-3" fill>
            <b-tab active>
              <template slot="title">
                <i class="i-Credit-Card-2 text-16 mr-2 align-middle"></i> Credit
                Card
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      
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
                      
                      placeholder="card number"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                   v-model="selected"
                        :options="options"
                        
                      >
                        
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top:25px">
                      <b-form-select
                      v-model="selected"
                        :options="options"
                        
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
                <b-button block variant="primary " class="mt-3"
                  >Confirm</b-button
                >
              </b-form>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="i-Paypal text-16 mr-2 align-middle"></i> Paypal
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      
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
                      
                      placeholder="card number"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                        class=""
                   v-model="selected"
                        :options="options"
                        
                      >
                        
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top:25px">
                      <b-form-select
                    v-model="selected"
                        :options="options"
                        
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
                <b-button block variant="primary" class="mt-3"
                  >Confirm</b-button
                >
              </b-form>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="i-Bank text-16 mr-2 align-middle"></i>Bank Transaction
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      
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
                      
                      placeholder="card number"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                      
                        v-model="selected"
                        :options="options"
                        
                      >
                       
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top:25px">
                      <b-form-select
                       v-model="selected"
                        :options="options"
                        
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
                <b-button block variant="primary" class="mt-3"
                  >Confirm</b-button
                >
              </b-form>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { spark3, radialBar } from "@/data/apexChart";
import {
  splineAreaWidget,
  splineAreaWidgetTwo,
  splineAreaWidgetThree,
  splineAreaWidgetFour
} from "@/data/widgetStatistics";
import { stackedPie } from "@/data/echarts";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard v4"
  },
  props: {
    title: {
      type: String,
      default: "Awesome Wizard"
    }
  },
  data() {
    return {
      selected:"x",
      options:[
          { value: 'x', text: ' select an option' },
          { value: 'a', text: 'January' },
          { value: 'b', text: 'February' },],
      splineAreaWidget,
      splineAreaWidgetTwo,
      splineAreaWidgetThree,
      splineAreaWidgetFour,
      radialBar,
      stackedPie,
      spark3,
      values: [30, 20],
      max: 100,

      // list
      columns: [
        {
          label: "Thumbnail ",
          field: "img",
          width: "100px",
          tdClass: "gull-border-none text-left"
        },
        {
          label: "Title",
          field: "span",
          html: true,
          tdClass: "gull-border-none text-left"
        },
        {
          label: "Status",
          field: "status",
          html: true,
          tdClass: "text-left gull-border-none",
          thClass: "text-left"
        },
        {
          label: "Created On",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-mm-dd",
          dateOutputFormat: "mmm Do yy",
          tdClass: "text-left gull-border-none",
          thClass: "text-left"
        },
        {
          label: "Progress",
          field: "progressbar",
          html: true,
          tdClass: "text-left gull-border-none",
          thClass: "text-left"
        }
      ],
      rows: [
        {
          id: 1,
          img: require("@/assets/images/products/speaker-1.jpg"),
          status: '<span class="badge badge-danger">Cancel</span>',
          span: "Wireless Bluetooth V4.0 ",
          createdAt: "2011-10-28",
          progressbar:
            '<div class="progress progress--height mt-1" ><div class="progress-bar bg-success" role="progressbar" style="width: 25%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div>'
        },
        {
          id: 2,
          img: require("@/assets/images/products/speaker-2.jpg"),
          status: '<span class="badge badge-warning">Pending</span>',
          span: "Portable Speaker with HD Sound",
          createdAt: "2011-10-28",
          progressbar:
            '<div class="progress progress--height mt-1" ><div class="progress-bar bg-primary" role="progressbar" style="width: 50%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div></div>'
        },
        {
          id: 3,
          img: require("@/assets/images/products/headphone-2.jpg"),
          status: '<span class="badge badge-success">Success</span>',
          span: "Lightweight On-Ear",
          createdAt: "2011-10-30",
          progressbar:
            '<div class="progress progress--height mt-1" ><div class="progress-bar bg-danger" role="progressbar" style="width: 75%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div></div>'
        },
        {
          id: 4,
          img: require("@/assets/images/products/watch-1.jpg"),
          status: '<span class="badge badge-danger">Cancel</span>',
          span: "Automatic-self-wind mens ",
          createdAt: "2011-10-11",
          progressbar:
            '<div class="progress progress--height mt-1" ><div class="progress-bar bg-info" role="progressbar" style="width: 100%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div></div>'
        },
        {
          id: 5,
          img: require("@/assets/images/products/watch-1.jpg"),
          status: '<span class="badge badge-primary">Approved</span>',
          span: "Automatic-self-wind ",
          createdAt: "2011-10-21",
          progressbar:
            '<div class="progress progress--height mt-1" ><div class="progress-bar bg-warning" role="progressbar" style="width: 80%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div></div>'
        },
        {
          id: 6,
          img: require("@/assets/images/products/headphone-3.jpg"),
          status: '<span class="badge badge-info">Pending</span>',
          span: "On-Ear Headphones - Black",
          createdAt: "2011-10-28",
          progressbar:
            '<div class="progress progress--height mt-1" ><div class="progress-bar bg-success" role="progressbar" style="width: 25%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div>'
        },
        {
          id: 7,
          img: require("@/assets/images/products/headphone-2.jpg"),
          status: '<span class="badge badge-success">Pending</span>',
          span: "Lightweight On-Ear Headphones - Black",
          createdAt: "2011-10-30",
          progressbar:
            '<div class="progress progress--height mt-1" ><div class="progress-bar bg-danger" role="progressbar" style="width: 75%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div></div>'
        }
      ]
    };
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
    },

    // for vue-good-table testing
    rowStyleClassFn(row) {
      return row.age > 18 ? "green" : "red";
    }
  }
};
</script>
<style>
.gull-border-none {
  border-bottom: none !important;
}
table.tableOne.vgt-table {
  border: none;
}
table.vgt-table td {
  padding: 8px;
}
</style>
