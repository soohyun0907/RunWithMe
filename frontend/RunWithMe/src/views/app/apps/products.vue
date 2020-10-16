<template>
  <div class="main-content">
    <breadcumb :page="'Products'" :folder="'Ecomerce'" />
    <b-row>
      <b-col md="3">
        <button
          @click="listView"
          class="btn btn-sm btn-rounded btn-outline-primary mb-3"
        >
          <i class="i-Split-Four-Square-Window text-15"></i>
        </button>
        <button
          @click="gridView"
          class="btn btn-sm btn-rounded btn-outline-primary mb-3 ml-2"
        >
          <i class="i-Align-Justify-All text-15"></i>
        </button>
      </b-col>
      <b-col md="9" class="offset">
        <b-form-input v-model="search" type="text" placeholder="search...."></b-form-input>
        <!-- <vue-instantsearch> </vue-instantsearch> -->
      </b-col>
      <!-- <b-col md="3">
        <b-form-select
          v-model="featured"
          :options="featuredOptions"
        ></b-form-select>
      </b-col> -->
    </b-row>
    <b-row>
      <b-col md="3" class="mb-30">
        <b-card>
          <b-form-group class>
            <div class="text-center">
              <b-button block variant="primary mb-30" @click="redirectCheckout">
                View Cart <b-badge variant="warning" class="float-right pr-2 pl-2 text-11">{{getAddToCarts.length}}</b-badge>
              </b-button>
            </div>
            <label>
              <h5 class="text-primary font-weight-600">Price</h5>
            </label>
            <b-form-radio name="some-radios" @change="ascendingOrderCartPage()"
              >Low to High</b-form-radio
            >
            <b-form-radio name="some-radios" @change="descendingOrderCartPage()"
              >High to Low</b-form-radio
            >
          </b-form-group>
          <b-form-group>
            <label for="range-1">
              <h5 class="text-primary font-weight-600 mb-1 mt-3">Category</h5>
            </label>
            <!-- <b-form-radio name="some-radios" value="A">Electronics</b-form-radio>
            <b-form-radio name="some-radios" value="B">Mobile</b-form-radio>
            <b-form-radio name="some-radios" value="B">Sports</b-form-radio>
            <b-form-radio name="some-radios" value="B">Books</b-form-radio> -->
            <b-form-radio
              name="radio"
              :value="category"
              v-for="(category, index) in getCategoryItem"
              :key="index"
              @change="addCategoryItemPage(category)"
            >
              {{ category }}
            </b-form-radio>
          </b-form-group>

          <b-form-group>
            <label for="range-1">
              <h5 class="text-primary font-weight-600 mb-1 mt-3">Brand</h5>
            </label>
            <ul class="list-group">
              <li 
                v-for="(brand, index) in getBrandsItem"
                :key="index"
                class="list-group-item p-0 mb-2 border-0"
               
              >
                <div class="test d-flex">
                  <label class="checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      :value="brand"
                      ref="checkFilter"
                      @change="addBrandToFilterPage(brand)"
                    />

                    <span class="checkmark"></span>
                  </label>
                  {{ brand }}({{ brandsCount[brand] }})
                </div>
              </li>
            </ul>
          </b-form-group>
        </b-card>
      </b-col>
      <b-col md="9">
        <!-- <ul v-for="(product, key) in getAddToCarts" :key="key">
            <li><span>{{ product }}</span></li>
          </ul> -->
        <section class="product-cart">
          <div
            ref="rowView"
            class="row"
            :class="{ 'list-grid': isListView, 'list-horizontal': !isListView }"
          >
            <!-- loop LIST Shop -->

            <div
              :class="{ 'col-md-4': isListView, 'col-md-12': !isListView }"
              class="list-item"
              :key="index"
              v-for="(item, index) in paginatedItems"
            >
              <div
                class="card o-hidden mb-4 d-flex"
                :class="{ 'flex-column': isListView, 'flex-row': !isListView }"
              >
                <div class="list-thumb d-flex">
                  <img alt :src="item.img" />
                </div>
                <div
                  class="flex-grow-1"
                  :class="{ 'd-bock': isListView, 'pl-2 d-flex': !isListView }"
                >
                  <div
                    class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"
                    :class="{ 'flex-lg-row': !isListView }"
                  >
                    <a class="w-40 w-sm-100" href>
                      <div class="item-title">{{ item.title }}</div>
                    </a>
                    <p class="text-muted text-small w-15 w-sm-100 mb-2">
                      {{ item.brand }}
                    </p>

                    <!-- star  -->
                    <star-rating 
                        v-model="item.rating"
                        :star-size="15" 
                        :show-rating="false"
                        @rating-selected ="setRating"
                        class="mb-3"
                    ></star-rating>


                    <div class="m-0 text-muted text-small w-15 w-sm-100">
                      <h6>$ {{ item.productPrice }}</h6>
                    </div>
                    <p
                      class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"
                    >
                      <span :class="item.badgeColor" class="badge">{{
                        item.discount
                      }}</span>
                    </p>

                    <div class="d-flex justify-content-between">
                      <b-button
                        size="sm"
                        @click="addCartPage(item)"
                        variant="primary"
                        class="mr-2"
                        >Add Cart</b-button
                      >
                      <b-button
                        size="sm"
                        class="ul-product"
                        @click="viewProduct"
                        variant="outline-primary"
                        >View Cart</b-button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- </transition-group>
            -->
          </div>
        </section>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" class="mt-4">
        <b-pagination
          @change="onPageChanged"
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0 gull-pagination align-items-center"
          align="center"
          first-text
          last-text
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
import { mapGetters, mapActions } from "vuex";
import StarRating from 'vue-star-rating'

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "List Table"
  },
  components: {
    StarRating
  },
  data() {
    return {
      rating: 4,
      search:"",
      isProduct:true,
      filterBrand: "",
      priceValue: 500,
      selectedFilter: "",
      selectPriceRange: "",
      priceRange: 1,
      value: 1,
      items: "",
      paginatedItems: "",
      currentPage: 1,
      perPage: 9,
      // totalRows: '',
      isFirst: false,
      // button
      isListView: true,
      // isGridVIew:false,
      selected: [], // Must be an array reference!
      // options: [
      //   { text: 'Orange', value: 'orange' },
      //   { text: 'Apple', value: 'apple' },
      //   { text: 'Pineapple', value: 'pineapple' },
      //   { text: 'Grape', value: 'grape' }
      // ],
      featured: null,
      featuredOptions: [
        { value: null, text: "Featured" },
        { value: "a", text: "Highest Price" },
        { value: "b", text: "Lowest Price" }
      ]
      // brandsCount: this.$store.getters.brandsCount,
      // brands: this.$store.state.brands
    };
  },
  computed: {
    ...mapGetters([
      "getItems",
      "brandsCount",
      "getBrandsItem",
      "getFilterProducts",
      "getCategoryItem",
      "getAddToCarts"
    ]),
    totalRows() {
      return this.getFilterProducts.length;
    },
    filterItems() {
      return this.getFilterProducts;
    },
    // searchProducts(){
    //   return this.getFilterProducts.filter(item => item.title.toLowerCase().match(this.search.toLowerCase()))
    // }
    filterProducts()
        {
            // return this.getItems.filter((filterSearch) => {
            //     return filterSearch.toLowerCase().match(this.search.toLowerCase());
            // }); 
            
            return this.getFilterProducts.filter(item => item.title.toLowerCase().match(this.search.toLowerCase()))
        }
  },
  created: function() {
    this.items = this.getItems;
  },
  methods: {
    
    ...mapActions([
      "addCart",
      "addBrandToFilter",
      "addCategoryItem",
      "ascendingOrderCart",
      "descendingOrderCart"
    ]),
    setRating: function(rating){
      this.rating= rating;
      console.log(this.rating= rating);
      
    },
    addCartPage(item){
      this.addCart(item)
      this.$bvToast.toast(`${ item.qty } item added to the cart successfully`, {
          title: 'Click View Cart',
          variant: 'primary',
          solid: true,
          autoHideDelay: 700
        })
      // this.$swal({
        
      //   toast: true,
      //   position: "top-end",
      //   showConfirmButton: false,
      //   timer: 1000,
      //   type: "success",
      //   title: `${ item.qty } item added to the cart successfully`
      // });

      
      // this.$router.push("/app/apps/checkout");
    },
    viewProduct(){
      // this.$router.push("product-detail")
      // console.log(this.getFilterProducts.filter(item => item.title.toLowerCase().match(this.search.toLowerCase())));
      // console.log(this.search);
      
      
    },
    addBrandToFilterPage(checkedArray) {
      checkedArray = this.$refs.checkFilter;
      checkedArray = checkedArray
        .filter(element => element.checked)
        .map(element => element.value);
      console.log(checkedArray);
      this.addBrandToFilter(checkedArray);
      this.paginatePerPage();
    },
    paginatePerPage() {
      this.paginate(this.perPage, 0);
    },
    addCategoryItemPage(data) {
      this.addCategoryItem(data);
      this.paginatePerPage();
    },
    ascendingOrderCartPage() {
      this.ascendingOrderCart();
      this.paginatePerPage();
    },
    descendingOrderCartPage() {
      this.descendingOrderCart();
      this.paginatePerPage();
    },
  
    redirectCheckout(){
      this.$router.push("/app/apps/checkout")
    },
    onRadioButtonChange(data) {
      if (data == "asc") {
        console.log("Working", this.ascendingOrderCart());
      }
    },

    viewCart() {
      this.$router.push("./product-detail");
    },
    // button
    listView() {
      this.isListView = true;
    },
    gridView() {
      this.isListView = false;
    },

    // end-button
    paginate(pageSize, pageNumber) {
      let itemsToParse = this.filterProducts;
      this.paginatedItems = itemsToParse.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
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
