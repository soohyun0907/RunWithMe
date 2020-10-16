<template>
  <div class="main-content">
    <breadcumb :page="'Paging'" :folder="'Datatables'" />
    <b-card class="wrapper">
      <vue-good-table
        :columns="columns"
        :pagination-options="{
          enabled: true,
          mode: 'records'
        }"
        styleClass="tableOne vgt-table"
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
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Paging Table"
  },
  data() {
    return {
      columns: [
        {
          label: "Thumbnail ",
          field: "img",
          width: "150px",
          thClass: "gull-th-class"
        },
        {
          label: "Title",
          field: "span",
          html: true
        },
        {
          label: "Created On",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-mm-dd",
          dateOutputFormat: "MMM Do yy"
        },
        {
          label: "Percent",
          field: "score",
          type: "percentage"
        }
      ],
      rows: [
        {
          id: 1,
          img: require("@/assets/images/products/speaker-1.jpg"),
          span:
            "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          createdAt: "2018-10-29",
          score: 0.03343
        },
        {
          id: 2,
          img: require("@/assets/images/products/speaker-2.jpg"),
          span: "Portable Speaker with HD Sound",
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 3,
          img: require("@/assets/images/products/headphone-2.jpg"),
          span: "Lightweight On-Ear Headphones - Black",
          createdAt: "2011-10-30",
          score: 0.03343
        },
        {
          id: 4,
          img: require("@/assets/images/products/watch-1.jpg"),
          span:
            "Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)",
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          img: require("@/assets/images/products/watch-1.jpg"),
          span: "Automatic-self-wind mens Watch 5102PR-001",
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 6,
          img: require("@/assets/images/products/headphone-3.jpg"),
          span: "On-Ear Headphones - Black",
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 1,
          img: require("@/assets/images/products/headphone-4.jpg"),
          span: "In-Ear Headphone",
          createdAt: "2018-10-29",
          score: 0.03343
        },
        {
          id: 2,
          img: require("@/assets/images/products/iphone-2.jpg"),
          span: "Duis exercitation nostrud anim",
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 3,
          img: require("@/assets/images/products//headphone-2.jpg"),
          span: "Doasdlor eu nostrud excepteur",
          createdAt: "2011-10-30",
          score: 0.03343
        },
        {
          id: 4,
          img: require("@/assets/images/products/headphone-1.jpg"),
          span:
            "Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset",
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          img: require("@/assets/images/products/watch-1.jpg"),
          span:
            "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 6,
          img: require("@/assets/images/products/headphone-2.jpg"),
          span: "Portable Speaker with HD Sound",
          createdAt: "2011-10-31",
          score: 0.03343
        }
      ]
    };
  },
  methods: {
    addFile() {
      // console.log('hello')
    }
  }
};
</script>
<style >
</style>
