<template>
  <div class="container">
    <ul>
      <li v-for="item in itemList"
      :key="item.id"
      class="grid"
      @click="redirect(item)">
        <a>
          <div class="item-image">
            <img :src="require(`../assets${item.imgUrl}`)" alt="Image"/>
            <div>
              <span><h3>{{item.name}}</h3></span>
              <br>
              <h6>{{item.detail}}</h6>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'Items',
  methods: {
    redirect: function (item) {
      this.$router.push({name: item.name})
    }
  },
  data() {
    return {
      itemList: []
    }
  },
  mounted: function () {
    axios.get('http://localhost:8081/api/item/all')
    .then(response => {
      this.itemList = response.data;
    })
    .catch(e => {
      console.log(e);
    })
  }
}
</script>

<style lang="scss" scoped>
  

  .container {
    position: relative;

    ul {
    flex-direction: column;

      img {
        float: left;
        margin-right: 5px;
        height: 73px;
        width: 90px;
        display: inline-block;
        vertical-align: middle;
      }

      .grid {
        border: 1px solid rgb(141, 139, 139);
        margin-bottom: 5px;
        display: inline-block;
        white-space: nowrap;
        display: block;
        box-sizing: border-box;
        text-align: left;
        vertical-align: middle;
        height: 75px;
        width: 100%;

        span {
          align-items: center;
          margin-left: 30px;
          position: fixed;
          font-weight: 700;
          color: rgb(74, 96, 156) ;
        }

        h6 {
          align-items: center;
          margin-left: 125px;
          position: fixed;
          color: gray;
        }
      }
    }
  }

</style>