<template>

     <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
              <div class="user-description">
                 <slot name="username"></slot>
                 
                  <!-- <router-link :to="`/user/${info.id}`"> {{ info.id }}</router-link> -->
                  <div class="time">
                  <slot name="time"></slot>
                  <slot name="karma"></slot>
                  </div>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    props : {
        info : Object
    },
    // computed : {
    //      userInfo() {
    //          return this.$store.state.user;
    //      }
    // },
}
</script>

<style scoped>
.user-container{
    display: flex;
    align-items: center;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>