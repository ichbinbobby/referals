<template>
  <v-layout>
    <!-- The class fill-height applies height: 100% to an element. When applied to v-container it will also set align-items: center -->
    <v-container fill-height>
      <v-row class="flex-wrap pt-4">
        <v-col
          v-for="(item, index) in referals"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="mx-4"
        >
          <ReferalCard
            :key="index"
            :link="item.link"
            :img="item.img"
            :text="item.text"
            :title="item.title"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script setup>
import referals from "@/referals";
</script>

<style></style>
