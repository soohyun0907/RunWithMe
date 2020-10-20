<template>
  <div>
    <div class="main-content">
      <breadcumb :page="'Invoice'" :folder="'Apps'" />

      <div class="wrapper">
        <vue-good-table
          :columns="columns"
          :line-numbers="true"
          :search-options="{
            enabled: true,
            placeholder: 'Search this table',
            selectionInfoClass: ' flex-column flex-sm-row'
          }"
          :pagination-options="{
            enabled: true,
            mode: 'records'
          }"
          styleClass="tableOne vgt-table"
          :selectOptions="{
            enabled: false,
            selectionInfoClass: 'table-alert__box'
          }"
          :rows="invoiceList"
        >
          <div slot="table-actions" class="mb-3">
            <b-button
              @click="createInvoice"
              variant="primary"
              class="btn-rounded d-sm-block d-none"
            >
              Create New Invoice
            </b-button>
          </div>

          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'button'">
              <!-- editInvoiceData(props.row) -->

              <a
                @click="editInvoiceData(props.row)"
                v-b-tooltip.hover
                class="o-hidden d-inline-block"
                title="Edit"
              >
                <i class="i-Eraser-2 text-25 text-info mr-2"></i>
                {{ props.row.button }}</a
              >
              <a
                @click="viewInvoicePage(props.row)"
                v-b-tooltip.hover
                class="o-hidden d-inline-block"
                title="View"
              >
                <i class="i-Edit text-25 text-success mr-2"></i>
                {{ props.row.button }}</a
              >
              <a
                @click="removeInvoice(props.row.invoiceId)"
                v-b-tooltip.hover
                class="o-hidden d-inline-block"
                title="Delete"
              >
                <i class="i-Close-Window text-25 text-danger"></i>
                {{ props.row.button }}</a
              >
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// const STORAGE_KEY = 'invoice';
export default {
  data() {
    return {
      input: [
        {
          name: ""
        }
      ],

      columns: [
        {
          label: "Bill From",
          field: "billFrom"
        },
        {
          label: "Bill To",
          field: "billTo"
        },
        {
          label: "Status",
          field: "status",
          html: true
        },

        {
          label: "Button",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right"
        }
      ],
      newTodo: "",
      input: [
        {
          name: ""
        }
      ]
    };
  },
  computed: mapGetters(["invoiceList"]),
  methods: {
    ...mapActions(["editInvoice", "removeInvoice", "viewInvoice"]),

    editInvoiceData(data) {
      this.editInvoice(data);
      this.$router.push("/app/apps/edit-invoice");
    },
    viewInvoicePage(data) {
      this.viewInvoice(data);
      this.$router.push("/app/apps/printInvoice");
    },
    createInvoice() {
      this.$router.push("/app/apps/createInvoice");
    }
  }
};
</script>
<style >