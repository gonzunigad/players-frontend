<template>
  <div>
    <div class="flex bg-white w-1/2 rounded shadow-lg mx-auto mt-20">
        <input v-model="searchText" ref="searchBox" class="p-5 rounded text-gray-600 w-full outline-none" type="text" placeholder="Buscar jugador" @keyup="search">
    </div>

    <div v-if="players.length > 0" class="w-3/4 mx-auto mt-5 p-5">
      <!--<h3 class="bold text-2xl mb-20">Jugadores</h3>-->
      <div class="players grid grid-cols-2 md:grid-cols-4 gap-4">
        <Player :key="player.id" v-for="player in players" :player="player"></Player>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "~/plugins/axios"
import Player from '~/components/Player'

export default {
  components: {Player},
  head() {
    return {
      title: 'Players | Gonzalo De Spírito',
      bodyAttrs: {
        class: "bg-gray-200",
      }
    }
  },
  data() {
    return {
      searchText: '',
      perPage: 100,
      players: [],
    }
  },
  mounted() {
    this.getPlayers()
    this.$refs.searchBox.focus()
  },
  methods: {
    search() {
      //TODO: Debounce
      this.getPlayers(this.searchText)
    },
    async getPlayers(search = '') {
      const perPage = this.perPage;
      let results = await axios.get("api/players?q=" + search + "&perPage=" + perPage)

      if (results.data.id_match) {
        this.players = [results.data.data];
        return;
      }

      this.players = results.data.data
    },
  },
}
</script>
