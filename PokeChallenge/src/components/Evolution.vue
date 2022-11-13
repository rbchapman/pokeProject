<!-- <template>
  <button class="evbtn" @click="evolve">evolution</button>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return{
      evolution: [],
      stages: [],
      id: 0
    }
  },

  props: {
    name: String
  },

  async mounted() {
    await this.getEvolutionChain()
  },

  methods: {
  async getEvolutionChain () {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.name}/`)
    this.evolution = await axios.get(response.data.evolution_chain.url)
    this.chain = this.evolution.data.chain
    this.id = response.data.id
    // console.log(this.id)
      // console.log(response.data.evolution_chain.url)
      // console.log
  },

  async findStages () {
    await this.getEvolutionChain()
    this.stages[0] = this.evolution.data.chain.species.name
    if (this.chain.evolves_to[0].species) {
      this.stages[1] = this.chain.evolves_to[0].species.name
    } else {
      this.stages[1] = ''
    }

    if (this.chain.evolves_to[0].evolves_to[0]) {
      this.stages[2] = this.chain.evolves_to[0].evolves_to[0].species.name
    } else this.stages[2] = ''
    console.log(this.stages)
  },

  async evolve () {
    await this.findStages()
    console.log(this.stages.indexOf(this.name))
  }



}
}

</script>

<style scoped>

.evbtn {
  width: 100px;
}

</style> -->
