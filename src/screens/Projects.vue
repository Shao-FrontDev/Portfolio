<template>
  <div class="bg-white dark:bg-black">
    <div
      v-if="!state.loading"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-2 my-2"
    >
      <div v-for="project in state.results" :key="project.projectSlug">
        <ProjectTemplate :project="project" />
      </div>
    </div>
    <div v-else class="m-auto mt-24 flex justify-center w-20">
      <img :src="loader" alt="loader" />
    </div>
  </div>
</template>

<script>
  import ProjectTemplate from "../components/ProjectComponent.vue";
  import getData from "../service/projectAPI";
  import loader from "../assets/loader.svg";

  export default {
    components: {
      ProjectTemplate,
    },
    setup() {
      const { state } = getData();

      return { state, loader };
    },
  };
</script>
