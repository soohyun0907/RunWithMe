<template>
  <div>
    <breadcumb :page="'Payment'" :folder="'Cart'" />
    <b-row>
      <b-col md="8" class="mb-30">
        <b-card class="">
           <b-row class="justify-content-around">
              <b-col cols="5" class="p-0">
                <p>Name:</p>
                <h5> {{ getCheckoutForm.name }} </h5>
              </b-col>
              <b-col cols="5" class="p-0 mb-4">
                <p>Mobile Number:</p>
                <h5> {{ getCheckoutForm.mobileNo }} </h5>
              </b-col>
              <b-col cols="11" class="p-0 mb-4">
                <p>Address:</p>
                <h5> {{ getCheckoutForm.houseNo }} </h5>
              </b-col>
              <b-col cols="5" class="p-0 mb-4">
                <p>Town/City:</p>
                <h5> {{ getCheckoutForm.city }} </h5>
              </b-col>
              <b-col cols="5" class="p-0 mb-4">
                <p>Pin Code:</p>
                <h5> {{ getCheckoutForm.pinCode }} </h5>
              </b-col>
             
           </b-row>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card title="Price Details">
          <div class="ul-cart__order">
            <div class="d-flex justify-content-between mb-2">
              <p class="font-weight-500 text-16 text-muted m-0">Total Items:</p>
              <p class="text-16 m-0">{{ getAddToCarts.length }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="font-weight-500 text-16 text-muted">Discount:</p>
              <p class="text-16">no discount</p>
            </div>

            <hr class="mt-2 mb-2" />

            <div class="d-flex justify-content-between">
              <p class=" text-16 text-muted">Total Payable:</p>
              <p class="text-16">${{ getTotalCart }}</p>
            </div>
          </div>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card title="Payment Selection">
          <b-form-group label="Type CVV:">
            <b-form-input type="text" size="sm" class="mb-2 col-md-4" placeholder="type your CVV"></b-form-input>
          </b-form-group>

          <b-form-group class>
            <b-form-radio-group :options="options" name="radios-stacked" stacked></b-form-radio-group>
          </b-form-group>

          <b-button variant="success">Submit</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCheckoutForm", "getTotalCart", "getAddToCarts"])
  },
  data() {
    return {
      options: [
        { text: "Cash On Delivery", value: "first" },
        { text: "Credit Card", value: "second" },
        { text: "Debit Card", value: "third" }
      ]
    };
  }
};
</script>