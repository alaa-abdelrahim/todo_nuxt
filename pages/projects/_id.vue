<template>
  <v-container class="pt-10">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="400">
          <v-card-title class="white--text pink">
            {{ project.projectName }}

            <v-spacer />

            <v-btn color="white" class="text--primary" fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="pt-4">
            {{project.desc}}
          </v-card-text>

          <v-divider />

          <v-virtual-scroll :items="project.tasks" :item-height="50" height="300">
            <template #default="{ item }">
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar :color="item.status === 'Completed' ? 'pink' : 'blue'" size="56" class="white--text">
                    {{ item.status === 'Completed' ? 'C' : 'In'}}
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn depressed small router :to="'/tasks/' + item.projectId + '_' + item.id">
                    view
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    project () {
      return this.$store.state.data.filter(project => project.projectId === parseInt(this.$route.params.id))[0]
    }
  }
}
</script>

<style>
</style>
