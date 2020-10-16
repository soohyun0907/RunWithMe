<template>
  <div class="main-content">
    <b-card>
      <div class="d-sm-flex mb-5">
        <span class="m-auto"></span>
        <b-button @click="backInvoice" variant="outline-danger mr-3 mb-3"
          >Back To Invoices</b-button
        >
        <b-button variant="outline-danger mr-3 mb-3" @click="editInvoice"
          >Edit Invoice</b-button
        >
        <b-button @click="print" variant="primary mr-3 mb-3"
          >print Invoice</b-button
        >
      </div>

      <div ref="printArea" id="print-area" class="print-area">
        <b-row>
          <b-col md="6">
            <h4 class="font-weight-bold">Order Info</h4>
            <p>{{ getNewInvoice.invoiceId }}</p>
          </b-col>
          <b-col md="6" class="text-sm-right">
            <p>
              <strong>Order status: </strong>
              <span>{{ getNewInvoice.status }}</span>
            </p>
            <p>
              <strong>
                Order date:
              </strong>
              {{ getNewInvoice.date }}
            </p>
          </b-col>
        </b-row>

        <div class="mt-3 mb-30 border-top"></div>

        <b-row class="mb-5">
          <b-col md="6" class="mb-3 mb-sm-0">
            <h5 class="font-weight-bold">Bill From</h5>
            <p>{{ getNewInvoice.billFrom }}</p>
            <span style="white-space: pre-line"
              >{{ getNewInvoice.billFromAddress }}
            </span>
          </b-col>
          <b-col md="6" class="text-sm-right">
            <h5 class="font-weight-bold">Bill To</h5>
            <p>{{ getNewInvoice.billTo }}</p>
            <span style="white-space: pre-line">
              {{ getNewInvoice.billToAddress }}
            </span>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12" class="table-responsive">
            <b-table hover :items="items" :fields="fields">
              <template slot="index" slot-scope="data">
                <p class="font-weight-bold">{{ data.index + 1 }}</p>
              </template>
              <template slot="itemName" slot-scope="data">
                {{ data.item.first_name }}
              </template>
              <template slot="unitPrice" slot-scope="data">
                {{ data.item.first_name }}
              </template>
              <template slot="unit" slot-scope="data">
                {{ data.item.first_name }}
              </template>
              <template slot="cost">
                0
              </template>
            </b-table>
          </b-col>
          <b-col md="12">
            <div class="invoice-summary float-right">
              <p>
                Sub total:
                <span>44</span>
              </p>

              <p>
                Vat:
                <span> 5.28 </span>
              </p>
              <h5 class="font-weight-bold">
                Grand Total:
                <span> 49.28 </span>
              </h5>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Print Invoice"
  },
  data() {
    return {
      fields: ["index", "itemName", "unitPrice", "unit", "cost", "action"],
      items: [
        {
          itemName: "",
          unitPrice: "",
          unit: "",
          cost: 0
        }
      ],

      fields: ["index", "itemName", "unitPrice", "unit", "cost"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" }
      ]
    };
  },
  computed: mapGetters(["getNewInvoice"]),

  methods: {
    ...mapActions(["addInvoice", "editInvoice"]),
    getInvoice() {},
    addInvoice() {
      this.addInvoice();
    },

    backInvoice() {
      this.$router.push("/app/apps/invoice");
    },
    print() {
      window.print();
    }
  }
};
</script>
