<template>
  <div class="repasswordChildEnter">
    <el-row :gutter="20" class="registerForm">
      <el-col :span="12" :offset="6">
        <div class="form-main">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" label-position="left" class="demo-ruleForm">
            <el-form-item label="手机号码" prop="phone">
              <el-input type="phone" id="phoneNumId" v-model="ruleForm.phone" auto-complete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input type="code" v-model="ruleForm.code" auto-complete="off" placeholder="请输入验证码" class="input-code"></el-input>
              <el-button type="primary" class="get-code">获取验证码</el-button>
            </el-form-item>
  
            <el-form-item>
              <!--  @click="nextSteps"立即注册的 -->
              <el-button type="primary" @click="handleNextStep('ruleForm')">下一步</el-button>
              <!--<el-button type="primary" @click="add('ruleForm')" >立即注册</el-button>-->
              <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
import router from '../../../router'
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    /*_phone() {
      return this.$store.state._phone
    }*/
    ...mapState([
      'w_phone', 'w_step'
    ])
  },
  data() {
    // 验证手机号
    var validataPhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'));

      } else if (value.length !== 11) {
        callback(new Error('请输入11位的有效手机号'));
      } else {
        if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(value))) {
          callback(new Error('请输入有效的手机号'));
        } else {
          // this.$refs.ruleForm.validateField('phone');
        }
      }
      callback();
    }
    // 验证码
    var validataCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else if (value !== this.ruleForm.code) {
        callback(new Error('验证码错误!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        phone: '',
        code: ''
      },
      rules: {
        phone: [
          { validator: validataPhone, trigger: 'blur' }
        ],
        code: [
          { validator: validataCode, trigger: 'blur' }
        ]

      }
    };
  },
  methods: {
    handleNextStep(formName) {
      // 下一步

      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          // 提交手机号到vuex
          this.$store.commit('setPhone_w', this.ruleForm);
          this.$store.commit('restepNext_w');

          router.push('repassword/restep2')
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
<style lang="scss" rel="stylesheet/scss" >
$theme-color: #ca2e2f;
.repasswordChildEnter {
  .registerForm {
    padding-top: 100px;
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
}
</style>