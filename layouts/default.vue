<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
        <img
          src="~assets/RalphLogo5.png"
          alt="Home"
          height="30"
        >
        <strong>Ralph Dugue</strong>
        </a>
      </div>

      <div class="navbar-end">
        <a class="bd-navbar-icon navbar-item" href="https://github.com/rdugue">
          <b-icon icon="github-circle" />
        </a>
        <a class="bd-navbar-icon navbar-item" href="https://twitter.com/rdugue89">
          <b-icon icon="twitter" />
        </a>
        <a class="bd-navbar-icon navbar-item" href="https://www.linkedin.com/in/rdugue/">
          <b-icon icon="linkedin" />
        </a>
        <a class="bd-navbar-icon navbar-item" href="https://medium.com/@rdugue1">
          <b-icon icon="medium" />
        </a>
        <a class="bd-navbar-icon navbar-item" href="https://www.twitch.tv/kingphito">
          <b-icon icon="twitch" />
        </a>
      </div>
    </nav>

    <section class="main-content columns is-fullheight gold">
      <aside class="column is-2 section purple">
        <p class="menu-label is-hidden-touch">
          navigation
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'About Me',
          icon: 'account-card-details',
          to: { name: 'index' }
        },
        {
          title: 'Resume',
          icon: 'cloud-print',
          to: { name: 'resume' }
        },
        {
          title: 'Projects',
          icon: 'lightbulb',
          to: { name: 'projects' }
        },
        {
          title: 'Writing',
          icon: 'pen',
          to: { name: 'writing' }
        },
        {
          title: 'Contact',
          icon: 'email',
          to: { name: 'contact' }
        }
      ]
    }
  }
}
</script>

<style>
.columns.is-fullheight {
  min-height: calc(100vh - ( 3.25rem - .75rem ) );
  max-height: calc(100vh - ( 3.25rem - .75rem ) );
  height: calc(100vh - ( 3.25rem - .75rem ) );
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}
.columns.is-fullheight .column {
  overflow-y: auto;
}
.gold {
    background-image: linear-gradient(to right, #FBBA22 , white 85%);
}
.purple {
  background-color: #5455A5;
}
</style>
