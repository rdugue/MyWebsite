<template>
  <div class="container pad">
    <div class="center">
      <figure class="image is-200x200">
        <img src="/logo.png" />
      </figure>
    </div>
    <div class="box">
      <section>
        <b-field>
          <b-input name="subject" v-model="email.subject" placeholder="Subject" expanded></b-input>
        </b-field>

        <b-field>
          <b-input name="name" placeholder="Name" v-model="email.name" expanded></b-input>
          <b-input
            name="email"
            type="email"
            placeholder="nobody@nowhere.com"
            v-model="email.address"
            expanded
          ></b-input>
        </b-field>

        <b-field>
          <b-input type="textarea" placeholder="Message" v-model="email.message"></b-input>
        </b-field>

        <b-field>
          <!-- Label left empty for spacing -->
          <p class="control">
            <button class="button is-primary" @click="sendMessage(email)">Say hi!</button>
          </p>
        </b-field>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Email {
  subject: string;
  name: string;
  address: string;
  message: string;
}
export default Vue.extend({
  data() {
    return {
      email: {
        subject: "",
        name: "",
        address: "",
        message: ""
      }
    };
  },
  methods: {
    async sendMessage(email: Email) {
      const data = new FormData();
      data.append("subject", email.subject);
      data.append("name", email.name);
      data.append("address", email.address);
      data.append("message", email.message);
      try {
        const response = await this.$axios.$post("function-2", data);
        /*this.$toast.open({
          message: "Your email has been sent successfully!",
          type: "is-success"
        });*/
      } catch (error) {
        console.log(error);
      }
    }
  }
});
</script>

<style scoped>
.pad {
  margin-top: 150px;
}

.center {
  margin: auto;
  width: 10%;
}
</style>