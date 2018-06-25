<!--<template>

	<form action="post" id="form">
		<label for="">账号<input v-model="login.user" type="text" name="" id="" value="" /> </label>

		<label for="">密码<input v-model="login.pwd" type="password" name="" id="" value="" /></label>

		<input v-on:click="dj" type="button" value="提交" />

	</form>

</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				login: {
					user: '',
					pwd: ''
				}
			}
		},
		methods: {
			dj: function() {
				console.log(this.login)
				axios.post('http://localhost:3000/addUser',this.login).then(function(res) {
						console.log(res);
					})
				
			}
		}
	}
</script>
-->
<template>
	<div class="login_page">
		<div class="login_1">
			<form action="" method="post">
				<input type="text" placeholder="账号" /><br />
				<input type="password" placeholder="密码"/><br />
				<input type="submit" value="登录"/>
			</form>
		</div>
	</div>
</template>
<script>
  
</script>
<style>
	.login_page{
		width: 100%px;
		height: 520px;
		padding: 50px;
		background: url(../assets/timg.jpg)  ;
	}
	.login_1{		
		width: 500px;
		height: 200px;
		margin: 0px auto;	
		background: #fff;
		opacity: 0.5;
		text-align: center;
	}
</style> 