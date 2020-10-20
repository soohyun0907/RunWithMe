<template>
  <div class="main-content">
    <breadcumb :page="'V2Datepicker'" :folder="'Forms'" />
    <b-row>
      <b-col md="4">
        <b-card>
          <div class="card-title">Basic</div>
          <v2-datepicker v-model="val" lang="en"></v2-datepicker>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card>
          <div class="card-title">Setting Shortcuts</div>
          <template>
              <v2-datepicker v-model='val2' lang="en" :picker-options="options"></v2-datepicker>
          </template>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card>
          <div class="card-title">Daterange Picker</div>
          <template>
              <v2-datepicker-range v-model='val'></v2-datepicker-range>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>


export default {
 
    data(){
      return{
        val: '',
        val2: '',
        options: {
            disabledDate (time) {
                return time.getTime() > Date.now();
            },
            shortcuts: [{
                text: 'Today',
                onClick (picker) {
                    picker.$emit('pick', new Date());
                }
            }, {
                text: 'Yesterday',
                onClick (picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                }
            }, {
                text: 'A week ago',
                onClick (picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                }
            }]
        }
      }
    },
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "V2Datepicker"
    },
    
    
};
</script>
