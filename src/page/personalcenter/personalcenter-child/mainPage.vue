<template>
  <div class="mainPage">
    <div class="publishInfo">
      <div class="publishBtn">
        <i class=""></i>
        <el-button>发表</el-button>
      </div>
      <div class="publishNum">
        <span>
          <strong>0</strong>
          <em>粉丝</em>
        </span> |
        <span>
          <strong>0</strong>
          <em>粉丝</em>
        </span> |
        <span>
          <strong>0</strong>
          <em>粉丝</em>
        </span>
      </div>
    </div>
    <div class="RotationImg">
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="bulletin">
      <h2 class="bulletin-title">公告</h2>
      <ul>
        <li class="releaseItem">
          <router-link class="releaseCon" to="/login">勇士4-1骑士获得2017年总冠军</router-link>
          <span class="releaseDate">2017-06-13</span>
        </li>
        <li class="releaseItem">
          <router-link class="releaseCon" to="/login">勇士4-1骑士获得2017年总冠军</router-link>
          <span class="releaseDate">2017-06-13</span>
        </li>
        <li class="releaseItem">
          <router-link class="releaseCon" to="/login">勇士4-1骑士获得2017年总冠军</router-link>
          <span class="releaseDate">2017-06-13</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .mainPage {
    .publishInfo {
      overflow: hidden;
      .publishBtn {
        float: left;
      }
      .publishNum {
        float: right;
      }
    }
    .RotationImg {
      .el-carousel__item h3 {
         color: #475669;
         font-size: 14px;
         opacity: 0.75;
         line-height: 150px;
         margin: 0;
       }

       .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
       }
       
       .el-carousel__item:nth-child(2n+1) {
          background-color: #d3dce6;
       }
    }
    .bulletin {
      .releaseItem {
        overflow: hidden;
        .releaseCon {
          float: left;
        }
        .releaseDate {
          float: right;
        }
      }
      .bulletin-title {
        border-bottom: 1px solid #000;
      }
    }
  }
</style>