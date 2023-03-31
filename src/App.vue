<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-page-header @back="goBack">
          <template #content>
            <span class="text-large font-600 mr-3"> Title </span>
          </template>
        </el-page-header>
      </el-header>
      <el-main>
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
      </el-main>
      <router-view />
      <el-footer>
        <a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2023003389</a>
      </el-footer>
    </el-container>
  </div>
</template>



<script lang="ts" setup>
const goBack = () => {
  console.log("go back");
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
