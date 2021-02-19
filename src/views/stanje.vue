<template>
  <div>
    <h2 style="background-color: #343a40; color:white; " class="container">Vaše prijave:</h2>
    <div v-if="nemaData" class="card container">
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Nema prijavljenih kvarova.</p>
          <footer class="blockquote-footer">
            Koristite formu na početnoj stranici za
            <cite title="Source Title">prijavu kvara</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    <stanjepodaci :key="podaci.id" :stpodaci="podaci" v-for="podaci in korisnickipodaci" />
    <!-- Slika za usera UwU -->
    <div
      class="modal fade"
      id="picusrModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="picusrModalLabel"
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
    <!-- Modal -->
    <div
      class="modal fade"
      id="ratingmodal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ratingmodalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ratingmodalLabel">Recenzija zaprimljena !</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Hvala na recenziji :)</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="reload"
            >Close</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="prihvaceno"
      tabindex="-1"
      role="dialog"
      aria-labelledby="prihvacenoLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="prihvacenoLabel">Uspješno !</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Prihvatili ste novi termin. Zahvaljujemo!</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="reload"
            >Zatvori</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="odbijeno"
      tabindex="-1"
      role="dialog"
      aria-labelledby="prihvacenoLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="prihvacenoLabel">Uspješno !</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Odbili ste ovaj termin</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="reload"
            >Zatvori</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store.js";
import stanjepodaci from "@/components/stanjepodaci.vue";
import moment from "moment";
export default {
  data() {
    return store;
  },
  components: {
    stanjepodaci
  },
  computed: {
    nemaData() {
      return this.korisnickipodaci.length == 0;
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.stanje = user.email;
      }
    });
  },
  methods: {
    reload() {
      window.location.reload();
    }
  }
};
</script>

