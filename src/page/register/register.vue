<template>
	<div class="register" >
		<v-header>
		 <div class="justLogin">
		 	 <span>已有账号?</span> |
		 	 <router-link to="/login" class="login">马上登录</router-link>
		 </div>
		</v-header>
		<el-row :gutter="20">
		  <el-col :span="12" :offset="6">
		  	<div class="register-steps">
		  		<el-steps :active="Active" finish-status="success" align-center="true" center="true">
		  		  <el-step title="注册账号" description=""></el-step>
		  		  <el-step title="选择类型" description=""></el-step>
		  		  <el-step title="填写资料" description=""></el-step>
		  		</el-steps>
		  	</div>
		  </el-col>
		</el-row>

		<router-view @nextSteps="getSteps">
		</router-view>
	</div>
</template>
<script type="text/ecmascript-6">
	import header from '../../components/header/header'
	export default {
	  components: {
    'v-header': header
	  },
	  data() {
	  	return {
	  		Active: 1

	  	}
	  },
	  methods: {
	  	getSteps(msg) {
	  		this.Active = msg;
	  	}
	  }
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
	.register {
		font-size: 20px;
		.justLogin {
			font-size: 20px;
			line-height: 45px;
			text-align: right;
			.login {
			  color: #ca2e2f;
			}
		}
	}
	
	.register-steps {
		padding: 50px 0;
	}
</style>
<style lang="scss" rel="stylesheet/scss">
	.register {
		.el-step__head.is-text.is-success {
		  color: #fff;
		  background-color: #ca2e2f;
		  border-color: #ca2e2f;
		}
		.el-step__title.is-success {
		  // font-size: 20px;
	    font-weight: 700;
	    color: #ca2e2f;
		}
		.el-step__title.is-process {
			// font-size: 20px;
			// color: #ca2e2f;
		}
	}
</style>