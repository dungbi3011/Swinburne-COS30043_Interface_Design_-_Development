<template>
  <div class="container">
    <br><h1>Units</h1>
    <div class="col-sm-12">
      <div class="table-responsive">
        <v-table class="table table-striped table-hover">
          <thead>
            <tr>
              <th id="code" scope="col">Code</th>
              <th id="desc" scope="col">Description</th>
              <th id= "cp" scope="col">Credit Point</th>
              <th id="type" scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in units" :key="unit.code">
              <th scope="row">{{ unit.code }}</th>
              <td headers="desc">{{ unit.desc }}</td>
              <td headers="cp">{{ unit.cp }}</td>
              <td headers="type">{{ unit.type }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>

<script>
import Units from "../assets/units.json";
export default {
  name: "UnitsView",
  component: {},
  data() {
    return {
      units: Units,
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
}

th,td{
    text-align: left;
}
</style>
