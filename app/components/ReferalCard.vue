<template>
  <v-card :color="color" :height="height" elevation="1" @click="open(link)">
    <v-row no-gutters>
      <v-col>
        <v-img :min-height="128" :min-width="128" :width="imgWidth" :src="img" class="ml-4 mt-4 referal-card-img">
          <template #placeholder>
            <v-row align="center" class="fill-height ma-0" justify="center">
              <v-progress-circular color="grey-lighten-5" indeterminate />
            </v-row>
          </template>
        </v-img>
      </v-col>

      <v-col class="mr-4 mt-4 text-right">
        <v-row no-gutters>
          <v-col>
            <v-chip v-if="category" class="text-capitalize">{{ category }}</v-chip>
          </v-col>
        </v-row>
        
        <v-row no-gutters>
          <v-col>
            <v-tooltip v-if="sustainable" location="top" text="Nachhaltig">
              <template #activator="{ props }">
                <v-icon v-bind="props" class="mt-4" color="success" icon="mdi-sprout" />
              </template>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

    <v-card-text class="referal-card-text-wrap">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const {
  category = "",
  color = "",
  height = 360,
  img = "",
  imgWidth = 128,
  link = "",
  subtitle = "",
  sustainable = false,
  text = "",
  title = "",
} = defineProps({
  category: String,
  color: String,
  height: Number,
  img: String,
  imgWidth: Number,
  link: String,
  subtitle: String,
  sustainable: Boolean,
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
