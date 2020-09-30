<template>
  <nav :style="{background: background || '#333'}">
    <ul :style="{background: background || '#333'}">
      <figure class="image-logo">
        <img :src="imagePath" height="40px" width="40px"/>
      </figure>
      <li v-for="(link, index) in navLinks"
      :key="index"
      @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
      @mouseleave="$event.currentTarget.style.background = background || '#333'">

        <router-link :to="link.path"
        :style="{color: linkColor || '#DDD'}">
          {{link.text}}
          <i :class="link.icon"/>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath']
}
</script>

<style scoped lang="scss">
nav {
  height: 60px;
  width: 100%;
  ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    figure {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
    }

    li{
      list-style-type: none;
      padding: 10px 20px;
    }
  }
}

</style>