<template>
  <div>
    <div class="flex bg-white w-1/2 rounded shadow-lg mx-auto mt-20 p-5">
      <div class="search">
        <input v-model="searchText" ref="searchBox" class="p-2 text-gray-600 outline-none" type="text" placeholder="Buscar jugador" @keyup="search">
      </div>
    </div>

    <div v-if="players.length > 0" class="w-3/4 mx-auto mt-5 p-5">
      <!--<h3 class="bold text-2xl mb-20">Jugadores</h3>-->
      <div class="players grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="player in players" class="flex w-full mt-10 flex-col bg-white rounded shadow-lg mx-auto p-2">
          <img class="w-20 -top-10 mx-auto relative" :alt="player.nickname" width="100" height="100" :src="'https://' + player.avatar" />
          <span class="-mt-5 font-bold">Nick: {{ player.nickname }}</span>
          <span>Status: {{ player.status }}</span>
          <span>Balance: {{ formatNumber(player.balance) }}</span>
          <span class="text-gray-600 ml-auto italic text-sm">ID: {{ player.id }}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "~/plugins/axios"

export default {
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
    formatNumber(number) {
      return Intl.NumberFormat('es-CL').format(number)
    },
    search() {
      //TODO: Debounce
      this.getPlayers(this.searchText)
    },
    async getPlayers(search = '') {
      const perPage = this.perPage;
      let results = await axios.get("api/players?q=" + search + "&perPage=" + perPage)

      this.players = results.data.data
      console.log(results)
    },
  },
}
</script>
