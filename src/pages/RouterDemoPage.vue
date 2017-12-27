<template>
  <div class="router-page">
    <nav>
      <router-link to="inner1" append class="main-nav-link">inner route 1</router-link>
      <router-link to="inner-static" append class="main-nav-link">inner route 2</router-link>
    </nav>
    <div class="page-content page-content--router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {


}
</script>