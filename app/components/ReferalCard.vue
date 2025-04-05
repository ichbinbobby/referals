<template>
  <v-card :height="height" elevation="1" @click="open(referal.link)">
    <v-row no-gutters>
      <v-col>
        <v-img :min-height="128" :min-width="128" :width="imgWidth" :src="referal.img" class="ml-4 mt-4 referal-card-img">
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
            <v-chip v-if="referal.category" class="text-capitalize">{{ referal.category }}</v-chip>
          </v-col>
        </v-row>
        
        <v-row no-gutters>
          <v-col>
            <v-tooltip v-if="referal.sustainable" location="top" text="Nachhaltig">
              <template #activator="{ props }">
                <v-icon v-bind="props" class="mt-4" color="success" icon="mdi-sprout" />
              </template>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-card-title> {{ referal.title }} </v-card-title>

    <v-card-subtitle>{{ referal.subtitle }}</v-card-subtitle>

    <v-card-text class="referal-card-text-wrap">
      {{ referal.text }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Referal } from "@/types/referal.d.ts";

// Define props with default values for height and imgWidth
withDefaults(
  defineProps<{
    referal: Referal;
    height?: number;
    imgWidth?: number;
  }>(),
  {
    height: 360, // Default value for height
    imgWidth: 128, // Default value for imgWidth
  }
);

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
