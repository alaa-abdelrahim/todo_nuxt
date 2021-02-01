<template>
  <v-app dark>
    <v-container class="pt-10">
      <v-row>
        <v-col cols="12">
          <h1 class="text-h1 font-weight-bold pink--text text-center mb-10">
            {{ error.statusCode }}
          </h1>
          <h2 class="text-center mb-10">
            {{ head }}
          </h2>
          <div class="text-center">
            <v-btn text color="pink" router to="/">
            Back to Dashboard
          </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Page Not Found',
      otherError: 'An error occurred'
    }
  },
  computed: {
    head () {
      return this.error.statusCode === 404
        ? this.pageNotFound
        : this.otherError
    }
  }
}
</script>

<style>
</style>
