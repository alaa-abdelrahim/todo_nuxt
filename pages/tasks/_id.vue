<template>
  <v-container class="pt-10">
    <v-row>
        <v-col cols="12" class="mb-5 pink--text">
            <h1 class="text-center">{{project.projectName}}</h1>
        </v-col>
      <v-col cols="12" lg="4" offset-lg="4">
        <v-card class="mx-auto" max-width="344">

          <v-card-title> {{task.title}} </v-card-title>

          <v-card-subtitle> {{task.status}} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> {{task.status === 'Completed' ? 'redo' : 'mark as completed'}} </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{task.desc}}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    computed: {
        project() {
            const param = this.$route.params.id
            const projectId = param.split('_')[0];
            return this.$store.state.data.filter(project => project.projectId === parseInt(projectId))[0]
        },
        task() {
            const param = this.$route.params.id;
            const taskId = param.split('_')[1];
            return this.project.tasks.filter(task => task.id === parseInt(taskId))[0]
        }
    }
};
</script>

<style>
</style>