<template>
  <div class="card-container">
    <div class="card" :style="{'background-image':`url(/src/assets/${this.setColor(this.type)}.png)`}">
      <div class="pokedetails">
          <h3>{{ setCaps(name) }}</h3>
        <div class="hp-type">
            <h3> HP {{ hp }}</h3>
            <Type v-bind:type="type"/>
        </div>
      </div>
      <div class="pokepic">
        <img class="sprite" v-bind:src="picture" :alt="name">
      </div>
      <div>
        <MoveDetails ref="moves" v-bind:move1="move1" v-bind:move2="move2"/>
      </div>
    </div>
  </div>
  <button class="btn" type="button" @click="getPokeData"
  >choose your pokemon</button>
</template>

<script>
import axios from 'axios'
import MoveDetails from '@/components/MoveDetails.vue'
import Type from '@/components/Type.vue'

export default {
  components: {
    MoveDetails,
    Type,
  },

  data() {
    return {
      name: '',
      hp: 0,
      type: '',
      picture: '',
      move1: '',
      move2: '',
    }
  },

  methods: {
    async getPokeData() {
      const pokedata = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`)
      this.pokedata = pokedata.data
      this.name = this.pokedata.name
      this.hp = this.pokedata.stats[0].base_stat
      this.picture = this.pokedata.sprites.front_default
      this.move1 = this.pokedata.moves[15].move.name
      this.move2 = this.pokedata.moves[10].move.name
      this.type = this.pokedata.types[0].type.name
      this.$refs.moves.getMoveData()
    },

    setCaps (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },

    setColor (type) {
      if (type === 'ice' || type === 'water') {
        return 'blue'
      }

      if (type === 'normal' || type === 'rock') {
        return 'grey'
      }

      else if (type === 'fire' || type === 'fighting') {
        return 'red'
      }

      else if (type === 'grass' || type === 'bug') {
        return 'green'
      }

      else if (type === 'fairy' || type === 'psychic' || type === 'poison') {
        return 'pink'
      }

      else if (type === 'electric' || type === 'dragon') {
        return 'yellow'
      }

      else if (type === 'ghost' || type === 'ground') {
        return 'brown'
      }
    },
  },

  async mounted() {
    await this.getPokeData()
    await this.$refs.moves.getMoveData()
  }
}
</script>

<style>
.pokedetails {
  display: flex;
  justify-content: space-between;
  margin: 0px 10px -5px 12px;
  height: 50px;
}

.pokepic {
  width: 92%;
  height: 170px;
  border-style: inset;
  border-radius: 4px 4px 10px 10px;
  text-align: center;
  margin: 0px 0px 2px 10px;
  background-image: url("/src/assets/pokemon-field.png");
  background-position: center;
  background-size: cover;
}

.sprite {
  width: 60%;
  height: 170px;
}
</style>
