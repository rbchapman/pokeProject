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
        <img class="pic" v-bind:src="picture" :alt="name">
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

    // getRanId() {
    //   ${ Math.floor(Math.random() * 151) + 1 }
    // }

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

.hp-type {
  display: flex;
  flex-direction: row;
}

.container {
  width: 330px;
  height: 465px;
  border: 10px;
  border-color: black;
  border-radius: 5px;
  box-shadow: 2.5px 2.5px 8px rgba(226, 220, 220, 0.2);
  background: #FEE465;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokepic {
  width: 92%;
  height: 170px;
  border-style: inset;
  border-radius: 4px 4px 10px 10px;
  background: bisque;
  text-align: center;
  margin: 0px 0px 2px 10px;

}

.pic {
  width: 60%;
  height: 170px;
}

.card {
  border-style: solid;
  border-color: bisque;
  border-radius: 10px;
  margin: 10px;
  width: 100%;
  height: 430px;
}

.btn {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  background-image: url("/src/assets/pokemo_ball.jpg") !important;
  background-position: center;
  background-size: cover;
}


.type {
  width: 35%;
}
</style>

<!-- for the card-->
    <!-- card width: 384px;
    border: 10px;
    border-color: black;
    box-shadow: 2.5px 2.5px 8px rgb(226 220 220 / 20%);
    background: rgba(16, 50, 59, 1);
    align-items: flex-start;
    height: 419px;
    display: flex;
    align-items: center;
    justify-content: center;

    for the container in card
  background: yellow;
    border-radius: 6px;
    padding: 50px;
    text-align: center;
    margin: 50px 10px 50px 10px;
    height: 300px;
}

  -->
