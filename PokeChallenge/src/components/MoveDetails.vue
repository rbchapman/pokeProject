<template>
  <div class="move-details">
    <div class="move1">
      <Type class="detail-img" v-bind:type="type1" />
      <h3>{{ setCaps(move1) }}</h3>
      <h3>{{ movePower1 || 20 }}</h3>
    </div>
    <div class="move2">
      <Type class="detail-img" v-bind:type="type2" />
      <h3>{{ setCaps(move2) }}</h3>
      <h3>{{ movePower2 || 20 }}</h3>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Type from '@/components/Type.vue'

export default {
  props: {
    move1: String,
    move2: String
  },

  components: {
    Type
  },

  data() {
    return {
      movePower1: 20,
      movePower2: 40,
      type1: '',
      type2: '',
    }
  },


  methods: {
    async getMoveData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/move/${this.move1}`)
      this.movePower1 = response.data.power
      this.type1 = response.data.type.name
      const response2 = await axios.get(`https://pokeapi.co/api/v2/move/${this.move2}`)
      this.movePower2 = response2.data.power
      this.type2 = response2.data.type.name
    },
    setCaps (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },

    // formatMoves (word) {
    //   if (word.includes ('-')) {
    //     let index = word.indexOf('-')
    //     return this.setCaps(word)
    //   }
    //   return word.includes('-') ? word.replace('-', ' ') : word
    // },
  },


  async mounted() {
    await this.getMoveData()

  },
}
</script>

<style>
.move-details {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0px 10px 10px 10px

}

.move1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.move2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -20px;
}

</style>
