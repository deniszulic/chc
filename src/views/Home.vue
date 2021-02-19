<template>
  <div class="home">
    <div v-if="tipKorisnika=='Korisnik'" style="padding: 10px; margin-top: 10px;">
      <div style="background-color: #d9d9d9;">
        <h2>Pozdrav, {{userEmail}}</h2>
      </div>
      <div class="container jumbotron">
        <h2>Prijava kvara</h2>
        <obrazac />
      </div>
    </div>
    <div v-else-if="tipKorisnika=='Mehaničar'">
      <admin />
    </div>
    <div v-else>
      <pocetna />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import obrazac from "@/views/obrazac.vue";
import pocetna from "@/views/pocetna.vue";
import admin from "@/views/admin.vue";
import store from "@/store.js";
export default {
  name: "home",
  data() {
    return store;
  },
  components: {
    obrazac,
    pocetna,
    admin
  }
};
</script>
