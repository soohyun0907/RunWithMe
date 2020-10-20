<template>
  <div class="main-content">
    <breadcumb :page="'Inbox'" :folder="'Apps'" />
    <div class="inbox-main-sidebar-container sidebar-container">
      <div class="inbox-main-content sidebar-content" style="">
        <!-- SECONDARY SIDEBAR CONTAINER -->
        <div
          class="inbox-secondary-sidebar-container box-shadow-1 sidebar-container"
        >
          <div class="sidebar-content" style="">
            <div
              class="inbox-secondary-sidebar-content position-relative"
              style="min-height: 500px"
            >
              <div class="inbox-topbar box-shadow-1 perfect-scrollbar pl-3 ps">
                <!-- <span class="d-sm-none">Test</span> -->
                <a class="link-icon d-md-none">
                  <i class="icon-regular i-Arrow-Turn-Left"></i>
                </a>
                <a class="link-icon mr-1 d-md-none">
                  <i class="icon-regular mr-1 i-Left-3"></i>
                  Inbox
                </a>

                <div class="d-flex">
                  <a href="" class="link-icon mr-1"
                    ><i class="icon-regular i-Mail-Reply"></i> Reply</a
                  >
                  <a href="" class="link-icon mr-1"
                    ><i class="icon-regular i-Mail-Reply-All"></i> Forward</a
                  >
                  <a href="" class="link-icon mr-1 d-none d-sm-flex"
                    ><i class="icon-regular i-Mail-Reply-All"></i> Delete</a
                  >
                </div>
                <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                  <div
                    class="ps__thumb-x"
                    tabindex="0"
                    style="left: 0px; width: 0px;"
                  ></div>
                </div>
                <div class="ps__rail-y" style="top: 0px; right: 0px;">
                  <div
                    class="ps__thumb-y"
                    tabindex="0"
                    style="top: 0px; height: 0px;"
                  ></div>
                </div>
              </div>
              <!-- EMAIL DETAILS -->
              <div class="inbox-details perfect-scrollbar ps">
                <div class="row no-gutters">
                  <div class="mr-2" style="width: 36px">
                    <img
                      class="rounded-circle"
                      src="@/assets/images/faces/1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="col-xs-12">
                    <p class="m-0">Jhon Doe</p>
                    <p class="text-12 text-muted">20 Dec, 2018</p>
                  </div>
                </div>
                <h4 class="mb-3">Confirm your email</h4>
                <div>
                  <p>
                    Natus consequuntur perspiciatis esse beatae illo quos eaque.
                  </p>
                  <p>
                    Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit
                    odit, ipsam iusto enim culpa, temporibus vero possimus error
                    voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime
                    animi excepturi a dignissimos doloribus, inventore sed
                    ratione, ducimus atque earum maiores tenetur officia commodi
                    dicta tempora consequatur non nesciunt ipsam, consequuntur
                    quia fuga aspernatur impedit et? Natus, earum.
                  </p>
                  <blockquote class="blockquote">
                    Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit
                    odit, ipsam iusto enim culpa, temporibus vero possimus error
                    voluptates sequi.
                  </blockquote>
                  <p>
                    Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit
                    odit, ipsam iusto enim culpa, temporibus vero possimus error
                    voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime
                    animi excepturi a dignissimos doloribus, inventore sed
                    ratione, ducimus atque earum maiores tenetur officia commodi
                    dicta tempora consequatur non nesciunt ipsam, consequuntur
                    quia fuga aspernatur impedit et? Natus, earum.
                  </p>
                  <br />
                  Thanks<br />
                  Jhone
                </div>
                <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                  <div
                    class="ps__thumb-x"
                    tabindex="0"
                    style="left: 0px; width: 0px;"
                  ></div>
                </div>
                <div class="ps__rail-y" style="top: 0px; right: 0px;">
                  <div
                    class="ps__thumb-y"
                    tabindex="0"
                    style="top: 0px; height: 0px;"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Secondary Inbox sidebar -->
          <div
            class="inbox-secondary-sidebar perfect-scrollbar ps sidebar"
            style=""
          >
            <i class="sidebar-close i-Close"></i>

            <div class="mail-item">
              <div class="avatar">
                <img src="@/assets/images/faces/1.jpg" alt="" />
              </div>
              <div class="col-xs-6 details">
                <span class="name text-muted">John Doe</span>
                <p class="m-0">Confirm your email</p>
              </div>
              <div class="col-xs-3 date">
                <span class="text-muted">20 Dec 2018</span>
              </div>
            </div>

            <div class="mail-item">
              <div class="avatar">
                <img src="@/assets/images/faces/5.jpg" alt="" />
              </div>
              <div class="col-xs-6 details">
                <span class="name text-muted">John Doe</span>
                <p class="m-0">Confirm your email</p>
              </div>
              <div class="col-xs-3 date">
                <span class="text-muted">20 Dec 2018</span>
              </div>
            </div>
            <div class="mail-item">
              <div class="avatar">
                <img src="@/assets/images/faces/2.jpg" alt="" />
              </div>
              <div class="col-xs-6 details">
                <span class="name text-muted">John Doe</span>
                <p class="m-0">Confirm your email</p>
              </div>
              <div class="col-xs-3 date">
                <span class="text-muted">20 Dec 2018</span>
              </div>
            </div>
            <div class="mail-item">
              <div class="avatar">
                <img src="@/assets/images/faces/3.jpg" alt="" />
              </div>
              <div class="col-xs-6 details">
                <span class="name text-muted">John Doe</span>
                <p class="m-0">Confirm your email</p>
              </div>
              <div class="col-xs-3 date">
                <span class="text-muted">20 Dec 2018</span>
              </div>
            </div>
            <div class="mail-item">
              <div class="avatar">
                <img src="@/assets/images/faces/4.jpg" alt="" />
              </div>
              <div class="col-xs-6 details">
                <span class="name text-muted">John Doe</span>
                <p class="m-0">Confirm your email</p>
              </div>
              <div class="col-xs-3 date">
                <span class="text-muted">20 Dec 2018</span>
              </div>
            </div>
            <div class="mail-item">
              <div class="avatar">
                <img src="@/assets/images/faces/5.jpg" alt="" />
              </div>
              <div class="col-xs-6 details">
                <span class="name text-muted">John Doe</span>
                <p class="m-0">Confirm your email</p>
              </div>
              <div class="col-xs-3 date">
                <span class="text-muted">20 Dec 2018</span>
              </div>
            </div>
            <div class="mail-item">
              <div class="avatar">
                <img src="@/assets/images/faces/4.jpg" alt="" />
              </div>
              <div class="col-xs-6 details">
                <span class="name text-muted">John Doe</span>
                <p class="m-0">Confirm your email</p>
              </div>
              <div class="col-xs-3 date">
                <span class="text-muted">20 Dec 2018</span>
              </div>
            </div>
            <div class="mail-item">
              <div class="avatar">
                <img src="@/assets/images/faces/9.jpg" alt="" />
              </div>
              <div class="col-xs-6 details">
                <span class="name text-muted">John Doe</span>
                <p class="m-0">Confirm your email</p>
              </div>
              <div class="col-xs-3 date">
                <span class="text-muted">20 Dec 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN INBOX SIDEBAR -->
      <div
        data-sidebar="main"
        data-sidebar-position="left"
        class="inbox-main-sidebar sidebar"
        style=""
      >
        <div class="pt-3 pr-3 pb-3">
          <i class="sidebar-close i-Close" data-sidebar-toggle="main"></i>

          <div>
            <b-button
              block
              class="btn-rounded mb-30"
              variant="primary"
              v-b-modal.modal-1
              >Compose</b-button
            >

            <b-modal id="modal-1" size="lg" title="BootstrapVue">
              <b-form>
                <b-form-group>
                  <b-form-input type="email" placeholder="Email">
                  </b-form-input>
                </b-form-group>
                <vue-editor></vue-editor>
              </b-form>
            </b-modal>
          </div>

          <p class="text-muted mb-2">Browse</p>
          <ul class="inbox-main-nav">
            <li>
              <a href="" class="active"
                ><i class="icon-regular i-Mail-2"></i> Inbox (2)</a
              >
            </li>
            <li>
              <a href=""><i class="icon-regular i-Mail-Outbox"></i> Sent</a>
            </li>
            <li>
              <a href=""
                ><i class="icon-regular i-Mail-Favorite"></i> Starred</a
              >
            </li>
            <li>
              <a href=""><i class="icon-regular i-Folder-Trash"></i> Trash</a>
            </li>
            <li>
              <a href=""><i class="icon-regular i-Spam-Mail"></i> Spam</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Inbox"
  },
  components: {
    VueEditor
  },

  data() {
    return {
      content: "<h1>Some initial content</h1>"
    };
  },
  methods: {
    editor() {}
  }
};
</script>