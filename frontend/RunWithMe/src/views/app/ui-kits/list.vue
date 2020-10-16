<template>
  <div class="main-content">
    <breadcumb :page="'List'" :folder="'UI Kits'" />

    <b-row class="">
      <b-col md="6" xl="4" class=" mb-30">
        <b-card title="Basic example" class="text-left ">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
      <!-- section1 -->
      <b-col md="6" xl="4" class=" mb-30">
        <b-card title="Basic example with Active items" class="text-left ">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item active
              >Dapibus ac facilisis in</b-list-group-item
            >
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <b-col md="6" xl="4" class=" mb-30">
        <b-card title="Basic example with Disabled items" class="text-left ">
          <b-list-group>
            <b-list-group-item disabled>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>

    <!-- section-2 -->
    <b-row class="">
      <b-col md="6" xl="4" class=" mb-30">
        <b-card class="text-left " title="Links">
          <b-list-group>
            <b-list-group-item href="#some-link"
              >Awesome link</b-list-group-item
            >
            <b-list-group-item href="#" active
              >Link with active state</b-list-group-item
            >
            <b-list-group-item href="#"
              >Action links are easy</b-list-group-item
            >
            <b-list-group-item href="#foobar" disabled
              >Disabled link</b-list-group-item
            >
          </b-list-group>
        </b-card>
      </b-col>

      <b-col md="6" xl="4" class=" mb-30">
        <b-card class="text-left " title="Button List Item">
          <b-list-group>
            <b-list-group-item button>Button item</b-list-group-item>
            <b-list-group-item button>I am a button</b-list-group-item>
            <b-list-group-item button disabled
              >Disabled button</b-list-group-item
            >
            <b-list-group-item button>This is a button too</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <b-col md="6" xl="4" class=" mb-30">
        <b-card title="Flush" class="text-left ">
          <b-list-group class="list-group-flush">
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="">
      <b-col md="6" xl="4" class=" mb-30">
        <b-card title="Contextual Variants" class="text-left ">
          <b-list-group>
            <b-list-group-item>Default list group item</b-list-group-item>
            <b-list-group-item variant="primary"
              >Primary list group item</b-list-group-item
            >
            <b-list-group-item variant="secondary"
              >Secondary list group item</b-list-group-item
            >
            <b-list-group-item variant="success"
              >Success list group item</b-list-group-item
            >
            <b-list-group-item variant="danger"
              >Danger list group item</b-list-group-item
            >
            <b-list-group-item variant="warning"
              >Warning list group item</b-list-group-item
            >
            <b-list-group-item variant="info"
              >Info list group item</b-list-group-item
            >
            <b-list-group-item variant="light"
              >Light list group item</b-list-group-item
            >
            <b-list-group-item variant="dark"
              >Dark list group item</b-list-group-item
            >
          </b-list-group>
        </b-card>
      </b-col>

      <b-col md="6" xl="4" class=" mb-30">
        <b-card title="Contextual Actions" class="text-left ">
          <b-list-group>
            <b-list-group-item href="#"
              >Default list group item</b-list-group-item
            >
            <b-list-group-item href="#" variant="primary"
              >Primary list group item</b-list-group-item
            >
            <b-list-group-item href="#" variant="secondary"
              >Secondary list group item</b-list-group-item
            >
            <b-list-group-item href="#" variant="success"
              >Success list group item</b-list-group-item
            >
            <b-list-group-item href="#" variant="danger"
              >Danger list group item</b-list-group-item
            >
            <b-list-group-item href="#" variant="warning"
              >Warning list group item</b-list-group-item
            >
            <b-list-group-item href="#" variant="info"
              >Info list group item</b-list-group-item
            >
            <b-list-group-item href="#" variant="light"
              >Light list group item</b-list-group-item
            >
            <b-list-group-item href="#" variant="dark"
              >Dark list group item</b-list-group-item
            >
          </b-list-group>
        </b-card>
      </b-col>

      <b-col md="6" xl="4" class=" mb-30">
        <b-card title="With badges" class="text-left ">
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Cras justo odio
              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Dapibus ac facilisis in
              <b-badge variant="danger" pill>2</b-badge>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Morbi leo risus
              <b-badge variant="success" pill>1</b-badge>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Cras justo odio
              <b-badge variant="info" pill>14</b-badge>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Dapibus ac facilisis in
              <b-badge variant="warning" pill>2</b-badge>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Morbi leo risus
              <b-badge variant="success" pill>1</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <b-col md="6" xl="4" class=" mb-30">
        <b-card title="Custom content" class="text-left ">
          <b-list-group>
            <b-list-group-item
              href="#"
              active
              class="flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1 text-white">List group item heading</h5>
                <small>3 days ago</small>
              </div>

              <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>

              <small>Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>

              <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>

              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item
              href="#"
              disabled
              class="flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Disabled List group item</h5>
                <small class="text-muted">3 days ago</small>
              </div>

              <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>

              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Lists"
  }
};
</script>
