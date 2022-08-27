<template>
  <div class="w-screen h-screen flex flex-col items-center bg-green_secondary">
    <img
      src="./assets/logo.png"
      alt="logo"
      class="w-40 mb-6 mt-4"
      :class="{ 'w-28': filteredImage }"
    />
    <h1 class="text-3xl text-center font-bold w-72 mb-2 text-gray_primary">
      <span v-if="!filteredImage"> Bem vindo ao editor de fotos </span>
      <span v-else> Foto personalizada com sucesso! </span>
    </h1>
    <p class="mb-4 text-gray_primary">
      <span v-if="!filteredImage"> Escolha sua melhor foto para começar! </span>
      <span v-else> Muito bem! Agora o que deseja fazer? </span>
    </p>
    <div
      v-if="filteredImage"
      class="w-10/12 sm:w-96 rounded-lg bg-white overflow-hidden"
    >
      <img :src="filteredImage" alt="image" class="w-full aspect-square" />
    </div>
    <div
      v-else
      class="w-10/12 sm:w-96 aspect-square rounded-lg bg-white overflow-hidden p-2"
    >
      <div
        class="border-dashed border-2 border-gray_b_primary w-full h-full rounded-lg flex flex-col justify-center items-center"
      >
        <Spinner v-if="loading" class="w-18" />
        <img
          v-else
          src="./assets/image-placeholder.png"
          alt="logo"
          class="w-18 mb-2"
        />
        <h2 class="text-gray_primary mb-1 sm:mb-8 w-1/2 text-center">
          <span v-if="!loading"> Toque no botão para escolher uma foto </span>
          <span v-else> Estamos personalizando sua foto, aguarde! </span>
        </h2>
        <input
          type="file"
          :onchange="uploadFile"
          class="invisible"
          ref="fileInput"
        />
        <button
          v-if="!loading"
          @click="$refs.fileInput.click()"
          class="block w-3/5 py-2 px-4 rounded-lg border-0 text-sm font-semibold bg-green_primary text-white hover:bg-green_tertiary"
        >
          ESCOLHER FOTO
        </button>
      </div>
    </div>
    <div v-if="filteredImage" class="mt-8 flex flex-col items-center w-full">
      <button
        @click="touggleShare"
        class="flex justify-center items-center text-center w-10/12 sm:w-96 py-2 px-4 rounded-lg border-0 text-sm font-semibold bg-green_primary text-white hover:bg-green_tertiary"
      >
        <ShareIcon class="mr-2" />
        COMPARTILHAR
      </button>
      <a
        :href="filteredImage"
        download="filter.png"
        class="flex justify-center items-center text-center w-10/12 sm:w-96 mt-2 py-2 px-4 rounded-lg border-2 text-sm font-semibold border-green_primary text-green_primary hover:text-green_tertiary hover:border-green_tertiary"
      >
        <DownloadIcon class="mr-2" />
        BAIXAR
      </a>
      <p class="text-gray_secondary text-center mt-8">SER UM EMBAIXADOR</p>
    </div>
    <Share v-if="showShare" @cancelShare="touggleShare" />
    <Error
      v-if="errorProcess"
      @cancelError="cancelSendFile"
      @resendFile="resendFile"
    />
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "./components/Spinner.vue";
import Share from "./components/Share.vue";
import Error from "./components/Error.vue";

import ShareIcon from "./assets/share/Share-icon.vue";
import DownloadIcon from "./assets/share/Download-icon.vue";

export default {
  name: "app",

  data: function () {
    return {
      selectImage: null,
      filteredImage: null,
      loading: null,
      showShare: false,
      errorProcess: false,
    };
  },

  components: {
    Spinner,
    Share,
    Error,
    ShareIcon,
    DownloadIcon,
  },

  methods: {
    uploadFile(event) {
      this.loading = true;
      this.selectImage = event.target.files[0];
      this.submitFile();
    },

    async submitFile() {
      try {
        const image = new FormData();
        image.append("profile_pic", this.selectImage);
        await axios
          .post(import.meta.env.VITE_APP_FILTER_API, image, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.filteredImage = response.data.img;
            this.loading = false;
          });
      } catch (error) {
        this.errorProcess = true;
      }
    },

    resendFile() {
      this.touggleError();
      this.submitFile();
    },

    cancelSendFile() {
      document.location.reload(true);
    },

    touggleShare() {
      this.showShare = !this.showShare;
    },

    touggleError() {
      this.errorProcess = !this.errorProcess;
    },
  },
};
</script>
