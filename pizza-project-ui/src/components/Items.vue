<template>
  <div class="container">
    <ul>
      <li v-for="item in items"
      :key="item.id"
      class="grid"
      @click="redirect(item)">
        <a>
          <div class="item-image">
            <img :src="item.imgurl" alt="Image"/>
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
export default {
  name: 'Items',
  methods: {
    redirect: function (item) {
      this.$router.push({name: item.name})
    }
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Pizza',
          imgurl: require('../assets/items/pizza.jpg'),
          detail: 'Find all the pizza variants here',
          path: '/pizza'
        },
        {
          id: 2,
          name: 'Side',
          imgurl: require('../assets/items/side.jpg'),
          detail: 'Pasta, fries, nuggets and much more',
          path: '/side'
        },
        {
          id: 3,
          name: 'Drink',
          imgurl: require('../assets/items/drink.jpg'),
          detail: 'A variety of fizzy and non-fizzy drinks',
          path: '/id'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  

  .container {
    position: relative;

    ul {
    flex-direction: column;

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

  
  

  img {
    float: left;
    margin-right: 5px;
    height: 73px;
    width: 90px;
    display: inline-block;
    vertical-align: middle;
  }

</style>