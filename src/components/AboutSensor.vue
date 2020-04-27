<template>
  <v-card 
    class="mx-auto" 
    width="80%"
  >
    <v-container class="noPad container">
      <v-row>
        <v-col 
          cols="12" 
          sm="6"  
        >
          <v-row>
            <v-col class="noPad">
              <v-img 
                src="../img/final_product.png"
                :aspect-ratio="16/9"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col class="noPadBottom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1250.1837652387912!2d3.2183284!3d51.1938791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcded5a4988f83cd5!2sKU%20Leuven%20Campus%20Brugge!5e0!3m2!1sen!2sbe!4v1585853731962!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col 
          cols="12" 
          sm="6"
        >
          <v-card-title class="font-weight-medium">
            Sensor info
          </v-card-title>
          <v-divider />
          <v-row>
            <v-col 
              cols="12" 
              sm="4"
            >
              <p class="text-left font-weight-black">
                Usernam
              </p>
              <p class="text-left font-weight-light">
                {{ username }}
              </p>
            </v-col>
            <v-col 
              cols="12" 
              sm="8"
            >
              <p class="text-left font-weight-black">
                email
              </p>
              <p class="text-left font-weight-light">
                {{ email }}
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <p class="text-left font-weight-black">
                First name of owner
              </p>
              <p class="text-left font-weight-light">
                {{ firstName }}
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <p class="text-left font-weight-black">
                Last name of owner
              </p>
              <p class="text-left font-weight-light">
                {{ lastName }}
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <p class="text-left font-weight-black">
                Street
              </p>
              <p class="text-left font-weight-light">
                {{ street }}
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <p class="text-left font-weight-black">
                No.
              </p>
              <p class="text-left font-weight-light">
                {{ houseNumber }}
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="4"
            >
              <p class="text-left font-weight-black">
                City
              </p>
              <p class="text-left font-weight-light">
                {{ city }}
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <p class="text-left font-weight-black">
                Postal code
              </p>
              <p class="text-left font-weight-light">
                {{ postalCode }}
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <p class="text-left font-weight-black">
                Country
              </p>
              <p class="text-left font-weight-light">
                {{ country }}
              </p>
            </v-col>
          </v-row>
          <v-divider />
          <v-row>
            <v-col>
              <p class="text-left font-weight-black">
                About the sensor
              </p>
              <p class="text-left font-weight-light">
                {{ aboutSensor }}
              </p>
            </v-col>
          </v-row>

          <v-card-actions class="noPad">
            <v-btn
              class="back"
              color="#FFFFFF"
              @click="back"
              text
            >
              Back to sensorpage
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    sensor: {},
    username: "Matthias",
    email: "matthias.willem@student.vives.be",
    firstName: "Matthias",
    lastName: "Willem",
    street: "Spoorwegstraat",
    houseNumber: "12",
    city: "Bruges",
    postalCode: "8000",
    country: "Belgium",
    aboutSensor:
      "This is a very nice sensor. You should buy one! I like this sensor very much, believe me. This is the best sensor i've ever got!"
  })
};
</script>

<style>
p.text-left {
  margin: 0px;
}
.back {
  background-color: #679b9b;
}
.noPad {
  padding-bottom: 0px;
  padding-top: 0px;
}
.noPadBottom {
  padding-bottom: 0px;
}
div.v-card__title {
  padding: 0px;
}
div.v-card__title {
  font-size: 25px;
}
</style>