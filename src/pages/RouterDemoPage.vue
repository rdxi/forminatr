<template>
  <div class="router-page">
    <nav>
      <router-link to="/router-demo/inner-static" class="main-nav-link">inner static route 1</router-link>
      <router-link to="/router-demo/dynamic-route-01" class="main-nav-link">inner dynamic route 1</router-link>
      <router-link to="/router-demo/dynamic-route-99" class="main-nav-link">inner dynamic route 2</router-link>
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