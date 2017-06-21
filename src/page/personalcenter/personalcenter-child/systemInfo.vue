<template>
  <div class="systemInfo">
    <h2 class="title">系统消息</h2>
    <div class="content">
      <div class="left">
        <i class="fa fa-bell-o bell"></i>
        <span>申请已提交，请等待审核。</span>
      </div>
      <div class="right">2017-01-02</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  $theme-color: #ca2e2f;
  .systemInfo {
    .title {
      font-size: 24px;
      font-weight: 500;
      color: $theme-color;
      border-bottom: 1px solid #999;
      padding-bottom: 16px;
    }
    .content {
      overflow: hidden;
      line-height: 100px;
      color: #999;
      .left {
        float: left;
        .bell {
          padding: 5px;
          border-radius: 4px;
          color: #fff;
          background: $theme-color;
        }
      }
      .right {
        float: right;
      }
    }
  }
</style>