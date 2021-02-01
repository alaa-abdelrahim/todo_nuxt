<template>
  <v-container class="pt-10">
    <v-row>
      <!-- project name and "add task" btn -->
      <v-col cols="12">
        <v-card class="mx-auto" max-width="400">
          <!-- ==== project name ==== -->
          <v-card-title class="white--text pink">
            {{ project.projectName }}
            <!-- ==== add space between the name and the btn ==== -->
            <v-spacer />
            <!-- ==== btn with dialog ==== -->
            <v-dialog v-model="dialog" persistent max-width="600px">
              <!-- //// btn to open the dialog //// -->
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="white" v-bind="attrs" v-on="on" fab small>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <!-- //// the modal //// -->
              <v-card>
                <v-card-title>
                  <span class="headline">Add new Task</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="newTaskTitle"
                          label="Task title"
                          required
                          autocomplete
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="newTaskDesc"
                          label="Task Description"
                          required
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="resetForm">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="addTask">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- //// end of modal //// -->
          </v-card-title>
          <!-- project description -->
          <v-card-text class="pt-4">
            {{ project.desc }}
          </v-card-text>

          <v-divider />

          <!-- tasks -->
          <v-virtual-scroll
            :items="project.tasks"
            :item-height="50"
            height="300"
          >
            <template #default="{ item }">
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar
                    :color="item.completed ? 'pink' : 'blue'"
                    size="56"
                    class="white--text"
                  >
                    {{ item.completed ? "C" : "In" }}
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    depressed
                    small
                    router
                    :to="'/tasks/' + item.projectId + '_' + item.id"
                  >
                    view
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-virtual-scroll>
          <!-- delete the project -->
          <v-card-actions>
            <template>
              <v-btn color="red lighten-2" text @click="alert = true">
                Delete The project
              </v-btn>
              <!-- alert -->
              <v-dialog v-model="alert" max-width="290">
                <v-card>
                  <v-card-title class="headline">
                    Are you sure you want to delete this project?
                  </v-card-title>

                  <v-card-text>
                    You'll be no longer able to redo this. and all its tasks
                    will be removed too.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="alert = false">
                      Cansel
                    </v-btn>

                    <v-btn color="red darken-1" text @click="deleteProject">
                      Ok
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template></v-card-actions
          ></v-card
        ></v-col
      ></v-row
    ></v-container
  >
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      alert: false,
      newTaskTitle: "",
      newTaskDesc: "",
    };
  },
  computed: {
    project() {
      return this.$store.state.data.filter(
        (project) => project.projectId === parseInt(this.$route.params.id)
      )[0];
    },
  },
  methods: {
    resetForm() {
      this.dialog = false;
      this.newTaskTitle = "";
      this.newTaskDesc = "";
    },
    addTask() {
      this.$store.commit("addTask", {
        projectId: this.project.projectId,
        title: this.newTaskTitle,
        desc: this.newTaskDesc,
      });
      this.dialog = false;
    },
    deleteProject() {
      this.alert = false;
      this.$router.push(`/projects`);
      this.$store.commit("deleteProject", this.project.projectId);
    },
  },
};
</script>

<style>
</style>
