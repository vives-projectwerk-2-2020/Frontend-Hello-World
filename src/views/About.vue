<template>
  <v-app id="inspire">
    <Sidebar></Sidebar>
    <v-content>
      <v-container class="fill-height" fluid>
        <p class="display-3">About the Project</p>

        <v-row>
          <v-col cols="12" sm="6">
            <v-img src="../img/brugge.jpg" :aspect-ratio="16/9"></v-img>
          </v-col>

          <v-col cols="12" sm="6">
            <v-img src="../img/fine_dust.jpg" :aspect-ratio="16/9">
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </v-col>
        </v-row>

        <p class="subtitle-1">
          Devops Was Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus similique odio incidunt asperiores? Porro dolorem incidunt culpa! Incidunt illo vel animi
          laudantium numquam quae similique, maiores ea pariatur, repellendus corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos dolorum quos
          quas, officia, dignissimos deserunt perferendis laudantium ab nihil aliquam corrupti expedita quibusdam quia natus eveniet recusandae culpa voluptatem. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Hic, tenetur! Exercitationem, commodi neque! Laudantium enim eius quis ea? Quod totam magni tempore
          consequuntur alias omnis earum quisquam sunt hic. Ducimus. orem ipsum dolor sit amet consectetur adipisicing elit. A illum labore quod voluptatem cumque
          laudantium deleniti ea maiores quas. Debitis suscipit, quasi ipsa non molestias eveniet minima rem doloribus laborum. adipisicing elit. Amet eos dolorum quos
          quas, officia, dignissimos deserunt perferendis laudantium ab nihil aliquam corrupti expedita quibusdam quia natus eveniet recusandae culpa voluptatem. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Hic, tenetur! Exercitationem, commodi neque! Laudantium enim eius quis ea? Quod totam magni tempore
          consequuntur alias omnis earum quisquam sunt hic. Ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum labore quod voluptatem cumque
          laudantium deleniti ea maiores quas. Debitis suscipit, quasi ipsa non molestias eveniet minima rem doloribus laborum.
        </p>

        <p class="display-2">The final product</p>

        <v-row>
          <v-col cols="12" sm="6">
            <p class="body-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ut ipsum saepe earum, enim rem adipisci quas neque reiciendis impedit, iure inventore,
              totam quod. Molestiae consequuntur quibusdam eveniet ab reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, perferendis
              unde. Aliquid ratione iure, ullam assumenda harum aliquam nihil sapiente sunt voluptatem dignissimos, veniam amet quae voluptatum, itaque fuga esse.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quae laudantium earum natus. Quo totam deleniti hic quibusdam laboriosam, veritatis
              debitis illum, sapiente consequatur esse, voluptate numquam! Vel, inventore. Vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet,
              quibusdam voluptatibus commodi, blanditiis facere, qui debitis porro ipsam iste fuga mollitia dignissimos magnam assumenda harum ratione consequuntur
              repudiandae sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate modi quo corporis libero, aperiam expedita esse saepe? Nam
              repudiandae deleniti impedit suscipit laboriosam possimus qui? Ipsa, provident? Corrupti, doloremque? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Similique, accusantium delectus consequatur, maiores tenetur laboriosam quam libero maxime vitae ab facilis distinctio eos eum, obcaecati architecto
              voluptatum rem in velit.
            </p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="../img/final_product.png" :aspect-ratio="16/9">
              <div class="fill-height repeating-gradient"></div>
            </v-img>
          </v-col>
        </v-row>

        <p class="display-2">Used materials and sensors</p>

        <v-row>
          <v-col cols="6" sm="4">
            <v-img src="../img/pressure_sensor.jpg" :aspect-ratio="16/9"></v-img>

            <p class="display-1">The pressure sensor</p>

            <p class="body-1">
              orem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis
              quam quia reprehenderit animi blanditiis tenetur expedita! Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis
              quam quia reprehenderit animi blanditiis tenetur expedita! Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis
              quam quia reprehenderit animi blanditiis tenetur expedita!
            </p>
          </v-col>

          <v-col cols="6" sm="4">
            <p class="display-1">The solar panel</p>
            <p class="body-1">
              orem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis quam
              quia reprehenderit animi blanditiis tenetur expedita! Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis
              quam quia reprehenderit animi blanditiis tenetur expedita! Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis
              quam quia reprehenderit animi blanditiis tenetur expedita!
            </p>
            <v-img src="../img/solar-panel.jpg" :aspect-ratio="16/9">
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img src="../img/mbed-module.jpg" :aspect-ratio="16/9">
              <div class="fill-height repeating-gradient"></div>
            </v-img>
            <p class="display-1">The mbed module</p>
            <p class="body-1">
              orem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis quam
              quia reprehenderit animi blanditiis tenetur expedita! Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis
              quam quia reprehenderit animi blanditiis tenetur expedita! Deserunt maiores commodi atque at itaque rerum, sequi fuga quos, cumque fugiat qui ab perferendis
              quam quia reprehenderit animi blanditiis tenetur expedita!
            </p>
          </v-col>
        </v-row>

        <p class="display-2">Extra information</p>

        <p class="body-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ut ipsum saepe earum, enim rem adipisci quas neque reiciendis impedit, iure inventore,
          totam quod. Molestiae consequuntur quibusdam eveniet ab reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, perferendis
          unde. Aliquid ratione iure, ullam assumenda harum aliquam nihil sapiente sunt voluptatem dignissimos, veniam amet quae voluptatum, itaque fuga esse.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quae laudantium earum natus. Quo totam deleniti hic quibusdam laboriosam, veritatis
          debitis illum, sapiente consequatur esse, voluptate numquam! Vel, inventore. Vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet,
          quibusdam voluptatibus commodi, blanditiis facere, qui debitis porro ipsam iste fuga mollitia dignissimos magnam assumenda harum ratione consequuntur
          repudiandae sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate modi quo corporis libero, aperiam expedita esse saepe? Nam
          repudiandae deleniti impedit suscipit laboriosam possimus qui? Ipsa, provident? Corrupti, doloremque? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Similique, accusantium delectus consequatur, maiores tenetur laboriosam quam libero maxime vitae ab facilis distinctio eos eum, obcaecati architecto
          voluptatum rem in velit.
        </p>

        <p class="display-2">VIVES Brugge Station</p>

        <v-row>
          <v-col cols="12" sm="6">
            <v-img src="../img/vives.jpg" :aspect-ratio="16/9">
              <div class="fill-height repeating-gradient"></div>
            </v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <p class="body-1">
              The VIVES Bruges technology campus is a stone's throw from the station. The courses that you can take there can use the most modern,
              high-tech facilities in the university landscape in Flanders. But not only that: because the technology campus is close to the station,
              you also study in the heart of Bruges, a student city with age-old traditions, pleasant neighborhoods and ultramodern facilities.
            </p>
            <p class="body-2">
              The campus in Bruges has a casual, personal atmosphere. The lecturers are easily approachable and you go out with students from other disciplines.
              In this way you learn to view life from many angles. Personal education is one of the assets of the Bruges campus: the groups are small and teachers
              make it a point to work and live among the students. As a student you can always count on advice and guidance, on remedying problems or on reorientation.
            </p>
            <p
              class="body-2"
            >The VIVES technology campus is embedded in the KU Leuven buildings in Bruges. That way you will also come into contact with students from the university day in and day out.</p>
            <v-btn href="https://www.vives.be/en" target="_blank">Visit VIVES</v-btn>
          </v-col>
        </v-row>

        <p class="display-2">Our experiences</p>
        <p class="body-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ut ipsum saepe earum, enim rem adipisci quas neque reiciendis impedit, iure inventore,
          totam quod. Molestiae consequuntur quibusdam eveniet ab reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, perferendis
          unde. Aliquid ratione iure, ullam assumenda harum aliquam nihil sapiente sunt voluptatem dignissimos, veniam amet quae voluptatum, itaque fuga esse.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quae laudantium earum natus. Quo totam deleniti hic quibusdam laboriosam, veritatis
          debitis illum, sapiente consequatur esse, voluptate numquam! Vel, inventore. Vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet,
          quibusdam voluptatibus commodi, blanditiis facere, qui debitis porro ipsam iste fuga mollitia dignissimos magnam assumenda harum ratione consequuntur
          repudiandae sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate modi quo corporis libero, aperiam expedita esse saepe? Nam
          repudiandae deleniti impedit suscipit laboriosam possimus qui? Ipsa, provident? Corrupti, doloremque? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Similique, accusantium delectus consequatur, maiores tenetur laboriosam quam libero maxime vitae ab facilis distinctio eos eum, obcaecati architecto
          voluptatum rem in velit.
        </p>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  props: {
    source: String
  },
  components: {
    Sidebar
  }
};
</script>

<style scoped>
</style>
