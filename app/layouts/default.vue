<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-spacer />

        <v-btn
          :prepend-icon="
            theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          text="Toggle Theme"
          slim
          @click="onClick"
        />
      </v-app-bar>

      <v-main>
        <slot />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import { ref } from "vue";

const theme = ref("light");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
