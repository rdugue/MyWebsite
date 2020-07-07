<template>
  <div class="column is-three-quarters">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">{{ post.title }}</p>
      </header>
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content has-text-centered">
          <b-icon :icon="icon" size="is-large" type="is-primary" />
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    post: {
      type: Object,
      required: true
    }
  }
});
</script>
