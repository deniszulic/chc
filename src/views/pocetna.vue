<template>
  <div>
    <br />
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner container">
        <div class="carousel-item active">
          <img class="d-block w-100" src="1.jpg" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="2.jpg" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="3.jpeg" alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--Section: Contact v.1-->
    <section class="section pb-5 jumbotron" style="margin-top:15px; margin:10px;">
      <!--Section heading-->
      <h2 class="section-heading h1 pt-4 text-center">Kontaktirajte nas</h2>
      <!--Section description-->
      <h5 class="section-description pb-4">
        Prijava kvara - ispunite jednostavnu formu s vašim podacima te opisom kvara u manje od 5 minuta!
        <br />Sačekajte odgovor mehaničara. U 99% slučajeva odgovor slijedi unutar 2 sata!
        <br />Provjerite odgovor mehaničara te status na stranici Status kvara, te prihvatite ili odbijte ponuđeni odgovor.
      </h5>

      <div class="row">
        <!--Grid column-->
        <div class="col-lg-5 mb-4">
          <!--Form with header-->
          <div class="card">
            <div class="card-body" style="text-align:left;">
              <!--Header-->
              <div class="form-header blue accent-1">
                <h3>
                  <i class="fas fa-envelope"></i> Pišite nam:
                </h3>
              </div>
              <br />

              <!--Body-->
              <form
                role="form"
                action="mailto:projektizpi@gmail.com"
                method="post"
                enctype="text/plain"
              >
                <div class="md-form">
                  <i class="fas fa-user prefix grey-text"></i>
                  <input
                    type="text"
                    id="form-name"
                    class="form-control"
                    name="ime-prezime"
                    required
                  />
                  <label for="form-name">Ime i prezime</label>
                </div>

                <div class="md-form">
                  <i class="fas fa-envelope prefix grey-text"></i>
                  <input type="text" id="form-email" class="form-control" name="email" required />
                  <label for="form-email">Email</label>
                </div>
                <div class="md-form">
                  <i class="fas fa-tag prefix grey-text"></i>
                  <input type="text" id="form-Subject" class="form-control" name="naslov" required />
                  <label for="form-Subject">Naslov</label>
                </div>
                <div class="md-form">
                  <i class="fas fa-pencil-alt prefix grey-text"></i>
                  <textarea id="form-text" class="form-control md-textarea" name="opis" rows="3"></textarea>
                  <label for="form-text">Opis</label>
                </div>
                <br />
                <div class="col-md-12 float-left">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" required name="bot" />
                    <label for="bot" class="form-check-label">
                      <p>Nisam robot.</p>
                    </label>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <button class="btn btn-info my-2 my-sm-0 mr-2" type="submit">Pošalji</button>
                  <button class="btn btn-info my-2 my-sm-0 mr-2" type="reset">Restartiraj</button>
                </div>
              </form>
            </div>
          </div>
          <!--Form with header-->
        </div>
        <!--Grid column-->
        <!--Grid column-->
        <div class="col-lg-7">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="z-depth-1-half map-container-6"
            style="height: 400px"
          >
            <iframe
              width="600"
              height="502"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=jurja%20dobrile%20u%20puli&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
          <br />
          <!--Buttons-->
          <div class="row text-center">
            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <i class="fas fa-map-marker-alt"></i>
              </a>
              <p>
                <b>Rovinjska 14, 52100</b>
              </p>
              <p>
                <b>Pula, Hrvatska</b>
              </p>
            </div>

            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <i class="fas fa-phone"></i>
              </a>
              <p>
                <b>0800 0800</b>
              </p>
              <p>
                <b>+385 (52) 377 503</b>
              </p>
            </div>

            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <i class="far fa-clock"></i>
              </a>
              <p>
                <b>Pon - Pet 8:00-17:00</b>
              </p>
              <p>
                <b>Sub 9:00-14:00</b>
              </p>
            </div>
          </div>
        </div>
        <!--Grid column-->
      </div>
    </section>
    <section
      class="section center pb-5 jumbotron"
      style="margin: 10px; margin-top:5px; padding:10px;"
    >
      <div class="row">
        <div class="col-md-6 col-sm-pull-right">
          <ourteam />
        </div>

        <div class="col-md-6 lower">
          <h1 class="section-title h1">Galerija</h1>
          <div id="areareare" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner container" style="padding: 50px;">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://images.unsplash.com/photo-1568236700632-c0cfc08f486a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://images.unsplash.com/photo-1514300403573-6d9a8fe888f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80"
                  alt="four slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://images.unsplash.com/photo-1569176330438-fa1ed1042542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
                  alt="four slide"
                />
              </div>
            </div>
            <a class="carousel-control-prev" href="#areareare" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Nazad</span>
            </a>
            <a class="carousel-control-next" href="#areareare" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Dalje</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import store from "@/store";
import ourteam from "@/views/ourteam.vue";
export default {
  name: "pocetna",
  components: {
    ourteam
  },
  data() {
    return store;
  }
};
</script>
<style lang="scss">
@media screen and (max-width: 1300px) {
  .col-sm-pull-right {
    float: right;
  }
  .lower {
    clear: left;
    margin: 10px;
  }
}

@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
fieldset,
label {
  margin: 0;
  padding: 0;
}

.rating {
  border: none;
  float: left;
}

.rating > input {
  display: none;
}
.rating > label:before {
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before {
  content: "\f089";
  position: absolute;
}

.rating > label {
  color: #ddd;
  float: right;
}
.rating > input:checked ~ label, /* Zvjezda kad je kliknuto */
.rating:not(:checked) > label:hover, /* hover */
.rating:not(:checked) > label:hover ~ label {
  color: #ffd700;
} /* hover prijasnje */

.rating > input:checked + label:hover, /* hover trenutnu zvizdu */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
  color: #ffed85;
}

.map-container-6 {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container-6 iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
$easeInOutQuad: cubic-bezier(0.455, 0.03, 0.515, 0.955);

.carousel-indicators li {
  border-radius: 12px;
  width: 12px;
  height: 12px;
  background-color: #404040;
}
.carousel-indicators li {
  border-radius: 12px;
  width: 12px;
  height: 12px;
  background-color: #404040;
}
.carousel-indicators .active {
  background-color: white;
  max-width: 12px;
  margin: 0 3px;
  height: 12px;
}
</style>