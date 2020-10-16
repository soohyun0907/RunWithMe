<template>
  <div class="main-content">
    <breadcumb :page="'Masks'" :folder="'Forms'" />

    <b-row>
      <b-col md="12">
        <b-card title="Input Masks">
          <b-row>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">CPF</p>
              <the-mask
                class="form-control"
                :mask="['###.###.###-##']"
                placeholder="999.999.999-99"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Zip Code</p>
              <the-mask
                class="form-control"
                :mask="['#####-###']"
                placeholder="99999-999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Phone</p>
              <the-mask
                class="form-control"
                :mask="['+# (###) ###-####']"
                placeholder="+9 (999) 999-9999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Master Card</p>
              <the-mask
                class="form-control"
                :mask="['#### #### #### ####']"
                placeholder="9999 9999 9999 9999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Date</p>
              <the-mask
                class="form-control"
                :mask="['##/##/####']"
                placeholder="mm/dd/yy"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">CPF/CNPJ</p>
              <the-mask
                class="form-control"
                :mask="['###.###.###-##', '##.###.###/####-##']"
                placeholder="99.999.999/9999-99"
              />
            </b-col>
          </b-row>
          <b-button variant="primary">Submit</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Masks"
  }
};
</script>

