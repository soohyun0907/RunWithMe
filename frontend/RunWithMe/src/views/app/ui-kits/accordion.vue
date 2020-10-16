<template>
    <div class="main-content">
        <breadcumb :page="'Accordion'" :folder="'UI Kits'" />
        <b-row>
            <b-col lg="6" md="6">
                <b-card title="Accordion Group" class="mb-30">
                    <div role="tablist">
                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1"  role="tab">
                            <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-1 variant="transparent">Accordion 1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button  class="card-title mb-0" block href="#" v-b-toggle.accordion-2 variant="transparent">Accordion 2</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-3 variant="transparent">Accordion 3</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
                    </div>
                </b-card>
                <b-card title="Right control icon" class=" mb-30">
                    <div role="tablist">
                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1"  role="tab">
                            <b-button class="card-title mb-0 custom_a" block href="#" v-b-toggle.accordion-4 variant="transparent">Accordion 1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button  class="card-title mb-0" block href="#" v-b-toggle.accordion-5 variant="transparent">Accordion 2</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-6 variant="transparent">Accordion 3</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="6" md="6">
                <b-card title="With Icons" class="mb-30">
                    <div role="tablist">
                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1 header-elements-inline"  role="tab">
                            <b-button class="card-title mb-0 " block href="#" v-b-toggle.accordion-2-1 variant="transparent">
                               <span><i class="i-Big-Data text-18 font-weight-500 mr-1"> </i></span> Accordion 1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button  class="card-title mb-0" block href="#" v-b-toggle.accordion-2-2 variant="transparent">
                                <span><i class="i-Data-Settings text-18 font-weight-500 mr-1"> </i></span>
                                Accordion 2
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-2-3 variant="transparent">
                                 <span><i class="i-Bell1 text-18 font-weight-500 mr-1"> </i></span>
                                Accordion 3
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
                    </div>
                </b-card>

                <b-card title="Without Right Icons" class="mb-30">
                    <div role="tablist">
                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1 header-elements-inline"  role="tab">
                            <b-button class="card-title mb-0 " block href="#" v-b-toggle.accordion-2-4 variant="transparent">
                               <span><i class="i-Big-Data text-18 font-weight-500 mr-1"> </i></span> Accordion 1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2-4" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button  class="card-title mb-0" block href="#" v-b-toggle.accordion-2-5 variant="transparent">
                                <span><i class="i-Data-Settings text-18 font-weight-500 mr-1"> </i></span>
                                Accordion 2
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2-5" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="ul-card__border-radius">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-2-6 variant="transparent">
                                 <span><i class="i-Bell1 text-18 font-weight-500 mr-1"> </i></span>
                                Accordion 3
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2-6" accordion="my-accordion" role="tabpanel">
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
       metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Accordion"
  },
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
      }
    }
  }
</script>
<style scoped>
   
</style>
