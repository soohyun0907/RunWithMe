<template>
  <div class="main-content">
    <breadcumb :page="'List'" :folder="'Datatables'" />
    <b-row>
      <b-col md="6" class="mb-30">
        <button
          @click="listView"
          class="btn btn-sm btn-rounded btn-outline-primary "
        >
          <i class="i-Split-Four-Square-Window text-15"></i>
        </button>
        <button
          @click="gridView"
          class="btn btn-sm btn-rounded btn-outline-primary ml-2"
        >
          <i class="i-Align-Justify-All text-15"></i>
        </button>
      </b-col>
    </b-row>
    <section class="product-cart">
      <div
        ref="rowView"
        class="row "
        :class="{ 'list-grid': isListView, 'list-horizontal': !isListView }"
      >
        <div
          :class="{
            'col-md-6  col-lg-4 col-xl-3': isListView,
            'col-md-12': !isListView
          }"
          class="list-item "
          :key="index"
          v-for="(item, index) in paginatedItems"
          transition="list"
        >
          <div
            class="card o-hidden mb-30 d-flex "
            :class="{ 'flex-column': isListView, 'flex-row': !isListView }"
          >
            <div class="list-thumb d-flex">
              <img alt="" :src="item.img" />
            </div>
            <div
              class="flex-grow-1 "
              :class="{ 'd-bock': isListView, 'pl-2 d-flex': !isListView }"
            >
              <div
                class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"
                :class="{ 'flex-lg-row': !isListView }"
              >
                <a class="w-40 w-sm-100" href="">
                  <div class="item-title">
                    {{ item.title }}
                  </div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  Gadget
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $32.00 <del class="text-secondary">$54.00</del>
                </p>
                <p
                  class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"
                >
                  <span :class="item.badgeColor" class="badge">{{
                    item.discount
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-row>
      <b-col md="12" class="mt-4">
        <b-pagination
          @change="onPageChanged"
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0 gull-pagination  align-items-center"
          align="center"
          first-text=""
          last-text=""
        >
          <p class="list-arrow m-0" slot="prev-text">
            <i class="i-Arrow-Left text-40"></i>
          </p>
          <p class="list-arrow m-0" slot="next-text">
            <i class="i-Arrow-Right text-40"></i>
          </p>
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
const items = [
  {
    img: require("@/assets/images/products/iphone-1.jpg"),
    title: " Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
    discount: "20% off",
    badgeColor: "badge-info"
  },
  {
    img: require("@/assets/images/products/headphone-1.jpg"),
    title: "Portable Speaker with HD Sound",
    discount: "sale",
    badgeColor: "badge-primary"
  },
  {
    img: require("@/assets/images/products/speaker-1.jpg"),
    title: "Lightweight On-Ear Headphones - Black",
    discount: "40% ",
    badgeColor: "badge-danger"
  },
  {
    img: require("@/assets/images/products/speaker-2.jpg"),
    title: "Automatic-self-wind mens Watch 5102PR-001 (Cert",
    discount: "10% off",
    badgeColor: "badge-warning"
  },
  {
    img: require("@/assets/images/products/headphone-2.jpg"),
    title: " Automatic-self-wind mens Watch 5102PR-001",
    discount: "4% off",
    badgeColor: "badge-info"
  },
  {
    img: require("@/assets/images/products/watch-2.jpg"),
    title: "On-Ear Headphones - Black",
    discount: "20% off",
    badgeColor: "badge-primary"
  },
  {
    img: require("@/assets/images/products/iphone-1.jpg"),
    title: " In-Ear Headphone",
    discount: "20% off",
    badgeColor: "badge-info"
  },
  {
    img: require("@/assets/images/products/headphone-1.jpg"),
    title: "Duis exercitation nostrud anim",
    discount: "20% off",
    badgeColor: "badge-info"
  },
  {
    img: require("@/assets/images/products/speaker-1.jpg"),
    title: " Lightweight On-Ear Headphones - Black",
    discount: "20% off",
    badgeColor: "badge-info"
  },
  {
    img: require("@/assets/images/products/speaker-2.jpg"),
    title: " Automatic-self-wind mens Watch 5102PR-001 (Certified P",
    discount: "20% off",
    badgeColor: "badge-info"
  },
  {
    img: require("@/assets/images/products/headphone-2.jpg"),
    title: "Automatic-self-wind mens Watch 5102PR-001",
    discount: "20% off",
    badgeColor: "badge-info"
  },
  {
    img: require("@/assets/images/products/watch-2.jpg"),
    title: " On-Ear Headphones - Black",
    discount: "20% off",
    badgeColor: "badge-success"
  }
];

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "List Table"
  },
  data() {
    return {
      items: items,
      paginatedItems: items,
      currentPage: 1,
      perPage: 8,
      totalRows: items.length,
      isFirst: false,
      // button
      isListView: true
      // isGridVIew:false,
    };
  },
  computed: {},
  methods: {
    // button
    listView() {
      this.isListView = true;
      // let rowView = this.$refs.rowView
      // console.log(rowView);

      // console.log(this.$refs)

      // rowView.classList.remove("list-grid");
      // rowView.classList.add("list-horizontal");
    },
    gridView() {
      this.isListView = false;
      // let rowView = this.$refs.rowView
      // console.log(rowView)

      // rowView.classList.remove("list-horizontal");
      // rowView.classList.add("list-grid");
    },

    // end-button
    paginate(page_size, page_number) {
      let itemsToParse = this.items;
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    }
  },
  mounted() {
    this.paginate(this.perPage, 0);
  }
};
</script>
<style>
ul.gull-pagination li {
  margin: 0 12px;
}

ul.gull-pagination li .page-link {
  border-radius: 50% !important;
  border-color: #fff !important;
}
.page-link:hover {
  background-color: #fff;
}
.page-link:focus {
  box-shadow: 0 0 0 0.2rem rgb(255, 255, 255);
}
.page-item.disabled .page-link {
  color: #d5d0d9;
}

.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
.fade-transition {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-active {
  transform: translate(100%);
  opacity: 0;
}
</style>
