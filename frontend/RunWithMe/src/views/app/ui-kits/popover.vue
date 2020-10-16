<template>
  <div class="main-content">
    <breadcumb :page="'Popover'" :folder="'UI Kits'" />

    <b-row>
      <b-col md="6" class=" mb-30">
        <b-card title="Example">
          <div class=" my-3">
            <b-button
              variant="danger"
              v-b-popover.hover="'I am popover content!'"
              title="Popover Title"
              >Hover Me</b-button
            >
          </div>
        </b-card>
      </b-col>
      <b-col md="6" class=" mb-30">
        <b-card title="Example Two">
          <b-button
            id="popover-button-sync"
            class="mb-4 "
            variant="success"
            >I have a popover</b-button
          >

          <b-button class="p-2 mb-4" @click="show = !show">Toggle Popover</b-button>

          <b-popover
            :show.sync="show"
            target="popover-button-sync"
            title="Popover"
          >
            Hello <strong>World!</strong>
          </b-popover>
        </b-card>
      </b-col>

      <b-col md="12" class=" mb-30">
        <b-card title="Four Directions (HOVER)">
          <b-row class="text-left">
            <b-col md="2" sm="6" class="mb-4">
              <b-button v-b-popover.hover.top="'Popover!'" variant="primary"
                >Top</b-button
              >
            </b-col>

            <b-col md="2" sm="6" class="mb-4">
              <b-button v-b-popover.hover.right="'Popover!'" variant="success"
                >Right</b-button
              >
            </b-col>

            <b-col md="2" sm="6" class="mb-4">
              <b-button v-b-popover.hover.left="'Popover!'" variant="danger"
                >Left</b-button
              >
            </b-col>

            <b-col md="2" sm="6" class="mb-4">
              <b-button v-b-popover.hover.bottom="'ToolTip!'" variant="warning"
                >Bottom</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="12" class=" mb-30">
        <b-card title="Placement">
          <b-row>
            <b-col
              v-for="placement in placements"
              :key="placement"
              md="2"
              sm="6"
              class="mb-4 text-left"
            >
              <b-button :id="`popover-1-${placement}`" variant="primary">{{
                placement
              }}</b-button>
              <b-popover
                :target="`popover-1-${placement}`"
                :placement="placement"
                title="Popover!"
                triggers="hover focus"
                :content="`Placement ${placement}`"
              ></b-popover>
            </b-col>
          </b-row>

          <h5 class="my-3">Content via properties or slots</h5>
          <b-row>
            <b-col md="2" sm="6" class="mb-4 text-left">
              <b-button id="popover-2" variant="primary"
                >Using properties</b-button
              >
              <b-popover
                target="popover-2"
                title="Prop Examples"
                triggers="hover focus"
                content="Embedding content using properties is easy"
              ></b-popover>
            </b-col>

            <b-col md="2" sm="6" class="mb-4 text-left">
              <b-button id="popover-3" variant="primary">Using slots</b-button>
              <b-popover target="popover-3" triggers="hover focus">
                <template slot="title"
                  >Content via Slots</template
                >
                Embedding content
                <span class="text-danger">using slots</span> affords you
                <em>greater <strong>control.</strong></em> and basic HTML
                support.
              </b-popover>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Popover"
  },
  data() {
    return {
      //   exampleTwo
      show: false,

      // component-basic-usage
      placements: [
        "topright",
        "top",
        "topleft",
        "bottomright",
        "bottom",
        "bottomleft",
        "righttop",
        "right",
        "lefttop",
        "rightbottom",
        "left",
        "leftbottom"
      ]
    };
  }
};
</script>