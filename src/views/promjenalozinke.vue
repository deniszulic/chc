<template>
  <div>
    <div class="row">
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <img src="pwchange.png" style="padding-right: 30px;" />
      </div>
      <div class="col">
        <form @submit.prevent="promjena" style="margin-top: 50px;" class="jumbotron">
          <div class="form-group">
            <label for="exampleInputPassword1">Nova lozinka</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Nova lozinka"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-5">Promjeni</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ""
    };
  },
  methods: {
    promjena() {
      var user = firebase.auth().currentUser;
      user
        .updatePassword(this.password)
        .then(function() {})
        .catch(function(error) {
          // An error happened.
        });
      alert("Lozinka promjenjena !");
      firebase.auth().signOut();
      this.$router.push({ path: "/pocetna" });
      console.log("Odjavljen!");
    }
  }
};

/*
firebase.auth().signOut().then(function() {
  */
</script>
