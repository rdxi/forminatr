<template>
  <div class="router-page">
    <nav>
      <router-link to="/router-demo/inner-static" class="inner-nav-link">inner static route 1</router-link>
      <router-link to="/router-demo/inner-dynamic-route-01" class="inner-nav-link">inner dynamic route 1</router-link>
      <router-link to="/router-demo/inner-dynamic-route-99" class="inner-nav-link">inner dynamic route 2</router-link>
      <router-link to="/router-demo/inner-remote" class="inner-nav-link">inner route with data from remote api</router-link>
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