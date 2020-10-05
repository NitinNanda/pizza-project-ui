<template>
  <div class="menu">
    <div class="class">
      <span><h1>All you can eat Menu.</h1></span>
    </div>
    <Items/>
  </div>
</template>
<script>
import Items from '../components/Items'

export default {
  components: {
    Items
  }
  
}
</script>

<style lang="scss" scoped>
span {
  font-family: One Dot Condensed Bold,Arial Narrow,Arial,Helvetica,sans-serif;
  -moz-osx-font-smoothing: grayscale;
}

.menu {
  width: 850px;
  left: 25%;
  margin-top: 20px;
}
</style>
