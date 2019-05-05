<template lang="html">
  <div>
    <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png" width=70%;> -->
    <img id="logo" src="@/assets/logohp.png">
    <img id="castle" src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/02/1484178566-hogwarts-castle-harry-potter-166431.jpg">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#logo {
    margin: 0 auto;
    height: 45%;
    width: 35%;
    position: fixed;
    right: 70px;
    top: 80px;
}



#castle {
    height: 100%;
    width: 100%;
    padding: 10px 0;
}

img {
    height: 100%;
    width: 100%;
}

#logo {
    opacity: 0;
    animation: opacityOn 10s normal forwards;
    animation-delay: 5s;
}

@keyframes opacityOn {
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    75% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>
