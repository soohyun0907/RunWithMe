<template>
    <div class="main-content">
        <breadcumb :page="'Checkout Address'" :folder="'Cart'" />
        <b-row>
            <b-col md="8 mb-30">
                <b-card title="Your Address">
                    
                    <b-form>
                        <b-row>

                        <b-form-group
                                class="col-md-6 mb-3" 
                                id="input-group-1"
                                label="Full Name"
                                label-for="input-1"
                                    
                            >
                                <b-form-input
                                
                                id="input-1"
                                v-model="checkoutForm.name"
                                type="text"
                                required
                                placeholder="Fullname"
                                ></b-form-input>
                        </b-form-group>
                        <b-form-group
                                class="col-md-6 mb-3" 
                                id="input-group-1"
                                label="Mobile Number"
                                label-for="input-1"
                                    
                            >
                                <b-form-input
                                
                                id="input-1"
                                v-model="checkoutForm.mobileNo"
                                type="text"
                                required
                                placeholder="Mobile Number....."
                                ></b-form-input>
                        </b-form-group>
                        <b-form-group
                                class="col-md-6 mb-3" 
                                id="input-group-1"
                                label="House No:"
                                label-for="input-1"  
                            >
                                <b-form-input
                                
                                id="input-1"
                                v-model="checkoutForm.houseNo"
                                type="text"
                                required
                                placeholder="House no....."
                                ></b-form-input>
                            </b-form-group>
                        <b-form-group
                                class="col-md-6 mb-3" 
                                id="input-group-1"
                                label="Town/City:"
                                label-for="input-1"
                               
                                
                            >
                                <b-form-input
                                
                                id="input-1"
                                v-model="checkoutForm.city"
                                type="text"
                                required
                                placeholder="your city...."
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Pin Code"
                                label-for="input-1"
                                class="col-md-6" 
                            >
                                <b-form-input
                                id="input-1"
                                v-model="checkoutForm.pinCode"
                                type="text"
                                required
                                placeholder="pincode....."
                                ></b-form-input>
                            </b-form-group>

                            <b-col md="12">
                                <b-button @click.prevent="saveCheckout" class="mt-3" type="submit" variant="primary">Send & Deliver</b-button>
                            </b-col>
                            
                        </b-row>
                    </b-form>
                </b-card>
            </b-col>
            
        </b-row>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
     metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Basic Forms"
  },
  computed: {
    ...mapGetters(["getCheckoutForm"])
  },
    data(){
        return{
            checkoutForm: [
                {
                    name: ' ',
                    mobileNo: '',
                    houseNo: '',
                    city: '',
                    pinCode: ''
                }
            ],
                
       
        };
    },
    methods: {
        ...mapActions(["addCheckoutAddress"]),
        saveCheckout(){
            this.addCheckoutAddress(this.checkoutForm)
            this.$router.push("/app/apps/payment-checkout");
        }
    }
}
</script>