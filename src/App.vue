<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss" rel="stylesheet/scss">
// @import url('./style/login.scss');
    body {
      font-family: '微软雅黑';
    }
    a:visited {
      color: #000;
    } 
    .el-button {
      width: 115px;
      height: 35px;
    }
    .el-tabs__item {
      font-size: 20px;
    }
    .el-tabs__item.is-active {
      color: #ca2f2f;
    }
    .el-tabs__active-bar {
      background-color: #ca2f2f;
    }
    // 表头
    .el-table th {
      background-color: #eee;
    }
    .el-table__footer-wrapper thead div, .el-table__header-wrapper thead div {
      background-color: #eee;
    }
</style>
