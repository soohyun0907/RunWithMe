<template>
    <div class="main-content">
        <breadcumb :page="'Bootstrap Vue Tab '" :folder="'UI Kits'" />
        <div class="row">
            <b-col md="6">
                <!-- start::basic-tab -->
                <b-card  
                class="card   mb-30" 
                header="Basic Tabs" 
                header-bg-variant="transparent ">
                    
                    <b-tabs  
                    active-nav-item-class="nav nav-tabs"
                    content-class="mt-3"
                    >
                        <b-tab title="Home" active>
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </b-tab>
                        <b-tab title="Profile">
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </b-tab>
                        <b-tab title="Contact" >
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </b-tab>
                    </b-tabs>         
                </b-card> 


                <!-- start::advanced-examples -->
                 <div class="">
                    <b-card 
                    header="Advanced Example " 
                    class="card   mb-30" 
                    
                    header-bg-variant="transparent ">
                    <b-tabs class="" v-model="tabIndex" >
                        <b-tab title="General">I'm the first fading tab</b-tab>
                        <b-tab title="Edit profile">
                        I'm the second tab
                        <b-card>I'm the card in tab</b-card>
                        </b-tab>
                        <b-tab title="Premium Plan" disabled>Sibzamini!</b-tab>
                        <b-tab title="Info">I'm the last tab</b-tab>
                    </b-tabs>
                    </b-card>

                    <!-- Control buttons-->
                    <div class="text-center">
                    <b-button-group class="mt-2">
                        <b-button variant="outline-primary" @click="tabIndex--">Previous</b-button>
                        <b-button variant="outline-primary" @click="tabIndex++">Next</b-button>
                    </b-button-group>

                    <div class="text-muted mb-30">Current Tab: {{ tabIndex }}</div>
                    </div>
                </div>

                <!-- start::icon-tabs -->
                <b-card  
                class="card   mb-30" 
                header="Icon Tabs" 
                header-bg-variant="transparent ">
                    
                    <b-tabs  
                    active-nav-item-class="nav nav-tabs"
                    content-class="mt-3"
                    >
                        <b-tab active>
                            <template slot="title"> 
                                <i class="i-Bio-Hazard  ul-tab__icon text-danger mr-1"> </i>
                                Active
                            </template>
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </b-tab>
                        <b-tab title="">
                             <template slot="title"> 
                                <i class="i-Download ul-tab__icon text-success mr-1"> </i>
                                Download
                            </template>
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </b-tab>
                        <b-tab>
                            <template slot="title">
                                <i class="i-File-Clipboard-File--Text ul-tab__icon text-muted mr-1"> </i>
                                Clip File
                            </template>
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </b-tab>
                    </b-tabs> 

                    <div class="ul-tab__border"></div>    

                    <b-tabs  
                    active-nav-item-class="nav nav-tabs"
                    content-class="mt-3"
                    >
                        <b-tab active>
                            <template slot="title"> 
                                <i class="i-Bio-Hazard  ul-tab__icon text-danger mr-1"> </i>
                                Active
                            </template>
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </b-tab>
                        <b-tab title="">
                             <template slot="title"> 
                                <i class="i-Download ul-tab__icon text-success mr-1"> </i>
                                Download
                            </template>
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </b-tab>
                        <b-tab>
                            <template slot="title">
                                <i class="i-File-Clipboard-File--Text ul-tab__icon text-muted mr-1"> </i>
                                Clip File
                            </template>
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </b-tab>
                    </b-tabs>     
                </b-card> 


                <!-- start::adjusted-tab -->
                <b-card
                class="card   mb-30" 
                header="Adjusted Tabs" 
                header-bg-variant="transparent ">

                    <b-tabs content-class="mt-3" justified>
                        <b-tab title="First" active>
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </b-tab>
                        <b-tab title="Second">
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </b-tab>
                        <b-tab title="Very, very long title">
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </b-tab>
                        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
                    </b-tabs>

                </b-card>
                
            </b-col>

            <b-col md="6">
                <!-- start::pills -->
                 <b-card  
                class="card   mb-30" 
                header="Pills" 
                header-bg-variant="transparent ">
                     <b-tabs pills >
                        <b-tab title="Active" active>
                            <b-card-text class="">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Download">
                            <b-card-text  class="">
                                
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Disabled" disabled>
                            <b-card-text  class="">
                                
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </b-card-text>
                        </b-tab>
                    </b-tabs>
                 </b-card>
                
                <!-- begin::dynamic-tabs -->
                <div>
                    <b-card 
                    class="card   mb-30" 
                    header="Dynamic" 
                    header-bg-variant="transparent ">
                    <b-tabs >
                        <!-- Render Tabs, supply a unique `key` to each tab -->
                        <b-tab v-for="i in tabs" :key="`dyn-tab-${i}`" :title="`Tab ${i}`">
                        Tab Contents {{ i }}
                        <b-button size="sm" variant="danger" class="float-right" @click="() => closeTab(i)">
                            Close tab
                        </b-button>
                        </b-tab>

                        <!-- New Tab Button (Using tabs slot) -->
                        <template slot="tabs">
                        <b-nav-item @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
                        </template>

                        <!-- Render this if no tabs -->
                        <div slot="empty" class="text-center text-muted">
                        There are no open tabs<br>
                        Open a new tab using the <b>+</b> button above.
                        </div>
                    </b-tabs>
                    </b-card>
                </div>

                 <!-- begin::Add custom content to tab title -->
                <b-card  
                class="card   mb-30" 
                header="Add custom content to tab title " 
                header-bg-variant="transparent ">
                    <b-tabs>
                        <b-tab active>
                        <template slot="title">
                            <b-spinner type="grow" small></b-spinner> I'm <i>Custom</i> <strong>Title</strong>
                        </template>
                        <p class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </b-tab>

                        <b-tab>
                        <template slot="title">
                            <b-spinner type="border" small></b-spinner> Tab 2
                        </template>
                        <p class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </b-tab>
                    </b-tabs>
                 </b-card>

                <!-- start::adjusted-pills -->
                 <b-card  
                class="card   mb-30" 
                header="Adjusted Pills" 
                header-bg-variant="transparent ">
                     <b-tabs pills justified>
                        <b-tab title="Active" active>
                            <b-card-text class="">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Download">
                            <b-card-text  class="">
                                
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Disabled" disabled>
                            <b-card-text  class="">
                                
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </b-card-text>
                        </b-tab>
                    </b-tabs>
                 </b-card>


               

                 <!-- start::alignment -->
                 <b-card  
                class="card   mb-30" 
                header="Alignment " 
                header-bg-variant="transparent ">
                     <b-tabs content-class="mt-3" align="center">
                            <b-tab title="First" active>
                                <p class=""> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </b-tab>
                            <b-tab title="Second">
                                <p class=""> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </b-tab>
                            <b-tab title="Disabled" disabled>
                                <p class=""> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </b-tab>
                        </b-tabs>
                 </b-card>

                

                 

            </b-col>
        </div>
    </div>
</template>


<script>
  export default {
       metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Bootstrap Vue tab"
  },
    data() {
      return {
        // dynamicTabs
        tabs: [],
        tabCounter: 1,

        // end::dynamicTabs

        // advanceExample
        tabIndex: 1
      }
    },
     methods: {
        //  dynamicTabs
      closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i] === x) {
            this.tabs.splice(i, 1)
          }
        }
      },
      newTab() {
        this.tabs.push(this.tabCounter++)
      }
    }
    // end::dynamicTabs
  }
</script>