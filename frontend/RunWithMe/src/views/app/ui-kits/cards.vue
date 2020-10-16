<template>
  <div class="main-content">
    <breadcumb :page="'Card'" :folder="'UI Kits'" />

    <b-row>
      <!-- ICON BG -->
      <b-col xl="3" md="6" sm="6">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Add-User"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">New Leads</p>
            <p class="text-primary text-24 line-height-1 mb-2">205</p>
          </div>
        </b-card>
      </b-col>
      <b-col xl="3" md="6" sm="6">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Financial"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Sales</p>
            <p class="text-primary text-24 line-height-1 mb-2">$4021</p>
          </div>
        </b-card>
      </b-col>
      <b-col xl="3" md="6" sm="6">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Checkout-Basket"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Orders</p>
            <p class="text-primary text-24 line-height-1 mb-2">80</p>
          </div>
        </b-card>
      </b-col>
      <b-col xl="3" md="6" sm="6">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Money-2"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Expense</p>
            <p class="text-primary text-24 line-height-1 mb-2">$120</p>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <!-- start::left-side -->
      <b-col xl="6">
        <b-row>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon text-center mb-30">
              <i class="i-Data-Upload"></i>
              <p class="text-muted mt-2 mb-2">Today's Upload</p>
              <p class="text-primary text-24 line-height-1 m-0">21</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon text-center mb-30">
              <i class="i-Add-User"></i>
              <p class="text-muted mt-2 mb-2">New Users</p>
              <p class="text-primary text-24 line-height-1 m-0">21</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon text-center mb-30">
              <i class="i-Money-2"></i>
              <p class="text-muted mt-2 mb-2">Total sales</p>
              <p class="text-primary text-24 line-height-1 m-0">4021</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon-big text-center mb-30">
              <i class="i-Money-2"></i>
              <p class="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon-big text-center mb-30">
              <i class="i-Gear"></i>
              <p class="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
            </b-card>
          </b-col>
          <b-col lg="4" md="6" sm="6">
            <b-card class="card-icon-big text-center mb-30">
              <i class="i-Bell"></i>
              <p class="line-height-1 text-title text-18 mt-2 mb-0">4021</p>
            </b-card>
          </b-col>

          <b-col md="6">
            <!-- start::profile -->
            <b-card class="card-profile-1 mb-30 text-center">
              <div class="avatar box-shadow-2 mb-3">
                <img src="@/assets/images/faces/16.jpg" alt />
              </div>
              <h5 class="m-0">Jassica Hike</h5>
              <p class="mt-0 text-muted">UI/UX Designer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae cumque.
              </p>
              <button class="btn btn-primary btn-rounded">
                Contact Jassica
              </button>
              <div class="card-socials-simple mt-4">
                <a href>
                  <i class="i-Linkedin-2"></i>
                </a>
                <a href>
                  <i class="i-Facebook-2"></i>
                </a>
                <a href>
                  <i class="i-Twitter"></i>
                </a>
              </div>
            </b-card>

            <b-card
              class=" mb-30 text-15"
              header="Featured"
              title="Card title text"
            >
              <b-card-text
                >With supporting text below as a natural lead-in to additional
                content.</b-card-text
              >
              <b-button pill variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col md="6">
            <!-- <b-card no-body class="card bg-dark text-white o-hidden mb-30">
              <img src="@/assets/images/photo-wide-2.jpg" alt />
              <div class="card-img-overlay">
                <h5 class="card-title text-white">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </b-card> -->

            <b-card class=" mb-30" title="Card title">
              <b-card-text
                >Some quick example text to build on the card title and make up
                the bulk of the card's content.</b-card-text
              >
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <!-- start::right-side -->
      <b-col xl="6">
        <div class="row">
          <b-col md="6">
            <b-card no-body class="bg-dark text-white o-hidden mb-30">
              <img src="@/assets/images/photo-long-1.jpg" alt />
              <div class="card-img-overlay">
                <div class="text-center pt-4">
                  <h5 class="card-title mb-2 text-white">Card title</h5>
                  <div class="separator border-top mb-2"></div>
                  <p class="text-small font-italic">Last updated 3 mins ago</p>
                </div>
                <div class="p-1 text-left card-footer font-weight-light d-flex">
                  <span class="mr-3 d-flex align-items-center">
                    <i class="i-Speach-Bubble-6 mr-1"></i>
                    12
                  </span>
                  <span class="d-flex align-items-center">
                    <i class="i-Calendar-4 mr-2"></i>03.12.2018
                  </span>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card no-body class="bg-dark text-white o-hidden mb-30">
              <img src="@/assets/images/photo-long-2.jpg" alt />
              <div class="card-img-overlay">
                <div class="text-center pt-4">
                  <h5 class="card-title mb-2 text-white">Card title</h5>
                  <div class="separator border-top mb-2"></div>
                  <p class="text-small font-italic">Last updated 3 mins ago</p>
                </div>
                <div class="p-1 text-left card-footer font-weight-light d-flex">
                  <span class="mr-3 d-flex align-items-center">
                    <i class="i-Speach-Bubble-6 mr-1"></i>
                    12
                  </span>
                  <span class="d-flex align-items-center">
                    <i class="i-Calendar-4 mr-2"></i>03.12.2018
                  </span>
                </div>
              </div>
            </b-card>
          </b-col>

          <b-col md="6">
            <div class="card mb-30 o-hidden">
              <img
                class="card-img-top"
                src="@/assets/images/photo-wide-2.jpg"
                alt
              />
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum, cumque!
                </p>
              </div>
            </div>
          </b-col>

          <b-col md="6">
            <div class="card mb-30 o-hidden">
              <img
                class="card-img-top"
                src="@/assets/images/photo-wide-3.jpg"
                alt
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </b-col>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Cards"
  }
};
</script>

