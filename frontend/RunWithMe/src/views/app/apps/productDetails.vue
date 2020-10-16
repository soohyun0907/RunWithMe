<template>
    <div class="main-content">
        <breadcumb :page="'Products Details'" :folder="'Ecommerce'" />

        <b-row>
            <b-col md="12">
                <b-card>
                    <b-row>
                        <b-col lg="6">
                            <div class="ul-product-detail__image">
                                <img src="@/assets/images/mac_book.jpg" alt="">
                            </div>
                        </b-col>
                        <b-col lg="6">
                            <div class="ul-product-detail__brand-name mb-4">
                                <h5 class="heading">MAC Book Pro</h5>
                                <span class="text-mute">Modern model 2019</span>
                            </div>
                            <div class="ul-product-detail__price-and-rating d-flex align-items-baseline">
                                <h3 class="font-weight-700 text-primary mb-0 mr-2">$2,300</h3>
                                <span class="text-mute font-weight-800 mr-2"><del>$1,150</del></span>
                                <small class="text-success font-weight-700">50% off</small>
                            </div>
                            <div class="ul-product-detail__features mt-3">
                                <h6 class=" font-weight-700">Features:</h6>
                                <ul class="m-0 p-0">
                                    <li>
                                        <i class="i-Right1 text-primary text-15 align-middle font-weight-700"> </i>
                                        <span class="align-middle">This Refurbished product is tested to work and look
                                            like new with minimal to no signs of wear &amp; tear</span>
                                    </li>
                                    <li>
                                        <i class="i-Right1 text-primary text-15 align-middle font-weight-700"> </i>
                                        <span class="align-middle">2.6GHz Intel Core i5 4th Gen processor</span>
                                    </li>
                                    <li>
                                        <i class="i-Right1 text-primary text-15 align-middle font-weight-700"> </i>
                                        <span class="align-middle">8GB DDR3 RAM</span>
                                    </li>
                                    <li>
                                        <i class="i-Right1 text-primary text-15 align-middle font-weight-700"> </i>
                                        <span class="align-middle">13.3-inch screen, Intel Iris 5100 1.5GB
                                            Graphics</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="ul-product-detail__quantity d-flex align-items-center mt-3">
                                <b-form-input
                                    id="input-1"
                                    value="1"
                                    type="number"
                                    class="col-md-2"
                                    
                                ></b-form-input>
                                <b-button  @click="cart" variant="primary m-2" size="sm">
                                    <i class="i-Full-Cart text-15"> </i>
                                    Add To Cart</b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        cart(){
            this.$router.push('./cart')
        }
    }

}
</script>