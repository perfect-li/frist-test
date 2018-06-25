<template>
  <div id="main">
    <div class="header">
    	<v-header></v-header>		<!--	自定义组件-->
    </div>

    <!--<li v-for="a in msg"><h1>{{a.account}}</h1><p>{{a.password}}</p></li>-->
    
    <router-view/>
  </div>
</template>

<script>
	import axios from 'axios';		//引入axios链接后台数据
	import header from './components/Header'    //引用组件 

export default {			//指定系统默认输出 可被别的页面inport 引用
  name: 'app',
  data(){
  	return{
  		msg:[]
  	}
  },
mounted(){
   		axios.get('http://localhost:3000/add').then(res =>{		//从该页面请求数据
   			this.msg = res.data
   		})
   	},

//注册组建
	components:{
		'v-header':header
	},
	mounted: function() {
    // 指定初始路由
    this.$router.push('/found_music/recommend');
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
#main {
  width: 100%;
  height: 100%;
}
.header{
	width: 100%;
	height: 70px;
}

</style>
