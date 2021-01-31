<template>
  <v-container class="pt-10">
    <v-row>
      <v-col cols="12">
        <h1 class="pink--text text-center">Welcome Back, {{ username }}</h1>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-card-text class="text-center">
            <div>You have</div>
            <p class="display-4 font-weight-bold text--pink">
              {{ projectsCount }}
            </p>
            <p>Project{{ projectsCount === 1 ? "" : "s" }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-card-text class="text-center">
            <div>You have</div>
            <p class="display-4 font-weight-bold text--pink">
              {{ unCompletedTasks }}
            </p>
            <p>Un completed task{{ unCompletedTasks === 1 ? "" : "s" }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-card-text class="text-center">
            <div>You have</div>
            <p class="display-4 font-weight-bold text--pink">
              {{ completedTasks }}
            </p>
            <p>Completed task{{ completedTasks === 1 ? "" : "s" }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$store.state.userName
    },
    projectsCount () {
      return this.$store.state.data.length
    },
    tasks () {
      let allTasks = [];
      this.$store.state.data.forEach(project => {
        project.tasks.forEach(task => {
          allTasks.push(task)
        })
      });

      return allTasks;
    },
    unCompletedTasks() {
      return this.tasks.filter(task => task.status === 'Inprogress').length
    },
    completedTasks() {
      return this.tasks.filter(task => task.status === 'Completed').length
    }
  }
};
</script>
