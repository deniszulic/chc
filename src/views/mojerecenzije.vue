<template>
  <div class="table-margin">
    <table class="table table-bordered table-dark">
      <thead v-if="nemaData">
        <th>Nema recenzija :(</th>
      </thead>
      <thead v-else>
        <tr>
          <th scope="col">Ime i prezime</th>
          <th scope="col">Email</th>
          <th scope="col">Ocjena</th>
          <th scope="col">Tekst</th>
          <th scope="col">Postavljeno</th>
          <th scope="col">Komentar od mehaničara</th>
        </tr>
      </thead>
      <meinerezension :key="a.id" :recensione="a" v-for="a in recenzije" />
    </table>
  </div>
</template>
<script>
import store from "@/store.js";
import meinerezension from "@/components/meinerezension.vue";
import moment from "moment";
export default {
  data() {
    return store;
  },
  components: {
    meinerezension
  },
  computed: {
    nemaData() {
      return this.recenzije.length == 0;
    }
  }
};
</script>