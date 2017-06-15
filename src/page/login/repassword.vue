<template>
  <div class="repassword">
    <v-header>
      <router-link to="/login">登录</router-link>
    </v-header>
    <div class="repassword-main" >
      <div class="repassword-steps" >
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="register-steps" >
              <el-steps :active="active" finish-status="success" align-center="true" center="true">
                <el-step title="输入账号" description=""></el-step>
                <el-step title="设置密码" description=""></el-step>
              </el-steps>
            </div>
          </el-col>
        </el-row>
        <router-view @nextSteps="getSteps">
        </router-view>  
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" >
  import header from '../../components/header/header'
  export default {
    components: {
      'v-header': header
    },
    data() {
      return {
        active: -10
      }
    },
    methods: {
      getSteps(msg) {
        this.active = msg;
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >
  .repassword {
    .repassword-main {
      padding-top: 60px;
      .repassword-steps {
      }
    }
  }
  
  
</style>
