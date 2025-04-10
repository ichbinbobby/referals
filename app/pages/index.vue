<template>
  <v-data-iterator :items="referals" :items-per-page="-1" :search="search">
    <template #default="{ items }">
      <v-layout>
        <!-- The class fill-height applies height: 100% to an element. When applied to v-container it will also set align-items: center -->
        <v-container fill-height>
          <v-row class="flex-wrap pt-4">
            <v-col
              v-for="(item, index) in items"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <ReferalCard
                :key="index"
                :referal="item.raw"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </template>
  </v-data-iterator>
</template>

<script setup lang="ts">
import referals from "@/referals";

// Access the shared state from default.vue
const search = useState<string>("search");
</script>

<style></style>
