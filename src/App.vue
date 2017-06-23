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
    $theme-color: #ca2e2f;

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
      color: #999;
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
    // tip 结算中心
    .el-tooltip__popper {
      width: 200px;
    }
    .numTable {
      border: 1px solid #dcdcdc;
      margin-top: 30px;
      .numTable-title {
        overflow: hidden;
        line-height: 20px;
        padding: 10px;
        background: #eee;
        .filterTime {
          float: left;
          padding-right: 10px;
          border-right: 1px dashed #a8a8a8; 
          span {
            padding: 0 10px;
            font-size: 16px;
            color: #a8a8a8;
          }
        }
        .filterDate {
          font-size: 14px;
          padding-left: 20px;
          float: left;
        }
      }
      .numTable-con {
        display: flex;
        padding: 18px 0;
        color: #999;
        .articleNum, .readNum, .likeNum {
          flex: 1;
          text-align: center;
          span {
            display: block;
          }
          .numValue {
            font-size: 28px;
            padding: 20px 0;
            color: #000;
            a,b {
              font-size: 16px;
            }
          }
        }
        .readNum {
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        .key {
          font-size: 20px;
          margin-top: 20px;
        }
        .value {
          font-size: 26px;
        }
      }
    }
</style>
