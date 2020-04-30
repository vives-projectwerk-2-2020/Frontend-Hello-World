<template>
  <v-app id="inspire">
    <v-container
      style="width: 90%; margin-bottom: 20px; margin-top: 20px;"
      fluid
    >
      <p
        class="display-3"
      >
        About the Project
      </p>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-img
            src="../img/brugge.jpg"
            :aspect-ratio="16 / 9"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-img
            src="../img/fine_dust.jpg"
            :aspect-ratio="16 / 9"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p
            class="subtitle-1"
          >
            We are Electronics-ICT students at the VIVES university of Bruges. We
            were commissioned in preparation for our internship next year to fulfill
            a project of the city of Bruges. The project involves making Bruges a
            smart city. Our teachers Nico and Sille helped us to choose how we would
            approach it. We made a particle sensor that measures the harmful
            substances in Bruges. We created a sensor that does that, along with a
            web app that can display the measurements.
          </p>

          <p
            class="subtitle-1"
          >
            This project is completely open source. If you want
            to build your own sensor you can do this! Scroll down for finding out each
            component you need to build this project.
          </p>
        </v-col>
      </v-row>

      <p
        class="display-2"
      >
        The final product
      </p>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <p
            class="body-1"
          >
            The end product not only works well, but is also beautiful. The
            sensor can remain outside when it rains because the material we have
            chosen allows this. The device charges using the solar panel. After
            a dark week, the battery will still work. The device can be used for
            10+ days without charging. After 1 hour of charging with the solar
            panel, the battery is full again. All the materials we used were
            purchased at affordable prices. If you rarely want to build one, the
            material is listed below.
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-img
            src="../img/final_product.png"
            :aspect-ratio="16 / 9"
          >
            <div
              class="fill-height repeating-gradient" 
            /> <!-- Need to check this -->
          </v-img>
        </v-col>
      </v-row>

      <!-- <p class="display-2">Used materials and sensors</p>

      <v-row>
        <v-col cols="6" sm="4">
          <v-img src="../img/pressure_sensor.jpg" :aspect-ratio="16 / 9" />

          <p class="display-1">The pressure sensor</p>

          <p class="body-1">
            247/5000 This is the sensor linked to the board, which can measure
            the 2.5 and 5 nm particles in the air. He sends data that our sign
            can process, does not require much energy, ... !!! Enter something
            decent if you know anything about it !!! !!! Change photo !!!
          </p>
        </v-col>

        <v-col cols="6" sm="4">
          <p class="display-1">The solar panel</p>
          <p class="body-1">
            This is the solar panel, which provides enough energy to charge the
            battery in 1 hour. It does not cost much and can be used in all
            weather conditions. !!! Enter something decent if you know anything
            about it !!! !!! Change photo !!!
          </p>
          <v-img src="../img/solar-panel.jpg" :aspect-ratio="16 / 9">
            <div class="fill-height bottom-gradient" />
          </v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img src="../img/mbed-module.jpg" :aspect-ratio="16 / 9">
            <div class="fill-height repeating-gradient" />
          </v-img>
          <p class="display-1">The mbed module</p>
          <p class="body-1">
            This sign works perfectly for our sensor, it is economical and does
            not cost much. Has everything we need, nothing more. Is easy to use.
            Has ... pins, ... Blablablabla !!! Enter something decent if you
            know anything about it !!! !!! Change photo !!!
          </p>
        </v-col>
      </v-row>-->

      <v-row>
        <v-col>
          <p
            class="display-2"
          >
            Extra information
          </p>

          <p
            class="body-1"
          >
            This project is completely open-source. Feel free to build one yourself.
            Do not hesitate to give us feedback or improvements, we appreciate this
            very much.
          </p>

          <v-btn
            href="./BuildSensor"
            style="margin-bottom: 12px"
            target="_blank"
          >
            Build your own sensor
          </v-btn>
          
          <p
            class="body-1"
          >
            This website is made with vuetify, go checkout their
            website!
          </p>

          <v-btn
            link="https://vuetifyjs.com/en/"
            target="_blank"
          >
            Visit Vuetify
          </v-btn>
        </v-col>
      </v-row>

      <p
        class="display-2"
      >
        VIVES Brugge Station
      </p>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-img
            src="../img/vives.jpg"
            :aspect-ratio="16 / 9"
          >
            <div
              class="fill-height
              repeating-gradient"
            />
          </v-img>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <p
            class="body-1"
          >
            The VIVES Bruges technology campus is a stone's throw from the
            station. The courses that you can take there can use the most
            modern, high-tech facilities in the university landscape in
            Flanders. But not only that: because the technology campus is close
            to the station, you also study in the heart of Bruges, a student
            city with age-old traditions, pleasant neighborhoods and ultramodern
            facilities.
          </p>
          <p
            class="body-2"
          >
            The campus in Bruges has a casual, personal atmosphere. The
            lecturers are easily approachable and you go out with students from
            other disciplines. In this way you learn to view life from many
            angles. Personal education is one of the assets of the Bruges
            campus: the groups are small and teachers make it a point to work
            and live among the students. As a student you can always count on
            advice and guidance, on remedying problems or on reorientation.
          </p>
          <p
            class="body-2"
          >
            The VIVES technology campus is embedded in the KU Leuven buildings
            in Bruges. That way you will also come into contact with students
            from the university day in and day out.
          </p>
          <v-btn
            href="https://www.vives.be/en"
            target="_blank"
          >
            Visit VIVES
          </v-btn>
        </v-col>
      </v-row>

      <p
        class="display-2"
      >
        Our experiences
      </p>

      <v-row>
        <v-col>
          <p
            class="body-1"
          >
            Working on 1 project with 20 students? We thought this was never going
            to happen. At the beginning of the project, we did not progress as
            quickly, but this was to be expected. 2 weeks later we were weakening a
            bit. After that everyone has picked up. Communication was not always
            smooth, but it is our first project, we are working on it. Then we
            started using different communication mediums and things went a lot
            smoother. Communication improved and the project went smoother. We were
            integrating several things and we got 1 full project. After that it was
            mainly adding featchers and fixing bugs. Make the app a bit cleaner in
            layout and provide the sensor with extras. It was a difficult but great
            project, we learned a lot from it.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
