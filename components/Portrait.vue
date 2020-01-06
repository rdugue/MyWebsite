<template>
  <div class="circle container">
    <figure class="image is-128x128 centered">
      <img
        class="is-rounded"
        :src="url"/>
    </figure>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .circle {
    height: 150px;
    width: 150px;
    background-color: #FFF;
    border-radius: 50%;
    margin: auto;
    padding: 11px 0;
  }
  .centered {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
