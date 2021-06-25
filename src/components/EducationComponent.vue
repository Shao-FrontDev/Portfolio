<template>
  <TransitionRoot
    as="template"
    appear
    :show="isShowing"
    enter="transition transform duration-300 ease-out"
    enter-from="translate-x-4 opacity-0"
    enter-to="translate-x-0 opacity-100"
  >
    <div
      class="
        shadow-sm
        hover:shadow-md
        bg-gray-100
        dark:bg-custom-black
        rounded-md
        py-2
      "
    >
      <div class="flex">
        <TransitionChild
          as="template"
          enter="transition transform duration-300 ease-out"
          enter-from="rotate-90 scale-50 opacity-0"
          enter-to="rotate-0 scale-100 opacity-100"
        >
          <img
            width="44"
            class="my-4 ml-4 mr-2"
            :src="edu.logo"
            :alt="edu.name"
          />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition transform duration-300 ease-out"
          enter-from="translate-x-12 opacity-0"
          enter-to="translate-x-0 opacity-100"
        >
          <div class="flex flex-col self-center">
            <span
              class="
                mt-1
                ml-2
                text-black
                font-poppins font-medium
                dark:text-white
              "
            >
              {{ edu.name }}
            </span>
            <span
              class="ml-2 text-gray-700 font-poppins font-sm dark:text-gray-300"
            >
              {{ edu.field }}, {{ edu.type }}
            </span>
            <span
              class="
                mb-1
                ml-2
                text-gray-500
                font-poppins font-xs
                dark:text-gray-500
              "
            >
              {{ edu.startDate }} - {{ edu.endDate }}
            </span>
          </div>
        </TransitionChild>
      </div>
    </div>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";

import { TransitionRoot, TransitionChild } from "@headlessui/vue";

export default {
  props: ["edu"],
  components: {
    TransitionRoot,
    TransitionChild,
  },
  setup() {
    const isShowing = ref(true);

    return { isShowing };
  },
};
</script>