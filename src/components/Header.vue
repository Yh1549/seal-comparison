<template>
  <nav class="navbar bg-base-100 flex justify-between">
    <span class="btn btn-ghost normal-case text-xl pointer-events-none"
      >印鑑比對系統</span
    >
    <div class="tabs">
      <router-link
        class="tab tab-bordered"
        active-class="tab-active"
        :to="{ name: 'home' }"
        >首頁</router-link
      >
      <router-link
        class="tab tab-bordered"
        active-class="tab-active"
        :to="{ name: 'test' }"
        >測試</router-link
      >
    </div>
    <slot name="button"></slot>
  </nav>
</template>
<script setup></script>
