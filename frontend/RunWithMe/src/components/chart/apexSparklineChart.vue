<template>
     <div>
      <b-row>
          <b-col  md="4">
              <b-card no-body title="" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 165px">
                      <apexchart type=area height=160 :options="spark1.chartOptions" :series="spark1.series" />
                  </div>
              </b-card>
          </b-col>
          
          
          
      </b-row>
      
   </div>
</template>
<script>
import { 
    spark1
        } from '@/data/apexChart'

export default {
  data(){
    return{
        spark1
      
    }
    
  },
  methods:{
 
  }
}
</script>
