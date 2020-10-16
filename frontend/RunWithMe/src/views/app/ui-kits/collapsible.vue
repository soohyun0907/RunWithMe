<template>
  <div class="main-content">
    <breadcumb :page="'Collapsible'" :folder="'UI Kits'" />

    <b-row>
      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Inline or block element</h5>

            <a
              class="t-font-boldest text-primary ul-cursor--pointer"
              v-b-toggle.collapse-a
            >
              Toggle Content
            </a>
          </div>

          <b-collapse id="collapse-a" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>

      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Text and other links</h5>

            <a
              class="font-weight-semibold typo_link text-primary t-font-boldest text-primary "
              v-b-toggle.collapse-b
            >
              Toggle content
            </a>
          </div>
          <b-collapse id="collapse-b" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>

      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Single or multiple icons</h5>

            <a class="text-default collapsed" v-b-toggle.collapse-c>
              <i class="i-Arrow-Down-2 t-font-boldest text-primary"></i>
            </a>
          </div>
          <b-collapse id="collapse-c" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>

      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Link with href</h5>

            <a class="btn btn-primary text-white" v-b-toggle.collapse-d>
              Toggle content
            </a>
          </div>
          <b-collapse id="collapse-d" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>

      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Button with data attribute</h5>

            <button type="button" class="btn btn-primary" v-b-toggle.collapse-e>
              Toggle content
            </button>
          </div>
          <b-collapse id="collapse-e" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>
      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Button with data attribute</h5>

            <button type="button" class="btn btn-primary" v-b-toggle.collapse-f>
              Toggle content
            </button>
          </div>
          <b-collapse id="collapse-f" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>
      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Button with data attribute</h5>

            <button type="button" class="btn btn-primary" v-b-toggle.collapse-f>
              Toggle content
            </button>
          </div>
          <b-collapse id="collapse-f" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>
      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Button with data attribute</h5>

            <button type="button" class="btn btn-primary" v-b-toggle.collapse-f>
              Toggle content
            </button>
          </div>
          <b-collapse id="collapse-f" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>
      <b-col lg="4" class="mb-30">
        <b-card class="ul-border__bottom">
          <div class="text-center">
            <h5 class="card-title text-primary">Button with data attribute</h5>

            <button type="button" class="btn btn-primary" v-b-toggle.collapse-f>
              Toggle content
            </button>
          </div>
          <b-collapse id="collapse-f" class="mt-3 text-center">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Collapsible"
  }
};
</script>

