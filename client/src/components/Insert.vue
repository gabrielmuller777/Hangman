<template>
  <div>
  <div class="headerInsert"><h1> INSERT NEW LOG </h1> </div>

    <div class="dropitem">
        <cv-dropdown class="drop" size="40px" placeholder="select Component" :value="value" v-model="component">
            <span v-for="(name,index) in componentList" :key="index">
            <cv-dropdown-item style="padding:0px 42px 0px 16px" :value="name">{{name}}</cv-dropdown-item>
            </span>
        </cv-dropdown>
    </div>
    <div class="dropitem">
        <cv-dropdown class="drop" size="40px" placeholder="select Customer" :value="value" v-model="customer">
            <span v-for="(name,index) in customerList" :key="index">
            <cv-dropdown-item style="padding:0px 42px 0px 16px" :value="name">{{name}}</cv-dropdown-item>
            </span>
        </cv-dropdown>
    </div>
    <div class="dropitem">
        <cv-dropdown class="drop" size="40px" placeholder="select Type" :value="value" v-model="type">
            <span v-for="(name,index) in typeList" :key="index">
            <cv-dropdown-item style="padding:0px 42px 0px 16px" :value="name">{{name}}</cv-dropdown-item>
            </span>
        </cv-dropdown>
    </div>
    <div class="dropitem">
        <cv-dropdown class="drop" size="40px" placeholder="select Area" :value="value" v-model="area">
            <span v-for="(name,index) in areaList" :key="index">
            <cv-dropdown-item style="padding:0px 42px 0px 16px" :value="name">{{name}}</cv-dropdown-item>
            </span>
        </cv-dropdown>
        <button class="srcbtn" @click="getQuery">Insert</button>
    </div>
    </div>


</template>

<script>
import queryService from "../queryService";

export default {
  name: "Insert",
  data() {
    return {
      logs: [],
      error: "",
      customer: "",
      value: '',
      valuecomponent: '',
      customerList: [],
      isActive: false,
      dropload: true,
      keyword: "",
      component: "",
      componentList: [],
      type: "",
      typeList: [],
      area: "",
      areaList: [],
    };
  },
    async created() {
    var sql = `select distinct "Customer" from mwx86642.gendata`
    var customers = []
    try {
        customers = await queryService.getData(sql);
        for(let idx in customers) {
          this.customerList.push(customers[idx].Customer)

        }
      } catch (err) {
        this.error = err;
        }

    var sql_components= `select distinct "Component" from mwx86642.gendata`
    var components = []
    try {
        components = await queryService.getData(sql_components);
        for(let idx in components) {
          this.componentList.push(components[idx].Component)
        }
      } catch (err) {
        this.error = err;
      }
    var sql_types= `select distinct "Type" from mwx86642.gendata`
    var types = []
    try {
        types = await queryService.getData(sql_types);
        for(let idx in types) {
          this.typeList.push(types[idx].Type)
        }
      } catch (err) {
        this.error = err;
      }
          var sql_area= `select distinct "Area" from mwx86642.gendata`
    var areas = []
    try {
        areas = await queryService.getData(sql_area);
        for(let idx in areas) {
          this.areaList.push(areas[idx].Area)
        }
      } catch (err) {
        this.error = err;
      }
      
  },

  methods: {
    async getQuery() {
      this.isActive=true
      var sql = `INSERT INTO mwx86642.gendata (Request_Number", "Customer", "Date", "Type", "User", "Component",	"Area",	"Summary", "Problem_Description",	"Solution") VALUES ('%${this.requestnumber}%', )`
      try {
        this.logs = await queryService.getData(sql);
        this.isActive=false
      } catch (err) {
        this.error = err;
      }
    }, //filter1
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 40px;
  color: rgb(236, 240, 243);
}
.headerInsert {
  margin: auto;
  height: 50px;
}
.searchBar {
  display: flex;
  max-width: 1400px;
  max-height: 40px;
  margin: 10px auto 10px auto;
  padding: 0 0 0 0;

}
.drop {
  min-width: 200px !important;
  height: 40px;
  font-size: 15px;
  margin: 0 0 0 0 !important;
  display: inline-block;
}
.dropitem{
  display: block;
  margin: 50px;
  float: left;
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
</style>
