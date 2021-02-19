<template>
  <div id="app">
       <div id="nav">
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
    <router-link to="/" v-if="authenticated==true">
    <img src="https://i.imgur.com/fppyrbC.png" height="40" width="60"></router-link>
     <router-link v-else to="/pocetna" ><img src="https://i.imgur.com/fppyrbC.png" height="40" width="60"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" >
        <div v-if="authenticated">
         <router-link  v-if="tipKorisnika=='Korisnik'" to="/" class="nav-link">Home</router-link>
        <div v-if="tipKorisnika=='Mehaničar'">
          <router-link to="/admin" class="nav-link">Home</router-link>
          </div></div>
      </li>
      <li class="nav-item active">
        <router-link v-if="!authenticated" to="/Prijava" class="nav-link">Prijava</router-link>
        <span v-if="authenticated">
                  <router-link v-if="tipKorisnika=='Korisnik'" class="btn btn-info my-2 my-sm-0 mr-2" to="/stanje">Provjera narudžbe</router-link>
                  <router-link v-if="tipKorisnika=='Mehaničar'" class="btn btn-info my-2 my-sm-0 mr-2" to="/admin">Admin</router-link>
                  <router-link v-if="tipKorisnika=='Mehaničar'" class="btn btn-info my-2 my-sm-0 mr-2" to="/rijeseno">Riješene prijave</router-link>
                  <router-link v-if="tipKorisnika=='Mehaničar'" class="btn btn-info my-2 my-sm-0 mr-2" to="/recenzije">Recenzije</router-link>
                  <div class="btn-group my-2 my-sm-0 mr-2">
  <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{ userEmail }}
  </button>
  <div class="dropdown-menu">
    <router-link class="dropdown-item btn btn-info my-2 my-sm-0 mr-2" to="/promjenalozinke"><i class="fas fa-key"></i> Promjena lozinke</router-link>
    <router-link v-if="tipKorisnika=='Mehaničar'" class="dropdown-item btn btn-info my-2 my-sm-0 mr-2" to="/useradd"><i class="fas fa-user-plus"></i> Dodaj mehaničara</router-link>
    <router-link v-if="tipKorisnika=='Korisnik'" class="dropdown-item btn btn-info my-2 my-sm-0 mr-2" to="/mojerecenzije"><i class="fas fa-star"></i> Moje recenzije</router-link>
    <div class="dropdown-divider"></div>
    <a @click="logout(); " class="dropdown-item btn btn-danger my-2 my-sm-0 mr-2" href="/" style="color:red;"><i class="fas fa-sign-out-alt"></i> Logout</a>
  </div>
</div>
</span>
      </li>
      <li class="nav-item active">
        <router-link v-if="!authenticated" to="/Registracija" class="nav-link">Registracija</router-link>
      </li>
    </ul> 
  </div>  
  <ul class="navbar-nav nav-link ml-auto" style="color: white; "><b>{{tipKorisnika}}</b></ul>
  <iframe src="http://free.timeanddate.com/clock/i74p0ph7/n281/tlhr30/fs15/fcfff/tct/pct/tt0/tw0/tm1/ts1/tb4" frameborder="0" width="89" height="36" allowTransparency="true"></iframe>
     
</nav>
    </div>
    <router-view/>
     <div id="footer" class="text-center mt-5 fixed-bottom" style="background-color: #a6a6a6;">2020 | <i class="far fa-copyright"></i> DS Team.</div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-image:url("~@/assets/pozadina.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
<script>
import store from '@/store.js'
import promjenalozinke from '@/views/promjenalozinke.vue'
import useradd from '@/views/useradd.vue'
import stanje from '@/views/stanje.vue'
import admin from '@/views/admin.vue'
import registracija from '@/views/registracija.vue'
import pocetna from '@/views/pocetna.vue'
import recenzije from '@/views/recenzije.vue'
export default {
  data () {
    return store;
  },
  methods: {
    logout() {
     firebase.auth().signOut().then(function() {
          console.log("Odjavljen!");
        })
    }  
  },
  mounted(){
    firebase.auth().onAuthStateChanged(user => {
 if (user) {
   this.authenticated=true
   this.userEmail=user.email
   db.collection("korisnici")
          .doc(this.userEmail)
          .get()
          .then(doc => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              this.tipKorisnika = doc.data().tipKorisnika;
            if (this.$route.name !== 'home')
          this.$router.push({name: 'home'}).catch(err => console.log(err))
            } 
          });

          db.collection("noviobrazac2").orderBy("posted_at").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              const data = change.doc.data()
          if(data.status=="odobreno" || data.status=="odbijeno" || data.status=="promjenatermina" || data.status=="nerješeno" || data.status=="rijeseno"){
                this.korisnickipodaci.unshift(Object.assign({}, data, {
            id: change.doc.id
          }));
            console.log("Ucitan obrazac2-added");
              }
            }
            if (change.type === "modified") {

              for (let [i, k] of this.korisnickipodaci.entries()) {
                if (k.id == change.doc.id) {
                  k.comment = change.doc.data().comment;
                  k.status=change.doc.data().status;
                  k.vrijeme = change.doc.data().vrijeme;
                  k.datum = change.doc.data().datum;
                  k.napomena = change.doc.data().napomena;
                  k.radiona = change.doc.data().radiona;
                  k.prihvacennovitermin=change.doc.data().prihvacennovitermin;
                  k.recenzirano=change.doc.data().recenzirano;
                  console.log("rec: ", change.doc.data().recenzirano,  "termin: ", change.doc.data().prihvacennovitermin)
                  break;
                }
              }
      } 
        });
    });

    db.collection("recenzije2").orderBy("posted_at").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              const data = change.doc.data()
              this.recenzije.push({
                id:change.doc.id,
                email:data.email,
                ime:data.ime,
                ocjena:data.star,
                opis:data.text,
                komentar:data.komentar,
                posted_at:data.posted_at
              })
            }
            if(change.type === "modified")
            {
              for (let [i, k] of this.recenzije.entries()) {
                if (k.id == change.doc.id) {
                  k.komentar = change.doc.data().komentar;
                  break;
                }
              }
            }
        });
    });

}
 else {
 this.authenticated=false
 console.log("Nema korisnika");
 }
});


  }
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
</script>
