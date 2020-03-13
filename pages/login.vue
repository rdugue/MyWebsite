<template>
  <div class="container">
    <div class="columns pad">
      <div class="column is-5"></div>
      <div class="box column is-3 is-primary">
        <div class="level">
          <figure class="image is-128x128 center">
            <img src="/logo.png" />
          </figure>
        </div>
        <section>
          <b-field>
            <b-input
              placeholder="Username"
              v-model="user.username"
              maxlength="30"
            ></b-input>
          </b-field>

          <b-field>
            <b-input
              placeholder="Password"
              type="password"
              v-model="user.password"
              maxlength="30"
              password-reveal
            ></b-input>
          </b-field>

          <b-button type="is-warning" @click="loginUser(user)" expanded outlined
            >Login</b-button
          >
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ToastProgrammatic as Toast } from "buefy";

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
      try {
        await this.$auth.loginWith("local", {
          data: user
        });
        this.$router.push("/editor");
        Toast.open({
          message: "Successfully logged in!",
          type: "is-success"
        });
      } catch (err) {
        console.error(err);
        Toast.open({
          message: err.message,
          type: "is-error"
        });
      }
    }
  }
});
</script>

<style>
.is-primary {
  background-color: #5455a5;
}

.pad {
  padding-top: 150px;
}

.center {
  margin: auto;
  width: 50%;
}
</style>
