<script>
import JobCard from "../components/jobCard.vue";
import { ref, onMounted, watch } from "vue";
import SelectedSkills from "@/components/SelectedSkills.vue";
import axios from "axios";

export default {
  components: {
    JobCard,
    SelectedSkills,
  },

  setup() {
    const jobs = ref([]);
    const selectedJobs = ref([]);
    const getJobs = () => {
      axios
        .get("https://mock.apidog.com/m1/913415-895784-default/jobs")
        .then((res) => {
          jobs.value = res.data.data;
        });
    };
    const jobsData = () => {
      if (selectedJobs.value && selectedJobs.value.length > 0) {
        const filterd = jobs.value.filter((el) => {
          return selectedJobs.value.every((selecjob) =>
            el.skills.includes(selecjob)
          );
        });
        return filterd;
      }
      return jobs.value;
    };
    const filterJobs = (skill) => {
      if (selectedJobs.value.includes(skill)) {
        return;
      } else {
        selectedJobs.value = [...selectedJobs.value, skill];
      }
    };
    watch(
      () => selectedJobs.value,
      (newVal) => {
        jobsData();
      }
    );
    const clearItem = (skill) => {
      selectedJobs.value = selectedJobs.value.filter((el) => el !== skill);
    };
    const clearfilter = () => {
      selectedJobs.value = [];
    };

    onMounted(() => {
      getJobs();
    });
    return {
      jobs,
      selectedJobs,
      jobsData,
      filterJobs,
      clearfilter,
      clearItem,
    };
  },
};
</script>

<template>
  <SelectedSkills
    :selectedSkills="selectedJobs"
    @clearfilter="clearfilter"
    @clearItem="clearItem"
  ></SelectedSkills>
  <div v-for="job in jobsData()" :key="job.id">
    <JobCard @filterJobs="filterJobs" :job="job"></JobCard>
  </div>
</template>
