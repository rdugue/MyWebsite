<template>
  <div class="tile is-4 notification is-primary">
    <section>
      <b-field label="Username">
        <b-input value="johnsilver" maxlength="30"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" value="iwantmytreasure" password-reveal>
        </b-input>
      </b-field>

      <b-button type="is-primary" outlined>Login</b-button>
    </section>
  </div>
</template>
