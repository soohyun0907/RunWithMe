<template>
  <!-- ============ Body content start ============= -->
  <div class="main-content">
    <breadcumb :page="'Version 1'" :folder="'Dashboard'" />
    <b-row>
      <!-- ICON BG -->

      <b-col lg="3" md="6" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Add-User"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">New Leads</p>
            <p class="text-primary text-24 line-height-1 mb-2">205</p>
          </div>
        </b-card>
      </b-col>
      <b-col lg="3" md="6" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Financial"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Sales</p>
            <p class="text-primary text-24 line-height-1 mb-2">$4021</p>
          </div>
        </b-card>
      </b-col>
      <b-col lg="3" md="6" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Checkout-Basket"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Orders</p>
            <p class="text-primary text-24 line-height-1 mb-2">80</p>
          </div>
        </b-card>
      </b-col>
      <b-col lg="3" md="6" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Money-2"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Expense</p>
            <p class="text-primary text-24 line-height-1 mb-2">$1200</p>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="8" md="12" sm="12">
        <b-card class=" mb-30">
          <h4 class="card-title m-0">This Year Sales</h4>
          <div class="chart-wrapper" style="height: 300px ; width:100% ">
            <v-chart
              id="echartbar"
              :options="echartBar"
              :autoresize="true"
            ></v-chart>
          </div>
        </b-card>
      </b-col>
      <b-col col lg="4" md="12" sm="12">
        <b-card class=" mb-30">
          <h4 class="card-title m-0">Sales by Countries</h4>
          <div class="chart-wrapper" style="height: 300px ; width:100%">
            <v-chart :options="echartPie" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <div class="row">
      <div class="col-lg-6 col-xl-6 col-md-12">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="card card-chart-bottom o-hidden mb-30">
              <div class="card-body pb-0 ">
                <div class="text-muted">Last Month Sales</div>
                <p class="  text-primary text-24 m-0">$40250</p>
              </div>
              <div class="chart-wrapper" style="height: 260px">
                <v-chart :options="echart1" :autoresize="true"></v-chart>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="card card-chart-bottom o-hidden mb-30">
              <div class="card-body pb-0">
                <div class="text-muted">Last Week Sales</div>
                <p class=" text-warning text-24 m-0">$10250</p>
              </div>
              <div class="chart-wrapper" style="height: 260px">
                <v-chart :options="echart2" :autoresize="true"></v-chart>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <b-card class="card-profile-1 mb-30 text-center">
              <div class="avatar box-shadow-2 mb-3">
                <img src="@/assets/images/faces/16.jpg" alt />
              </div>
              <h5 class="m-0">Jassica Hike</h5>
              <p class="mt-0 text-muted">Top Seller</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae cumque. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum.
              </p>
              <button class="btn btn-primary btn-rounded">
                Contact Jassica
              </button>
              <div class="card-socials-simple mt-4">
                <a href>
                  <i class="i-Linkedin-2"></i>
                </a>
                <a href>
                  <i class="i-Facebook-2"></i>
                </a>
                <a href>
                  <i class="i-Twitter"></i>
                </a>
              </div>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card class="card-profile-1 mb-30 text-center">
              <div class="avatar box-shadow-2 mb-3">
                <img src="@/assets/images/faces/13.jpg" alt />
              </div>
              <h5 class="m-0">jhon doe</h5>
              <p class="mt-0 text-muted">Top Buyer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae cumque. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum .
              </p>
              <button class="btn btn-primary btn-rounded">
                Contact Jassica
              </button>
              <div class="card-socials-simple mt-4">
                <a href>
                  <i class="i-Linkedin-2"></i>
                </a>
                <a href>
                  <i class="i-Facebook-2"></i>
                </a>
                <a href>
                  <i class="i-Twitter"></i>
                </a>
              </div>
            </b-card>
          </div>
        </div>
      </div>
      <!-- start::top selling product -->
      <!-- <b-col col lg="6" md="12">
                    
                </b-col> -->
      <!-- end::top-selling product -->

      <b-col lg="6" xl="6" md="12">
        <div class="card mb-30">
          <div class="card-body">
            <div class="card-title">Top Selling Products</div>
            <div class="d-flex flex-column flex-sm-row align-items-center mb-3">
              <img
                class="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3"
                src="@/assets/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class=""><a href="">Wireless Headphone E23</a></h5>
                <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p class="text-small text-danger m-0">
                  $450 <del class="text-muted">$500</del>
                </p>
              </div>
              <div>
                <button
                  class="btn btn-outline-primary btn-rounded btn-sm m-3 m-sm-0"
                >
                  View details
                </button>
              </div>
            </div>
            <div class="d-flex flex-column flex-sm-row align-items-center mb-3">
              <img
                class="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3"
                src="@/assets/images/products/headphone-2.jpg"
                alt=""
              />
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class=""><a href="">Wireless Headphone Y902</a></h5>
                <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p class="text-small text-danger m-0">
                  $550 <del class="text-muted">$600</del>
                </p>
              </div>
              <div>
                <button
                  class="btn btn-outline-primary btn-sm btn-rounded m-3 m-sm-0"
                >
                  View details
                </button>
              </div>
            </div>
            <div class="d-flex flex-column flex-sm-row align-items-center mb-3">
              <img
                class="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3"
                src="@/assets/images/products/headphone-3.jpg"
                alt=""
              />
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class=""><a href="">Wireless Headphone E09</a></h5>
                <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p class="text-small text-danger m-0">
                  $250 <del class="text-muted">$300</del>
                </p>
              </div>
              <div>
                <button
                  class="btn btn-outline-primary btn-sm btn-rounded m-3 m-sm-0"
                >
                  View details
                </button>
              </div>
            </div>
            <div class="d-flex flex-column flex-sm-row align-items-center mb-3">
              <img
                class="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3"
                src="@/assets/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class=""><a href="">Wireless Headphone X89</a></h5>
                <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p class="text-small text-danger m-0">
                  $450 <del class="text-muted">$500</del>
                </p>
              </div>
              <div>
                <button
                  class="btn btn-outline-primary btn-sm btn-rounded m-3 m-sm-0"
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-30">
          <div class="card-body p-0">
            <div class="card-title  d-flex align-items-center mb-2 pb-0 p-3">
              <span>User activity</span>
              <span class="flex-grow-1"></span>
              <span class="badge badge-pill badge-warning">Updated daily</span>
            </div>
            <div class="d-flex border-bottom justify-content-between  p-3 ">
              <div class="flex-grow-1">
                <span class="text-small text-muted">Pages / Visit</span>
                <h5 class="m-0">2065</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">New user</span>
                <h5 class="m-0">465</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">Last week</span>
                <h5 class="m-0">23456</h5>
              </div>
            </div>
            <div class="d-flex border-bottom justify-content-between p-3">
              <div class="flex-grow-1">
                <span class="text-small text-muted">Pages / Visit</span>
                <h5 class="m-0">1829</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">New user</span>
                <h5 class="m-0">735</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">Last week</span>
                <h5 class="m-0">92565</h5>
              </div>
            </div>
            <div class="d-flex justify-content-between p-3 mb-1">
              <div class="flex-grow-1">
                <span class="text-small text-muted">Pages / Visit</span>
                <h5 class="m-0">3165</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">New user</span>
                <h5 class="m-0">165</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">Last week</span>
                <h5 class="m-0">32165</h5>
              </div>
            </div>
          </div>
        </div>
      </b-col>

      <div class="col-md-12">
        <div class="card mb-30">
          <div class="card-body p-0 ">
            <h5 class="card-title border-bottom p-3 mb-2">Recent Orders</h5>

            <vue-good-table
              :columns="columns"
              :line-numbers="false"
              styleClass="order-table vgt-table"
              :rows="rows"
            >
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ============ Body content End ============= -->
</template>
<script>
import { echartBar, echartPie } from "@/data/echarts";

import { echart1, echart2, echart3 } from "@/data/dashboard1";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard v1"
  },
  data() {
    return {
      echartBar,
      echartPie,
      echart1,
      echart2,
      echart3,
      columns: [
        {
          label: "Order Id",
          field: "id",
          thClass: "text-left pl-3",
          tdClass: "text-left pl-3"
        },
        {
          label: "Buyer Name",
          field: "name",
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          label: "Product",
          field: "img",
          html: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          label: "Status",
          field: "span",
          html: true,
          thClass: "text-left",
          tdClass: "text-left"
        },

        {
          label: "Shipping Cost",
          field: "score",

          // html:true,
          type: "percentage",
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          label: "Date",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-mm-dd",
          dateOutputFormat: "mmm Do yy",
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          label: "Action",
          field: "action",
          html: true,
          thClass: "text-left",
          tdClass: "text-left"
        }
      ],
      rows: [
        {
          id: 1,
          name: "John",
          img:
            '<img src="' +
            require("@/assets/images/products/iphone-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/iphone-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-primary p-2 ">Delivered</span>',
          createdAt: "2019-10-31 ",
          score: 0.03343,
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
        },
        {
          id: 2,
          name: "Jane",
          img:
            '<img src="' +
            require("@/assets/images/products/headphone-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/headphone-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
        },
        {
          id: 3,
          name: "Susan",
          img:
            '<img src="' +
            require("@/assets/images/products/headphone-3.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/headphone-4.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-success p-2 ">Delivered</span>',
          createdAt: "2011-10-30",
          score: 0.03343,
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
        },
        {
          id: 4,
          name: "Chris",
          img:
            '<img src="' +
            require("@/assets/images/products/speaker-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/speaker-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-primary p-2">Pending</span>',
          createdAt: "2011-10-11",
          score: 0.03343,
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
        },
        {
          id: 5,
          name: "Dan",
          img:
            '<img src="' +
            require("@/assets/images/products/watch-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/watch-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-info p-2">Processing</span>',
          createdAt: "2011-10-21",
          score: 0.03343,
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
        },
        {
          id: 6,
          name: "John",
          img:
            '<img src="' +
            require("@/assets/images/products/speaker-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/speaker-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-success p-2 ">Delivered</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
        },
        {
          id: 7,
          name: "John",
          img:
            '<img src="' +
            require("@/assets/images/products/headphone-3.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/headphone-4.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-info p-2 ">Pending</span>',
          createdAt: "2019-10-31 ",
          score: 0.03343,
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
        },
        {
          id: 8,
          name: "Jane",
          img:
            '<img src="' +
            require("@/assets/images/products/iphone-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/iphone-1.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
        }
      ]
    };
  }
};
</script>
<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
