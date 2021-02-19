<template>
  <div class="container obr11">
    <form @submit.prevent="obrazac">
      <div class="card row">
        <h4>Osobni podaci</h4>
        <div class="card-body">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="name">Ime</label>
              <input v-model="ime" type="name" class="form-control" placeholder="Ime" required />
            </div>
            <div class="form-group col-md-4">
              <label for="lastname">Prezime</label>
              <input
                v-model="prezime"
                type="lastname"
                class="form-control"
                placeholder="Prezime"
                required
              />
            </div>
            <div class="form-group col-md-4">
              <label for="lastname">Email</label>
              <input v-model="email" class="form-control" type="email" placeholder="Email" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="brtel">Broj telefona</label>
              <input
                v-model="brtel"
                type="number"
                class="form-control"
                id="brtel"
                placeholder="Br. tel"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="brtel2">Broj telefona #2</label>
              <input
                v-model="brtel2"
                type="number"
                class="form-control"
                id="brtel2"
                placeholder="Neobavezno"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="City">Grad</label>
              <input v-model="grad" type="text" class="form-control" id="City" required />
            </div>
            <div class="form-group col-md-3">
              <label for="Address">Adresa</label>
              <input v-model="adresa" type="text" class="form-control" id="Address" required />
            </div>
            <div class="form-group col-md-3">
              <label for="inputZip">Zip</label>
              <input v-model="zip" type="number" class="form-control" id="inputZip" required />
            </div>
          </div>
        </div>
        <hr />
        <h4>Podaci o vozilu</h4>
        <div class="row" style="margin-left: 1px;">
          <div class="card-body col-6">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="input">Odabir radione</label>
                <select v-model="radiona" class="form-control" required>
                  <option selected disabled>Izaberi</option>
                  <option>Pula</option>
                  <option>Zagreb</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="input">Marka auta</label>
                <select v-model="auto" class="form-control" required>
                  <option selected disabled>Izaberi</option>
                  <option>Toyota</option>
                  <option>Nissan</option>
                  <option>Mazda</option>
                  <option>Volvo</option>
                  <option>Alfa Romeo</option>
                  <option>Dacia</option>
                  <option>Volkswagen</option>
                  <option>Kia</option>
                  <option>Renault</option>
                  <option>Mercedes</option>
                  <option>Seat</option>
                  <option>Subaru</option>
                  <option>Mitsubishi</option>
                  <option>Audi</option>
                  <option>Lancia</option>
                  <option>Mini</option>
                  <option>Hyundai</option>
                  <option>Citroen</option>
                  <option>Peugeot</option>
                  <option>BMW</option>
                  <option>Opel</option>
                  <option>Porsche</option>
                  <option>Range Rover</option>
                  <option>Ostalo</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="year">Godište vozila</label>
                <input v-model="year" type="number" class="form-control" min="1" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="Date">Željeni datum</label>
                <input v-model="datum" type="date" class="form-control" required />
              </div>
              <div class="form-group col-md-6">
                <label for="Date">Željeno vrijeme</label>
                <input v-model="vrijeme" type="time" class="form-control" required />
              </div>

              <div class="form-group col-md-12">
                <label for="Date">Kilometraža</label>
                <input v-model="number" type="number" class="form-control" min="1" required />
              </div>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="terms" required />
              <label class="form-check-label" for="terms" required>
                Prihvaćam
                <a href data-toggle="modal" data-target="#termsmodal">pravila i odredbe</a> korištenja CHC aplikacije
              </label>
            </div>
          </div>

          <div class="col-6" style="margin-top: 30px;">
            <h5>Opis kvara</h5>
            <textarea v-model="tekst" id="comment" rows="7" cols="40" required></textarea>
          </div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="termsmodal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="termsmodalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="termsmodalLongTitle">Pravila i uvjeti korištenja CHC APP</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h2>Introduction</h2>

                <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, CarHealthCheck accessible at carhc.com.</p>

                <p>
                  These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the
                  <a href="https://www.termsandcondiitionssample.com">Terms And Conditions Template</a> and the
                  <a href="https://www.privacypolicygenerator.org">Privacy Policy Generator</a>.
                </p>

                <p>Minors or people below 18 years old are not allowed to use this Website.</p>

                <h2>Intellectual Property Rights</h2>

                <p>Other than the content you own, under these Terms, CarHealthCheck and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>

                <p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>

                <h2>Restrictions</h2>

                <p>You are specifically restricted from all of the following:</p>

                <ul>
                  <li>publishing any Website material in any other media;</li>
                  <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                  <li>publicly performing and/or showing any Website material;</li>
                  <li>using this Website in any way that is or may be damaging to this Website;</li>
                  <li>using this Website in any way that impacts user access to this Website;</li>
                  <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                  <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
                  <li>using this Website to engage in any advertising or marketing.</li>
                </ul>

                <p>Certain areas of this Website are restricted from being access by you and CarHealthCheck may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p>

                <h2>Your Content</h2>

                <p>In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant CarHealthCheck a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>

                <p>Your Content must be your own and must not be invading any third-party’s rights. CarHealthCheck reserves the right to remove any of Your Content from this Website at any time without notice.</p>

                <h2>Your Privacy</h2>

                <p>Please read Privacy Policy.</p>

                <h2>No warranties</h2>

                <p>This Website is provided "as is," with all faults, and CarHealthCheck express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>

                <h2>Limitation of liability</h2>

                <p>In no event shall CarHealthCheck, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. CarHealthCheck, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

                <h2>Indemnification</h2>

                <p>You hereby indemnify to the fullest extent CarHealthCheck from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>

                <h2>Severability</h2>

                <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>

                <h2>Variation of Terms</h2>

                <p>CarHealthCheck is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>

                <h2>Assignment</h2>

                <p>The CarHealthCheck is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>

                <h2>Entire Agreement</h2>

                <p>These Terms constitute the entire agreement between CarHealthCheck and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>

                <h2>Governing Law & Jurisdiction</h2>

                <p>These Terms will be governed by and interpreted in accordance with the laws of the State of hr, and you submit to the non-exclusive jurisdiction of the state and federal courts located in hr for the resolution of any disputes.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-sm-3">
            <h4 style="padding-top: 50px;">Upload slike:</h4>
          </div>
          <div class="col-6 col-sm-3">
            <croppa :width="400" :height="400" v-model="imageData"></croppa>
          </div>
        </div>
      </div>
      <!-- card -->
      <div>
        <p>
          {{uploadValue.toFixed()+'%'}}
          <progress
            class="progress-bar progress-bar-striped progress-bar-animated"
            style="width:100%"
            id="progress"
            :value="uploadValue"
            max="100"
          ></progress>
        </p>
      </div>
      <button
        type="submit"
        class="btn btn-primary float-right"
        style="margin: 10px;"
        name="send-mail"
      >Posalji</button>
    </form>
    <!-- Modal -->
    <div
      class="modal fade"
      id="successsendmodal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="successsendmodalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="successsendmodalLabel">Uspiješno !</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Vaša prijava je zaprimljena !
            <br />Zahvaljujemo na vašoj prijavi te molimo za strpljenje.
            <br />Mehaničari će odgovoriti u što kraćem roku.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Zatvori</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store.js";
export default {
  name: "obrazac",
  data() {
    return store;
  },
  methods: {
    obrazac() {
      this.imageData.generateBlob(blobData => {
        if (blobData != null) {
          let imageName = this.userEmail + "/" + Date.now() + ".png";
          const storageRef = firebase
            .storage()
            .ref(imageName)
            .put(blobData);
          storageRef.on(`state_changed`, snapshot => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          });
          storageRef
            .then(result => {
              result.ref
                .getDownloadURL()
                .then(url => {
                  db.collection("noviobrazac2")
                    .add({
                      email: this.userEmail,
                      posted_at: Date.now(),
                      url: url,
                      ime: this.ime,
                      prezime: this.prezime,
                      adresa: this.adresa,
                      grad: this.grad,
                      zip: this.zip,
                      brtel: this.brtel,
                      brtel2: this.brtel2,
                      number: this.number,
                      year: this.year,
                      datum: this.datum,
                      vrijeme: this.vrijeme,
                      tekst: this.tekst,
                      radiona: this.radiona,
                      auto: this.auto,
                      status: "nerješeno"
                    })
                    .then(docRef => {
                      console.log("Dokument(pic) | ID: ", docRef.id);
                      $("#successsendmodal").modal("show");
                      this.imageData = null;
                      (this.ime = ""),
                        (this.prezime = ""),
                        (this.adresa = ""),
                        (this.grad = ""),
                        (this.zip = ""),
                        (this.brtel = ""),
                        (this.brtel2 = ""),
                        (this.number = ""),
                        (this.year = ""),
                        (this.datum = ""),
                        (this.vrijeme = ""),
                        (this.tekst = ""),
                        (this.radiona = ""),
                        (this.auto = ""),
                        (this.email = ""),
                        (this.uploadValue = 0);
                    })
                    .catch(e => {
                      console.error("Error: ", error);
                    });
                })
                .catch(e => {
                  console.error(e);
                });
            })
            .catch(e => {
              console.error(e);
            });
        }
        if (blobData == null) {
          db.collection("noviobrazac2")
            .add({
              email: this.userEmail,
              posted_at: Date.now(),
              ime: this.ime,
              prezime: this.prezime,
              adresa: this.adresa,
              grad: this.grad,
              zip: this.zip,
              brtel: this.brtel,
              brtel2: this.brtel2,
              number: this.number,
              year: this.year,
              datum: this.datum,
              vrijeme: this.vrijeme,
              tekst: this.tekst,
              radiona: this.radiona,
              auto: this.auto,
              status: "nerješeno"
            })
            .then(docRef => {
              console.log("Dokument(nopic) | ID: ", docRef.id);
              //alert("Uspiješno");
              $("#successsendmodal").modal("show");
              (this.ime = ""),
                (this.prezime = ""),
                (this.adresa = ""),
                (this.grad = ""),
                (this.zip = ""),
                (this.brtel = ""),
                (this.brtel2 = ""),
                (this.number = ""),
                (this.year = ""),
                (this.datum = ""),
                (this.vrijeme = ""),
                (this.tekst = ""),
                (this.radiona = ""),
                (this.auto = ""),
                (this.email = ""),
                (this.uploadValue = 0);
            })
            .catch(e => {
              console.error("Error adding document: ", error);
            });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
