<template>
  <AppSidebar />
  <div class="pcoded-main-container">
    <div class="pcoded-wrapper">
      <div class="pcoded-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    AppSidebar
  }
}
</script>