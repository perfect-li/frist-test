<template>
	
	<div class="header_nav_2">
		<div class="main_2">
			<ul>
				<li>
					<router-link to = '/found_music/recommend'>推荐</router-link>
				</li>
				<li>
					<router-link to = '/found_music/ranking_list'>排行榜</router-link>
				</li>
				<li>
					<router-link to = '/found_music/song_list'>歌单</router-link>
				</li>
				<li>
					<router-link to = '/found_music/Radio'>主播电台</router-link>
				</li>
				<li>
					<router-link to = '/found_music/singer'>歌手</router-link>
				</li>
				<li>
					<router-link to = '/found_music/new_disc'>新碟上架</router-link>
				</li>
			</ul>
		</div>
		<router-view/>
			<div></div>
	</div>

</template>

<script>
</script>

<style>
	.header_nav_2{
		width: 100%;
		height: 34px;
		background-color: #C20C0C;
	}
	.main_2{
		height: 100%;
		width: 800px;
		margin-left: 230px;
	}
	.main_2 ul{
		width: 100%;
		list-style: none;
	}
	.main_2 ul li{
		display: inline-block;		
		margin-left: 50px;
		height: 34px;
		text-align: center;
		padding-top: 8px;
	}
	.main_2 ul li a{
		text-decoration:none;
		font-size: 14px;
		color: #FFFFFF;
	}
</style>