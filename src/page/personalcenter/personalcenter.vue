<template>
  <div class="personalcenter">
    <v-header>
      <div class="userInfo">
        <el-row type="flex" justify="end">
          <el-col :span="2" class="systemInfo">
            <router-link to="/systemInfo"><i class="fa fa-envelope-o fa-lg"></i></router-link>
          </el-col>
          <el-col :span="6" class="personalInfo">
            <dl>
              <dt><img src="../../images/test2.jpg" alt="" width="40px" height="40px"></dt>
              <dd>
                <span class="userType"><b>个人</b></span>
                <span class="userName">{{ userName }}</span>
              </dd>
            </dl>
          </el-col>
          <el-col :span="4" class="logout">
            <router-link to="/login">退出</router-link>
          </el-col>
        </el-row>
      </div>
      
    </v-header>
    <div class="personalcenter-main">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="3">
          <div class="asider">
            <el-row class="tac">
                <h5>个人中心</h5>
                <el-menu mode="vertical" default-active="1" class="personalcenter-menu">
                  <router-link to="/personalcenter">
                    <el-menu-item index="1" ><i class="fa fa-home fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;主页</el-menu-item>
                  </router-link> 
                  <router-link to="/publishPage">
                    <el-menu-item index="2" ><i class="fa fa-plus-square fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;发表</el-menu-item>
                  </router-link> 
                  <el-menu-item-group title="管理">
                    <template slot="title"><i class="fa fa-inbox fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;管理</template>
                    <router-link to="/contentAdminPage">
                      <el-menu-item index="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内容管理</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                  <el-menu-item-group title="数据">
                    <template slot="title"><i class="fa fa-bar-chart fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;数据</template>
                    <router-link to="/articlePage">
                      <el-menu-item index="5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文章分析</el-menu-item>
                    </router-link> 
                    <router-link to="/fansPage">
                      <el-menu-item index="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粉丝分析</el-menu-item>
                    </router-link> 
                  </el-menu-item-group>
                  <el-menu-item-group title="收益">
                  <template slot="title"><i class="fa fa-money fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;收益</template>
                    <router-link to="/incomeProfile">
                      <el-menu-item index="7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收益概览</el-menu-item>
                    </router-link> 
                    <router-link to="/settlementCenter">
                      <el-menu-item index="8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结算中心</el-menu-item>
                    </router-link> 
                  </el-menu-item-group>
                  <el-menu-item-group title="设置">
                    <template slot="title"><i class="fa fa-cog fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;设置</template>
                    <router-link to="/selfAdvertising">
                      <el-menu-item index="9">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自营广告</el-menu-item>
                    </router-link>
                    <router-link to="/accountInfo">
                      <el-menu-item index="10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号信息</el-menu-item>
                    </router-link>
                    <router-link to="/accountRevise">
                      <el-menu-item index="11">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号修改</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-menu>
            </el-row>
          </div>
        </el-col>
        <el-col :span="10" :offset="2">
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
    created() {
      // this.$http({
      //   method: 'post',
      //   url: baseUrl + 'p/media_update',
      //   data: {
      //   }
      // }).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      this.$http.get('http://120.24.234.123/sunnet_attl/p/media_update',{
        fdUserName: 'matianyu'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    data() {
      return {
        userName: 'mmmmm'
      }  
    },
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
    .el-menu {
      background: none;
      .el-menu-item {
        border-bottom: 1px solid #d9d9d9;
        font-size: 20px;
        color: #333;
      }
      .el-menu-item:hover {
        background: none;
      }
      .el-menu-item.is-active {
        color: #ca2e2f;
      }
      .el-menu-item-group__title {
        font-size: 20px;
        color: #999;
      }
    }
    .userInfo {
      .systemInfo,.logout {
        line-height: 45px;
      }
      .systemInfo {
        color: #ccc;
      }
      .logout {
        padding-left: 40px;
        border-left: 1px solid #ccc;
      }
      .personalInfo {
        dl {
          overflow: hidden;
        }
        dt,dd {
          float: left;
        }
        dd {
          margin-left: 2px;
        }
        img {
          border-radius: 50%;
        }
        .userType {
          display: block;
          b {
            padding: 0 4px;
            font-size: 12px;
            border-radius: 8px;
            background: $theme-color;
            color: #fff;
          }
        }
        .userName {
          display: block;
          margin-top: 4px;
        }
      }
    }
    
    .personalcenter-main {
      margin-top: 40px;
      .content {
        margin-top: 10px;
        padding-bottom: 20px;
      }
      .asider {
        h5 {
          padding: 0 0 0 20px;
          font: 24px bold;
          border-bottom: 1px solid #d9d9d9;
          line-height: 50px;
        }
      }
    }
  }
</style>