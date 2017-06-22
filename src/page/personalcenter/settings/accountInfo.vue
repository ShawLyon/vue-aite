<template>
  <div class="accountInfo">
    <div class="title">
      <h2 class="title-left">账号信息</h2>
      <!-- <p class="title-right">30天只能修改一次，上次修改时间<span>2017-04-04 10:59</span></p> -->
      <span class="title-right">30天只能修改一次，上次修改时间 <b>2017-04-04 10:59</b></span>
    </div>
    <div class="content">
      <el-row class="item">
        <el-col :span="7" class="key">艾特号名称</el-col>
        <el-col :span="12" class="value">竹溪gaven</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7" class="key">艾特号介绍</el-col>
        <el-col :span="12" class="value">每日娱乐圈咨询</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7"  class="key">
          <span class="key">艾特号头像</span>
        </el-col>
        <el-col :span="12" class="value"><img src="http://placeholder.cn/100x100" alt=""></el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7" class="key">作者二维码</el-col>
        <el-col :span="12" class="value">
          <img src="http://placeholder.cn/100x100" alt="">
          <p style="line-height: 10px;">点击下载图片，尺寸512*512px</p>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7" class="key">艾特号ID</el-col>
        <el-col :span="12" class="value">176465456465465</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7" class="key">绑定手机</el-col>
        <el-col :span="12" class="value">1764654564</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7" class="key">联系电话</el-col>
        <el-col :span="12" class="value">17646545642</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7" class="key">领域</el-col>
        <el-col :span="12" class="value">娱乐圈</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7" class="key">所在地</el-col>
        <el-col :span="12" class="value"><span>中国</span>/<span>广东</span>/<span>深圳</span></el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="7" class="key">联系邮箱</el-col>
        <el-col :span="12" class="value">ly361901592@gamil.com</el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .accountInfo {
    .title {
      overflow: hidden;
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
      .title-left {
        float: left;
        font-size: 20px;
        color: #ca2e2f;
      }
      .title-right {
        float: right;

        position: relative;
        top: 5px;
        color: #999;
      }
    }
    .content {
      .item {
        line-height: 70px;
        .key {
          font-size: 20px;

        }
        .value {
          font-size: 16px;
          color: #999;
        }
      }
    }
  }
</style>