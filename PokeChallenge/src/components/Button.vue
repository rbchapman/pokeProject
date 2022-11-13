<template>
<button type="button" @click="method"> {{text}}</button>
</template>

<script>

export default {
  name: String,
  props: {
    text: String,
    method: String
  }
}
</script>
