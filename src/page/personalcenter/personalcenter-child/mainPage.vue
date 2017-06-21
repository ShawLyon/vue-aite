<template>
  <div class="mainPage">
    <div class="publishInfo">
      <el-row>
        <el-col :span="8">
          <div class="publishBtn" @click="publishJump">
            <img class="pen" src="../../../images/dark_gray_fabiao.png" height="36" width="36" alt="">
            <el-button class="btn">发表</el-button>
          </div>
        </el-col>
        <el-col :span="16" >
          <div class="publishNum">
            <div class="fnasNum">
              <span class="num">0</span>
              <span>粉丝</span>
            </div>
            <div class="articleNum">
              <span class="num">0</span>
              <span>发文篇数</span>
            </div>
            <div class="readNum">
              <span class="num">0</span>
              <span>累计阅读量</span>
            </div>
          </div>
        </el-col>
      </el-row>
      
      
    </div>
    <div class="RotationImg">
      <div class="block">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="bulletin">
      <h2 class="bulletin-title">公告</h2>
      <ul class="bulletin-con">
        <li class="releaseItem">
          <router-link class="releaseCon" to="">勇士4-1骑士获得2017年总冠军</router-link>
          <span class="releaseDate">2017-06-13</span>
        </li>
        <li class="releaseItem">
          <router-link class="releaseCon" to="">勇士4-1骑士获得2017年总冠军</router-link>
          <span class="releaseDate">2017-06-13</span>
        </li>
        <li class="releaseItem">
          <router-link class="releaseCon" to="">勇士4-1骑士获得2017年总冠军</router-link>
          <span class="releaseDate">2017-06-13</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
   import router from '../../../router'
  export default {
    methods: {
      publishJump() {
        router.push('/publishPage');
      }
    }
    
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .mainPage {

    .publishInfo {
      overflow: hidden;
      .publishBtn {
        // float: left;
        cursor: pointer;
        .pen {
  
        }
        .btn {
          padding: 10px 28px;
          margin-left: 10px;
          font-size: 20px;
          color: #666;
          vertical-align: top;
        }
      }
      .publishNum {
        // float: right;
        display: flex;
        .fnasNum, .articleNum, .readNum {
          flex:1;
          padding: 0 10px;
          &>span {
            display: block;
            text-align: center;
          }
          .num {
            font-size: 38px;
          }
        }
        .articleNum {
          border-left: 1px solid #d9d9d9;
          border-right: 1px solid #d9d9d9;
        }
        font-size: 18px;
        color: #333;
      }
    }
    .RotationImg {
      margin-top: 44px;
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
      margin-top: 28px;
      
      .bulletin-title {
        font-size: 22px;
        padding-bottom: 6px;
        border-bottom: 1px solid #000;
      }
      .bulletin-con {
        margin-top: 10px;
        .releaseItem {
          overflow: hidden;
          line-height: 35px;
          color: #666;
          .releaseCon {
            float: left;
          }
          .releaseDate {
            float: right;
          }
        }
      }
    }
  }
</style>