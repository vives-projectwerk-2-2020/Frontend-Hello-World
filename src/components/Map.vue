  <template>
  <div id="map">
      <p>{{htmlcontent}}</p>
  </div>
</template>

<script>
export default {
    name:'map',
    data: () => ({
        htmlcontent: '<h1>tjoep</h1>'
    })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>