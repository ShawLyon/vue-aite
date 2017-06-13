
<template>
  <div class="login">
    <v-header>
      <span>第一次使用平台</span> |
      <router-link to="/register">立即注册</router-link>
    </v-header>
    <div class="login-main">
      <!-- <Row type="flex" justify="center" class="code-row-bg">
        <Col span="6">
          <Tabs value="name1">
            <Tab-pane label="普通登录" name="name1" >
              <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                  <Form-item prop="user">
                      <Input type="text" size="large" v-model="formInline.user" placeholder="Username">
                          <Icon type="ios-person-outline" slot="prepend"></Icon>
                      </Input>
                  </Form-item>
                  <Form-item prop="password">
                      <Input type="password" size="large" v-model="formInline.password" placeholder="Password">
                          <Icon type="ios-locked-outline" slot="prepend"></Icon>
                      </Input>
                  </Form-item>
                  <Form-item>
                      <Checkbox v-model="single">下次自动登录</Checkbox>
                      <a class="fr" style="float: right">忘记密码?</a>
                  </Form-item>
                  <Form-item>
                      <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                  </Form-item>
              </Form>
            </Tab-pane>
            <Tab-pane label="手机动态登录" name="name2">
              <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                  <Form-item prop="phone">
                      <Input type="text" size="large" v-model="formInline.phone" placeholder="请输入手机号">
                          <Icon type="ios-person-outline" slot="prepend"></Icon>
                      </Input>
                  </Form-item>
                  <Form-item prop="vercode">
                      <Input type="text" size="large" v-model="formInline.vercode" placeholder="请输入验证码" style="width:55%;">
                          <Icon type="ios-locked-outline" slot="prepend"></Icon>
                      </Input>
                      <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2" style="width:40%;">
                        <span v-if="!loading2">获取验证码</span>
                        <span v-else>Loading...</span>
                      </Button>
                  </Form-item>
                  
                  <Form-item>
                      <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                  </Form-item>
              </Form>
            </Tab-pane>
          </Tabs>
        </Col>
      </Row> -->
      <el-row :gutter="20">
        <el-col :span="6" :offset="8">
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
                      <a href="javascript:;">忘记密码？</a>
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
                    <el-button type="primary" size="large" class="get-code">获取验证码</el-button>
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
  <!-- <div style="height: 200px"></div>
  <div class="layout-copy">
      2011-2016 &copy; TalkingData
  </div> -->
</template>
<script type="text/ecmascript-6">
  import header from '../../components/header/header'
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
    // .login-main {
    //   margin: 180px auto 0;
    // }
    // .login-main .ivu-form-inline .ivu-form-item {
    //   display: block;
    //   margin-right: 0;
    //   vertical-align: top;
    // }
    // .ivu-btn-primary {
    //   width: 100%;
    //   background: $theme-color;
    // }
    // .login-main .ivu-tabs-nav {
    //   width: 100%;
    //   .ivu-tabs-ink-bar {
    //     background-color: $theme-color;
    //   }
    //   .ivu-tabs-tab {
    //     width: 50%;
    //     margin: 0;
    //     box-sizing: border-box;
    //     text-align: center;
    //     font-size: 20px;
    //   }
    //   .ivu-tabs-tab:hover {
    //     color: $theme-color;
    //   }
    //   .ivu-tabs-tab-active {
    //     color: $theme-color;
    //   }
    // }
</style>

