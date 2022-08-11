<template>
  <q-footer class="
      bg-yellow-400
      text-gray-800 text-center
      p-2
      grid
      gap-y-4
      md:px-4
      text-xs
    ">
    <h3 class="text-lg font-bold">QL99</h3>
    <p>
      本站提供的所有作品
      <em class="text-red-700">未經許可不得再分發或用於商業用途</em>。
      <br class="md:hidden" />
      您將受到嚴厲的民事和刑事處罰。
    </p>
    <section class="grid gap-y-3 md:gap-y-2">
      <p>
        <em>公司名稱</em>
        QL99&nbsp;|&nbsp;
        <em>&nbsp;代表</em>
        &nbsp;李熙恩&nbsp;
      </p>
      <p>
        <em>地址</em>
        06103 首爾特別市江南區奉恩寺路 317 2 層 2281號
        <br class="md:hidden" />
        （論峴洞，阿莫善論峴大廈）
      </p>
      <p>
        <strong>商業登記號碼</strong>&nbsp; 761-81-01364 &nbsp;|
        &nbsp;<strong>郵購業務報告</strong>&nbsp; 2022-00748
      </p>
      <p>
        <strong>24小時客服</strong>&nbsp;| <strong>電子郵件</strong>&nbsp;
        <a href="mailto:youmax210139@gmail.com">support@ql99.site</a>
      </p>
      <p><strong>公司</strong> 116000-01-020 QL Co.,Ltd</p>
    </section>
    <q-list dense class="flex flex-center">
      <q-item clickable dense :to="{ name: 'tos.index' }" class="items-center">使用條款</q-item>
      <q-item clickable dense :to="{ name: 'pdpa.index' }" class="items-center">個人資料處理方針</q-item>
    </q-list>
    <p>Copyright ⓒ 2022 QL99 All rights reserved.</p>
  </q-footer>
</template>

<script setup>
</script>
