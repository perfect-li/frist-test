<template>
  <div class="header">
  	<div class="main">
	    <div class="logo"><a href="#"></a></div>
	    <div class="header_nav">
	    	<ul>
		      <li>
		      	<router-link to = '/found_music'>发现音乐</router-link>
		      </li>
					<li>
		      	<router-link to = '/my_music'>我的音乐</router-link>
		      </li>
		      <li>
		      	<router-link to = '/friends'>朋友</router-link>
		      </li>
		      <li>
		      	<router-link to = '/shop'>商城</router-link>
		      </li>
		      <li>
		      	<router-link to = '/music_person'>音乐人</router-link>
		      </li>
		      <li>
		      	<router-link to = '/client_download'>下载客户端</router-link>
		      </li>
		 		</ul>
	    </div>
	    <div class="search">
	    	<input type="text" placeholder="音乐/电台/用户" />
	    </div>
	    <div class="login">
	    	<router-link to = '/login'>登录</router-link>
	    		
	    </div>
	   </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	.header{
	background-color: #242424;
	width: 100%;
	height: 70px;
}
.main{
	width: 1100px;
	height: 100%;
	margin: 0 auto;
}
.logo{	
		display: inline-block;
		float: left;
		/*margin-left: 50px;*/
		width: 177px;
		height: 69px;
	}
	.logo a{
		display: inline-block;
		width: 177px;
		height: 69px;
		background-image:url(../assets/topbar.png);
		background-repeat: no-repeat;
		background-position: 0 0;
	}
	.header_nav{
		display: inline-block;		
		width: 60%;
		height: 70px;
		
	}
	.header_nav ul{
		width: 100%;
		list-style: none;	
		line-height: 70px;
	}
	.header_nav ul li{
		display: inline-block;
		margin-left: 0;		
	}
	.header_nav a{
		display: inline-block;
		/*width: 90px;*/
		color: #a1a1a1;
		font-size: 14px;
		height: 69px;
		padding: 0 19px;
		text-decoration: none;
	}
	.header_nav a:hover{
		background-color: #000;
		color: #FFFFFF;		
	}
	.search{
		display: inline-block;
		height: 32px;
		width: 158px;
		border-radius: 32px;		
	}
	.search input{
		border: 0px;
		height: 32px;
		width: 95%;
		color: #333;
		line-height: 16px;
		border-radius: 32px;
	}
	.login{
		display: inline-block;
		/*float: right;*/
		height: 45px;
		margin: 25px 0 0 20px;
		padding: 0 22px 0 0 ;
		
	}
	.login a{
		color: #A1A1A1;
		font-size: 14px;
		text-decoration:none;
	}
	.login a:hover{
		text-decoration:underline;
	}
</style>
