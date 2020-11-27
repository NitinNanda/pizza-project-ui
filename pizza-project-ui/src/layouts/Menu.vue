<template>
  <div class="menu absolute">
    <div class="q-pa-md q-gutter-sm">
      <q-banner inline-actions rounded class="bg-grey text-white">
        All you can eat Menu.
      </q-banner>
      <q-icon name="" color="primary"/>
      <Items class="a"/>
    </div>

  </div>
</template>
<script>
import Items from 'src/components/Items.vue'

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

.a {
  margin-left: 0px;
  margin-top: 0px;
}
</style>
