<template>
  <div class="main-content">
    <breadcumb :page="'Widget List'" :folder="'Widgets'" />

    <b-row class="">
      <b-col lg="4" md="6" xl="4" class="mb-30">
        <b-card>
          <div class="ul-widget1">
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Member Profit</h4>
                <span class="ul-widget__desc text-mute"
                  >Average Weekly Profit</span
                >
              </div>
              <span class="ul-widget__number text-primary">+$17,800</span>
            </div>
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Orders</h4>
                <span class="ul-widget__desc text-mute"
                  >Weekly Customer Orders</span
                >
              </div>
              <span class="ul-widget__number text-danger">+1,800</span>
            </div>
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Issue Reports</h4>
                <span class="ul-widget__desc text-mute"
                  >System bugs and issues</span
                >
              </div>
              <span class="ul-widget__number text-success">-27,49%</span>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col lg="4" md="6" xl="4" class="mb-30">
        <b-card>
          <div class="ul-widget1">
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Member Profit</h4>
                <span class="ul-widget__desc text-mute"
                  >Average Weekly Profit</span
                >
              </div>
              <span class="ul-widget__number text-primary">+$17,800</span>
            </div>
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Orders</h4>
                <span class="ul-widget__desc text-mute"
                  >Weekly Customer Orders</span
                >
              </div>
              <span class="ul-widget__number text-danger">+1,800</span>
            </div>
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Issue Reports</h4>
                <span class="ul-widget__desc text-mute"
                  >System bugs and issues</span
                >
              </div>
              <span class="ul-widget__number text-success">-27,49%</span>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col lg="4" md="6" xl="4" class="mb-30">
        <b-card>
          <div class="ul-widget1">
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Member Profit</h4>
                <span class="ul-widget__desc text-mute"
                  >Average Weekly Profit</span
                >
              </div>
              <span class="ul-widget__number text-primary">+$17,800</span>
            </div>
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Orders</h4>
                <span class="ul-widget__desc text-mute"
                  >Weekly Customer Orders</span
                >
              </div>
              <span class="ul-widget__number text-danger">+1,800</span>
            </div>
            <div class="ul-widget__item">
              <div class="ul-widget__info">
                <h4 class="">Issue Reports</h4>
                <span class="ul-widget__desc text-mute"
                  >System bugs and issues</span
                >
              </div>
              <span class="ul-widget__number text-success">-27,49%</span>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="">
      <!-- authors-profit -->
      <b-col lg="4" xl="4" class=" mb-30">
        <b-card>
          <div class="d-flex justify-content-between">
            <h3 class="ul-widget__head-title">
              Authors Profit
            </h3>
            <b-dropdown id="dropdown-1" text="Latest" variant="primary">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="ul-widget__body">
            <div class="ul-widget1">
              <div class="ul-widget__item ul-widget4__users">
                <div class="ul-widget4__img">
                  <img
                    src="@/assets/images/faces/1.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <a href="#" class="ul-widget2__title">
                    Anna Strong
                  </a>
                  <span href="#" class="ul-widget2__username">
                    Visual Designer,Google Inc
                  </span>
                </div>
                <span class="ul-widget4__number t-font-boldest text-success"
                  >+500</span
                >
              </div>

              <div class="ul-widget__item ul-widget4__users">
                <div class="ul-widget4__img">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <a href="#" class="ul-widget2__title">
                    Will Smith
                  </a>
                  <span href="#" class="ul-widget2__username">
                    Developer
                  </span>
                </div>
                <span class="ul-widget4__number t-font-boldest text-danger"
                  >+900</span
                >
              </div>

              <div class="ul-widget__item ul-widget4__users">
                <div class="ul-widget4__img">
                  <img
                    src="@/assets/images/faces/3.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <a href="#" class="ul-widget2__title">
                    Will Smith
                  </a>
                  <span href="#" class="ul-widget2__username">
                    Developer
                  </span>
                </div>
                <span class="ul-widget4__number t-font-boldest text-primary"
                  >+700</span
                >
              </div>
              <div class="ul-widget__item ul-widget4__users">
                <div class="ul-widget4__img">
                  <img
                    src="@/assets/images/faces/4.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <a href="#" class="ul-widget2__title">
                    Megan Fox
                  </a>
                  <span href="#" class="ul-widget2__username">
                    UI/UX
                  </span>
                </div>
                <span class="ul-widget4__number t-font-boldest text-warning"
                  >+100</span
                >
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col lg="4" xl="4" class=" mb-30">
        <b-card>
          <div class="d-flex justify-content-between">
            <h3 class="ul-widget__head-title">
              Download Files
            </h3>
            <b-dropdown id="dropdown-1" text="Latest" variant="primary">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="ul-widget__body">
            <div class="__g-widget4">
              <div class="ul-widget__item">
                <div class="ul-widget4__pic-icon">
                  <i class="i-Folder-With-Document text-info "></i>
                </div>
                <a href="#" class="ul-widget4__title">
                  Documentation
                </a>
              </div>

              <div class="ul-widget__item">
                <div class="ul-widget4__pic-icon">
                  <i class="i-File-CSV text-success "></i>
                </div>
                <a href="#" class="ul-widget4__title">
                  Full Developer Manual For 4.7
                </a>
              </div>

              <div class="ul-widget__item">
                <div class="ul-widget4__pic-icon">
                  <i class="i-File-Zip text-danger "></i>
                </div>
                <a href="#" class="ul-widget4__title">
                  Download Ziped version OF 5.0
                </a>
              </div>
              <div class="ul-widget__item">
                <div class="ul-widget4__pic-icon">
                  <i class="i-File-JPG text-warning "></i>
                </div>
                <a href="#" class="ul-widget4__title">
                  Project Launch Event
                </a>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col lg="4" xl="4" class=" mb-30">
        <b-card>
          <div class="d-flex justify-content-between">
            <h3 class="ul-widget__head-title">
              Latest Updates
            </h3>
            <b-dropdown id="dropdown-1" text="Latest" variant="primary">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="ul-widget__body">
            <div class="ul-widget1">
              <div class="ul-widget__item ul-widget4__users">
                <div class="ul-widget4__pic-icon">
                  <i class="i-Folder-With-Document text-info "></i>
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <a href="#" class="ul-widget4__title">
                    New Version
                  </a>
                </div>
                <span class="ul-widget4__number t-font-boldest text-success"
                  >+500</span
                >
              </div>
              <div class="ul-widget__item ul-widget4__users">
                <div class="ul-widget4__pic-icon">
                  <i class="i-Folder-Add- text-success "></i>
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <a href="#" class="ul-widget4__title">
                    Old Version
                  </a>
                </div>
                <span class="ul-widget4__number t-font-boldest text-info"
                  >+500</span
                >
              </div>

              <div class="ul-widget__item ul-widget4__users">
                <div class="ul-widget4__pic-icon">
                  <i class="i-Folder-Binder text-danger "></i>
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <a href="#" class="ul-widget4__title">
                    Old Version 2
                  </a>
                </div>
                <span class="ul-widget4__number t-font-boldest text-warning"
                  >+333</span
                >
              </div>

              <div class="ul-widget__item ul-widget4__users">
                <div class="ul-widget4__pic-icon">
                  <i class="i-Folder-Download text-warning "></i>
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <a href="#" class="ul-widget4__title">
                    Donwload New Version
                  </a>
                </div>
                <span class="ul-widget4__number t-font-boldest text-danger"
                  >+200</span
                >
              </div>
            </div>
          </div>
        </b-card>
      </b-col>

      <!-- best_sellers -->
      <b-col xl="8" md="12" class=" mb-30">
        <b-card class="h-100">
          <b-tabs align="right" content-class=" ul-widget-nav-tabs-line">
            <b-tab title="First" active>
              <div class="ul-widget__body">
                <div class="tab-content">
                  <div
                    class="tab-pane active show"
                    id="ul-widget5-tab1-content"
                  >
                    <div class="ul-widget5">
                      <div class="ul-widget__item ">
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__pic">
                            <img
                              class=""
                              src="@/assets/images/products/iphone-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div class="ul-widget5__section">
                            <a href="#" class="ul-widget4__title">
                              Great Logo Designn
                            </a>
                            <p class="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div class="ul-widget5__info">
                              <span>Author:</span>
                              <span class="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span class="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">19,200</span>
                            <span class="ul-widget5__sales text-mute"
                              >sales</span
                            >
                          </div>
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">1046</span>
                            <span class="ul-widget5__sales text-mute"
                              >votes</span
                            >
                          </div>
                        </div>
                      </div>

                      <div class="ul-widget__item ">
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__pic">
                            <img
                              class=""
                              src="@/assets/images/products/speaker-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div class="ul-widget5__section">
                            <a href="#" class="ul-widget4__title">
                              Great Logo Designn
                            </a>
                            <p class="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div class="ul-widget5__info">
                              <span>Author:</span>
                              <span class="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span class="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">29,200</span>
                            <span class="ul-widget5__sales text-mute"
                              >sales</span
                            >
                          </div>
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">4500</span>
                            <span class="ul-widget5__sales text-mute"
                              >votes</span
                            >
                          </div>
                        </div>
                      </div>

                      <div class="ul-widget__item ">
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__pic">
                            <img
                              class=""
                              src="@/assets/images/products/watch-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div class="ul-widget5__section">
                            <a href="#" class="ul-widget4__title">
                              Great Logo Designn
                            </a>
                            <p class="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div class="ul-widget5__info">
                              <span>Author:</span>
                              <span class="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span class="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">23,200</span>
                            <span class="ul-widget5__sales text-mute"
                              >sales</span
                            >
                          </div>
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">2046</span>
                            <span class="ul-widget5__sales text-mute"
                              >votes</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="Second">
              <div class="ul-widget__body">
                <div class="tab-content">
                  <div
                    class="tab-pane active show"
                    id="ul-widget5-tab1-content"
                  >
                    <div class="ul-widget5">
                      <div class="ul-widget__item ">
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__pic">
                            <img
                              class=""
                              src="@/assets/images/products/speaker-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div class="ul-widget5__section">
                            <a href="#" class="ul-widget4__title">
                              Great Logo Designn
                            </a>
                            <p class="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div class="ul-widget5__info">
                              <span>Author:</span>
                              <span class="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span class="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">19,200</span>
                            <span class="ul-widget5__sales text-mute"
                              >sales</span
                            >
                          </div>
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">1046</span>
                            <span class="ul-widget5__sales text-mute"
                              >votes</span
                            >
                          </div>
                        </div>
                      </div>

                      <div class="ul-widget__item ">
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__pic">
                            <img
                              class=""
                              src="@/assets/images/products/iphone-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div class="ul-widget5__section">
                            <a href="#" class="ul-widget4__title">
                              Great Logo Designn
                            </a>
                            <p class="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div class="ul-widget5__info">
                              <span>Author:</span>
                              <span class="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span class="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">29,200</span>
                            <span class="ul-widget5__sales text-mute"
                              >sales</span
                            >
                          </div>
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">4500</span>
                            <span class="ul-widget5__sales text-mute"
                              >votes</span
                            >
                          </div>
                        </div>
                      </div>

                      <div class="ul-widget__item ">
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__pic">
                            <img
                              class=""
                              src="@/assets/images/products/watch-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div class="ul-widget5__section">
                            <a href="#" class="ul-widget4__title">
                              Great Logo Designn
                            </a>
                            <p class="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div class="ul-widget5__info">
                              <span>Author:</span>
                              <span class="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span class="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div class="ul-widget5__content">
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">23,200</span>
                            <span class="ul-widget5__sales text-mute"
                              >sales</span
                            >
                          </div>
                          <div class="ul-widget5__stats">
                            <span class="ul-widget5__number">2046</span>
                            <span class="ul-widget5__sales text-mute"
                              >votes</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>

      <!-- support-tickets -->
      <b-col lg="4" md="12" xl="4" class=" mb-30">
        <b-card class="h-100">
          <div class="d-flex justify-content-between mb-4">
            <h3 class="ul-widget__head-title">
              Download Files
            </h3>
            <b-dropdown id="dropdown-1" text="Latest" variant="primary">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="ul-widget__body">
            <div class="ul-widget3">
              <div class="ul-widget3-item">
                <div class="ul-widget3-header">
                  <div class="ul-widget3-img">
                    <img
                      src="@/assets/images/faces/1.jpg"
                      id="userDropdown"
                      alt=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    />
                  </div>
                  <div class="ul-widget3-info">
                    <a href="#" class="__g-widget-username">
                      <span class="t-font-bolder">Timithy Clarkson</span>
                    </a>
                    <br />
                    <span class="ul-widget-notification-item-time">
                      2 hrs ago
                    </span>
                  </div>
                  <span class="ul-widget3-status text-success t-font-bolder">
                    Pending
                  </span>
                </div>
                <div class="ul-widget3-body">
                  <p class="ul-widget3-text text-mute">
                    Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed
                    diam nonummy nibh euismod tinciduntut laoreet doloremagna
                    aliquam erat volutpat.
                  </p>
                </div>
              </div>

              <div class="ul-widget3-item">
                <div class="ul-widget3-header">
                  <div class="ul-widget3-img">
                    <img
                      src="@/assets/images/faces/2.jpg"
                      id="userDropdown"
                      alt=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    />
                  </div>
                  <div class="ul-widget3-info">
                    <a href="#" class="__g-widget-username">
                      <span class="t-font-bolder">Jannet Clarkson</span>
                    </a>
                    <br />
                    <span class="ul-widget-notification-item-time">
                      12 hrs ago
                    </span>
                  </div>
                  <span class="ul-widget3-status text-danger t-font-bolder">
                    Decline
                  </span>
                </div>
                <div class="ul-widget3-body">
                  <p class="ul-widget3-text text-mute">
                    Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed
                    diam nonummy nibh euismod tinciduntut laoreet doloremagna
                    aliquam erat volutpat.
                  </p>
                </div>
              </div>
              <div class="ul-widget3-item">
                <div class="ul-widget3-header">
                  <div class="ul-widget3-img">
                    <img
                      src="@/assets/images/faces/3.jpg"
                      id="userDropdown"
                      alt=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    />
                  </div>
                  <div class="ul-widget3-info">
                    <a href="#" class="__g-widget-username">
                      <span class="t-font-bolder">William Shake</span>
                    </a>
                    <br />
                    <span class="ul-widget-notification-item-time">
                      Today
                    </span>
                  </div>
                  <span class="ul-widget3-status text-warning t-font-bolder">
                    Processing
                  </span>
                </div>
                <div class="ul-widget3-body">
                  <p class="ul-widget3-text text-mute">
                    Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed
                    diam nonummy nibh euismod tinciduntut laoreet doloremagna
                    aliquam erat volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>

      <!-- Sales-stats-1 -->
      <b-col lg="6" xl="6" class="mb-30">
        <b-card>
          <div class="d-flex justify-content-between mb-4">
            <h3 class="ul-widget__head-title">
              Sales Stats
            </h3>
            <b-dropdown id="dropdown-1" text="Latest" variant="primary">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="ul-widget__body">
            <div class="ul-widget-s7">
              <div class="ul-widget-s7__items">
                <span class="ul-widget-s7__item-time">10:00</span>
                <div class="ul-widget-s7__item-circle">
                  <p class="badge-dot-warning ul-widget7__big-dot"></p>
                </div>
                <div class="ul-widget-s7__item-text">
                  Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                  <br />
                  incididunt ut labore et dolore magna
                </div>
              </div>
            </div>

            <div class="ul-widget-s7">
              <div class="ul-widget-s7__items">
                <span class="ul-widget-s7__item-time">16:00 </span>
                <div class="ul-widget-s7__item-circle">
                  <p class="badge-dot-danger ul-widget7__big-dot"></p>
                </div>
                <div class="ul-widget-s7__item-text">
                  Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br />
                  incididunt ut labore et dolore magna elit enim at minim<br />
                  veniam quis nostrud
                </div>
              </div>
            </div>
            <div class="ul-widget-s7">
              <div class="ul-widget-s7__items">
                <span class="ul-widget-s7__item-time">13:00</span>
                <div class="ul-widget-s7__item-circle">
                  <p class="badge-dot-primary ul-widget7__big-dot"></p>
                </div>
                <div class="ul-widget-s7__item-text">
                  Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                  <br />
                  incididunt ut labore et dolore magna
                </div>
              </div>
            </div>
            <div class="ul-widget-s7">
              <div class="ul-widget-s7__items">
                <span class="ul-widget-s7__item-time">08:00</span>
                <div class="ul-widget-s7__item-circle">
                  <p class="badge-dot-success ul-widget7__big-dot"></p>
                </div>
                <div class="ul-widget-s7__item-text">
                  Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                  <br />
                  incididunt ut labore et dolore magna
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>

      <!-- recent-notifications -->
      <b-col lg="6" xl="6" class="mb-30">
        <b-card class="h-100">
          <div class="d-flex justify-content-between mb-4">
            <h3 class="ul-widget__head-title">
              Recent Notifications
            </h3>
            <b-dropdown id="dropdown-1" text="Latest" variant="primary">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="ul-widget__body">
            <div class="tab-content">
              <div class="tab-pane active show" id="__g-widget-s7-tab1-content">
                <div class="ul-widget-s7n">
                  <div class="ul-widget-s7__items mb-30">
                    <span class="ul-widget-s7__item-time ul-middle">10:00</span>
                    <div class="ul-widget-s7__item-circle">
                      <p class="ul-vertical-line bg-primary "></p>
                    </div>
                    <div class="ul-widget-s7__item-text">
                      Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                      <br />
                      incididunt ut labore et dolore magna
                    </div>
                  </div>

                  <div class="ul-widget-s7__items mb-30">
                    <span class="ul-widget-s7__item-time ul-middle">08:00</span>
                    <div class="ul-widget-s7__item-circle">
                      <p class="ul-vertical-line bg-success "></p>
                    </div>
                    <div class="ul-widget-s7__item-text">
                      Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                      <br />
                      incididunt ut labore et dolore magna
                    </div>
                  </div>

                  <div class="ul-widget-s7__items mb-30">
                    <span class="ul-widget-s7__item-time ul-middle">13:00</span>
                    <div class="ul-widget-s7__item-circle">
                      <p class="ul-vertical-line bg-danger "></p>
                    </div>
                    <div class="ul-widget-s7__item-text">
                      Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                      <br />
                      incididunt ut labore et dolore magna
                    </div>
                  </div>

                  <div class="ul-widget-s7__items">
                    <span class="ul-widget-s7__item-time ul-middle">05:30</span>
                    <div class="ul-widget-s7__item-circle">
                      <p class="ul-vertical-line bg-warning "></p>
                    </div>
                    <div class="ul-widget-s7__item-text">
                      Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                      <br />
                      incididunt ut labore et dolore magna
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane" id="__g-widget-s7-tab2-content">
                <div class="ul-widget-s7n">
                  <div class="ul-widget-s7__items mb-30">
                    <span class="ul-widget-s7__item-time ul-middle">12:00</span>
                    <div class="ul-widget-s7__item-circle">
                      <p class="ul-vertical-line bg-danger "></p>
                    </div>
                    <div class="ul-widget-s7__item-text">
                      Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                      <br />
                      incididunt ut labore et dolore magna
                    </div>
                  </div>

                  <div class="ul-widget-s7__items mb-30">
                    <span class="ul-widget-s7__item-time ul-middle">08:00</span>
                    <div class="ul-widget-s7__item-circle">
                      <p class="ul-vertical-line bg-info "></p>
                    </div>
                    <div class="ul-widget-s7__item-text">
                      Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                      <br />
                      incididunt ut labore et dolore magna
                    </div>
                  </div>

                  <div class="ul-widget-s7__items mb-30">
                    <span class="ul-widget-s7__item-time ul-middle">04:30</span>
                    <div class="ul-widget-s7__item-circle">
                      <p class="ul-vertical-line bg-warning "></p>
                    </div>
                    <div class="ul-widget-s7__item-text">
                      Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                      <br />
                      incididunt ut labore et dolore magna
                    </div>
                  </div>

                  <div class="ul-widget-s7__items">
                    <span class="ul-widget-s7__item-time ul-middle">05:30</span>
                    <div class="ul-widget-s7__item-circle">
                      <p class="ul-vertical-line bg-dark "></p>
                    </div>
                    <div class="ul-widget-s7__item-text">
                      Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                      <br />
                      incididunt ut labore et dolore magna
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>

      <!-- sales-stats-2 -->
      <b-col lg="4" md="12" xl="4" class=" mb-30">
        <b-card>
          <div class="d-flex justify-content-between mb-4">
            <h3 class="ul-widget__head-title">
              Sales Stats
            </h3>
            <b-dropdown id="dropdown-1" text="Latest" variant="primary">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="ul-widget__body">
            <div class="ul-widget6">
              <div class="ul-widget6__head">
                <div class="ul-widget__item">
                  <span>Scheduled</span>
                  <span>Count</span>
                  <span>Amount</span>
                </div>
              </div>
              <div class="ul-widget6__body">
                <div class="ul-widget__item">
                  <span>16/13/17</span>
                  <span>67</span>
                  <span class="t-font-boldest text-success">$14,740</span>
                </div>

                <div class="ul-widget__item">
                  <span>02/28/17</span>
                  <span>120</span>
                  <span class="t-font-boldest text-danger">$14,740</span>
                </div>

                <div class="ul-widget__item">
                  <span>02/28/17</span>
                  <span>120</span>
                  <span class="t-font-boldest text-warning">$14,740</span>
                </div>

                <div class="ul-widget__item">
                  <span>02/28/17</span>
                  <span>120</span>
                  <span class="t-font-boldest text-primary">$14,740</span>
                </div>

                <div class="ul-widget__item">
                  <span>02/28/17</span>
                  <span>120</span>
                  <span class="t-font-boldest text-dark">$14,740</span>
                </div>
              </div>
              <div class="ul-widget6-footer">
                <button type="button" class="btn btn-outline-danger m-1">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>

      <!-- payment-form -->
      <b-col lg="4" xl="4" class=" mb-30">
        <b-card title="Payment Form #01" class="h-100">
          <div class="ul-widget-list__payment-method mb-3">
            <img
              class="mr-2"
              src="@/assets/images/master-card.png"
              style="width: 50px"
              alt=""
              srcset=""
            />
            <img
              class="mr-2"
              src="@/assets/images/visa.png"
              style="width: 50px"
            />
            <img
              class="mr-2"
              src="@/assets/images/paypal.png"
              style="width: 50px"
            />
          </div>

          <b-form>
            <b-form-group label="Full Name">
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-input-group-prepend>
                  <span class="input-group-text" id="basic-addon1">
                    <i class="i-Male-21 text-18"></i>
                  </span>
                </b-input-group-prepend>
                <b-input
                  id="inline-form-input-username"
                  placeholder="Full Name"
                ></b-input>
              </b-input-group>
            </b-form-group>

            <b-form-group label="Card Number" class="mt-4">
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-input-group-prepend>
                  <span class="input-group-text" id="basic-addon1">
                    <i class="i-Credit-Card-2 text-18"></i>
                  </span>
                </b-input-group-prepend>
                <b-input
                  id="inline-form-input-username"
                  placeholder="card number"
                ></b-input>
              </b-input-group>
            </b-form-group>

            <b-row class="mt-4">
              <b-col md="4">
                <b-form-group label="Expiration">
                  <b-form-select
                    class=""
                    :value="null"
                    :options="{ '1': 'January', '2': 'Febraury', '3': 'March' }"
                    id="inline-form-custom-select-pref"
                  >
                    <option slot="first" :value="null">Month</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group style="margin-top:25px">
                  <b-form-select
                    :value="null"
                    :options="{ '1': '2018', '2': '2019', '3': '2020' }"
                    id="inline-form-custom-select-pref"
                  >
                    <option slot="first" :value="null">Year</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group label="CVV">
                  <b-form-input> </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button block variant="outline-primary mt-4">Confirm</b-button>
          </b-form>
        </b-card>
      </b-col>

      <b-col lg="4" xl="4" class=" mb-30">
        <b-card title="Latest Log">
          <div class="ul-widget-s6__items">
            <div class="ul-widget-s6__item">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-primary ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text">12 new users registered</span>
              <span class="ul-widget-s6__time">Just Now</span>
            </div>
            <div class="ul-widget-s6__item">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-success ul-widget6__dot"></p>
              </span>
              <p class="ul-widget-s6__text">
                System shutdown
                <span class="badge badge-pill badge-primary  m-2">Primary</span>
              </p>
              <span class="ul-widget-s6__time">14 mins</span>
            </div>

            <div class="ul-widget-s6__item">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-warning ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text"
                >System error -
                <a href="" class="typo_link text-danger"> Danger state text</a>
              </span>
              <span class="ul-widget-s6__time">2 hrs </span>
            </div>
            <div class="ul-widget-s6__item">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-danger ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text">12 new users registered</span>
              <span class="ul-widget-s6__time">Just Now</span>
            </div>
            <div class="ul-widget-s6__item">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-info ul-widget6__dot"></p>
              </span>
              <p class="ul-widget-s6__text">
                System shutdown
                <span class="badge badge-pill badge-success  m-2">Primary</span>
              </p>
              <span class="ul-widget-s6__time">14 mins</span>
            </div>

            <div class="ul-widget-s6__item">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-dark ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text"
                >System error -
                <a href="" class="typo_link text-danger"> Danger state text</a>
              </span>
              <span class="ul-widget-s6__time">2 hrs </span>
            </div>
            <div class="ul-widget-s6__item">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-primary ul-widget6__dot"></p>
              </span>
              <span class="ul-widget-s6__text">12 new users registered</span>
              <span class="ul-widget-s6__time">Just Now</span>
            </div>
            <div class="ul-widget-s6__item">
              <span class="ul-widget-s6__badge">
                <p class="badge-dot-success ul-widget6__dot"></p>
              </span>
              <p class="ul-widget-s6__text">
                System shutdown
                <span class="badge badge-pill badge-danger  m-2">Primary</span>
              </p>
              <span class="ul-widget-s6__time">14 mins</span>
            </div>
          </div>
        </b-card>
      </b-col>

      <!-- payment-form-2-->
      <b-col lg="4" xl="4" class=" mb-30">
        <b-card no-body title="Payment Form #2">
          <b-tabs pills card content-class="mt-3" fill>
            <b-tab active>
              <template slot="title">
                <i class="i-Credit-Card-2 text-16 mr-2 align-middle"></i> Credit
                Card
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      id="inline-form-input-username"
                      placeholder="Full Name"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group label="Card Number" class="mt-4">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Credit-Card-2 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      id="inline-form-input-username"
                      placeholder="card number"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                        class=""
                        :value="null"
                        :options="{
                          '1': 'January',
                          '2': 'Febraury',
                          '3': 'March'
                        }"
                        id="inline-form-custom-select-pref"
                      >
                        <option slot="first" :value="null">Month</option>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top:25px">
                      <b-form-select
                        :value="null"
                        :options="{ '1': '2018', '2': '2019', '3': '2020' }"
                        id="inline-form-custom-select-pref"
                      >
                        <option slot="first" :value="null">Year</option>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group label="CVV">
                      <b-form-input> </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button block variant="primary " class="mt-3">Confirm</b-button>
              </b-form>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="i-Paypal text-16 mr-2 align-middle"></i> Paypal
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      id="inline-form-input-username"
                      placeholder="Full Name"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group label="Card Number" class="mt-4">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Credit-Card-2 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      id="inline-form-input-username"
                      placeholder="card number"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                        class=""
                        :value="null"
                        :options="{
                          '1': 'January',
                          '2': 'Febraury',
                          '3': 'March'
                        }"
                        id="inline-form-custom-select-pref"
                      >
                        <option slot="first" :value="null">Month</option>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top:25px">
                      <b-form-select
                        :value="null"
                        :options="{ '1': '2018', '2': '2019', '3': '2020' }"
                        id="inline-form-custom-select-pref"
                      >
                        <option slot="first" :value="null">Year</option>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group label="CVV">
                      <b-form-input> </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button block variant="primary" class="mt-3">Confirm</b-button>
              </b-form>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="i-Bank text-16 mr-2 align-middle"></i>Bank Transaction
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      id="inline-form-input-username"
                      placeholder="Full Name"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group label="Card Number" class="mt-4">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Credit-Card-2 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input
                      id="inline-form-input-username"
                      placeholder="card number"
                    ></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                        class=""
                        :value="null"
                        :options="{
                          '1': 'January',
                          '2': 'Febraury',
                          '3': 'March'
                        }"
                        id="inline-form-custom-select-pref"
                      >
                        <option slot="first" :value="null">Month</option>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top:25px">
                      <b-form-select
                        :value="null"
                        :options="{ '1': '2018', '2': '2019', '3': '2020' }"
                        id="inline-form-custom-select-pref"
                      >
                        <option slot="first" :value="null">Year</option>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group label="CVV">
                      <b-form-input> </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button block variant="primary" class="mt-3">Confirm</b-button>
              </b-form>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>

      <b-col xl="8" lg="8" class="mb-30">
        <b-card
          border-variant="primary"
          header="Developers"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <div class="ul-widget5">
            <div class="ul-widget-s5__item mb-5">
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__pic">
                  <img
                    src="@/assets/images/faces/1.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget-s5__section">
                  <a href="#" class="ul-widget4__title ">
                    Great Logo Designn
                  </a>
                  <p class="ul-widget-s5__desc">
                    UI LIb admin themes.
                  </p>
                </div>
              </div>
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__progress">
                  <div class="ul-widget-s5__stats">
                    <span>50%</span>
                    <span>London</span>
                  </div>
                  <b-progress
                    :value="25"
                    show-value
                    variant="success"
                    striped
                    animated
                  ></b-progress>
                </div>
                <b-button variant="outline-primary">
                  Follow
                </b-button>
              </div>
            </div>
            <div class="ul-widget-s5__item mb-5">
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__pic">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget-s5__section">
                  <a href="#" class="ul-widget4__title ">
                    Great Logo Designn
                  </a>
                  <p class="ul-widget-s5__desc">
                    UI LIb admin themes.
                  </p>
                </div>
              </div>
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__progress">
                  <div class="ul-widget-s5__stats">
                    <span>75%</span>
                    <span>U.S</span>
                  </div>
                  <b-progress
                    :value="75"
                    show-value
                    variant="danger"
                    striped
                    animated
                  ></b-progress>
                </div>
                <b-button variant="outline-success">
                  Follow
                </b-button>
              </div>
            </div>
            <div class="ul-widget-s5__item mb-5">
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__pic">
                  <img
                    src="@/assets/images/faces/3.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget-s5__section">
                  <a href="#" class="ul-widget4__title ">
                    Frontend Developer
                  </a>
                  <p class="ul-widget-s5__desc">
                    UI LIb admin themes.
                  </p>
                </div>
              </div>
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__progress">
                  <div class="ul-widget-s5__stats">
                    <span>30%</span>
                    <span>Finland</span>
                  </div>
                  <b-progress
                    :value="30"
                    show-value
                    variant="warning"
                    striped
                    animated
                  ></b-progress>
                </div>

                <b-button variant="outline-danger">
                  Follow
                </b-button>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "List Widgets"
  }
};
</script>


