<template>
  <div class="home">
    <div class="zero-contact-container">
      <div>
        <img class="hand-icon" src="../assets/icons/zc.png" alt="ZERO CONTACT">
      </div>
      <div>
        <span class="zero-contact-text">ZERO CONTACT DELIVERY AND CARRYOUT NOW AVAILABLE</span>
      </div>
      <div @click="directToMenu">
        <a class="btn" @mouseenter="$event.currentTarget.style.background = '#EF6B7F'"
        @mouseleave="$event.currentTarget.style.background = '#e31837' ">Buy Now</a>
      </div>
    </div>
  </div>
</template>

<script >

export default {
  name: 'Home',
  methods: {
    directToMenu: function () {
       this.$router.push({name: 'Menu'})
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

.btn {
    padding: .6em 1em;
    margin-top: .2em;
    width: 7em;
    min-width: 7em;
    margin-right: 1em;
}

.btn, button, input[type=submit] {
    font-family: One Dot Condensed Bold,Arial Narrow,Arial,Helvetica,sans-serif;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
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
    margin-left: 15px;
    cursor: pointer;
    transition: box-shadow .3s linear;
    -webkit-font-smoothing: antialiased;
}

.hand-icon {
  margin-left: 15px;
  margin-right: 25px;
}

.zero-contact-text {
  color: #ffffff;
  text-transform: uppercase;
  font: 1.5em "One Dot Condensed Bold", "Arial Narrow", Arial, Helvetica, sans-serif;
}

.zero-contact-container {
  background-color: #006491;
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-items: center;
  position: absolute;
  width: 850px;
  left: 25%;
  margin-top: 20px;
 }
</style>