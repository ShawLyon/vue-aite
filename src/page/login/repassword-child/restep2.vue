<template>
  <div class="repasswordChildSet">
    <el-row :gutter="20" class="registerForm">
      <el-col :span="12" :offset="6">
        <div class="form-main">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">完成</el-button>
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
    ...mapState([
      '_phone'
    ])
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
      // axios 提交的数据接口
      fdPhone: '',
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
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.$http({
            method: 'get', //  后期改为post
            url: 'http://120.24.234.123/sunnet_attl/p/registerthree',
            params: {
              fdPhone: _phone
            }
          })
            .then(res => {
              alert('请求成功')
              if (res.data.code === '1') {
              }
              console.log(res)
            })
            .catch(error => {
              console.log(error)
            })
          // 提交成功
          this.$alert('完成', '标题名称', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${action}`
              });

              // 完成，跳转到登陆
              router.push('/login');
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {

  }
}
</script>
<style lang="scss" rel="stylesheet/scss" >
.repasswordChildSet {
  .registerForm {
    padding-top: 40px;
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