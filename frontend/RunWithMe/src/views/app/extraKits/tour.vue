<template>
  <div class="main-content">
    <breadcumb :page="'Tour'" :folder="'Extra Kits'" />

    <b-row>
      <b-col md="6 mb-30">
        <b-row>
          <b-col md="6 mb-30">
            <b-card title="Step One">
              <div>
                <div id="v-step-0">
                  A DOM element on your page. The first step will pop on this
                  element because its ID is 'v-step-0'.
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col md="6 mb-30">
            <b-card title="Step Two" class="v-step-1">
              <div>
                <div>
                  A DOM element on your page. The second step will pop on this
                  element because its ID is 'v-step-1'.
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col md="6 mb-30">
            <b-card title="Step Three">
              <div>
                <div data-v-step="2">
                  A DOM element on your page. The third and final step will pop
                  on this element because its ID is 'v-step-2'.
                </div>
              </div>
            </b-card>
          </b-col>
          <v-tour name="myTour" class="tour-z" :steps="steps"></v-tour>
        </b-row>
      </b-col>
      <b-col md="6">
        <b-card title="Create Your Own Tour">
          <div>
            <pre>
                            <code>
                                export default {
                                                name: 'my-tour',
                                                data () {
                                                return {
                                                    steps: [
                                                    {
                                                        target: '#v-step-0',  // We're using document.querySelector() under the hood
                                                        content: `Discover <strong>Vue Tour</strong>!`
                                                    },
                                                    {
                                                        target: '.v-step-1',
                                                        content: 'An awesome plugin made with Vue.js!'
                                                    },
                                                    {
                                                        target: '[data-v-step="2"]',
                                                        content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
                                                        params: {
                                                        placement: 'top'
                                                        }
                                                    }
                                                    ]
                                                }
                                                },
                                                mounted: function () {
                                                this.$tours['myTour'].start()
                                                }
                                            }
                            </code>
                        </pre>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import "vue-tour/dist/vue-tour.css";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Tour"
  },
  name: "my-tour",
  data() {
    return {
      steps: [
        {
          target: "#v-step-0", // We're using document.querySelector() under the hood
          content: `Discover <strong>Vue Tour</strong>!`,
          params: {
            placement: "top"
          }
        },
        {
          target: ".v-step-1",
          content: "An awesome plugin made with Vue.js!",
          params: {
            placement: "top"
          }
        },
        {
          target: '[data-v-step="2"]',
          content:
            "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
          params: {
            placement: "top"
          }
        }
      ]
    };
  },
  mounted: function() {
    this.$tours["myTour"].start();
  }
};
</script> 
<style>
</style>
