<template>
  <div>

  <div class="searchBar">
        <cv-dropdown class="drop" size="40px" placeholder="select client" :value="value" v-model="client">
            <span v-for="(name,index) in clientList" :key="index">
            <cv-dropdown-item style="padding:0px 42px 0px 16px" :value="name">{{name}}</cv-dropdown-item>
            </span>
        </cv-dropdown>
        <input class="txtinput" placeholder="Search..." v-model="keyword"/>
        <button class="srcbtn" @click="getQuery">Search</button>
    </div>
    
    </div>

</template>

<script>
export default {
  name: "Insert",
  data() {
    return {
      
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-size: 70px;
  margin: 90px auto auto auto;
  color: aliceblue
}

</style>