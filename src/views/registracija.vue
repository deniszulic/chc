<template>
  <div class="container">
    <img src="register.png" width="25%" height="20%" style="margin-top: 10px;" />
    <div class="row">
      <div class="col">
        <div v-if="errorMessage" class="alert alert-danger">
          <strong>Ups!</strong>
          {{ errorMessage }}
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <form
        @submit.prevent="signup"
        class
        style="width: 400px; margin-top:30px; border: 2px solid black; padding: 30px; border-radius: 25px; margin: 10px; background-color: gray;"
      >
        <div class="form-group">
          <input
            required
            v-model="email"
            type="email"
            class="form-control"
            id="emailField"
            style="border-radius: 10px; font-family: Courier;"
            aria-describedby="emailHelp"
            placeholder="Unesite email"
          />
        </div>
        <div class="form-group">
          <input
            required
            v-model="password"
            type="password"
            class="form-control"
            style="border-radius: 10px; font-family: Courier;"
            id="passwordField"
            placeholder="Lozinka"
          />
        </div>
        <div class="form-group">
          <input
            required
            v-model="passwordAgain"
            type="password"
            class="form-control"
            style="border-radius: 10px; font-family: Courier;"
            id="confirmPasswordField"
            placeholder="Ponovite lozinku "
          />
        </div>
        <!--<div class="form-group" style="border-radius: 10px; font-family: Courier;">
            <label for="tipKorisnika">Tip korisnika</label>
            <select
              v-model="odabraniKorisnik"
              id="tipKorisnika"
              class="form-control form-control-lg" required>
              <option :key="k" v-for="k in tipKorisnika">{{k}}</option>
            </select>
        </div>-->
        <button type="submit" class="btn btn-primary mt-5">Registriraj</button>
      </form>
    </div>
  </div>
</template>
<style lang="css">
.btn {
  border-radius: 10px;
  font-family: Courier;
}
</style>
<script>
import store from "../store";
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordAgain: "",
      odabraniKorisnik: "",
      errorMessage: "",
      tipKorisnika: ["Korisnik"]
    };
  },
  methods: {
    signup() {
      if (
        this.password !== this.passwordAgain ||
        this.passwordAgain !== this.password
      ) {
        alert("Lozinke se ne podudaraju!");
        console.log(error);
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // postavi podatke o korisniku
          // ovdje ide kod nakon POVRATKA UPITA za ragistraciju i to ako nije prošlo
          let id = this.email;

          db.collection("korisnici")
            .doc(id)
            .set({
              tipKorisnika: "Korisnik"
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        })
        .catch(error => {
          // ovdje ide kod nakon POVRATKA UPITA za ragistraciju i to ako nije prošlo
          console.error(error);
          this.errorMessage = error.message;
        });
    }
  }
};
</script>