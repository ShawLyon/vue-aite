<template>
  <div class="personalcenter">
    <v-header>
      <router-link to=""><i class="el-icon-message"></i></router-link>
      <span class="personalInfo">
        <img src="../../images/test2.jpg" alt="" width="40px" height="40px">
        <span class="user">
          <span class="userType">个人</span>
          <span class="userName">竹溪Caven</span>
        </span>
      </span>  |
      <router-link to="/login">退出</router-link>
    </v-header>
    <div class="personalcenter-main">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="4">
          <div class="asider">
            <el-row class="tac">
                <h5>个人中心</h5>
                <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                  <el-menu-item index="1"><i class="el-icon-menu"></i>主页</el-menu-item>
                  <el-menu-item index="2"><i class="el-icon-setting"></i>发表</el-menu-item>
                  <el-menu-item-group title="管理">
                    <el-menu-item index="3"><i class="el-icon-message"></i>内容管理</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="数据">
                    <el-menu-item index="5"><i class="el-icon-message"></i>文章分析</el-menu-item>
                    <el-menu-item index="6"><i class="el-icon-message"></i>粉丝分析</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="设置">
                    <el-menu-item index="7"><i class="el-icon-message"></i>自营广告</el-menu-item>
                    <el-menu-item index="8"><i class="el-icon-message"></i>账号信息</el-menu-item>
                    <el-menu-item index="9"><i class="el-icon-message"></i>账号修改</el-menu-item>
                  </el-menu-item-group>
                </el-menu>
            </el-row>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content">
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
              <h2>公告</h2>
              <ul>
                <li class="releaseItem">
                  <span class="releaseCon">勇士4-1骑士获得2017年总冠军</span>
                  <span class="releaseDate">2017-06-13</span>
                </li>
               <li class="releaseItem">
                 <span class="releaseCon">勇士4-1骑士获得2017年总冠军</span>
                 <span class="releaseDate">2017-06-13</span>
               </li>
               <li class="releaseItem">
                 <span class="releaseCon">勇士4-1骑士获得2017年总冠军</span>
                 <span class="releaseDate">2017-06-13</span>
               </li>
               <li class="releaseItem">
                 <span class="releaseCon">勇士4-1骑士获得2017年总冠军</span>
                 <span class="releaseDate">2017-06-13</span>
               </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>  
  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../../components/header/header'
  export default {
    components: {
      'v-header': header
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >
  $theme-color: #ca2e2f;
  .personalcenter {
    .personalInfo {
      img {
        border-radius: 50%;
      }
      .user {
        .userType {

          padding: 0 4px;
          border-radius: 8px;
          background: $theme-color;
        }
      }
    }
    .personalcenter-main {
      .publishInfo {
        overflow: hidden;
        margin-top: 60px;
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
      }
    }
  }
</style>