<template>
  <div>
      <list-item></list-item>
       <!-- <ul class="news-list">
          <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
            
              <div class="points">
                  
              </div>
             
              <p class="news-title">
                  <a :href= "job.url">
                      {{ job.title }}
                  </a>
                  
              </p>
              <small class="link-text"><br/>
              {{ job.time_ago }}
               <a :href= "job.url"> {{ job.domain }} </a>
                 
            </li>
      </ul> -->
    
  </div>
</template>

<script>

// import { fetchJobsList } from '../api/index.js'
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'
// import ListMixn from '../mixns/ListMixin.js'

export default {
    components : {
        ListItem
    },
     mounted() {
        bus.$emit('end:spinner');
    }
    // mixins : [ListMixn],

    //  created () {
        
        
    //     bus.$emit('start:spinner');
    //     setTimeout( () => {
    //     this.$store.dispatch('FETCH_JOBS')
    //     .then( () =>{
    //         console.log('fetched');
    //         bus.$emit('end:spinner');
    //     })
    //     .catch( (error) =>{
    //         console.log(error)
    //     });
    //     }, 3000);
        
    //     // bus.$emit('end:spinner');

    // }
    
    // created() {
    //     // this.$store.dispatch('FETCH_JOBS');
    //     // var vm =this;
    //     // fetchJobsList()
    //     // .then (Response=> this.jobs = Response.data)
    //     // .catch()
    // }
}
</script>