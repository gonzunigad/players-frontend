<template>
  <div class="flex text-center w-full mt-10 flex-col bg-white rounded shadow-lg mx-auto p-2">
    <img class="w-20 -top-10 mx-auto relative" :alt="player.nickname" width="100" height="100" :src="'https://' + player.avatar" />
    <span class="-mt-8 text-xl font-light">{{ player.nickname }}</span>
    <span class=" mb-5 text-sm">{{ player.status }}</span>
    <div class="w-full flex">
      <span class="text-gray-600 mr-auto italic text-sm">{{ balance }} pts.</span>
      <span class="text-gray-600 ml-auto italic text-sm">#{{ player.id }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    player: Object
  },
  computed: {
    balance () {
        return Intl.NumberFormat('es-CL').format(this.player.balance)
    }
  }
}
</script>
