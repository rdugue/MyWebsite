<template>
  <b-tabs v-model="activeTab">
    <template v-for="(tab, index) in tabs">
      <b-tab-item :key="index" :label="tab.label">
        <b-carousel :arrow="arrows" :arrow-both="arrows" :arrow-body="arrows">
          <b-carousel-item v-for="(post, i) in tab.posts" :key="i">
            <nuxt-link :to="{ path: post.slug }"
              ><card :post="post"></card
            ></nuxt-link>
          </b-carousel-item>
        </b-carousel>
      </b-tab-item>
    </template>
  </b-tabs>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "../../components/Card.vue";
import { getAllPosts } from "../../api/posts";

export default Vue.extend({
  components: { Card },
  data() {
    return {
      activeTab: 0,
      arrows: true
    };
  },
  computed: {
    tabs() {
      return [
        {
          label: "All",
          posts: getAllPosts()
        }
      ];
    }
  },
  methods: {
    async getAllPosts() {
      const posts = await getAllPosts();
      return { posts: posts };
    }
  }
});
</script>
