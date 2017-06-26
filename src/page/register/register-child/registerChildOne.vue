<template>
  <div class="registerChildOne">
    <el-row type="flex" class="" justify="center">
      <el-col :span="14">
        <div class="form-title">
         <h2>手机号注册</h2>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="registerForm">
      <el-col :span="12" :offset="6">
        <div class="form-main">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="200px" label-position="left" class="demo-ruleForm">
            <el-form-item label="手机号码" prop="pass" >
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入验证码" class="input-code"></el-input>
              <el-button type="primary" class="get-code">获取验证码</el-button>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="age">
              <el-checkbox v-model="checked" class="check-login">同意<span>艾特头条服务协议</span></el-checkbox>
            </el-form-item>
            <el-form-item>
            <!--  @click="nextSteps"立即注册的 -->
              <el-button type="primary" @click="submitForm('ruleForm2')" >立即注册</el-button>
              <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  // import {nextSteps} from '../../../store/actions.js'
  import router from '../../../router'
  export default {
    created(){
      this.$http.get('http://120.24.234.123/sunnet_attl/p/register',{
        params: {
          ID: 12345
        }
      })
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
    },
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      // 验证手机号
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
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
        // 初始化步骤
        
        // Active: 'active'
      };

      /*const store = new Vuex.Store({
        state: {
          count: 0
        },
        mutations: {
          increment: state => state.count++,
          decrement: state => state.count--
        }
      })
    },*/
    
    /*vuex: {
      getters: {
        activeSteps: state =>state.activeSteps
      }
    },
    actions: {
      nextSteps
      */
    },
    methods: {
      submitForm(formName) {
        router.push('registerChildTwo');
        // 连续下一步
        // if (this.Active++ > 2) this.Active = 0;

        // this.$emit('nextSteps', this.Active);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
  
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .registerChildOne {
    font-size: 20px;
    .registerForm {
      padding-top: 40px ;
    }
    .form-title {
      border-bottom: 1px solid #ccc;
      font-size: 24px;
      line-height: 40px;
    }
    .form-main {
      overflow: hidden;
      .input-code {
        width: 70%;
        float: left;
      }
      .get-code {
        // width: 40%;
        float: right;
      }
    }
  }
  
</style>
<style lang="scss" rel="stylesheet/scss" >
  .registerChildOne {
    .el-form--label-left .el-form-item__label {
      font-size: 20px;
    }
  }
</style>
