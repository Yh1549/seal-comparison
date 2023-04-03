<template>
  <ContainerVue>
    <template #container>
      <h1 class="text-xl text-center font-bold">上傳印鑑圖片</h1>
      <div class="flex flex-col justify-center">
        <div class="w-1/2 mx-auto">
          <img class="w-full" src="../assets/vue.svg" alt="test" />
        </div>
        <div class="form-control w-full max-w-xs mx-auto">
          <label class="label">
            <!-- <span class="label-text">選擇檔案</span>
            <span class="label-text-alt">Alt label</span> -->
          </label>
          <input
            type="file"
            class="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text-alt">檔案大小限制:xxMB</span>
            <!-- <span class="label-text-alt">Alt label</span> -->
          </label>
          <button class="btn btn-secondary my-2">確認上傳</button>
        </div>
      </div>
    </template>
  </ContainerVue>
</template>
<script setup></script>
