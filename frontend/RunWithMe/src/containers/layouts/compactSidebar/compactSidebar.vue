<template>
  <div
    class="side-content-wrap"
    @mouseenter="isMenuOver = true"
    @mouseleave="isMenuOver = false"
    @touchstart="isMenuOver = true"
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      :class="{ open: getCompactSideBarToggleProperties.isSideNavOpen }"
      ref="myData"
      class="sidebar-left rtl-ps-none ps"
    >
      <ul class="navigation-left">
        <div class="logo">
          <img alt="" src="@/assets/images/logo.png" />
        </div>
        <li
          @mouseenter="toggleSubMenu"
          :class="{ active: selectedParentMenu == 'dashboards' }"
          class="nav-item"
          data-item="dashboards"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Bar-Chart"></i>
            <span class="nav-text">Dashboards</span>
          </a>

          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="toggleSubMenu"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'ui-kits' }"
          data-item="ui-kits"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Library"></i>
            <span class="nav-text">UI kits</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="toggleSubMenu"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'extrakits' }"
          data-item="extrakits"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Suitcase"></i>
            <span class="nav-text">Extra kits</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="toggleSubMenu"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'apps' }"
          data-item="apps"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Computer-Secure"></i>
            <span class="nav-text">Apps</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="toggleSubMenu"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'charts' }"
          data-item="charts"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Pie-Chart-2"></i>
            <span class="nav-text">Charts</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="toggleSubMenu"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'widgets' }"
          data-item="widgets"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Windows-2"></i>
            <span class="nav-text">Widgets</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="toggleSubMenu"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'forms' }"
          data-item="forms"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-File-Clipboard-File--Text"></i>
            <span class="nav-text">Forms</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          class="nav-item"
          @mouseenter="toggleSubMenu"
          :class="{ active: selectedParentMenu == 'datatables' }"
          data-item="datatables"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-File-Horizontal-Text"></i>
            <span class="nav-text">Datatables</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="toggleSubMenu"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'sessions' }"
          data-item="sessions"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Administrator"></i>
            <span class="nav-text">Sessions</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="toggleSubMenu"
          :class="{ active: selectedParentMenu == 'pages' }"
          class="nav-item"
          data-item="pages"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Double-Tap"></i>
            <span class="nav-text">Pages</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          class="nav-item"
          :data-submenu="false"
          @mouseenter="toggleSubMenu"
          :class="{ active: selectedParentMenu == 'doc' }"
        >
          <a
            class="nav-item-hold"
            href="http://demos.ui-lib.com/gull-vue-doc/"
            target="_blank"
          >
            <i class="nav-icon i-Safe-Box1"></i>
            <span class="nav-text">Doc</span>
          </a>
          <div class="triangle"></div>
        </li>
      </ul>
    </vue-perfect-scrollbar>

    <vue-perfect-scrollbar
      :class="{ open: getCompactSideBarToggleProperties.isSideNavOpen }"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="sidebar-left-secondary ps rtl-ps-none"
    >
      <div ref="sidebarChild">
        <i class="sidebar-close i-Close" @click="compactSideBarToggle"></i>
        <header>
          <div class="logo">
            <img src="@/assets/images/logo-text.png" alt />
          </div>
        </header>

        <!-- submenu-dashboards -->
        <div
          class="submenu-area"
          data-parent="dashboards"
          :class="{ 'd-block': selectedParentMenu == 'dashboards' }"
        >
          <header>
            <h6>Dashboards</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="dashboards">
            <li class="nav-item">
              <router-link tag="a" class to="/app/dashboards/dashboard.v1">
                <i class="nav-icon i-Clock-3"></i>
                <span class="item-name">Version 1</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/dashboards/dashboard.v2">
                <i class="nav-icon i-Clock-4"></i>
                <span class="item-name">Version 2</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/dashboards/dashboard.v3">
                <i class="nav-icon i-Over-Time"></i>
                <span class="item-name">Version 3</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/dashboards/dashboard.v4">
                <i class="nav-icon i-Clock"></i>
                <span class="item-name">Version 4</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end dashboards -->
        <div
          class="submenu-area"
          data-parent="ui-kits"
          :class="{ 'd-block': selectedParentMenu == 'ui-kits' }"
        >
          <header>
            <h6>UI Kits</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="ui-kits">
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/alerts">
                <i class="nav-icon i-Bell1"></i>
                <span class="item-name">Alerts</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/accordion">
                <i class="nav-icon i-Split-Horizontal-2-Window"></i>
                <span class="item-name">Accordion</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/badges">
                <i class="nav-icon i-Medal-2"></i>
                <span class="item-name">Badges</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/buttons">
                <i class="nav-icon i-Cursor-Click"></i>
                <span class="item-name">Buttons</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/cards">
                <i class="nav-icon i-Line-Chart-2"></i>
                <span class="item-name">Cards</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/carousel">
                <i class="nav-icon i-Video-Photographer"></i>
                <span class="item-name">Carousels</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/list">
                <i class="nav-icon i-Belt-3"></i>
                <span class="item-name">Lists</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/pagination">
                <i class="nav-icon i-Arrow-Next"></i>
                <span class="item-name">Paginations</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/popover">
                <i class="nav-icon i-Speach-Bubble-2"></i>
                <span class="item-name">Popover</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/progressbar">
                <i class="nav-icon i-Loading"></i>
                <span class="item-name">Progressbar</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/bootstrap-tab">
                <i class="nav-icon i-New-Tab"></i>
                <span class="item-name">Tabs</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/modals">
                <i class="nav-icon i-Duplicate-Window"></i>
                <span class="item-name">Modals</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/collapsible">
                <i class="nav-icon i-Width-Window"></i>
                <span class="item-name">Collapsible</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/typography">
                <i class="nav-icon i-Width-Window"></i>
                <span class="item-name">Typography</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end ui-kits -->

        <div
          class="submenu-area"
          data-parent="extrakits"
          :class="{ 'd-block': selectedParentMenu == 'extrakits' }"
        >
          <header>
            <h6>Extra Kits</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="extrakits">
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/dropdown">
                <i class="nav-icon i-Arrow-Down"></i>
                <span class="item-name">Dropdown</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/imageCropper">
                <i class="nav-icon i-Crop-2"></i>
                <span class="item-name">Image Cropper</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/loaders">
                <i class="nav-icon i-Loading-3"></i>
                <span class="item-name">Loaders</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/vueDraggable">
                <i class="nav-icon i-Two-Windows"></i>
                <span class="item-name">Vue Draggable</span>
                <span class="ml-2 badge badge-pill badge-danger">New</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/vueTree">
                <i class="nav-icon i-Up---Down-3"></i>
                <span class="item-name">Vue Tree</span>
                <span class="ml-2 badge badge-pill badge-danger">New</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/toasts">
                <i class="nav-icon i-Bell"></i>
                <span class="item-name">Toastr</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/sweetAlerts">
                <i class="nav-icon i-Approved-Window"></i>
                <span class="item-name">Sweet Alerts</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/tour">
                <i class="nav-icon i-Plane"></i>
                <span class="item-name">User Tour</span>
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/vCalendar">
                <i class="nav-icon i-Calendar-4"></i>
                <span class="item-name">V-Calendar</span>
              </router-link>
            </li> -->
          </ul>
        </div>
        <!-- end of extra kits -->
        <div
          class="submenu-area"
          data-parent="apps"
          :class="{ 'd-block': selectedParentMenu == 'apps' }"
        >
          <header>
            <h6>Apps</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="apps">
            <li
              @click.prevent="toggleSidebarDropdwon($event)"
              class="nav-item dropdown-sidemenu"
            >
              <a href="#">
                <i class="nav-icon i-File"></i>
                <span class="item-name">Invoice</span>
                <i class="dd-arrow i-Arrow-Down"></i>
              </a>
              <ul class="submenu">
                <li>
                  <router-link tag="a" class to="/app/apps/invoice">
                    <i class="nav-icon i-Files"></i>
                    <span class="item-name">Invoice List</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/apps/createInvoice">
                    <i class="nav-icon i-Add-File"></i>
                    <span class="item-name">Create Invoice</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/apps/printInvoice">
                    <i class="nav-icon i-File-JPG"></i>
                    <span class="item-name">Print Invoice</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- contact app -->
            <li
              @click.prevent="toggleSidebarDropdwon($event)"
              class="nav-item dropdown-sidemenu"
            >
              <a href="#">
                <i class="nav-icon i-File-CSV"></i>
                <span class="item-name"
                  >Contacts<span class=" ml-2 badge badge-pill badge-danger"
                    >New</span
                  ></span
                >
                <i class="dd-arrow i-Arrow-Down"></i>
              </a>
              <ul class="submenu">
                <li>
                  <router-link tag="a" class to="/app/apps/contact-list">
                    <i class="nav-icon i-File-CSV"></i>
                    <span class="item-name">Contact Lists</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/apps/contact-grid">
                    <i class="nav-icon i-File-CSV"></i>
                    <span class="item-name">Contact Grid</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/apps/contact-details">
                    <i class="nav-icon i-File-CSV"></i>
                    <span class="item-name">Contact Details</span>
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/products">
                <i class="nav-icon i-Add-File"></i>
                <span class="item-name">eCommerce</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/taskManager">
                <i class="nav-icon i-Add-File"></i>
                <span class="item-name">Task Manager</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/todo-list">
                <i class="nav-icon i-File-JPG"></i>
                <span class="item-name">Todo List</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/contact-list-table">
                <i class="nav-icon i-File-JPG"></i>
                <span class="item-name">Contact List</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/calendar">
                <i class="nav-icon i-Calendar-3"></i>
                <span class="item-name">Calendar</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/inbox">
                <i class="nav-icon i-Email"></i>
                <span class="item-name">Inbox</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/chat">
                <i class="nav-icon i-Speach-Bubble-3"></i>
                <span class="item-name">Chat</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end of apps -->
        <div
          class="submenu-area"
          data-parent="charts"
          :class="{ 'd-block': selectedParentMenu == 'charts' }"
        >
          <header>
            <h6>Charts</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="charts">
            <li class="nav-item">
              <router-link tag="a" class to="/app/charts/eChart">
                <i class="nav-icon i-Line-Chart-2"></i>
                <span class="item-name">Echart</span>
              </router-link>
            </li>
            <li
              @click.prevent="toggleSidebarDropdwon($event)"
              class="nav-item dropdown-sidemenu"
            >
              <a href="#">
                <i class="nav-icon i-Line-Chart"></i>
                <span class="item-name">Apex Charts</span>
                <i class="dd-arrow i-Arrow-Down"></i>
              </a>
              <ul class="submenu">
                <li>
                  <router-link tag="a" class to="/app/charts/apexAreaChart">
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Area Chart</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/charts/apexBarChart">
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Bar Chart</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/charts/apexLineChart">
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Line Chart</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/charts/apexMixChart">
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Mix Chart</span>
                  </router-link>
                </li>

                <li>
                  <router-link tag="a" class to="/app/charts/apexColumnChart">
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Column Chart</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    tag="a"
                    class
                    to="/app/charts/apexPieDonutsChart"
                  >
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Pie Donut Chart</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/charts/apexRadarChart">
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Radar Chart</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    tag="a"
                    class
                    to="/app/charts/apexRadialBarChart"
                  >
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Radial Bar Chart</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" class to="/app/charts/apexScatterChart">
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Scatter Chart</span>
                  </router-link>
                </li>

                <li>
                  <router-link
                    tag="a"
                    class
                    to="/app/charts/apexSparklineChart"
                  >
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Sparkline Chart</span>
                  </router-link>
                  <router-link tag="a" class to="/app/charts/apexAreaChart">
                    <i class="nav-icon i-Line-Chart-2"></i>
                    <span class="item-name">Apex Area Chart</span>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- end of charts -->

        <div
          class="submenu-area"
          data-parent="widgets"
          :class="{ 'd-block': selectedParentMenu == 'widgets' }"
        >
          <header>
            <h6>Widgets</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="widgets">
            <li class="nav-item">
              <router-link tag="a" class to="/app/widgets/widgetCard">
                <i class="nav-icon i-Two-Windows"></i>
                <span class="item-name">Widget Card</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/widgets/widgetStatistics">
                <i class="nav-icon i-Windows-2"></i>
                <span class="item-name">Widget Statistics</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/widgets/weatherApp">
                <i class="nav-icon i-Windows-2"></i>
                <span class="item-name">Weather App</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/widgets/widgetApp">
                <i class="nav-icon i-Windows-2"></i>
                <span class="item-name">App Widgets</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/widgets/widgetList">
                <i class="nav-icon i-Windows-2"></i>
                <span class="item-name">Widget List</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end of widgets -->

        <div
          class="submenu-area"
          data-parent="forms"
          :class="{ 'd-block': selectedParentMenu == 'forms' }"
        >
          <header>
            <h6>Forms</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="forms">
            <li class="nav-item">
              <router-link tag="a" class to="/app/forms/basicForms">
                <i class="nav-icon i-File-Clipboard-Text--Image"></i>
                <span class="item-name">Basic Elements</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/forms/formLayouts">
                <i class="nav-icon i-Split-Vertical"></i>
                <span class="item-name">Form Layouts</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/forms/basicActionBar">
                <i class="nav-icon i-Receipt-4"></i>
                <span class="item-name">Basic Action Bar</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/forms/formComponent">
                <i class="nav-icon i-Close-Window"></i>
                <span class="item-name">Form Validation</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/forms/formWizard">
                <i class="nav-icon i-Width-Window"></i>
                <span class="item-name">Form Wizard</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/forms/tagInput">
                <i class="nav-icon i-Tag-2"></i>
                <span class="item-name">Tag Input</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/forms/mask">
                <i class="nav-icon i-Pen-2"></i>
                <span class="item-name">Form Mask</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end of forms -->

        <div
          class="submenu-area"
          data-parent="datatables"
          :class="{ 'd-block': selectedParentMenu == 'datatables' }"
        >
          <header>
            <h6>Datatables</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="datatables">
            <li class="nav-item">
              <router-link tag="a" class to="/app/datatables/paging">
                <i class="nav-icon i-Split-Four-Square-Window"></i>
                <span class="item-name">Paging</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/datatables/filter">
                <i class="nav-icon i-Split-Vertical"></i>
                <span class="item-name">Filter</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/datatables/list">
                <i class="nav-icon i-Split-Vertical"></i>
                <span class="item-name">List</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/datatables/vue-good-table">
                <i class="nav-icon i-Split-Horizontal"></i>
                <span class="item-name">Vue Good Table</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end of datatables -->

        <div
          class="submenu-area"
          data-parent="sessions"
          :class="{ 'd-block': selectedParentMenu == 'sessions' }"
        >
          <header>
            <h6>Sessions</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="sessions">
            <li class="nav-item">
              <router-link tag="a" class to="/app/sessions/signIn">
                <i class="nav-icon i-Checked-User"></i>
                <span class="item-name">Sign in</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/sessions/signUp">
                <i class="nav-icon i-Add-User"></i>
                <span class="item-name">Sign up</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/sessions/forgot">
                <i class="nav-icon i-Find-User"></i>
                <span class="item-name">Forgot</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end of sessions -->

        <div
          class="submenu-area"
          data-parent="pages"
          :class="{ 'd-block': selectedParentMenu == 'pages' }"
        >
          <header>
            <h6>Pages</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="pages">
            <li class="nav-item">
              <router-link tag="a" class to="/app/pages/error">
                <i class="nav-icon i-Error-404-Window"></i>
                <span class="item-name">Not Found</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/pages/profile">
                <i class="nav-icon i-Male"></i>
                <span class="item-name">User Profile</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/pages/icons">
                <i class="nav-icon i-Male"></i>
                <span class="item-name">icons</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end of pages -->
      </div>
    </vue-perfect-scrollbar>
    <div
      @click="removeOverlay()"
      class="sidebar-overlay"
      :class="{
        open:
          getCompactSideBarToggleProperties.isSideNavOpen && windowWidth <= 1200
      }"
    ></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isMobile } from "mobile-device-detect";
export default {
  data() {
    return {
      isMenuOver: false,
      selectedParentMenu: "",
      isMobile,
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },

  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: {
    ...mapGetters(["getCompactSideBarToggleProperties"])
  },

  methods: {
    ...mapActions(["changeCompactSidebarProperties"]),

    removeOverlay() {
      this.changeCompactSidebarProperties();
      // if (window.innerWidth<=1200) {
      //   this.changeSidebarProperties();
      // }
      this.toggleSelectedParentMenu();
    },

    compactSideBarToggle(el) {
      // console.log("test");
      if (this.getCompactSideBarToggleProperties.isSideNavOpen) {
        this.changeCompactSidebarProperties();
      }
    },

    handleWindowResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth <= 1200) {
        if (this.getCompactSideBarToggleProperties.isSideNavOpen) {
          this.changeCompactSidebarProperties();
        }
      } else {
        if (!this.getCompactSideBarToggleProperties.isSideNavOpen) {
          this.changeCompactSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter(x => x !== "")[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    toggleSubMenu(e) {
      let hasSubmenu = e.target.dataset.submenu;
      let parent = e.target.dataset.item;
      if (hasSubmenu) {
        this.selectedParentMenu = parent;
      } else {
        // this.selectedParentMenu = parent;
        this.toggleSelectedParentMenu();
      }
    },
    returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },

    toggleSidebarDropdwon(event) {
      let dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");

      event.currentTarget.classList.toggle("open");

      dropdownMenus.forEach(dropdown => {
        dropdown.classList.remove("open");
      });
    }
  }
};
</script>