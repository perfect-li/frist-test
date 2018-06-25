<template>
	<div class="top_list">
		<div class="top_list_left">
			<div class="top_list_title">
				<h2>云音乐特色榜</h2>
				<ul>
					<li>
						<div class="top_list_name">
							<a>
								<img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="云音乐飙升榜">
							</a>
						</div>
						
							<p class="top_name"><a href="">
								云音乐飙升榜
							</a></p>
							<p>每天更新</p>
						
					</li>
					<li>
						<div class="top_list_name">
							<a>
								<img src="http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" alt="云音乐新歌榜">
							</a>
						</div>
						
							<p class="top_name"><a href="">
								云音乐新歌榜
							</a></p>
							<p>每天更新</p>
						
					</li>
					<li>
						<div class="top_list_name">
							<a>
								<img src="http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40" alt="网易原创歌曲榜">
							</a>
						</div>
						
							<p class="top_name"><a href="">
								网易原创歌曲榜
							</a></p>
							<p>每周四更新</p>
						
					</li>
					<li>
						<div class="top_list_name">
							<a>
								<img src="http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40" alt="云音乐热歌榜">
							</a>
						</div>
						
							<p class="top_name"><a href="">
								云音乐热歌榜
							</a></p>
							<p>每周四更新</p>
						
					</li>
				</ul>
				<h2>全球媒体榜</h2>
				<ul>
					<li>
						<div class="top_list_name">
							<a>
								<img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="云音乐飙升榜">
							</a>
						</div>
						
							<p class="top_name"><a href="">
								云音乐飙升榜
							</a></p>
							<p>每天更新</p>
						
					</li>
					<li>
						<div class="top_list_name">
							<a>
								<img src="http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" alt="云音乐新歌榜">
							</a>
						</div>
						
							<p class="top_name"><a href="">
								云音乐新歌榜
							</a></p>
							<p>每天更新</p>
						
					</li>
					<li>
						<div class="top_list_name">
							<a>
								<img src="http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40" alt="网易原创歌曲榜">
							</a>
						</div>
						
							<p class="top_name"><a href="">
								网易原创歌曲榜
							</a></p>
							<p>每周四更新</p>
						
					</li>
					<li>
						<div class="top_list_name">
							<a>
								<img src="http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40" alt="云音乐热歌榜">
							</a>
						</div>
						
							<p class="top_name"><a href="">
								云音乐热歌榜
							</a></p>
							<p>每周四更新</p>
						
					</li>
				</ul>
			</div>
		</div>
		<div class="top_list_right">
			
		</div>
	</div>
		
		<!--<audio controls :src="address" autoplay="autoplay"></audio>-->
	
</template>

<script>
	import axios from 'axios'
	export default {
	  	
	  	data(){
	  		return{
	  			msg:[],
	  			address:''
	  		}
	  	},
	  	mounted(){
	  		axios.get('http://localhost:3000/add').then(res =>{
	  			this.msg = res.data
	  		})
	  	},
	  	methods:{
	  		play:function(index){
	  			this.address = this.msg[index].address
	  			console.log(this.address)
	  		}
	  	}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration: none;
	}
	body{
		width: 100%;
		/*height: 1000px;*/
		font-size: 12px;
		background-color: #F5F5F5;
	}
	.top_list{
		width: 980px;
		height: 1000px;
		/*background-color: red;*/
		margin: 0 auto;
	}
	.top_list_left ul{
		list-style: none;
		background: #e6e6e6;
	}
	.top_list_left li{
		padding: 10px 0 10px 20px;
		position: relative;
	    zoom: 1;
	    height: 42px;
	    cursor: pointer;
	}
	.top_list_left{
		height: 100%;
		float: left;
    	width: 240px;
    	border-left: 1px solid #a1a1a1;
    	border-right: 1px solid #A1A1A1;
    	/*background-color: #00B7FF;*/
	}
	.top_list_title{
		width: 100%;
		height: 100%;
		margin-top: 40px;
	}
	.top_list_title h2{
		padding: 0 10px 12px 15px;
	    font-size: 14px;
	    color: #000;
	    margin-top: 20px;
	}
	.top_list_name{
		display: inline;
	    float: left;
	    /*margin-left: -50px;*/
	    overflow: hidden;
	    width: 40px;
	}
	.top_name{
		margin-left: 50px;
		width: 150px;
	    overflow: hidden;
	    margin-top: 2px;
	    margin-bottom: 8px;
	}
	.top_name a{
		color: #000;
	}
	.top_name~p{
		color: #999;
		margin-left: 50px;
	}
	.top_list_right{
		display: inline-block;
		height: 100%;
	    float: right;
	    width: 736px;
	    padding-bottom: 50px;
	    border-right: 1px solid #A1A1A1;
	}
</style>