<template>
  <tbody>
    <tr v-if="recensione.email==userEmail">
      <td>{{recensione.ime}}</td>
      <td>{{recensione.email}}</td>
      <td>{{recensione.ocjena}}</td>
      <td>{{recensione.opis}}</td>
      <td>{{recensione.posted_at | formatTime }}</td>
      <td style="font-family:verdana; ">{{recensione.komentar}}</td>
    </tr>
  </tbody>
</template>
<script>
import store from "@/store.js";
import moment from "moment";
export default {
  props: ["recensione"],
  data() {
    return store;
  },
  filters: {
    formatTime: function(value) {
      return moment(value).format("MMMM Do YYYY, h:mm:ss a");
    }
  }
};
</script>