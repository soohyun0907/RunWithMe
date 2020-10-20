<template>
  <div class="main-content">
    <breadcumb :page="'Sidebar'" :folder="'Extra Kits'" />
    
    <b-row>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Toggle Sidebar">
          <b-card-text>
              Default Sidebar    
          </b-card-text>
          <b-button variant="primary ripple m-1" v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
          <b-sidebar id="sidebar-1" title="Sidebar" shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <img
               
                src="@/assets/images/photo-long-2.jpg"
                alt=""
              />
            </div>
          </b-sidebar>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Placement">
          <b-card-text>
              Set the <strong class="text-danger">right</strong> prop to  <strong class="text-danger">true</strong>  
          </b-card-text>
          <b-button variant="primary ripple m-1" v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
          <b-sidebar id="sidebar-right" title="Sidebar" bg-variant="white" right  shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <img
               
                src="@/assets/images/photo-long-2.jpg"
                alt=""
              />
            </div>
          </b-sidebar>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Variants">
          <b-card-text>
              Use the props <strong class="text-danger">bg-variant</strong>  and <strong class="text-danger">text-variant</strong> to control the theme color variant of the background and text.
              
          </b-card-text>
          <b-button variant="primary ripple m-1" v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
          <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark"  text-variant="light" right  shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <img
               
                src="@/assets/images/photo-long-2.jpg"
                alt=""
              />
            </div>
          </b-sidebar>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Borders">
          
          <b-button variant="primary ripple m-1" v-b-toggle.sidebar-border>Toggle Sidebar</b-button>
          <b-sidebar id="sidebar-border" title="Sidebar" sidebar-class="border-right border-primary" shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <img
               
                src="@/assets/images/photo-long-2.jpg"
                alt=""
              />
            </div>
          </b-sidebar>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Footer">
          
          <b-button  variant="primary ripple m-1" v-b-toggle.sidebar-footer>Toggle Sidebar</b-button>
          <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
            <template v-slot:footer="{ hide }">
            <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
              <strong class="mr-auto">Footer</strong>
              <b-button size="sm" @click="hide">Close</b-button>
            </div>
            </template>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <img
               
                src="@/assets/images/photo-long-2.jpg"
                alt=""
              />
            </div>
          </b-sidebar>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Backdrop">
          
          <b-button variant="primary ripple m-1" v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
          <b-sidebar
            id="sidebar-backdrop"
            title="Sidebar with backdrop"
            backdrop
            shadow
          >
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <img
                src="@/assets/images/photo-long-2.jpg"
                alt=""
              />
            </div>
          </b-sidebar>
        </b-card>
      </b-col>

    </b-row>
  
  </div>
</template>