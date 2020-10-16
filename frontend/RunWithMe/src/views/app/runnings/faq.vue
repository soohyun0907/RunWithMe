<template>
  <div class="main-content">
    <breadcumb :page="'FAQ'" :folder="'App'" />

    <b-row class="mb-30">
      <b-col lg="12" xl="12">
        <b-card>
          <b-row class="justify-content-md-center mb-30">
            <b-col lg="10" xl="10">
              <div class="ul-faq__details">
                <h3 class="headding t-font-bold">Do you have any questions ?</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-transparent" id="basic-addon1">
                      <i class="i-Search-People"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="search..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="mb-30">
      <b-col lg="4" xl="4" class="mb-30">
        <b-card>
          <div class="ul-faq__list-detailst">
            <div class="card-title">List of Table</div>
            <div class="ul-widget-s6__items">
              <div class="ul-widget-s6__item">
                <span class="ul-widget-s6__badge">
                  <p class="badge-dot-primary ul-widget6__dot"></p>
                </span>
                <span class="ul-widget-s6__text">
                  <a href>Customer Product</a>
                </span>
              </div>
              <div class="ul-widget-s6__item">
                <span class="ul-widget-s6__badge">
                  <p class="badge-dot-success ul-widget6__dot"></p>
                </span>
                <span class="ul-widget-s6__text">
                  <a href>Brand Name</a>
                </span>
              </div>

              <div class="ul-widget-s6__item">
                <span class="ul-widget-s6__badge">
                  <p class="badge-dot-warning ul-widget6__dot"></p>
                </span>
                <span class="ul-widget-s6__text">
                  <a href>New Brand</a>
                </span>
              </div>
              <div class="ul-widget-s6__item">
                <span class="ul-widget-s6__badge">
                  <p class="badge-dot-danger ul-widget6__dot"></p>
                </span>
                <span class="ul-widget-s6__text">
                  <a href>New Product</a>
                </span>
              </div>
            </div>
          </div>
        </b-card>
        <b-card class="mt-4">
          <div class="card-title">Supporters</div>
          <div class="ul-widget1">
            <div class="ul-widget4__item ul-widget4__users">
              <div class="ul-widget4__img">
                <img
                  src="@/assets/images/faces/1.jpg"
                  id="userDropdown"
                  alt
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
              </div>
              <div class="ul-widget2__info ul-widget4__users-info">
                <a href="#" class="ul-widget2__title">Anna Strong</a>
                <span href="#" class="ul-widget2__username">Visual Designer,Google Inc</span>
              </div>
            </div>

            <div class="ul-widget4__item ul-widget4__users">
              <div class="ul-widget4__img">
                <img
                  src="@/assets/images/faces/2.jpg"
                  id="userDropdown"
                  alt
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
              </div>
              <div class="ul-widget2__info ul-widget4__users-info">
                <a href="#" class="ul-widget2__title">Anna Strong</a>
                <span href="#" class="ul-widget2__username">Visual Designer,Google Inc</span>
              </div>
            </div>

            <div class="ul-widget4__item ul-widget4__users">
              <div class="ul-widget4__img">
                <img
                  src="@/assets/images/faces/3.jpg"
                  id="userDropdown"
                  alt
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
              </div>
              <div class="ul-widget2__info ul-widget4__users-info">
                <a href="#" class="ul-widget2__title">Anna Strong</a>
                <span href="#" class="ul-widget2__username">Visual Designer,Google Inc</span>
              </div>
            </div>

            <div class="ul-widget4__item ul-widget4__users">
              <div class="ul-widget4__img">
                <img
                  src="@/assets/images/faces/4.jpg"
                  id="userDropdown"
                  alt
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
              </div>
              <div class="ul-widget2__info ul-widget4__users-info">
                <a href="#" class="ul-widget2__title">Anna Strong</a>
                <span href="#" class="ul-widget2__username">Visual Designer,Google Inc</span>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col lg="8" xl="8" class="mb-30">
        <b-card>
          <div role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-1 variant="primary">Accordion 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    I start opened because
                    <code>visible</code> is
                    <code>true</code>
                  </b-card-text>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-2 variant="primary">Accordion 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-3 variant="primary">Accordion 3</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    };
  }
};
</script>