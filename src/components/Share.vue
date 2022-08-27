<template>
  <article class="w-full h-full bg-black/[.8] absolute flex justify-center items-center">
    <div class="flex flex-col justify-center items-center space-y-4 w-10/12 md:w-96 h-96 bg-white rounded-lg">
      <p class="font-bold text-gray_primary">
        Compartilhar Foto
      </p>
      <div class="flex flex-col w-full">
        <ShareNetwork
          network="whatsapp"
          :url="filteredImage"
          title="Baixe a sua foto com o filtro."
          class="px-6 py-4 flex items-center gap-4 font-bold text-gray_primary hover:bg-gray_b_primary/[.1]"
        >
          <img src="../assets/social/whatsapp.png" alt="whatsapp logo">
          WhatsApp
        </ShareNetwork>
        <ShareNetwork
          network="facebook"
          :url="filteredImage"
          title="Baixe a sua foto com o filtro."
          class="px-6 py-4 flex items-center gap-4 font-bold text-gray_primary hover:bg-gray_b_primary/[.1]"
        >
          <img src="../assets/social/facebook.png" alt="facebook logo">
          Facebook
        </ShareNetwork>
        <ShareNetwork
          network="twitter"
          :url="filteredImage"
          title="Baixe a sua foto com o filtro."
          class="px-6 py-4 flex items-center gap-4 font-bold text-gray_primary hover:bg-gray_b_primary/[.1]"
        >
          <img src="../assets/social/twitter.png" alt="twitter logo">
          Twitter
        </ShareNetwork>
      </div>
      <button
        @click="touggleShare"
        class="text-center w-3/4 py-2 px-4 rounded-lg border-2 text-sm font-semibold border-gray_secondary hover:border-gray_primary text-gray_secondary hover:text-gray_primary"
      >
        CANCELAR
      </button>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    touggleShare() {
      this.$emit('cancelShare');
    }
  }
}
</script>

