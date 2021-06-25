<template>
  <div class="flex px-4 pt-4">
    <div>
      <n-avatar
        circle
        :size="95"
        src="https://z3.ax1x.com/2021/06/25/R1YH1A.jpg"
        class="object-center"
      />
    </div>
    <div class="flex flex-col self-center pl-5">
      <div class="flex">
        <h1
          class="
            text-black
            dark:text-white
            font-poppins font-semibold
            text-xl
            self-center
          "
        >
          邵德玉
        </h1>
        <img
          class="ml-2"
          src="https://emojis.slackmojis.com/emojis/images/1547582922/5197/party_blob.gif?1547582922"
          width="30"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { NAvatar } from "naive-ui";
  export default {
    components: {
      NAvatar,
    },
  };
</script>
