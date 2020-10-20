<template>
  <div class="main-content">
    <breadcumb :page="'Calendar'" :folder="'Extra Kits'" />
    
    <b-row>
      <b-col md="6" class="mb-30">
        <b-card title="Bootstrap Basic Calendar">
          <b-row>
            <b-col md="auto">
              <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
            </b-col>
            <b-col>
              <p>Value: <b>'{{ value }}'</b></p>
              <p class="mb-0">Context:</p>
              <pre class="small">{{ context }}</pre>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="6" class="mb-30">
        <b-card title="Styling Variant Color">
          <template>
            <b-calendar selected-variant="success" today-variant="info"></b-calendar>
          </template>
        </b-card>
      </b-col>

      <b-col md="12" class="mb-30">
        <b-card title="Width">
          <template>
            <b-calendar block locale="en-US"></b-calendar>
          </template>
        </b-card>
      </b-col>

      <b-col md="4" class="mb-30">
        <b-card title="Default Slot">
          <template>
             <b-calendar v-model="dSlot" value-as-date locale="en">
              <div class="d-flex" dir="ltr">
                <b-button
                  size="sm"
                  variant="outline-danger"
                  v-if="dSlot"
                  @click="clearDate"
                >
                  Clear date
                </b-button>
                <b-button
                  size="sm"
                  variant="outline-primary"
                  class="ml-auto"
                  @click="setToday"
                >
                  Set Today
                </b-button>
              </div>
            </b-calendar>
          </template>
        </b-card>
      </b-col>


    </b-row>

   


  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        context: null,
        dSlot: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      },

      // default slot 
      setToday() {
        const now = new Date()
        this.dSlot = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      },
      clearDate() {
        this.dSlot = ''
      }
    }
  }
</script>
