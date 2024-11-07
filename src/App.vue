<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
<div>
    <MainHeader/>
  <div>
    <router-view></router-view>
  </div>
    <MainFooter/>
</div>
</template>

<style scoped>

</style>