<template>
    <div class="sidebar-panel bg-white">
            <div class="sidebar-compact-switch"><span></span></div>


            
            <div class="gull-brand text-center mt-4 mb-2">
                <img src="@/assets/images/logo.png" alt="">
            <br>
                <span class=" item-name text-20 text-primary font-weight-700">GULL</span>
            </div>
            <!-- user -->
            <div class="scroll-nav ps" data-perfect-scrollbar="" data-suppress-scroll-x="true">
               
                <!-- user close -->
                <!-- side-nav start -->
                <div class="side-nav">
                    
                    <div class="main-menu">
                        
                        <!-- <ul>
                            <li>
                                <a href="*" class="active-color">
                                    <span class="item-name ">Dashboard</span>
                                    <span class="spacer"></span>
                                    <span class="item-badge badge badge-warning">100+</span>
                                </a>
                            </li>
                            
                        </ul> -->
                        <ul class="metismenu" id="menu">
                            <!-- <p class="main-menu-title text-muted ml-3 font-weight-700 text-13 mt-4 mb-2">Apps</p> -->
                            <li class="Ul_li--hover"> 
                                <a class="has-arrow" href="#">
                                    <i class="i-Home-4 text-20 mr-2 text-muted"></i>
                                    <span class="item-name text-15 text-muted">Dashboard</span>
                                </a>
                                <ul class="mm-collapse">
                                    <li class="item-name">
                                        <a class="" href="#">
                                            <i class="i-Circular-Point text-15 mr-2 text-muted"></i>
                                            <span class="text-15 text-muted">Dashboard v1</span>
                                        </a>
                                    </li>
                                    <li class="item-name">
                                        <a class="" href="#">
                                            <i class="i-Circular-Point text-15 mr-2 text-muted"></i>
                                            <span class="text-15 text-muted">Dashboard v2</span>
                                        </a>
                                    </li>
                                    <li class="item-name">
                                        <a class="" href="#">
                                            <i class="i-Circular-Point text-15 mr-2 text-muted"></i>
                                            <span class="text-15 text-muted">Dashboard v3</span>
                                        </a>
                                    </li>
                                    <li class="item-name">
                                        <a class="" href="#">
                                            <i class="i-Circular-Point text-15 mr-2 text-muted"></i>
                                            <span class="text-15 text-muted">Dashboard v4</span>
                                        </a>
                                    </li>
                                    
                                    
                                </ul>
                            </li>
                            <li class="Ul_li--hover"> 
                                <a class="" href="#">
                                    <i class="i-Library text-20 mr-2 text-muted"></i>
                                    
                                    <span class="item-name text-15 text-muted">UI Kits</span>
                                </a> 
                            </li>
                            <li class="Ul_li--hover"> 
                                <a class="" href="#">
                                    <i class="i-Suitcase text-20 mr-2 text-muted"></i>
                                    <span class="item-name text-15 text-muted">Extra Kits</span>
                                </a> 
                            </li>
                            <li class="Ul_li--hover"> 
                                <a class="" href="#">
                                    <i class="i-Computer-Secure text-20 mr-2 text-muted"></i>
                                    <span class="item-name text-15 text-muted">Apps</span>
                                </a> 
                            </li>

                            <!-- <p class="main-menu-title text-muted ml-3 font-weight-700 text-13 mt-4 mb-2">UI Elements</p> -->
                            <li class="Ul_li--hover"> 
                                    <a class="has-arrow" href="#">
                                        <i class="i-Computer-Secure text-20 mr-2 text-muted"></i>
                                        <span class="item-name text-15 text-muted">Datalist</span>
                                    </a>
                                    <ul class="mm-collapse">
                                        <li class="item-name">
                                            <a class="" href="#">
                                                <i class="i-Split-Four-Square-Window text-20 mr-2 text-muted"></i>
                                                <span class="item-name text-15 text-muted">Grid View</span>
                                            </a>
                                        </li>
                                        <li class="item-name">
                                            <a class="" href="#">
                                                <i class="i-Split-Horizontal text-20 mr-2 text-muted"></i>
                                                <span class="item-name text-15 text-muted">List View </span>
                                            </a>
                                        </li> 
                                    </ul>
                                </li>
                            
                        </ul>
                    </div>
                </div>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div><div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>

            <!-- side-nav-close -->
        </div>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>
<style>
 .sidebar-panel {
    width: 240px;
    left: 0;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);   
}
.gull-brand img {
    width: 60px;
    margin-right: 5px;
}
</style>