<template>
  <v-responsive>
    <v-app>
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
          :icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          @click="toggleTheme"
        />
      </v-app-bar>

      <v-main>
        <slot />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify"; // Vuetify's theme composable

// Shared search state
const search = useState<string>("search", () => "");

// Access Vuetify's theme system
const theme = useTheme();

// Initialize dark mode state from localStorage or default to Vuetify's current theme
const isDark = useState<boolean>("isDark", () => {
  const savedTheme = localStorage.getItem("isDark");
  return savedTheme !== null ? savedTheme === "true" : theme.global.current.value.dark;
});

// Synchronize Vuetify's theme system with the dark mode state
theme.global.name.value = isDark.value ? "dark" : "light";

// Toggle the theme and persist it in localStorage
function toggleTheme() {
  isDark.value = !isDark.value;
  theme.global.name.value = isDark.value ? "dark" : "light"; // Update Vuetify's theme system
  localStorage.setItem("isDark", isDark.value.toString()); // Persist theme in localStorage
}
</script>