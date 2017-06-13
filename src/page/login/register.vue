<template>
<div class="register">
	<div class="register-contianer">
		<div class="progress">
	   	<div class="progress-line">
	   		<div class="progress-type">
	   			<div class="progress-num">1</div>
	   			<div class="progress-txt">注册账号</div>
	   		</div>
	   		<div class="progress-type">
	   			<div class="progress-num">2</div>
	   			<div class="progress-txt">注册账号</div>
	   		</div>
	   		<div class="progress-type">
	   			<div class="progress-num">3</div>
	   			<div class="progress-txt">注册账号</div>
	   		</div>
	   	</div>
		</div>
		<div class="register-main">
	   	<header class="title">手机号注册</header>
	   	<section style="padding: 50px 55px">
	   		<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" label-position="left">
	   		  <Form-item label="手机号码" prop="phone">
	   		    <Input type="text" v-model="formCustom.phone" number>
	   		    </Input>
	   		  </Form-item>
	   		  <Form-item label="验证码" prop="vercode">
	   		    <Input type="text" v-model="formCustom.vercode" number>
	   		    </Input>
	   		    <button>按钮</button>
	   		  </Form-item>
	   		  <Form-item label="设置密码" prop="passwd">
	   		    <Input type="password" v-model="formCustom.passwd">
	   		    </Input>
	   		  </Form-item>
	   		  <Form-item label="确认密码" prop="passwdCheck">
	   		    <Input type="password" v-model="formCustom.passwdCheck">
	   		    </Input>
	   		  </Form-item>
	   		  <Form-item>
              <Checkbox v-model="single">同意</Checkbox>
              <span><a>(艾特头条)</a></span>
          </Form-item>
	   		  <Form-item>
	   		    <Button type="primary" @click="handleSubmit('formCustom')">
	   		      <router-link to='/registerType' >
	   		      	立即注册
	   		      </router-link>
	   		    </Button>
	   		    <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">
	   		      重置
	   		    </Button>
	   		  </Form-item>
	   		</Form>
	   	</section>
	   </div>
	</div>
	
</div>
	
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      const validateVercode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else {
          if (this.formCustom.vercode !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('vercode')
          }
          callback()
        }
      }
      const validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'))
        }
        // 模拟异步验证效果
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 11) {
              callback(new Error('必须不少于11位'))
            } else {
              callback()
            }
          }
        },
        1000)
      }

      return {
        formCustom: {
          passwd: '',
          passwdCheck: '',
          age: '',
          phone: '',
          vercode: ''
        },
        ruleCustom: {
          passwd: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          passwdCheck: [{
            validator: validatePassCheck,
            trigger: 'blur'
          }],
          phone: [{
            validator: validatePhone,
            trigger: 'blur'
          }],
          vercode: [{
            validator: validateVercode,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>
<style lang="scss" scoped>
@import url('../../style/common.scss');
	.register {

	}
	.register-contianer {
		padding: 0 460px;
		.progress {
			padding: 0 140px;
			.progress-line {
				display: flex;
				justify-content: space-between;
				width: 100%;
				height: 6px;
				background: #ccc;
			}
		}
	}
	.register-main {
		margin-top: 200px;
		padding: 0 80px;
		.title {
			font-size: 24px;
			border-bottom: 1px solid #bfbfbf;
		}
	}
	.progress-type {
		position: relative;
		top: -24px;
		text-align: center;
	}
	.progress-num {
		// flex-grow: 1;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #ca2e2f;
		text-align: center;
		line-height: 50px;
		font-size: 30px;
		color: #fff;
	}
	.progress-txt {
		font-size: 20px;
		position: relative;
		left: -10px;
		top: 10px;
	}
	
</style>
