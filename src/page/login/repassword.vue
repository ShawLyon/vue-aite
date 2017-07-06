<template>
  <div class="repassword">
    <v-header>
      <div class="login">
        <router-link to="/login" class="entryLogin">登录</router-link>
      </div>
    </v-header>
    <div class="repassword-main" >
      <div class="repassword-steps" >
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="register-steps" >
              <el-steps :active="w_step" finish-status="success" align-center="true" center="true">
                <el-step title="输入账号" description=""></el-step>
                <el-step title="设置密码" description=""></el-step>
              </el-steps>
            </div>
          </el-col>
        </el-row>
        
      </div>
        <router-view></router-view>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div>{{_phone}}</div>
          </el-col>
        </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" >
  import header from '../../components/header/header'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      'v-header': header
    },
    computed: {
      ...mapState([
	  		'w_phone','w_step'
	  		])
	  },
    data() {
      return {
        
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >
  .repassword {
    .login {
      text-align: right;
      font-size: 20px;
      line-height: 45px;
      .entryLogin {
        color: #ca2e2f;
      }
    }
    .repassword-main {
      padding-top: 60px;
      .repassword-steps {
      }
    }
  }
  
  
</style>
