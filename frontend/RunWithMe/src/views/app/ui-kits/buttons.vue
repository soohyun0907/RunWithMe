<template>
    <div class="main-content">
        <breadcumb :page="'Buttons'" :folder="'UI Kits'" />
        <div class="row">
            <!-- begin::default-buttons -->
            <b-col md="6">
                <b-card title="Default Buttons" class="mb-30">
                    <b-button variant="primary ripple m-1">Primary</b-button>
                    <b-button variant="success m-1">Success</b-button>
                    <b-button variant="danger m-1">Danger</b-button>
                    <b-button variant="warning m-1">Warning</b-button>
                    <b-button variant="info m-1">Info</b-button>
                    <b-button variant="light m-1">Light</b-button>
                    <b-button variant="dark m-1">Dark</b-button>
                </b-card>
            </b-col>

            <!-- begin::round-buttons -->
            <b-col md="6">
                <b-card title="Buttons Rounded " class="mb-30">
                    <b-button pill variant="primary ripple m-1">Primary</b-button>
                    <b-button pill variant="success m-1">Success</b-button>
                    <b-button pill variant="danger m-1">Danger</b-button>
                    <b-button pill variant="warning m-1">Warning</b-button>
                    <b-button pill variant="info m-1">Info</b-button>
                    <b-button pill variant="light m-1">Light</b-button>
                    <b-button pill variant="dark m-1">Dark</b-button>
                </b-card>
            </b-col>

            <!-- begin::button-raised -->
            <b-col md="6">
                <b-card title="Buttons Raised" class="mb-30">
                    <b-button variant="primary ripple m-1">Primary</b-button>
                    <b-button variant="success m-1">Success</b-button>
                    <b-button variant="danger m-1">Danger</b-button>
                    <b-button variant="warning m-1">Warning</b-button>
                    <b-button variant="info m-1">Info</b-button>
                    <b-button variant="light m-1">Light</b-button>
                    <b-button variant="dark m-1">Dark</b-button>
                </b-card>
            </b-col>

            <!-- begin::buttons-outline -->
            <b-col md="6">
                <b-card title="Buttons Outline" class="mb-30">
                    <b-button variant="outline-primary ripple m-1">Primary</b-button>
                    <b-button variant="outline-success m-1">Success</b-button>
                    <b-button variant="outline-danger m-1">Danger</b-button>
                    <b-button variant="outline-warning m-1">Warning</b-button>
                    <b-button variant="outline-info m-1">Info</b-button>
                    <b-button variant="outline-light m-1">Light</b-button>
                    <b-button variant="outline-dark m-1">Dark</b-button>
                </b-card>
            </b-col>

            <!-- begin::button-block -->
            <b-col md="6">
                <b-card title="Button block" class="mb-30">
                    <b-button block variant="primary">Primary</b-button>
                    <b-button block variant="success">Success</b-button>
                    <b-button block variant="warning">Warning</b-button>
                </b-card>
            </b-col>


            <!-- begin::large/small buttons -->
            <b-col md="6">
                <b-card title="Large & Small Buttons" class="mb-30">
                    <div class="mb-1">
                        <b-button size="sm" variant="primary  m-1">Primary</b-button>
                        <b-button size="sm" variant="success  m-1">Success</b-button>
                        <b-button size="sm" variant="warning  m-1">Warning</b-button>
                    </div>
                    <div class="mb-1">
                        <b-button size="lg" variant="primary  m-1">Primary</b-button>
                        <b-button size="lg" variant="success  m-1">Success</b-button>
                        <b-button size="lg" variant="warning  m-1">Warning</b-button>
                    </div>
                    <div class="mb-1">
                        <b-button size="xl" variant="primary  m-1">Primary</b-button>
                        <b-button size="xl" variant="success  m-1">Success</b-button>
                        <b-button size="xl" variant="warning  m-1">Warning</b-button>
                    </div>
                </b-card>
            </b-col>

            <b-col md="6">
                <b-card title="Styles-Button with Icons" class="mb-30">
                    <div class="mb-30">
                        <b-button variant="primary ripple btn-icon m-1">
                            <span class="ul-btn__icon"><i class="i-Gear-2"></i></span>
                            <span class="ul-btn__text ml-1">With Icon</span>
                        </b-button>
                        <b-button variant="info btn-icon ripple m-1">
                            <span class="ul-btn__icon"><i class="i-RSS"></i></span>
                        </b-button>
                        <b-button variant="success m-1">
                            Button
                        </b-button>
                        <b-button variant="outline-danger m-1">
                            <span class="ul-btn__icon" ><i class="i-Shutter"></i></span>
                        </b-button>
                        <b-button variant="warning m-1">
                            <span class="ul-btn__icon"><i class="i-Atom"></i></span>
                            <span class="ul-btn__text ml-2">Atom</span>
                        </b-button>

                    </div>
                </b-card>
            </b-col>

            <b-col  md="6">
                <b-card title="Buttons Ripples" class="mb-30">
                    <b-button variant="primary ripple m-1">Primary</b-button>
                    <b-button variant="secondary ripple m-1">Secondary</b-button>
                    <b-button variant="success ripple m-1">Success</b-button>
                    <b-button variant="danger ripple m-1">Danger</b-button>
                    <b-button variant="warning ripple m-1">Warning</b-button>
                    <b-button variant="info ripple m-1">Info</b-button>
                </b-card>
            </b-col>

            <b-col md="6">
                <b-card title="Button Group" class="mb-30">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <b-button  variant="secondary">Left</b-button>
                        <b-button  variant="secondary">Middle</b-button>
                        <b-button  variant="secondary">Right</b-button>
                    </div>
                </b-card>

                <b-card title="Social" class="mb-30">
                    <div class="ul-bottom__line mb-30">
                                <button type="button" variant="primary" class="btn btn-facebook btn-icon m-1 ">
                                      <span class="ul-btn__icon"><i class="i-Facebook-2"></i></span>
                                      <span class="ul-btn__text">Facebook</span>
                                  </button>
                                <button type="button" class="btn btn-google btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Google-Plus"></i></span>
                                      <span class="ul-btn__text ml-2">Google +</span>
                                  </button>

                                <button type="button" class="btn btn-twitter btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Twitter"></i></span>
                                      <span class="ul-btn__text ml-2">Twitter</span>
                                  </button>

                                <button type="button" class="btn btn-instagram btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Instagram"></i></span>
                                      <span class="ul-btn__text  ml-2">Instagram</span>
                                  </button>

                                <button type="button" class="btn btn-linkedin btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Linkedin-2"></i></span>
                                      <span class="ul-btn__text  ml-2">Linkedin</span>
                                  </button>

                                <button type="button" class="btn btn-dribble btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Dribble"></i></span>
                                      <span class="ul-btn__text ml-2">Dribble</span>
                                  </button>

                                <button type="button" class="btn btn-youtube btn-icon m-1">
                                          <span class="ul-btn__icon"><i class="i-Youtube"></i></span>
                                          <span class="ul-btn__text ml-2">Youtube</span>
                                      </button>
                    </div>

                    <div class="ul-bottom__line mb-30">
                                <button type="button" class="btn btn-facebook btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Facebook-2"></i></span>
                                  </button>
                                <button type="button" class="btn btn-google btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Google-Plus"></i></span>
                                  </button>
                                <button type="button" class="btn btn-twitter btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Twitter"></i></span>
                                  </button>
                                <button type="button" class="btn btn-instagram btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Instagram"></i></span>
                                  </button>
                                <button type="button" class="btn btn-linkedin btn-icon m-1">
                                      <span class="ul-btn__icon"><i class="i-Linkedin-2"></i></span>
                                  </button>
                                <button type="button" class="btn btn-dribble btn-icon m-1">
                                          <span class="ul-btn__icon"><i class="i-Dribble"></i></span>
                                  </button>
                                <button type="button" class="btn btn-youtube btn-icon m-1">
                                          <span class="ul-btn__icon"><i class="i-Youtube"></i></span>
                                  </button>


                            </div>

                    <div class="ul-bottom__line mb-30">
                                <button type="button" class="btn round btn-facebook btn-icon rounded-circle m-1">
                                          <span class="ul-btn__icon"><i class="i-Facebook-2"></i></span>
                                      </button>
                                <button type="button" class="btn round btn-google btn-icon rounded-circle m-1">
                                          <span class="ul-btn__icon"><i class="i-Google-Plus"></i></span>
                                      </button>
                                <button type="button" class="btn round btn-twitter btn-icon rounded-circle m-1">
                                          <span class="ul-btn__icon"><i class="i-Twitter"></i></span>
                                      </button>
                                <button type="button" class="btn round btn-instagram btn-icon rounded-circle m-1">
                                          <span class="ul-btn__icon"><i class="i-Instagram"></i></span>
                                      </button>
                                <button type="button" class="btn round btn-linkedin btn-icon rounded-circle m-1">
                                          <span class="ul-btn__icon"><i class="i-Linkedin-2"></i></span>
                                      </button>
                                <button type="button" class="btn round btn-dribble btn-icon rounded-circle m-1">
                                              <span class="ul-btn__icon"><i class="i-Dribble"></i></span>
                                      </button>
                                <button type="button" class="btn btn-youtube btn-icon rounded-circle m-1">
                                              <span class="ul-btn__icon"><i class="i-Youtube"></i></span>
                                      </button>


                            </div>
                </b-card>
            </b-col>

            
        </div>
    </div>
</template>

<script>
export default {
     metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Buttons"
  },
}
</script>

