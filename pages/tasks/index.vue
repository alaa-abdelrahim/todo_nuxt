<template>
  <v-container class="pt-10">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center pink--text mb-5">All Tasks</h1>
      </v-col>
    </v-row>
    <v-row v-for="project in projects" :key="project.projectId" class="mb-5">
      <v-col cols="12 blue--text">
        <h2 class="text-center mb-5">{{project.projectName}}</h2>
      </v-col>
      <v-col cols="12" lg="4" v-for="task in project.tasks" :key="task.title">
        <v-card>
          <template>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar :color="task.completed ? 'pink' : 'blue'" size="56" class="white--text">
                    {{ task.completed ? 'C' : 'In'}}
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ task.title }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn depressed small router :to="'/tasks/' + task.projectId + '_' + task.id">
                      View
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
        </v-card>
      </v-col>
    </v-row>
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
