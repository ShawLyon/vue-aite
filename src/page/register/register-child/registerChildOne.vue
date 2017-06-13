<template>
  <div class="registerChildOne">
    <el-row type="flex" class="" justify="center">
      <el-col :span="14">
        <div class="form-title">
         <h2>手机号注册</h2>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="registerOneForm">
      <el-col :span="12" :offset="6">
        <div class="form-main">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入验证码" class="input-code"></el-input>
              <el-button type="primary" size="large" class="get-code">获取验证码</el-button>
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
              <el-button type="primary" @click="submitForm('ruleForm2')">立即注册</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  
  export default {
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
        },
        active: 2
      };
    },
    methods: {
      submitForm(formName) {
        // 连续下一步
        if (this.active++ > 2) this.active = 0;
        // alert(this.active)
        this.$emit('transferSteps', this.active); 
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
  .registerOneForm {
    padding-top: 40px ;
  }
  .form-title {
    border-bottom: 1px solid #ccc;
  }
  .form-main {
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
</style>
<style lang="scss" rel="stylesheet/scss">
  
</style>
