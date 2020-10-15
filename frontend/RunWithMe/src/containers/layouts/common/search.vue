<template>
    <!-- ============ Search UI Start ============= -->
  <div class="search-ui" :class="{'open':isSearchOpen}">
        <div class="search-header">
            <img src="@/assets/images/logo.png" alt="" class="logo">
            <button @click="closeSearch" class="search-close btn btn-icon bg-transparent float-right mt-2">
                <i class="i-Close-Window text-22 text-muted"></i>
            </button>
        </div>

        <input type="text" v-model="search" placeholder="Type here" class="search-input" autofocus>

        <div class="search-title">
            <span class="text-muted">Search results</span>
        </div>
        
        <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        
        class="search-height rtl-ps-none ps"
        >
        <div class="search-results list-horizontal">
            <router-link 
                tag="div" 
                to="/app/apps/product-detail"  
                v-for="(product, key) in filterProducts" :key="key" 
                class="list-item col-md-12 p-0">


                <div class="card o-hidden flex-row mb-30 d-flex">
                    <div class="list-thumb d-flex">
                        <!-- TUMBNAIL -->
                        <img :src="product.img" alt="">
                    </div>
                    <div class="flex-grow-1 pl-2 d-flex">
                        <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            <!-- OTHER DATA -->
                            <a href="" class="w-40 w-sm-100">
                                <div class="item-title">{{ product.title }}</div>
                            </a>
                            <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                            <p class="m-0 text-muted text-small w-15 w-sm-100">
                                $ {{ product.productPrice }}
                            </p>
                            <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                                <span class="badge" :class="product.badgeColor">{{ product.discount }}</span>
                            </p>
                        </div>

                    </div>
                </div>
            </router-link>
            
            
            
        </div>

        </vue-perfect-scrollbar>
        <!-- PAGINATION CONTROL -->
        <!-- <div class="col-md-12 mt-5 text-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination d-inline-flex">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div> -->
    </div>
    <!-- ============ Search UI End ============= -->
</template>

<script>
    import { products } from '@/data/products.js'
    export default {
        props:[
            'isSearchOpen'
        ],
        data() {
            return {
                issearchClose:false,
                products: products,
                search:''
            }
        },
        methods: {
            closeSearch(){
                // this.issearchClose= !this.issearchClose;
                this.$emit('closeSearch',{
                    isSearchOpen:false,
                });
            }
        },
        computed: {
            filterProducts(){
                return this.products.filter(product => product.title.toLowerCase().match(this.search.toLowerCase()))
            }
        }
        
    }
</script>

