<template>
  <div class="main-content">
    <breadcumb :page="'Pagination'" :folder="'UI Kits'" />

    <b-row>
      <b-col md="4">
        <b-card title="Center Alignment" class="mb-30 o-hidden">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            align="center"
          ></b-pagination>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card title="Right Alignment" class="mb-30 o-hidden">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            align="right"
          ></b-pagination>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card title="Left Alignment" class="mb-30 o-hidden">
          <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
        </b-card>
      </b-col>
      <b-col md="12">
        <b-card title="Left Alignment" class="mb-30 o-hidden">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            align="fill"
          ></b-pagination>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Button size" class="mb-30 o-hidden">
          <p class="">
            Optionally change from the default button size by setting the
            <code>size</code> prop to either <code>'sm'</code> for smaller
            buttons or <code>'lg'</code> for larger buttons.
          </p>
          <div class="overflow-auto">
            <div>
              <h6>Small</h6>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                size="sm"
              ></b-pagination>
            </div>

            <div class="mt-3">
              <h6>Default</h6>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
              ></b-pagination>
            </div>

            <div class="mt-3">
              <h6>Large</h6>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                size="lg"
              ></b-pagination>
            </div>
          </div>
        </b-card>
      </b-col>

      <b-col md="4">
        <b-card title="Button Content" class="mb-30 o-hidden">
          <div class="overflow-auto">
            <b-card-text>
              Use text in props
            </b-card-text>
            <!-- Use text in props -->
            <b-pagination
              class="mt-3"
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>

            <b-card-text>
              Use emojis in props
            </b-card-text>
            <!-- Use emojis in props -->
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              first-text="⏮"
              prev-text="⏪"
              next-text="⏩"
              last-text="⏭"
              class="mt-4"
            ></b-pagination>
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
    title: "Pagination"
  },
  data() {
    return {
      rows: 100,
      currentPage: 1,
      perPage: 10
    };
  }
};
</script>