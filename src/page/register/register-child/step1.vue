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
            <el-form-item label="手机号码" prop="phone">
              <el-input type="phone" id="phoneNumId" v-model="ruleForm2.phone" auto-complete="off" placeholder="请输入手机号" ></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input type="code" v-model="ruleForm2.code" auto-complete="off" placeholder="请输入验证码" class="input-code"></el-input>
              <el-button type="primary" class="get-code">获取验证码</el-button>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="">
              <el-checkbox v-model="checked" class="check-login">同意<span>艾特头条服务协议</span></el-checkbox>
            </el-form-item>
            <el-form-item>
            <!--  @click="nextSteps"立即注册的 -->
              <el-button type="primary" @click="submitForm('ruleForm2')" >立即注册</el-button>
              <!--<el-button type="primary" @click="add('ruleForm2')" >立即注册</el-button>-->
              <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapState, mapMutations } from 'vuex'
  import router from '../../../router'

  export default {
    
    created(){
 
      /*this.$http({
        method: 'post',
        url: 'http://120.24.234.123/sunnet_attl/p/registerthree',
        // contenttype: 'application/x-www-form-urlencoded',
        headers: {'content-type':'application:json; charset=utf8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST',
                'Access-Control-Allow-Headers':'x-requested-with,content-type'
              },   
        data: { // get 传的参数
          fdPhone : 123,

        }
      })
      .then(response => {
        if (response.data.code === '1'){
          // alert('请求成功')
        }
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })*/
    },
    data() {
      // 验证手机号
      var validatePhone = (rule, value, callback) => {
        if (value === ''){
          callback(new Error('请输入手机号'));
          
        } else if (value.length !== 11){
          callback(new Error('请输入11位的有效手机号'));
        } else {
          if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(value))) {
            callback(new Error('请输入有效的手机号'));
          } else {
            // this.$refs.ruleForm2.validateField('phone');
          }
        }
        callback();
      }
      
      // 验证码
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (value !== this.ruleForm2.code) {
          callback(new Error('验证码错误!'));
        } else {
          callback();
        }
      };
      // 密码
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.pass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      // 确认密码
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
        // vifiCodeBtnVisible: false,
        // registerBtnVisible: false,
        // vifiCodeBtnTitle: '获取验证码',
        // message: '',
        username: '',
        password: '',
        fdType: '',
        fdPhone: '',
        ruleForm2: {
          phone: '',
          code: '',
          pass: '',
          checkPass: ''
        },
        rules2: {

          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        
        }
        

      };
    },
    computed: {
	  	...mapState([
	  		'z_phone','z_step'
	  		])
	  },
    methods: {
      ...mapMutations([

	  	]),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {   // 如果整个表单验证通过,往下执行
            alert('submit!');
            alert(ruleForm2.pass)
            this.$http({
              method: 'get', //  后期改为post
              url: 'http://120.24.234.123/sunnet_attl/p/registerthree',
              params: {
                fdPhone: 1111
              }
            })
            .then(res => {
                alert('请求成功')
              if (res.data.code === '1'){
              }
              console.log(res)
            })
            .catch(error => {
              console.log(error)
            })
            /* step +1 */
            this.$store.commit('restepNext_z');
            /* 记录手机号 */
            this.$store.commit('setPhone_z',this.ruleForm2);
            router.push('/register/step2'); // 验证成功,到下一步
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // submit_nextStep (formName){
      //   submit(formName)
      // },
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
