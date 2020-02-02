<template>
  <div class="container is-full-h">
    <section class="box is-centered">
      <b-button class="is-medium is-primary">Save</b-button>
      <b-button class="is-medium is-primary">Publish</b-button>
      <b-button class="is-medium is-primary" @click="$auth.logout()">Logout</b-button>
    </section>
    <div class="box" id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div class="content" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import marked from "marked";
import * as _ from "lodash";

export default Vue.extend({
  //middleware: "auth",
  data() {
    return {
      input: "# hello"
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.$data.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(this: any, e: any) {
      this.$data.input = e.target.value;
    }, 300)
  }
});
</script>

<style>
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: auto;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #5455a5;
  color: #fff;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}

.is-full-h {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
