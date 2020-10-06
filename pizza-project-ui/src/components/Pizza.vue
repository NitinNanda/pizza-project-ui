<template>
  <div>
    <div class="class">
      <span><h1>All you can eat Menu.</h1></span>
      <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 1,
          name: 'Garlic',
          basePrice: 15.5,
          imgUrl: '../assets/entities/pizza/pizza_1.jpg'
        },
        {
          id: 2,
          name: 'Chilli',
          basePrice: 10.5,
          imgUrl: '../assets/entities/pizza/pizza_2.jpg'
        },
        {
          id: 3,
          name: 'Coconut',
          basePrice: 25.5,
          imgUrl: '../assets/entities/pizza/pizza_3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: auto;
    background: #007bbf;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
  }

  .box {
    width: 20%;
    height: 300px;
    background: yellow;
    margin: 20px;
    box-sizing: border-box;
    font-size: 50px;
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