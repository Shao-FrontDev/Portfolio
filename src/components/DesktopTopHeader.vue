<template>
  <div class="flex pt-4 justify-center">
    <div>
      <n-avatar
        circle
        :size="110"
        src="https://z3.ax1x.com/2021/06/25/R1YH1A.jpg"
      />
    </div>
    <div class="flex flex-col self-center pl-5">
      <div class="flex">
        <div class="self-center">
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
              class="ml-2 mr-2"
              src="https://emojis.slackmojis.com/emojis/images/1563480763/5999/meow_party.gif?1563480763"
              width="30"
            />
          </div>
        </div>
      </div>
      <!-- SOCIALS DESKTOP -->
      <DesktopSocials />
      <!-- BIO DESKTOP -->
      <DesktopBio />
    </div>
  </div>
</template>

<script>
  import DesktopBio from "../components/DesktopBio.vue";
  import DesktopSocials from "../components/DesktopSocials.vue";
  import { NAvatar } from "naive-ui";

  export default {
    components: {
      NAvatar,
      DesktopBio,
      DesktopSocials,
    },
  };
</script>
