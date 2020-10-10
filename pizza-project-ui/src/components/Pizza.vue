<template>
  <div>
    <div class="class">
      <span><h1>All you can eat</h1></span>
      <div class="container">
        <div class="box" v-for="item in pizzaList" :key="item.id">
          <div>
            <img :src="require(`../assets${item.imgUrl}`)" alt="Image"/>
              <div>
                <a class="btn" @mouseenter="$event.currentTarget.style.background = '#EF6B7F'"
                @mouseleave="$event.currentTarget.style.background = '#e31837' ">Buy Now</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      pizzaList: []
    }
  },
  mounted: function () {
    axios.get('http://localhost:8081/api/pizza/all')
    .then(response => {
      this.pizzaList = response.data;
    })
    .catch(e => {
      console.log(e);
    })
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 60%;
    height: auto;
    margin-left: 300px;

    display: flex;
    flex-direction: row;
    flex-flow: wrap;
  }

  .box {
    width: 20%;
    height: 250px;
    margin: 10px;
    margin-right: 30px;
    box-sizing: border-box;
    font-size: 50px;
  }

  img {
    float: left;
    margin-right: 5px;
    height: 200px;
    width: 220px;
    display: inline-block;
    vertical-align: middle;
  }
  
  .btn {
      font-family: One Dot Condensed Bold,Arial Narrow,Arial,Helvetica,sans-serif;
      -moz-osx-font-smoothing: grayscale;
      display: inline-block;
      display: inline-flex;
      -ms-flex-align: stretch;
      align-items: stretch;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      box-sizing: border-box;
      width: 220px;
      font-size: 1.125rem;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: .027em;
      text-decoration: none;
      background-color: #e31837;
      color: #fff;
      border: 0;
      border-radius: .1875rem;
      padding: .55556em .55556em .5em;
      cursor: pointer;
      transition: box-shadow .3s linear;
      -webkit-font-smoothing: antialiased;
  }

  @media screen and (max-width: 1200px){
    .box {
      width: 40%;
      
    }
      @media screen and (max-width: 600px){
      .box {
        width: 90%;
      }
    }
  }
</style>