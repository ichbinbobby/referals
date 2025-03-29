<template>
  <v-card :color="color" :height="height" elevation="1" @click="open(link)">
    <v-img :width="imgWidth" :src="img" class="ml-4 mt-4 referal-card-img">
      <template #placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate />
        </v-row>
      </template>
    </v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-text class="referal-card-text-wrap">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const {
  color = "",
  height = 320,
  img = "",
  imgWidth = 128,
  link = "",
  text = "",
  title = "",
} = defineProps({
  color: String,
  height: Number,
  img: String,
  imgWidth: Number,
  link: String,
  text: String,
  title: String,
});

function open(url: string) {
  window.open(url, "_blank");
}
</script>

<style scoped>
.referal-card-text-wrap {
  word-wrap: break-word;
}

.referal-card-img {
  border-radius: 20%;
  background-color: white;
}
</style>
