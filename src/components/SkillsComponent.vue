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
        my-2
        mx-2
      "
    >
      <div class="flex">
        <div class="w-20 flex justify-center">
          <TransitionChild
            as="template"
            enter="transition transform duration-300 ease-out"
            enter-from="rotate-90 scale-50 opacity-0"
            enter-to="rotate-0 scale-100 opacity-100"
          >
            <img class="my-4 h-10" :src="logo" :alt="name" />
          </TransitionChild>
        </div>
        <div class="flex justify-start">
          <TransitionChild
            as="template"
            enter="transition transform duration-300 ease-out"
            enter-from="translate-x-12 opacity-0"
            enter-to="translate-x-0 opacity-100"
          >
            <h1
              class="
                ml-1.5
                self-center
                text-black
                font-poppins font-medium
                dark:text-white
              "
            >
              {{ name }}
            </h1>
          </TransitionChild>
        </div>
      </div>
    </div>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import { TransitionRoot, TransitionChild } from "@headlessui/vue";

export default {
  props: ["name", "logo"],
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