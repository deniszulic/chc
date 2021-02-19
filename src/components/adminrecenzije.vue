<template>
  <tbody>
    <tr>
      <td>{{mehrec.ime}}</td>
      <td>{{mehrec.email}}</td>
      <td>{{mehrec.ocjena}}</td>
      <td>{{mehrec.opis}}</td>
      <td>{{mehrec.posted_at | formatTime }}</td>
      <td>
        {{mehrec.komentar}}
        <hr />
        <button
          @click="editComment(mehrec);"
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#commentModal"
        >
          <i class="fas fa-comment"></i>
        </button>
      </td>
    </tr>
  </tbody>
</template>
<script>
import store from "@/store.js";
import moment from "moment";
export default {
  props: ["mehrec"],
  data() {
    return store;
  },
  filters: {
    formatTime: function(value) {
      return moment(value).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  methods: {
    editComment(mehrec) {
      $("#commentModal").modal("show");
      this.activeuser = mehrec.id;
      this.komentar = mehrec.komentar;
    }
  }
};
</script>