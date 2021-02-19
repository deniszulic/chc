<template>
  <div>
    <h2 v-if="stpodaci.length == 0">NEMA</h2>
    <div v-if="stanje==stpodaci.email">
      <div
        class="card text-center container"
        style="margin-bottom: 30px; padding-top:10px; margin-top:2px;"
      >
        <div
          v-if="stpodaci.status=='odobreno'"
          class="card-header"
          style="background-color: green;"
        >{{stpodaci.email}}</div>
        <div
          v-else-if="stpodaci.status=='odbijeno'"
          class="card-header"
          style="background-color: red;"
        >{{stpodaci.email}}</div>
        <div
          v-else-if="stpodaci.status=='promjenatermina'"
          class="card-header"
          style="background-color: yellow;"
        >{{stpodaci.email}}</div>
        <div
          v-else-if="stpodaci.status=='rijeseno'"
          class="card-header"
          style="background-color: lightblue;"
        >{{stpodaci.email}}</div>
        <div v-else class="card-header">{{stpodaci.email}}</div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <div v-if="stpodaci.status=='rijeseno'" class="row">
            <p class="card-text col-6 col-sm-6">
              Ime: {{stpodaci.ime}}
              <br />
              Prezime: {{stpodaci.prezime}}
              <br />
              tel: {{stpodaci.brtel}}
              <br />
              tel2: {{stpodaci.brtel2}}
              <br />
              email: {{stpodaci.email}}
              <br />
              Grad: {{stpodaci.grad}}, {{stpodaci.zip}}
              <br />
              Adresa: {{stpodaci.adresa}}
              <br />
              Radiona: {{stpodaci.radiona}}
              <br />
              Vozilo: {{stpodaci.auto}}
              <br />
              Godište: {{stpodaci.year}}
              <br />
              Prijeđeni km: {{stpodaci.number}}
              <br />
              Željeni termin: {{stpodaci.datum}} - {{stpodaci.vrijeme}}
              <br />
              Opis kvara: {{stpodaci.tekst}}
              <br />
            </p>
            <div
              v-if="stpodaci.status=='rijeseno'"
              class="alert alert-info col-6 col-sm-6 content-justify-center"
              role="alert"
              style="display: inline-block"
            >
              <h3>Prijava je riješena !</h3>
              <h4>Zahvaljujemo na Vašem povjerenju.</h4>
              <hr />
              <main v-if="stpodaci.recenzirano == 'da'">
                <h4>
                  Vaša recenzija je zaprimljena
                  <br />Možete pogledati svoje recenzije na
                  <br />
                  <br />
                  <button type="button" class="btn btn-light">
                    <router-link to="/mojerecenzije">Moje recenzije</router-link>
                  </button>
                </h4>
              </main>
              <h5 v-if="stpodaci.recenzirano != 'da'">Kako biste ocijenili vaše iskustvo?</h5>
              <br />
              <label v-if="stpodaci.recenzirano != 'da'" for="imereview" class="h5">Ime i prezime:</label>
              <input
                v-if="stpodaci.recenzirano != 'da'"
                v-model="ime"
                type="email"
                class="form-control"
                required
                aria-describedby="imereveiew"
                :placeholder="stpodaci.ime+' '+stpodaci.prezime"
              />
              <br />
              <h5 v-if="stpodaci.recenzirano != 'da'">Ocjena:</h5>
              <form v-if="stpodaci.recenzirano != 'da'" @submit.prevent="review(stpodaci)">
                <div class="rate" style="margin-left: 170px; ">
                  <fieldset class="rating">
                    <input v-model="star" type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="5"></label>
                    <input v-model="star" type="radio" id="star4half" name="rating" value="4.5" /><label class="half" for="star4half" title="4.5"></label>
                    <input v-model="star" type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="4"></label>
                    <input v-model="star" type="radio" id="star3half" name="rating" value="3.5" /><label class="half" for="star3half" title="3.5"></label>
                    <input v-model="star" type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="3"></label>
                    <input v-model="star" type="radio" id="star2half" name="rating" value="2.5" /><label class="half" for="star2half" title="2.5"></label>
                    <input v-model="star" type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="2"></label>
                    <input v-model="star" type="radio" id="star1half" name="rating" value="1.5" /><label class="half" for="star1half" title="1.5"></label>
                    <input v-model="star" type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="1"></label>
                    <input v-model="star" type="radio" id="starhalf" name="rating" value="0.5" /><label class="half" for="starhalf" title="0.5"></label>
                  </fieldset>
                </div>
                <textarea
                  v-model="text"
                  class="form-control rounded-0"
                  rows="4"
                  placeholder="Komentar"
                ></textarea>
                <br />
                <button type="submit" class="btn btn-outline-primary">Pošalji</button>
              </form>
            </div>
          </div>
          <div v-else-if="stpodaci.status=='promjenatermina'" class="row">
            <p class="card-text col-6 col-sm-6" style="border: 1px solid black;">
              <b>Ime:</b>
              {{stpodaci.ime}}
              <br />
              <b>Prezime:</b>
              {{stpodaci.prezime}}
              <br />
              <b>tel:</b>
              [{{stpodaci.brtel}}]
              <br />
              <b>tel2:</b>
              [{{stpodaci.brtel2}}]
              <br />
              <b>email:</b>
              {{stpodaci.email}}
              <br />
              <b>Grad:</b>
              {{stpodaci.grad}}, {{stpodaci.zip}}
              <br />
              <b>Adresa:</b>
              {{stpodaci.adresa}}
              <br />
              <b>Opis kvara:</b>
              {{stpodaci.tekst}}
              <br />
            </p>
            <p
              class="card-text col-6 col-sm-6"
              style="border: 1px solid black; margin-bottom: 16px;"
            >
              <span class="badge badge-warning">Zahtjev je izmjenjen</span>
              <br />
              <b>Mehaničar</b>
              kaže: {{stpodaci.comment}}
              <br />
              <b>Vozilo:</b>
              {{stpodaci.auto}} - {{stpodaci.year}} god.
              <br />
              <b>Prijeđeni km:</b>
              {{stpodaci.number}} km
              <br />
              <b>Radiona:</b>
              {{stpodaci.radiona}}
              <br />
              <b>Termin:</b>
              {{stpodaci.datum}} - {{stpodaci.vrijeme}}h
              <br />
            <br />
            <main
              v-if="stpodaci.prihvacennovitermin == 'ne'"
              class="alert alert-danger"
              role="alert"
            >Odbili ste ovaj termin - prijava je otkazana</main>
            <main
              v-if="stpodaci.prihvacennovitermin == 'da'"
              class="alert alert-success"
              role="alert"
            >Prihvatili ste novi termin. Zahvaljujemo!</main>
            <button
              v-if="stpodaci.status == 'promjenatermina' && stpodaci.prihvacennovitermin != 'ne' && stpodaci.prihvacennovitermin != 'da'"
              @click="prihvacentermin(stpodaci);"
              type="button"
              class="btn btn-outline-success"
            >Prihvati</button>
            <button
              v-if="stpodaci.status == 'promjenatermina' && stpodaci.prihvacennovitermin != 'ne' && stpodaci.prihvacennovitermin != 'da'"
              @click="odbijentermin(stpodaci);"
              type="button"
              class="btn btn-outline-danger"
            >Odbij</button>
            </p>
          </div>
          <div v-else class="row">
            <p class="card-text col-6 col-sm-6">
              <b>Ime:</b>
              {{stpodaci.ime}}
              <br />
              <b>Prezime:</b>
              {{stpodaci.prezime}}
              <br />
              <b>tel:</b>
              [{{stpodaci.brtel}}]
              <br />
              <b>tel2:</b>
              [{{stpodaci.brtel2}}]
              <br />
              <b>email:</b>
              {{stpodaci.email}}
              <br />
              <b>Grad:</b>
              {{stpodaci.grad}}, {{stpodaci.zip}}
              <br />
              <b>Adresa:</b>
              {{stpodaci.adresa}}
              <br />
            </p>
            <p class="card-text col-6 col-sm-6">
              <b>Radiona:</b>
              {{stpodaci.radiona}}
              <br />
              <b>Vozilo:</b>
              {{stpodaci.auto}}
              <br />
              <b>Godište:</b>
              {{stpodaci.year}}
              <br />
              <b>Prijeđeni km:</b>
              {{stpodaci.number}}
              <br />
              <b>Željeni termin:</b>
              {{stpodaci.datum}} - {{stpodaci.vrijeme}}
              <br />
              <b>Opis kvara:</b>
              {{stpodaci.tekst}}
              <br />
            </p>
          </div>
        </div>
        <!-- card -->
        <div class="card-footer text-muted">
          {{ stpodaci.posted_at | formatTime }}
          <span
            v-if="stpodaci.status=='odobreno'"
            class="badge badge-success"
          >Odobreno</span>
          <span v-if="stpodaci.status=='odbijeno'" class="badge badge-danger">Odbijeno</span>
          <hr />
          <center>
            <!-- <button v-if="stpodaci.url >= '1'" @click="prikazSlikeUsr(stpodaci);" type="button" class="btn btn-primary btn-lg">Prikaži sliku</button> -->
            <img :src="stpodaci.url" @click="prikazSlikeUsr(stpodaci);" width="100px" />
          </center>
          <div v-if="stpodaci.comment>='1' && stpodaci.status!='promjenatermina'">
            <!-- ako je mehanicar odgovorio prikazat ce se njegov odgovor -->
            <hr />
            <p style="color: blue;">Odgovor Mehaničara:</p>
            <p>{{stpodaci.comment}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store.js";
import moment from "moment";
export default {
  props: ["stpodaci"],
  data() {
    return store;
  },
  filters: {
    formatTime: function(value) {
      return moment(value).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  methods: {
    review(stpodaci) {
      this.aktivnikorisnik = stpodaci.id;
      db.collection("noviobrazac2")
        .doc(this.aktivnikorisnik)
        .update({
          recenzirano: "da"
        })
        .catch(function(error) {
          console.error("Oopsie: ", error);
        });

      db.collection("recenzije2")
        .add({
          email: this.userEmail,
          ime: this.ime,
          star: this.star,
          text: this.text,
          posted_at: Date.now()
        })
        .then(function() {
          $("#ratingmodal").modal("show");
          console.log("Recenzija zaprimljena!");
        })
        .catch(function(error) {
          console.error("Desila se greska: ", error);
        });
    },
    prikazSlikeUsr(stpodaci) {
      $("#picusrModal").modal("show");
      this.url = stpodaci.url;
    },
    prihvacentermin(stpodaci) {
      this.aktivnikorisnik = stpodaci.id;
      db.collection("noviobrazac2")
        .doc(this.aktivnikorisnik)
        .update({
          prihvacennovitermin: "da"
        })
        .then(function() {
          $("#prihvaceno").modal("show");
        })
        .catch(function(error) {
          console.error("Oopsie: ", error);
        });
    },
    odbijentermin(stpodaci) {
      this.aktivnikorisnik = stpodaci.id;
      db.collection("noviobrazac2")
        .doc(this.aktivnikorisnik)
        .update({
          prihvacennovitermin: "ne"
        })
        .then(function() {
          $("#odbijeno").modal("show");
        })
        .catch(function(error) {
          console.error("Oopsie: ", error);
        });
    }
  }
};
</script>