<template>
  <nav :style="{background: background || '#333'}">
    <div>
      <ul :style="{background: background || '#333'}" ref="nav">
        <figure class="image-logo" @click="toggleNav">
          <img :src="imagePath" height="40px" width="40px"/>
        </figure>
        <li v-for="(link, index) in leftNavLinks"
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
    </div>
    <div>
      <ul :style="{background: background || '#333'}"
      class="rightLinks">
        <li v-for="(link, index) in rightNavLinks"
        :key="index"
        @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
        @mouseleave="$event.currentTarget.style.background = background || '#333'"
        >

          <router-link :to="link.path"
          :style="{color: linkColor || '#DDD'}">
            {{link.text}}
            <i :class="link.icon"/>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['leftNavLinks', 'rightNavLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
  methods: {
    toggleNav () {
      const nav = this.$refs.nav.classList
      nav.contains('active') ? nav.remove('active') : nav.add('active')
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  height: 60px;
  width: 100%;
  box-shadow: 2px 2px 2px #CCC;

  div {

    ul {
      height: 100%;
      align-items: center;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
      float: left;

      &.rightLinks {
        float: right;
        padding: 10px 20px;
      }

      figure {
        cursor: pointer;
        margin-right: 10px;
        display: inline;
      }

      a {
        text-decoration: none;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }

      i {
        margin-right: 10px;
        font-size: 12px;
      }

      li {
        display: inline-block;
        list-style-type: none;
        padding: 10px 20px;
      }
    }
  }

}

@media screen and (max-width: 759px){
  nav {
    ul{
      position: absolute;
      width: 300px;
      flex-direction: column;
      left: -240px;
      transition: 300ms ease all;
      top: 60px;
      box-shadow: 2px 2px 2px #CCC;

      &.active {
        left: 0px;
      }

      figure {
        position: fixed;
        z-index: 1;
        top: 10px;
        left: 2px;
      }

      li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }

      a{
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 13px;
      }
    }
  }
}
</style>
