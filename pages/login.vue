<template>
  <div class="columns">
    <div class="column is-3"></div>
    <div class="box column is-half is-primary is-vcentered">
      <section>
        <b-field label="Username">
          <b-input v-model="user.username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model="user.password" maxlength="30" password-reveal></b-input>
        </b-field>

        <b-button type="is-warning" @click="loginUser(user)" outlined>Login</b-button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface User {
  username: string;
  password: string;
}
export default Vue.extend({
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser(user: User) {
      await this.$auth.loginWith("local", {
        data: user
      });
      this.$router.push("/editor");
    }
  }
});
</script>

<style>
.is-primary {
  background-color: #5455a5;
}
</style>