import bus from '../utils/bus.js'
// mixin
export default {


    created() {

        bus.$emit('start:spinner');
       
            this.$store.dispatch('FETCH_JOBS', this.$route.name)
                .then(() => {
                    console.log('fetched');
                    bus.$emit('end:spinner');
                })
                .catch((error) => {
                    console.log(error)
                });
       
        // bus.$emit('end:spinner');
    }

}