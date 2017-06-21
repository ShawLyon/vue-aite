<template>
	<div class="register" >
		<v-header>
			<span>已有账号?</span> |
			<router-link to="/login">马上登录</router-link>
		</v-header>
		<el-row :gutter="20">
		  <el-col :span="12" :offset="6">
		  	<div class="register-steps">
		  		<el-steps :active="active" finish-status="success" align-center="true" center="true">
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
	  		active: -10
	  	}
	  },
	  methods: {
	  	getSteps(msg) {
	  		this.active = msg;
	  	}
	  }
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
	.register-steps {
		padding: 50px 0;
	}
</style>
