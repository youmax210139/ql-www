<template>
  <q-footer
    class="bg-yellow-400 text-gray-800 text-center p-2 grid gap-y-4 md:px-4 text-xs"
  >
    <h3 class="text-lg font-bold">{{ $env.APP_NAME }}</h3>
    <p>
      本站提供的所有作品
      <em class="text-red-700">未經許可不得再分發或用於商業用途</em>。
      <br class="md:hidden" />
      您將受到嚴厲的民事和刑事處罰。
    </p>
    <section class="grid gap-y-3 md:gap-y-2">
      <p>
        <em>公司名稱</em>
        &nbsp;&nbsp;
        {{ $env.APP_NAME }}
        &nbsp;&nbsp;| &nbsp;&nbsp;Charlie Yuan
      </p>
      <p>
        <em>地址</em>
        23448
        <br class="md:hidden" />
        New Taipei City, Yonghe District, Zhongzheng Rd
      </p>
      <p>
        <strong>24小時客服</strong>&nbsp;| <strong>電子郵件</strong>&nbsp;
        <a href="mailto:youmax210139@gmail.com">{{ $env.APP_EMAIL }}</a>
      </p>
      <p><b>公司</b> {{ $env.APP_NAME }} Co.,Ltd</p>
    </section>
    <q-list dense class="flex flex-center">
      <q-item clickable dense :to="{ name: 'tos.index' }" class="items-center"
        >使用條款</q-item
      >
      <q-item clickable dense :to="{ name: 'pdpa.index' }" class="items-center"
        >個人資料處理方針</q-item
      >
    </q-list>
    <p>Copyright ⓒ 2022 {{ $env.APP_NAME }} All rights reserved.</p>
  </q-footer>
</template>

<script setup></script>
