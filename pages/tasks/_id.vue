<template>
  <v-container class="pt-10">
    <v-row>
        <v-col cols="12" class="mb-5 pink--text">
            <h1 class="text-center">{{project.projectName}}</h1>
        </v-col>
      <v-col cols="12" lg="4" offset-lg="4">
        <v-card class="mx-auto" max-width="344">

          <v-card-title> {{task.title}} </v-card-title>

          <v-card-subtitle> {{task.completed ? "Completed" : "Inprogress"}} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" @click="changeStatus" text> {{task.completed ? 'redo' : 'mark as completed'}} </v-btn>
            <!-- delete the task -->
              <v-btn v-if="task.completed" color="red lighten-2" text @click="alert = true">
                Delete
              </v-btn>
              <!-- alert -->
              <v-dialog v-model="alert" max-width="290">
                <v-card>
                  <v-card-title class="headline">
                    Are you sure you want to delete this task?
                  </v-card-title>

                  <v-card-text>
                    You'll be no longer able to redo this.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="alert = false">
                      Cansel
                    </v-btn>

                    <v-btn color="red darken-1" text @click="deleteTask">
                      Ok
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            <!-- task details -->
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
            show: true,
            alert: false
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
    },
    methods: {
      changeStatus () {
        this.$store.commit('changeStatus', this.task)
      },
      deleteTask() {
        this.alert = false
        this.$router.push(`/projects/${this.task.projectId}`);
        this.$store.commit('deleteTask', this.task)
      }
    }
};
</script>

<style>
</style>