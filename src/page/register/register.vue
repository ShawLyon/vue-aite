<template>
	<div class="register">
		<v-header>
			<span>已有账号?</span> |
			<router-link to="/login">马上登录</router-link>
		</v-header>
		<el-row :gutter="20">
		  <el-col :span="12" :offset="6">
		  	<div class="register-steps">
		  		<el-steps :space="400" :active="active" @transferSteps="getSteps" finish-status="success" center="true">
		  		  <el-step title="步骤 1" description=""></el-step>
		  		  <el-step title="步骤 2" description=""></el-step>
		  		  <el-step title="步骤 3" description=""></el-step>
		  		</el-steps>
		  	</div>
		  </el-col>
		</el-row>

		<router-view>
		</router-view>	
	</div>
</template>
<script>
	import header from '../../components/header/header'
	export default {
	  components: {
    'v-header': header
	  }
	  // data() {
	  // 	return {
	  // 		avtive: 0
	  // 	}
	  // },
	  // methods: {
	  // 	getSteps() {
	  // 		alert(this.avtive)
	  // 	}
	  // }
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
	.register-steps {
		padding: 50px 0;
	}
</style>
