<template>
  <v-container class="pt-10">
    <v-row>
      <!-- page title -->
      <v-col cols="12">
        <h1 class="text-center mb-5 pink--text">Projects List</h1>
      </v-col>
      <!-- add project modal -->
      <v-col cols="12" class="d-flex align-end flex-column mb-5">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <!-- //// btn to open the dialog //// -->
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="pink white--text" v-bind="attrs" v-on="on">
              <v-icon>mdi-plus</v-icon>
              Add new Project
            </v-btn>
          </template>
          <!-- //// the modal //// -->
          <v-card>
            <v-card-title>
              <span class="headline">Add new Project</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="newProjectTitle"
                      label="Task title"
                      required
                      autocomplete
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="newProjectDesc"
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
              <v-btn color="blue darken-1" text @click="addProject">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <!-- show all projects -->
    <v-row>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <!-- for each project -->
        <v-timeline-item
          v-for="project in projects"
          :key="project.projectId"
          color="pink"
        >
          <span slot="opposite"
            >{{ project.tasks.length }} task{{
              project.tasks.length === 1 ? "" : "s"
            }}</span
          >
          <v-card class="elevation-2 py-5 px-3">
            <v-card-title class="headline">
              {{ project.projectName }}
            </v-card-title>
            <v-card-text>{{ project.desc }}</v-card-text>
            <v-btn
              plain
              color="pink"
              block
              router
              :to="'/projects/' + project.projectId"
            >
              Open
            </v-btn>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      newProjectTitle: "",
      newProjectDesc: "",
    };
  },
  computed: {
    projects() {
      return this.$store.state.data;
    },
  },
  methods: {
    resetForm() {
      this.dialog = false;
      this.newProjectTitle = "";
      this.newProjectDesc = "";
    },
    addProject() {
      const projectsCount = this.projects[this.projects.length - 1].projectId;
      this.$store.commit("addProject", {
        projectName: this.newProjectTitle,
        desc: this.newProjectDesc,
      });
      this.dialog = false;
      this.$router.push(`/projects/${projectsCount + 1}`);
    },
  },
};
</script>

<style>
</style>
