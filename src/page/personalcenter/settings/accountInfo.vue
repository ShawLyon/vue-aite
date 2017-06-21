<template>
  <div class="accountInfo">
    <div class="title">
      <h2 class="title-left">账号信息</h2>
      <div class="title-right">30天只能修改一次，上次修改时间<span>2017-04-04 10:59</span></div>
    </div>
    <div class="content">
      <el-row class="item">
        <el-col :span="6" >艾特号名称</el-col>
        <el-col :span="12">竹溪gaven</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6">艾特号介绍</el-col>
        <el-col :span="12">每日娱乐圈咨询</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6" >
          <span class="key">艾特号头像</span>
        </el-col>
        <el-col :span="12" class="value"><img src="http://placeholder.cn/100x100" alt=""></el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6">作者二维码</el-col>
        <el-col :span="12">
          <img src="http://placeholder.cn/100x100" alt="">
          <p style="line-height: 10px;">点击下载图片，尺寸512*512px</p>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6">艾特号ID</el-col>
        <el-col :span="12">176465456465465</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6">绑定手机</el-col>
        <el-col :span="12">1764654564</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6">联系电话</el-col>
        <el-col :span="12">17646545642</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6">领域</el-col>
        <el-col :span="12">娱乐圈</el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6">所在地</el-col>
        <el-col :span="12"><span>中国</span>/<span>广东</span>/<span>深圳</span></el-col>
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
      border-bottom: 1px solid #000;
      .title-left {
        float: left;
      }
      .title-right {
        float: right;
      }
    }
    .content {
      .item {
        line-height: 70px;
      }
    }
  }
</style>