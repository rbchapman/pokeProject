<template>
  <img class="type-img" :src="`/src/assets/${type}.png`" alt="">
</template>

<script>
export default {
  props: {
    type: String,
  },

}
</script>

<style>
.type-img {
  width: 35px;
  height: 35px;
  margin-top: 10px;
}
</style>
