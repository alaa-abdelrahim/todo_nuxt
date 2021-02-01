<template>
  <v-app>
    <nav>
      <v-card color="grey lighten-4" flat>
        <v-toolbar>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title class="text-uppercase">
            <span class="font-weight-light">todo</span>
            <span>app</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>

          <!-- <v-btn plain color="pink" class="white--text">
            Logout
            <v-icon right> mdi-logout </v-icon>
          </v-btn> -->
        </v-toolbar>
      </v-card>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            active-class="pink--text text--accent-4"
          >
            <v-subheader>MENU</v-subheader>
            <v-list-item router to="/">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-item router to="/projects">
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item>

            <v-list-item router to="/tasks">
              <v-list-item-icon>
                <v-icon>mdi-sitemap</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tasks</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <v-content>
      <Nuxt />
    </v-content>
    <v-footer app>
      <p class="my-5 mx-auto">
        &copy; {{ new Date().getFullYear() }} | All right reserved to Alaa Abd El-Rahim
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
