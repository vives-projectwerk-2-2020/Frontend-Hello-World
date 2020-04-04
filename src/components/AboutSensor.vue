<template>
  <v-card class="mx-auto" width="80%">
    <v-container class="noPad container">
      <v-row>
        <v-col cols="12" sm="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1250.1837652387912!2d3.2183284!3d51.1938791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcded5a4988f83cd5!2sKU%20Leuven%20Campus%20Brugge!5e0!3m2!1sen!2sbe!4v1585853731962!5m2!1sen!2sbe"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card-title>Sensor info</v-card-title>
          <v-row>
            <v-col class="noPad" cols="12" sm="6">
              <p class="text-left">Username</p>
              <v-text-field value="Matthias" single-line disabled></v-text-field>
            </v-col>
            <v-col class="noPad" cols="12" sm="6">
              <p class="text-left">email</p>
              <v-text-field value="matthias.willem@student.vives.be" single-line disabled></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="noPad" cols="12" sm="6">
              <p class="text-left">First name of owner</p>
              <v-text-field value="Matthias" single-line disabled></v-text-field>
            </v-col>
            <v-col class="noPad" cols="12" sm="6">
              <p class="text-left">Last name of owner</p>
              <v-text-field value="Willem" single-line disabled></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="adressField noPad" cols="12" sm="10">
              <p class="text-left">Street</p>
              <v-text-field value="Spoorwegstraat" single-line disabled></v-text-field>
            </v-col>
            <v-col class="adressField noPad" cols="12" sm="2">
              <p class="text-left">No.</p>
              <v-text-field value="12" single-line disabled></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="noPad" cols="12" sm="4">
              <p class="text-left">City</p>
              <v-text-field value="Bruges" single-line disabled>Brugge</v-text-field>
            </v-col>
            <v-col class="noPad" cols="12" sm="4">
              <p class="text-left">Postal code</p>
              <v-text-field value="8000" single-line disabled></v-text-field>
            </v-col>
            <v-col class="noPad" cols="12" sm="4">
              <p class="text-left">Country</p>
              <v-text-field value="Belgium" single-line disabled></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="noPad">
              <p class="text-left">About the sensor</p>
              <v-textarea
                rows="1"
                auto-grow
                disabled
                value="This is a very nice sensor. You should buy one! I like this sensor very much, believe me. This is the best sensor i've ever got!"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-btn class="back" color="#FFFFFF" text>Back to sensorpage</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>

<style>
p.text-left {
  margin: 0px;
}
.adressField {
  padding-top: 0px;
  padding-bottom: 0px;
}
.back {
  background-color: #679b9b;
}
.noPad {
  padding-bottom: 0px;
  padding-top: 0px;
}
div.v-card__title {
  padding: 0px;
}
div.v-card__actions {
  padding-left: 0px;
  padding-bottom: 0px;
}
div.v-card__title {
  font-size: 25px;
}
.container {
  padding-top: 0px;
}
</style>