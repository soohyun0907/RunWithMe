<template>
  <div class="main-content">
    <breadcumb :page="'Datepicker'" :folder="'Forms'" />
    <b-row>
      <b-col md="12">
        <date-range-picker ref="picker" 
            :singleDatePicker="false"
            v-model="dateRange"
            
        >
          
        </date-range-picker>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
    components: { DateRangePicker },
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "Datepicker"
    },
    data () {
        return {
        dateRange: {
            startDate: '2019-12-26',
            endDate: '2019-12-28',
        },
        }
    },
};
</script>
