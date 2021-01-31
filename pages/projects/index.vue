<template>
  <v-container class="pt-10">
    <h1 class="text-center mb-5 pink--text">
      Projects List
    </h1>
    <v-timeline
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="project in projects"
        :key="project.projectId"
        color="pink"
      >
        <span slot="opposite">{{ project.tasks.length }} task{{ project.tasks.length === 1 ? '' : 's' }}</span>
        <v-card class="elevation-2 py-5 px-3">
          <v-card-title class="headline">
            {{ project.projectName }}
          </v-card-title>
          <v-card-text>{{ project.desc }}</v-card-text>
          <v-btn plain color="pink" block router :to="'/projects/' + project.projectId">
            Open
          </v-btn>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  computed: {
    projects () {
      return this.$store.state.data
    }
  }
}
</script>

<style>

</style>
