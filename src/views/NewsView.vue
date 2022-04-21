<template>
  <div>
      <list-item></list-item>
   
    
  </div>
</template>

<script>
import ListItem  from '../components/ListItem.vue'
import bus from '../utils/bus.js'
// import ListMixn from '../mixns/ListMixin.js'
// import { fetchNewsList } from '../api/index.js'


export default {
    
    components : {
        ListItem,
    },
     mounted() {
        bus.$emit('end:spinner');
    }
    // mixins : [ListMixn],
    // created () {
    //     bus.$emit('start:spinner');
    //     setTimeout( () => {
    //     this.$store.dispatch('FETCH_NEWS')
    //     .then( () =>{
    //         console.log('fetched');
    //         bus.$emit('end:spinner');
    //     })
    //     .catch( (error) =>{
    //         console.log(error)
    //     });
    //     }, 3000);
        
    //     bus.$emit('end:spinner');

    // },
   
    
   
}
</script>

<style scoped>

</style>