
<template>
  <div class="login">
    <v-header>
      <span>第一次使用平台</span> |
      <router-link to="/register">立即注册</router-link>
    </v-header>
    <div class="login-main">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <div class="grid-content bg-purple">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="普通登陆" name="ptLogin">
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="0" class="demo-ruleForm">
                  <el-form-item label="" prop="pass">
                    <div class="inputTextIcon">
                      <i class="el-icon-edit"></i>
                    </div>
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入手机号"></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="checkPass">
                    <div class="inputTextIcon">
                      <i class="el-icon-edit"></i>
                    </div>
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <!-- <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                  </el-form-item> -->
                  <!-- 这里是checkbox  注意修改prop值 -->
                  <el-form-item label="" prop="checkPass" class="f-login">
                    <el-checkbox v-model="checked" class="check-login">下次自动登录</el-checkbox>
                    <span class="f-pwd">
                    <router-link to="/repassword">忘记密码？</router-link> 
                    </span>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm2')">登录</el-button>
                    <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="手机动态登录" name="phoneLogin">
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="0" class="demo-ruleForm">
                  <el-form-item label="" prop="pass">
                    <div class="inputTextIcon">
                      <i class="el-icon-edit"></i>
                    </div>
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入手机号"></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="checkPass">
                    <div class="inputTextIcon">
                      <i class="el-icon-edit"></i>
                    </div>
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入验证码" class="input-code"></el-input>
                    <el-button type="primary" class="get-code">获取验证码</el-button>
                  </el-form-item>
                  <!-- <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                  </el-form-item> -->
                  <!-- 这里是checkbox  注意修改prop值 -->
                  <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm2')">登录</el-button>
                    <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../../components/header/header'
  import router from '../../router'
  export default {
    components: {
      'v-header': header
    },
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        // 默认普通登录页
        activeName: 'ptLogin',
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
      // 默认tab标签页
      // return {
      //   activeName: 'second'
      // }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
      submitForm (formName) {
        router.push('personalcenter');
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-main {
    margin-top: 180px;
    overflow: hidden;
    .input-code {
      width: 50%;
      float: left;
    }
    .get-code {
      width: 40%;
      float: right;
    }
  }
  .inputTextIcon {
    position: absolute;
    left: 10px;
    top: center;
    z-index: 99;
  }
  .f-login {
    overflow: hidden;
    .check-login {
      float: left;
    }
    .f-pwd {
      float: right;
    }
  }
</style>
<style lang="scss" rel="stylesheet/scss" >
    // @import url('../../style/common.scss')
    $theme-color: #ca2e2f;
    .login-main{
      .el-tabs__nav {
        width: 100%;
        .el-tabs__item {
          width: 50%;
          text-align: center;
        }
      }
      .el-form-item__content {
        margin-left: 0 ;
      }
      .el-button {
        width: 100%;
      }
      .el-input__inner {
        padding-left: 30px;
      } 
    }
</style>

