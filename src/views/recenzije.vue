<template>
  <div class="table-margin">
    <table class="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">Ime i prezime</th>
          <th scope="col">Email</th>
          <th scope="col">Ocjena</th>
          <th scope="col">Tekst</th>
          <th scope="col">Postavljeno</th>
          <th scope="col">Komentar od mehaničara</th>
        </tr>
      </thead>
      <adminrecenzije :key="a.id" :mehrec="a" v-for="a in recenzije" />
    </table>
    <div
      class="modal fade"
      id="commentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="commentModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="commentModalLongTitle">Unesi napomenu</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Napomena od mehaničara:
            <textarea
              placeholder="comment"
              rows="5"
              cols="50"
              v-model="komentar"
              name="opis"
            ></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              @click="saveComment()"
              type="submit"
              class="btn btn-primary"
              name="send-mail"
            >Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store.js";
import moment from "moment";
import adminrecenzije from "@/components/adminrecenzije.vue";
export default {
  data() {
    return store;
  },
  components: {
    adminrecenzije
  },
  methods: {
    saveComment() {
      let id = this.activeuser;
      if (!id) {
        alert("Fail");
        return;
      }
      db.collection("recenzije2")
        .doc(this.activeuser)
        .update({
          komentar: this.komentar
        })
        .then(function() {
          $("#commentModal").modal("hide");
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
</script>
<style>
@media only screen and (min-width: 760px) {
  .table-margin {
    margin: 370px;
    margin-top: 20px;
  }
}
</style>