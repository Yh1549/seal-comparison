<template>
  <div :data-theme="themeToggle ? 'black' : 'corporate'">
    <Header>
      <template #button>
        <label>
          <span>dark mode</span>
          <input type="checkbox" class="toggle" v-model="themeToggle" checked />
        </label>
      </template>
    </Header>
    <slot name="content"></slot>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
const themeToggle = ref(false);
</script>
