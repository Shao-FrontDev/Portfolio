<template>
  <div class="bg-white dark:bg-black">
    <div
      v-if="!state.loading"
      class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-2 my-2"
    >
      <div
        v-for="(skill, index) in state.results"
        :key="skill._id"
        :data-index="index"
      >
        <SkillComponent :name="skill.name" :logo="skill.logo" />
      </div>
    </div>
    <div v-else class="m-auto mt-24 flex justify-center w-20">
      <img :src="loader" alt="loader" />
    </div>
  </div>
</template>

<script>
  import SkillComponent from "../components/SkillsComponent.vue";
  import loader from "../assets/loader.svg";
  import getData from "../service/skillsAPI";

  export default {
    components: {
      SkillComponent,
    },
    setup() {
      //获取数据
      const { state } = getData();
      
      return { state, loader };
    },
  };
</script>
