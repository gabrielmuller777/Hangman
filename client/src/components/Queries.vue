<template>
<div>
    <div class="navbar">
      <div class="linksnav">
        <span class="linkBox"><router-link class="routes" :to="{name: 'Search'}">Search</router-link></span>
        <span class="linkBox"><router-link class="routes" :to="{name: 'Insert'}">Insert</router-link></span>
        <span class="linkBox"><router-link class="routes" :to="{name: 'SQLSearch'}">SQL</router-link></span>
      </div>
      <div class="header-right">
        <template slot="header-global" />
        <a class="navLabel" style="margin-right:20px"> TechLogR</a>
        <img class="logo" src="../assets/logo.svg" alt="logo">
      </div>
    </div>
</div>
</template>

<script>

export default {
  components: {

  },
  name: "Queries",
  data() {
    return {
      
    };
  },
  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-size: 16px;
  margin: auto;
}
h1 {
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  margin: 40px 0 0;
}
.navbar {
  display: flex;
  background-color: #ffffff;
  height: 45px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
}
.header-right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 45px;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  float: right;
  flex: 1 1;
  margin-right: 2rem;

}
.navLabel {
  font-size: 1rem;
  text-align: center;
  padding: 8px 0 8px 0;
  margin-left: 20px;
  color: black;
}
.searchBar {
  display: flex;
  max-width: 1400px;
  max-height: 40px;
  margin: 10px auto 10px auto;
  padding: 0 0 0 0;
  align-items: flex-end;
  justify-content: flex-start;
}
.tabs_comp {
  display: flex;
  max-width: 1400px;
  margin: auto;
  padding: 0 0 0 0;
  align-items: flex-end;
  justify-content: flex-start;
  align-items: center;
}
.drop {
  max-width: 200px !important;
  height: 40px;
  font-size: 15px;
  margin: 0 0 0 0 !important;
}
.txtinput {
  max-width: 200px !important;
  height: 40px !important;
  margin: 0 0 0 20px !important;
  border: none;
  background-color: #f7f3f2;
  font-size: 15px !important;
  padding: 0 0 0 10px;
}
.srcbtn {
  width: 100px;
  height: 40px;
  margin: 0 0 0 20px !important;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  background-color: rgb(15, 98, 254);
  border: none;
  color: white;
  font-size: 15px;
  text-align: center;
}
.customer {
  background-color: rgb(228, 228, 228);
}
.listArea {
  width: 1400px;
  margin: auto;
}

.logo{
  height: 25px;
  fill: #ffffff;
}

.linkBox {
  height: 43px;
  width: 80px;
  text-align: center;
  padding: 14px;
  color: black;
  border-bottom: 0px;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  display: inline-block;
}

.linkBox:hover{
  border-bottom: 4px solid #0F62FE;
  transition: border-width 0.2 ease-in-out !important;
  color: #0F62FE;
}

.routes{
  font-size: 16px;
  text-decoration: none;
  color: inherit;
}

.linksnav{
  width: 720px;
  height: 45px;
  display: flex;
}
</style>
