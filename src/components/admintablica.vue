<template>
  <tbody>
    <tr v-if="tablica.status != 'rijeseno'">
      <th scope="row">{{tablica.ime}}</th>
      <td>{{tablica.prezime}}</td>
      <td>{{tablica.email}}</td>
      <td>{{tablica.grad}}</td>
      <td>{{tablica.adresa}}</td>
      <td>{{tablica.zip}}</td>
      <td>
        <button
          v-if="tablica.url>='1'"
          @click="prikazSlike(tablica);"
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#picModal"
        >
          <i class="far fa-image"></i> Prikaz
        </button>
        <p v-else-if="tablica.url!=='1'">
          <i class="fas fa-ban"></i>
        </p>
      </td>
      <td>{{ tablica.posted_at | formatTime }}</td>
      <button
        @click="editComment(tablica);"
        type="button"
        style="margin: 12px;"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#commentModal"
      >
        <i class="fas fa-comment-medical"></i>
      </button>
      <td v-if="tablica.status=='odobreno'">
        <span class="badge badge-success">Odobreno</span>
      </td>
      <td v-else-if="tablica.status=='odbijeno'">
        <span class="badge badge-danger">Odbijeno</span>
      </td>
      <td v-else-if="tablica.prihvacennovitermin=='da'">
        <span class="badge badge-success">(!)Prihvaćen termin</span>
      </td>
      <td v-else-if="tablica.prihvacennovitermin=='ne'">
        <span class="badge badge-light" style="color:red;">(!)Odbijen termin</span>
      </td>
      <td v-else-if="tablica.status=='promjenatermina'">
        <span class="badge badge-warning">Ponuđen drugi termin</span>
      </td>
      <td v-else-if="tablica.status=='rijeseno'">
        <span class="badge badge-warning">rijeseno</span>
      </td>
      <td v-else>
        <span class="badge badge-info">Nerješeno</span>
      </td>
      <div
        class="modal fade"
        id="picModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="picModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content" style="display:inline-block;">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <img class="modal-content" :src="url" />
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Zatvori</button>
            </div>
          </div>
        </div>
      </div>
    </tr>
  </tbody>
</template>
  <script>
import store from "@/store.js";
import moment from "moment";
export default {
  data() {
    return store;
  },
  filters: {
    formatTime: function(value) {
      return moment(value).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  props: ["tablica"],
  methods: {
    editComment(tablica) {
      $("#commentModal").modal("show");
      this.napomena = tablica.comment || "";
      this.ime = tablica.ime;
      this.status = tablica.status || "";
      this.aktivnikorisnik = tablica.id;
      this.vrijeme = tablica.vrijeme;
      this.datum = tablica.datum;
      this.auto = tablica.auto;
      this.prezime = tablica.prezime;
      this.radiona = tablica.radiona;
      this.number = tablica.number;
      this.tekst = tablica.tekst;
      this.zip = tablica.zip;
      this.email = tablica.email;
      this.brtel = tablica.brtel;
      this.brtel2 = tablica.brtel2;
    },
    prikazSlike(tablica) {
      this.url = tablica.url;
    }
  }
};
</script>