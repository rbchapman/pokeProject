<template>
<div>
  <pokeCard />
</div>
  <div>
    <!-- <button type="button" @click="getPokeData">find a pokemon</button> -->
  </div>
</template>
<script>

import PokeCard from '@/components/PokeCard.vue'

export default {
  components: {
    PokeCard,
  }

  // method: {
  //   fetchData() {

  //   }
  // }
}
</script>
