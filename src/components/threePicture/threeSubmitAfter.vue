<template>
  <div class="threeSubmitAfter">
    <el-row :gutter="20">
      <el-col :span="18" >
        <div class="main">
              <p class="mainContent">天猫超市每周五，下午5点，订单五折！限时抢！</p>
              <p class="mainContent">天猫超市每周五，下午5点，订单五折！限时抢！</p>
              <p class="threeImg">
                <img src="http://placeholder.cn/125x90" alt="">
                <img src="http://placeholder.cn/125x90" alt="">
                <img src="http://placeholder.cn/125x90" alt="">
              </p>
              <p class="mainFooter"><span class="ad">广告</span>天猫商城</p>
        </div>
      </el-col>
      <el-col :span="6" >
        <div class="second">
          <p class="auditState">审核未通过</p>
          <el-button type="primary" class="editorBtn">编辑</el-button>
          <p class="defaultAD"><i class="el-icon-circle-check"></i>默认为自营广告</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  
</script>
<style lang="scss" rel="stylesheet/scss" >
  .threeSubmitAfter {
    .main {
      overflow: hidden;
      background-color: #f7f7f7;
      padding: 16px;
      .mainContent {
        line-height: 24px;
      }
      .mainFooter {
        padding-top: 10px;
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
      .defaultAD {
        margin-top: 30px;
        i {
          color: #ca2e2f;
        }
      }
    }
  }
</style>