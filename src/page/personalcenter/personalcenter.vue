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
                  <router-link to="/personalcenter">
                    <el-menu-item index="1" ><i class="el-icon-menu"></i>主页</el-menu-item>
                  </router-link> 
                  <router-link to="/publishPage">
                    <el-menu-item index="2" ><i class="el-icon-setting"></i>发表</el-menu-item>
                  </router-link> 
                  <el-menu-item-group title="管理">
                  <router-link to="/contentAdminPage">
                    <el-menu-item index="3"><i class="el-icon-message"></i>内容管理</el-menu-item>
                  </router-link>
                  </el-menu-item-group>
                  <el-menu-item-group title="数据">
                    <router-link to="/articlePage">
                      <el-menu-item index="5"><i class="el-icon-message"></i>文章分析</el-menu-item>
                    </router-link> 
                    <router-link to="/fansPage">
                      <el-menu-item index="6"><i class="el-icon-message"></i>粉丝分析</el-menu-item>
                    </router-link> 
                  </el-menu-item-group>
                  <el-menu-item-group title="收益">
                    <router-link to="/incomeProfile">
                      <el-menu-item index="7"><i class="el-icon-message"></i>收益概览</el-menu-item>
                    </router-link> 
                    <router-link to="/settlementCenter">
                      <el-menu-item index="8"><i class="el-icon-message"></i>结算中心</el-menu-item>
                    </router-link> 
                  </el-menu-item-group>
                  <el-menu-item-group title="设置">
                    <router-link to="/selfAdvertising">
                      <el-menu-item index="9"><i class="el-icon-message"></i>自营广告</el-menu-item>
                    </router-link>
                    <router-link to="/accountInfo">
                      <el-menu-item index="10"><i class="el-icon-message"></i>账号信息</el-menu-item>
                    </router-link>
                    <router-link to="/accountRevise">
                      <el-menu-item index="11"><i class="el-icon-message"></i>账号修改</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-menu>
            </el-row>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="content">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>  
  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../../components/header/header'
  // import router from '../../router'
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
      margin-top: 40px;
      .content {
        margin-top: 10px;
      }
    }
  }
</style>