<template>
  <vue-perfect-scrollbar
    class="sidebar-panel rtl-ps-none ps scroll"
    @mouseleave.native="sidebarCompact();returnSelectedParentMenu()"
    @mouseenter.native="removeSidebarCompact"
    :class="{
      'vertical-sidebar-compact': getVerticalCompact.isSidebarCompact,
      'sidebar-full-collapse': getVerticalSidebar.isMobileCompact
    }"
    :settings="{ suppressScrollX : true ,  wheelPropagation: false}"
  >
    <div>
      <div
        class="gull-brand text-center d-flex align-items-center pl-2 mb-2 justify-content-between"
      >
        <div>
          <img class src="@/assets/images/logo.png" />
        </div>
        <div class="toggle-sidebar-compact">
          <label class="switch ul-switch switch-primary ml-auto">
            <input @click="switchSidebar" type="checkbox" />
            <span class="ul-slider o-hidden"></span>
          </label>
        </div>
      </div>

      <div class="close-mobile-menu" @click="mobileSidebar">
        <i class="text-16 text-primary i-Close-Window font-weight-bold"></i>
      </div>

      <div class="mt-4 main-menu">
        <ul class="ul-vertical-sidebar pl-4" id="menu">
          <!-- <p class="main-menu-title text-muted ml-3 font-weight-700 text-13 mt-4 mb-2">Apps</p> -->
          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-1>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'dashboards' }">
                <i class="i-Bar-Chart text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Dashboards</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-1">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li>
                  <router-link tag="a" class to="/app/dashboards/dashboard.v1">
                    <i class="i-Circular-Point mr-2"></i>
                    <span>Dashboard v1</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/dashboards/dashboard.v2" class>
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Dashboard v2</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/dashboards/dashboard.v3" class>
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Dashboard v3</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/dashboards/dashboard.v4" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Dashboard v4</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-2>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'ui-kits' }">
                <i class="i-Library text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >UI Kits</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-2">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/ui-kits/alerts">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Alerts</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/accordion">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Accordion</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/badges">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Badges</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/buttons">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Buttons</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/cards">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Cards</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/carousel">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Carousels</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/list">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Lists</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/pagination">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Paginations</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/popover">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Popover</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/progressbar">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Progressbar</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/bootstrap-tab">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Tabs</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/modals">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Modals</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/collapsible">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Collapsible</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/typography">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Typography</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-3>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'extrakits' }">
                <i class="i-Suitcase text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Extra Kits</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-3">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/extraKits/dropdown">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Dropdown</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/extraKits/imageCropper">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Image Cropper</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/extraKits/loaders">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Loaders</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/extraKits/toasts">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Toastr</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/extraKits/sweetAlerts">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Sweet Alerts</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/extraKits/tour">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>User Tour</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-4>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'apps' }">
                <i class="nav-icon i-Computer-Secure text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Apps</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-4">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <!-- nested-route  -->
                <li>
                  <div class v-b-toggle.collapse-4-1-inner>
                    <a class="has-arrow" href="#">
                      <i class="nav-icon i-File mr-2"></i>
                      <span
                        class
                        :class="{
                        'vertical-item-name': getVerticalCompact.isItemName
                      }"
                      >Invoice</span>
                      <arrowIcon />
                    </a>
                  </div>

                  <b-collapse id="collapse-4-1-inner">
                    <ul
                      class="Ul_collapse"
                      :class="{
                      'vertical-item-name': getVerticalCompact.isItemName
                    }"
                    >
                      <li class="item-name">
                        <router-link tag="a" to="/app/apps/invoice" class href="#">
                          <i class="nav-icon i-File mr-2"></i>
                          <span class>Invoice List</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/apps/createInvoice" class href="#">
                          <i class="nav-icon i-File mr-2"></i>
                          <span class>Create Invoice</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/apps/printInvoice" class href="#">
                          <i class="nav-icon i-File mr-2"></i>
                          <span class>Print Invoice</span>
                        </router-link>
                      </li>
                    </ul>
                  </b-collapse>
                </li>
                <!-- end nested  -->

                <!-- nested-route-2  -->
                <li>
                  <div class v-b-toggle.collapse-4-2-inner>
                    <a class="has-arrow" href="#">
                      <i class="nav-icon i-File-CSV mr-2"></i>
                      <span
                        class
                        :class="{
                        'vertical-item-name': getVerticalCompact.isItemName
                      }"
                      >Contacts</span>
                      <arrowIcon />
                    </a>
                  </div>

                  <b-collapse id="collapse-4-2-inner">
                    <ul
                      class="Ul_collapse"
                      :class="{
                      'vertical-item-name': getVerticalCompact.isItemName
                    }"
                    >
                      <li class="item-name">
                        <router-link tag="a" to="/app/apps/contact-list" class href="#">
                          <i class="i-File-CSV mr-2"></i>
                          <span class>Contact List</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/apps/contact-grid" class href="#">
                          <i class="i-File-CSV mr-2"></i>
                          <span class>Contact Grid</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/apps/contact-details" class href="#">
                          <i class="i-File-CSV mr-2"></i>
                          <span class>Contact Details</span>
                        </router-link>
                      </li>
                    </ul>
                  </b-collapse>
                </li>

                <li>
                  <router-link tag="a" to="/app/apps/products" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>E-commerce</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/apps/taskManager" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Task Manager</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/apps/calendar" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Calendar</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/apps/inbox" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Inbox</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/apps/chat" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Chat</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-5>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'charts' }">
                <i class="nav-icon i-Pie-Chart-2 text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Charts</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-5">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <!-- nested-route  -->
                <li>
                  <div class v-b-toggle.collapse-5-1-inner>
                    <a class="has-arrow" href="#">
                      <i class="nav-icon i-Line-Chart mr-2"></i>
                      <span
                        class
                        :class="{
                        'vertical-item-name': getVerticalCompact.isItemName
                      }"
                      >Apex Charts</span>
                      <arrowIcon />
                    </a>
                  </div>

                  <b-collapse id="collapse-5-1-inner">
                    <ul
                      class="Ul_collapse"
                      :class="{
                      'vertical-item-name': getVerticalCompact.isItemName
                    }"
                    >
                      <li class="item-name">
                        <router-link tag="a" to="/app/charts/apexAreaChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Area Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexBarChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Bar Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexLineChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Line Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexMixChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Mix Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexColumnChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Column Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexPieDonutsChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Pie Donut Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexRadarChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Radar Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexRadialBarChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Radial Bar Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexScatterChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Scatter Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexSparklineChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Sparkline Chart</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link tag="a" to="/app/charts/apexAreaChart" class href="#">
                          <i class="nav-icon i-Line-Chart-2 mr-2"></i>
                          <span class>Apex Area Chart</span>
                        </router-link>
                      </li>
                    </ul>
                  </b-collapse>
                </li>
                <!-- end nested  -->

                <li>
                  <router-link tag="a" to="/app/charts/eChart" class href="#">
                    <i class="i-Line-Chart-2 mr-2"></i>
                    <span class>EChart</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-6>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'widgets' }">
                <i class="nav-icon i-Windows-2 text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Widgets</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-6">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/widgets/widgetCard" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Widget Card</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/widgets/widgetStatistics" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Widget Statistics</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/widgets/weatherApp" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Weather App</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/widgets/widgetApp" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>App Widgets</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/widgets/widgetList" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Widget List</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-7>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'forms' }">
                <i class="nav-icon i-File-Clipboard-File--Text text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Forms</span>

                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-7">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/forms/basicForms" class>
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Basic Elements</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/forms/formLayouts" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Form Layouts</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/forms/basicActionBar" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Basic Action Bar</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/forms/formComponent" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Form Validation</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/forms/formWizard" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Form Wizard</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/forms/tagInput" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Tag Input</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/forms/mask" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Form Mask</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-8>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'datatables' }">
                <i class="nav-icon i-File-Horizontal-Text text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Datatables</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-8">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/datatables/paging" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Paging</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/datatables/filter" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Filter</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/datatables/list" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>List</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/datatables/vue-good-table" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Vue Good Table</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-9>
              <a class="has-arrow" href="#">
                <i class="nav-icon i-Administrator text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Sessions</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-9">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/sessions/signIn" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Sign In</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/sessions/signUp" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Sign Up</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/sessions/forgot" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Forgot</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-10>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'pages' }">
                <i class="nav-icon i-Double-Tap text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Pages</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-10">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/pages/error" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Not Found</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/pages/profile" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>User Profile</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/pages/icons" class href="#">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>icons</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="a" class to="/app/pages/search-result">
                    <i class="nav-icon i-File-Search"></i>
                    <span class="item-name">
                      Search Result
                      <span class="badge badge-pill badge-danger">New</span>
                    </span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="a" class to="/app/pages/pricing-table">
                    <i class="nav-icon i-Billing"></i>
                    <span class="item-name">
                      Pricing Table
                      <span class="badge badge-pill badge-danger">New</span>
                    </span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="a" class to="/app/pages/faq">
                    <i class="nav-icon i-Billing"></i>
                    <span class="item-name">
                      Faq
                      <span class="badge badge-pill badge-danger">New</span>
                    </span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <!-- <p class="main-menu-title text-muted ml-3 font-weight-700 text-13 mt-4 mb-2">UI Elements</p> -->
          <li class="Ul_li--hover">
            <a class="has-arrow" href="http://demos.ui-lib.com/gull-vue-doc/">
              <i class="nav-icon i-Safe-Box1 text-20 mr-2 text-muted"></i>
              <span
                class="text-15 text-muted"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >Doc</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </vue-perfect-scrollbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import arrowIcon from "@/components/arrow/arrowIcon";
export default {
  components: {
    arrowIcon,
  },
  computed: {
    ...mapGetters(["getVerticalCompact", "getVerticalSidebar"]),
  },
  data() {
    return {
      selectedParentMenu: "",
    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    document.addEventListener("click", this.returnSelectedParentMenu);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
  },
  methods: {
    ...mapActions([
      "switchSidebar",
      "sidebarCompact",
      "removeSidebarCompact",
      "mobileSidebar",
    ]),

    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
        console.log(currentParentUrl);
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    returnSelectedParentMenu() {
      this.toggleSelectedParentMenu();
    },
  },
};
</script>
<style>
</style>