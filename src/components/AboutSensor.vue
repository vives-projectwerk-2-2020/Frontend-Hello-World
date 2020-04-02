<template>
  <v-card class="mx-auto" width="1400px">
    <v-container>
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
            <v-col cols="12" sm="6">
              <p class="text-left">Username</p>
              <v-text-field label="Matthias" single-line disabled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="text-left">email</p>
              <v-text-field label="matthias.willem@student.vives.be" single-line disabled></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <p class="text-left">First name of owner</p>
              <v-text-field label="Matthias" single-line disabled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="text-left">Last name of owner</p>
              <v-text-field label="Willem" single-line disabled></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <p class="text-left">Address of the sensor</p>
              <v-row>
                <v-col class="adressField" cols="12" sm="10">
                  <v-text-field label="Spoorwegstraat" single-line disabled></v-text-field>
                </v-col>
                <v-col class="adressField" cols="12" sm="2">
                  <v-text-field label="12" single-line disabled></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="4">
              <p class="text-left">City</p>
              <v-text-field label="Bruges" single-line disabled></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-left">Country</p>
              <v-text-field label="West-Flanders" single-line disabled></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-left">Postal code</p>
              <v-text-field label="8000" single-line disabled></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <p class="text-left">About the sensor</p>
              <v-text-field label="Bruges" single-line disabled></v-text-field>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-btn text>Share</v-btn>

            <v-btn color="purple" text>Explore</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
            </div>
          </v-expand-transition>
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
</style>