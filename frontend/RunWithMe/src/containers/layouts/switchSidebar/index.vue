<template>
    <div class="app-admin-wrap layout-sidebar-large clearfix">
        <switchTopbar />
        <switchSidebar />
    <main>
      <div class="main-content-wrap bg-off-white d-flex flex-column">
        
        <transition name="page" mode="out-in">
          <router-view />
        </transition>
        
      </div>
    </main>
  </div>
</template>
<script>
import switchSidebar from "./switchSidebar";
import switchTopbar from "./switchTopbar";
import appFooter from "../common/footer";

export default {
    components: {
        switchSidebar,
        switchTopbar,
        appFooter
    },
    data(){
        return {

        }
    }
}
</script>>