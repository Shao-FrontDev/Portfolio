<template>
  <div :class="active ? 'dark' : ''">
    <!-- MAIN BODY -->
    <main class="h-screen dark:bg-black bg-white">
      <!-- Top Main Header -->
      <div class="px-4 py-3 flex justify-between">
        <router-link to="/">
          <n-avatar
            circle
            :style="{
              color: active ? 'black' : 'white',
              backgroundColor: active ? 'white' : 'black',
            }"
          >
            <h1 class="font-poppins font-semibold logo">S</h1>
          </n-avatar>
        </router-link>
        <div class="flex">
          <svg
            :class="active ? 'text-white' : 'text-gray-500'"
            class="w-5"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path
                d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
              ></path>
            </g>
          </svg>
          <n-switch class="mx-1 self-center" v-model:value="active" />
          <svg
            :class="active ? 'text-white' : 'text-gray-500'"
            class="w-5"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
              ></path>
              <path
                d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0-2 2a2 2 0 0 0-2-2a2 2 0 0 0 2-2"
              ></path>
              <path d="M19 11h2m-1-1v2"></path>
            </g>
          </svg>
          <div
            v-if="!state.mobileView"
            class="dropdown dropdown-end ml-3 self-center"
          >
            <svg
              tabindex="0"
              class="h-6 text-black dark:text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5l5-5H7z" fill="currentColor"></path>
            </svg>
            <ul
              class="
                mt-2
                shadow
                menu
                dropdown-content
                text-black
                dark:text-white dark:bg-tag-dark
                bg-white
                rounded-box
                w-52
              "
            >
              <li>
                <a href="https://github.com/Shao-FrontDev" target="__blank">
                  <div class="flex self-center cursor-pointer">
                    <svg
                      class="self-center text-main-blue dark:text-main-blue h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span
                      class="
                        ml-3
                        self-center
                        dark:text-white
                        text-black
                        font-poppins
                      "
                      >Source Code</span
                    >
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div v-else class="self-center cursor-pointer">
            <a href="https://github.com/Shao-FrontDev" target="__blank">
              <svg
                class="text-main-blue dark:text-main-blue h-5 pl-3"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!-- Top Header Component MOBILE/DESKTOP-->
      <TopHeader v-if="state.mobileView" />
      <DesktopTopHeader v-else />
      <!-- SocialMedia Component -->
      <SocialMedia v-if="state.mobileView" />
      <!-- Section Component -->
      <div
        class="
          flex flex-row
          justify-around
          border-t border-b border-gray-200
          dark:border-gray-900
          mt-2
        "
      >
        <div
          class="
            cursor-pointer
            mb-1.5
            border-t border-transparent
            hover:border-main-blue
          "
          v-for="(tab, index) in tabs"
          :key="index"
          @click="component = tab.name"
        >
          <span>
            <img
              v-if="active"
              class="flex h-6 max-w-screen-lg mx-auto mt-1.5"
              :src="tab.darkIcon"
              :alt="tab.name"
            />
            <img
              v-else
              class="flex h-6 max-w-screen-lg mx-auto mt-1.5"
              :src="tab.lightIcon"
              :alt="tab.name"
            />
          </span>
          <h1 class="text-black dark:text-white font-poppins font-medium">
            {{ tab.name }}
          </h1>
        </div>
      </div>
      <keep-alive>
        <component :is="component" />
      </keep-alive>
    </main>
  </div>
</template>

<script>
  import TopHeader from "../components/TopHeader.vue";
  import SocialMedia from "../components/SocialMedia.vue";
  import DesktopTopHeader from "../components/DesktopTopHeader.vue";
  import { ref } from "vue";
  import toggleNavBar from "../store/NavStore";
  import { NSwitch, NAvatar } from "naive-ui";
  import { watch, onBeforeMount } from "vue";

  // Views
  import Projects from "./Projects.vue";
  import Skills from "../screens/Skills.vue";
  import projectIcon from "../assets/project_icon.png";
  import skillsIcon from "../assets/skills_icon.png";
  import projectIconLight from "../assets/project_icon_light.png";
  import skillsIconLight from "../assets/skills_icon_light.png";

  const active = ref(false);
  const { state } = toggleNavBar();

  export default {
    name: "Intro",
    components: {
      NSwitch,
      NAvatar,
      TopHeader,
      SocialMedia,
      DesktopTopHeader,
      Projects,
      Skills,
    },
    data() {
      return {
        tabs: [
          {
            name: "Projects",
            darkIcon: projectIcon,
            lightIcon: projectIconLight,
          },

          {
            name: "Skills",
            darkIcon: skillsIcon,
            lightIcon: skillsIconLight,
          },
        ],
        component: "Projects",
      };
    },
    setup() {
      onBeforeMount(() => {
        const item = localStorage.getItem("theme");
        if (item === "true") {
          active.value = true;
        } else {
          active.value = false;
        }
      });
      watch(active, (value) => {
        localStorage.setItem("theme", value);
      });

      return {
        active: active,
        state,
      };
    },
  };
</script>

<style scoped>
  .logo {
    font-size: 40px;
  }
</style>
