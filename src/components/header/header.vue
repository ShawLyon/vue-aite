<template>
	<div class="header">
    <el-row type="flex" class="row-head" justify="center">
      <el-col :span="6">
        <div class="head-login">
          <img src="../../images/logo.png" height="37" width="147" alt="">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="head-slot">
          <slot></slot>
        </div>
      </el-col>
    </el-row>
	</div>
</template>
<script>
	export default {
	  name: 'header'
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
	$theme-color: #ca2e2f;
  .header {
    border-bottom: 3px solid #ca2e2f;
    overflow: hidden;
    .head-login {
      float: left;
    }
    .head-slot {
      float: right;
      font-size: 20px;
      height: 45px;
      line-height: 45px;
      a{
        font-size: 20px;
        color: $theme-color;
      }
    }
  }
  
  /* .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
  }
  .layout-logo{
      float: left;
      position: relative;
      // top: 15px;
      // left: 20px;
  }
  .layout-copy{
      text-align: center;
      padding: 10px 0 20px;
      color: #9ea7b4;
  }
  .layout-ceiling{
      background: #fff;
      padding: 15px 0;
      overflow: hidden;
      border-bottom: 3px solid #ca2e2f;
      .ceiling-container {
          // padding: 0 460px;
      }
  }

  .layout-ceiling-right{
      font-size: 20px;
      float: right;
      height: 45px;
      // margin-right: 15px;
      line-height: 45px;
      a{
        font-size: 20px;
        color: $theme-color;
      }
  } */
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-head {
    padding: 10px 0;
  }
</style>
