<template>
  <div>
    <h1>Logs</h1>
    <input id="sqlInput" type="text" v-model="text" placeholder="Search..." v-on:keyup.enter="getQuery" />
    <button @click="getQuery">Send</button>
    <ul v-for="log in logs" :key="log">
      <li>
        <p class="sep"></p>
        <p>
          <label>Name:</label>
          {{log.first_name + ' ' + log.last_name}}
        </p>
        <p>
          <label>Company:</label>
          {{log.company_name}}
        </p>
        <p>
          <label>State:</label>
          {{log.state}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import queryService from "../queryService";
export default {
  name: "Queries",
  data() {
    return {
      logs: [],
      error: "",
      text: ""
    };
  },
  methods: {
    async getQuery() {
      try {
        this.logs = await queryService.getData(this.text);
      } catch (err) {
        this.error = err;
      }
      this.text = ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
label {
  color: #42b983;
  font-size: 20px;
}
#sqlInput {
  width: 200px;
  margin-right: 20px;
}
.sep {
  background-color: #42b983;
  height: 1px;
  width: 100px;
  margin: auto;
}
</style>
