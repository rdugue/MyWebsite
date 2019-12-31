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
    <div class="trapezoid"></div>
  </div>
</template>

<script>
// import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {}
}
</script>
<style>
  .wrapper {
    height: 100%;
    width: 100%;
    background: #5455A5;
    position: relative;
  }

  .trapezoid {
    border-bottom: 300px solid #595;
    border-left: 100px solid transparent;
    height: 100%;
    width: 45%;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
