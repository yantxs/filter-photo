<template>
  <article class="w-full h-full bg-black/[.8] absolute flex justify-center items-center">
    <div class="p-4 flex flex-col justify-center items-center w-10/12 md:w-96 h-96 bg-white rounded-lg">
      <h1 class="mt-4 text-3xl text-center font-bold mb-2 text-gray_primary">
        Ops!
      </h1>
      <p class="mb-12 text-center text-gray_secondary">
        Houve um erro ao processar sua foto, tente novamente mais tarde.
      </p>
      <button
        @click="resendFile"
        class="text-center w-3/4 py-2 px-4 rounded-lg border-2 text-sm font-semibold bg-green_primary text-white hover:bg-green_tertiary"
      >
        TENTAR NOVAMENTE
      </button>
      <button
        @click="touggleError"
        class="text-center mt-2 w-3/4 py-2 px-4 rounded-lg text-sm font-semibold text-gray_primary hover:text-gray_secondary"
      >
        SAIR
      </button>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    touggleError() {
      this.$emit('cancelError');
    },
    resendFile() {
      this.$emit('resendFile');
    }
  }
}
</script>

