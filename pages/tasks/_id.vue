<template>
  <v-container class="pt-10">
    <v-row>
      <v-col cols="12" class="mb-5 pink--text">
        <h1 class="text-center">{{ project.projectName }}</h1>
      </v-col>
      <v-col cols="12" lg="4" offset-lg="4">
        <v-card class="mx-auto" max-width="344">
          <div class="d-flex align-center">
            <div>
              <v-card-title> {{ task.title }} </v-card-title>

              <v-card-subtitle>
                {{ task.completed ? "Completed" : "Inprogress" }}
              </v-card-subtitle>
            </div>
            <v-spacer></v-spacer>
            <!-- edit project descrption -->
              <v-dialog v-model="editDialog" persistent max-width="600px">
                <!-- //// btn to open the dialog //// -->
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="pink"
                    dark
                    class="mr-5"
                    v-bind="attrs"
                    v-on="on"
                    fab
                    small
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <!-- //// the modal //// -->
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit Task Info</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="task.title"
                            label="Task Name"
                            required
                            autocomplete
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            v-model="task.desc"
                            label="Task Description"
                            required
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="editDialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="editTask">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            <!-- --------------- -->
          </div>

          <v-card-actions>
            <v-btn color="orange lighten-2" @click="changeStatus" text>
              {{ task.completed ? "redo" : "mark as completed" }}
            </v-btn>
            <!-- delete the task -->
            <v-btn
              v-if="task.completed"
              color="red lighten-2"
              text
              @click="alert = true"
            >
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
                {{ task.desc }}
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
      alert: false,
      editDialog: false,
    };
  },
  computed: {
    project() {
      const param = this.$route.params.id;
      const projectId = param.split("_")[0];
      return this.$store.state.data.filter(
        (project) => project.projectId === parseInt(projectId)
      )[0];
    },
    task() {
      const param = this.$route.params.id;
      const taskId = param.split("_")[1];
      return this.project.tasks.filter(
        (task) => task.id === parseInt(taskId)
      )[0];
    },
  },
  methods: {
    changeStatus() {
      this.$store.commit("changeStatus", this.task);
    },
   editTask() {
     this.$store.commit("edit");
     this.editDialog = false
   },
    deleteTask() {
      this.alert = false;
      this.$router.push(`/projects/${this.task.projectId}`);
      this.$store.commit("deleteTask", this.task);
    },
  },
};
</script>

<style>
</style>