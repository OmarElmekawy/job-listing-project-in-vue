<template>
  <div class="skillsContainer" v-if="selectedSkills.length > 0">
    <div class="skillsList">
      <ul v-for="skill in selectedSkills" :key="skill">
        <li class="filterSkill">
          <p>{{ skill }}</p>
          <span @click="clearItem(skill)" >x</span>
        </li>
      </ul>
    </div>
    <div class="clearContainer">
      <button @click="clearfilter()" class="clear">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedSkills"],
  setup(props, { emit }) {
    const clearfilter = () => {
      emit("clearfilter");
    };
    const clearItem = (skill) =>{
      emit("clearItem", skill)
    }
    return {
      clearfilter,
      clearItem
    };
  },
};
</script>
