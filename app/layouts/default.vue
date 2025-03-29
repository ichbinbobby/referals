<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-app-bar-title> referals.ichbinbobby.de </v-app-bar-title>

        <v-text-field
          v-model="search"
          density="comfortable"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          clearable
          hide-details
        />

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
const search = ref("");
const theme = ref("light");

// Provide the search state to child components
provide("search", search);

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
