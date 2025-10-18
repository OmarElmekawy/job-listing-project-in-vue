<template>
  <div class="jobCardContainer">
    <div class="titlesContainer">
      <img src="../assets/images/frontImage.jpg" alt="hhh" class="img" />
      <div>
        <div class="types">
          <p>{{ job.company }}</p>
          <p class="version">{{ job.isNew ? "New" : "Old" }}</p>
          <p class="feature">Featured</p>
        </div>
        <p class="title">{{ job.title }}</p>
        <div class="details">
          <p class="text">date</p>
          <p class="text">.</p>
          <p class="text">{{ job.type }}</p>
          <p class="text">.</p>
          <p class="text">{{ job.location }}</p>
        </div>
      </div>
    </div>
    <div class="skillsList">
      <ul v-for="skill in job.skills">
        <li @click="filterJobs(skill)" class="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["job"],
  setup(props, { emit }) {
    const filterJobs = (skill) => {
      emit("filterJobs", skill);
    };
    return {
      filterJobs,
    };
  },
};
</script>
