<template>
  <!--<section class="section">
    <div class="columns is-mobile">
      <card
        title="Free"
        icon="github-circle"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>

      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card
        title="Lightweight"
        icon="arrange-bring-to-front"
      >
        No other internal dependency
      </card>
    </div>
  </section>-->
  <div class="wrapper">
    <div class="trapezoid container">
      <portrait
        url="/profile.jpg"></portrait>
    <div class="content">
      <strong class="text-style">
        Hi, I'm Ralph. I am a software engineer with over 7 years of professional experience.
        I have Android application development, and web development. I enjoy working with Kotlin,
        Python, JavaScript, and more recently Go. I am also a huge Lakers fan as evidenced by
        the color scheme, and in my spare time I like to play video games, study artificial
        intelligence, and do some writing.
      </strong>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Portrait from '../components/Portrait.vue'

export default {
  name: 'HomePage',

  components: { Portrait }
}
</script>

<style>
  .wrapper {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .trapezoid {
    border-bottom: 300px solid #5455A5;
    border-left: 100px solid transparent;
    height: 0%;
    width: 45%;
    top: 0;
    left: 27.5%;
    padding: 80px 0;
  }

  .text-style {
    color: white;
  }
</style>
