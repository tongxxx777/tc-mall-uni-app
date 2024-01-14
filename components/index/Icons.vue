<template>
	<view class="icons">
		<view class="icons-item">
			<img class="icons-img" src="../../static/img/icons-1.png">
			<text class="f-color">显示器</text>
		</view>
		<view class="icons-item">
			<img class="icons-img" src="../../static/img/icons-2.png">
			<text class="f-color">台式机</text>
		</view>
		<view class="icons-item">
			<img class="icons-img" src="../../static/img/icons-3.png">
			<text class="f-color">轻薄本</text>
		</view>
		<view class="icons-item">
			<img class="icons-img" src="../../static/img/icons-4.png">
			<text class="f-color">游戏本</text>
		</view>
		<view class="icons-item">
			<img class="icons-img" src="../../static/img/icons-5.png">
			<text class="f-color">平板电脑</text>
		</view>
		<view class="icons-item">
			<img class="icons-img" src="../../static/img/icons-6.png">
			<text class="f-color">鼠标</text>
		</view>
		<view class="icons-item">
			<img class="icons-img" src="../../static/img/icons-7.png">
			<text class="f-color">路由器</text>
		</view>
		<view class="icons-item">
			<img class="icons-img" src="../../static/img/icons-8.png">
			<text class="f-color">打印机</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.icons{
		display: flex;
		flex-wrap: wrap;
	}
	.icons-item{
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 20rpx;
	}
	.icons-img{
		width: 110rpx;
		height: 110rpx;
	}
	
</style>