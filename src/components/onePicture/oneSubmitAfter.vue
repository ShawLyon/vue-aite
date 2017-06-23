<template>
  <div class="oneSubmitAfter">
    <el-row :gutter="20">
      <el-col :span="18" >
        <div class="main">
          <el-row :gutter="10">
            <el-col :span="16" >
              <p class="mainContent">天猫超市每周五，下午5点，订单五折！限时抢！</p>
              <p class="mainFooter"><span class="ad">广告</span>天猫商城</p>
            </el-col>
            <el-col :span="8" >
              <img src="http://placeholder.cn/125x90" alt="">
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6" >
        <div class="second">
          <p class="auditState">审核未通过</p>
          <el-button type="primary" class="editorBtn">编辑</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .oneSubmitAfter {
    .main {
      overflow: hidden;
      background-color: #f7f7f7;
      padding: 16px;
      .mainContent {
        line-height: 24px;
      }
      .mainFooter {
        padding-top: 30px;
        color: #999;
        .ad {
          display: inline-block;
          margin-right: 10px;
          border-radius: 6px;
          border: 1px solid #2880bd;
          color: #2880bd;
        }
      }
    }
    .second {
      text-align: center;
      padding: 26px 0;
      .auditState {
        color: #ca2e2f;
      }
      .editorBtn {
        margin-top: 20px;
      }
    }
  }
</style>