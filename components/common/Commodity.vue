<template>
	<view class="commodity">
		<!-- 单个商品组件 -->
		<view class="commodity-item" v-for="(item,index) in dataList" :key="index">
			<image class='commodity-img' :src="item.imgUrl" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name">{{item.name}}</text>
				<view>
					<text class='price'>￥{{item.price}}</text>
					<text class='volume'>销量 {{item.volume}} 笔</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: Array
		}
	}
</script>

<style scoped>
	.commodity {
		display: flex;
		flex-wrap: wrap;
	}

	.commodity-item {
		width: 375rpx;
		padding: 10rpx;
		box-sizing: border-box;
	}

	.commodity-img {
		width: 100%;
		height: 375rpx;
		border-radius: 10rpx;
		object-fit: cover;
	}

	.commodity-content {
		text-align: center;
	}

	.commodity-name {
		font-size: 24rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333333;
		word-break: break-all;
		padding: 6rpx 10rpx;
	}

	.price,
	.volume {
		font-size: 24rpx;
		margin-right: 10rpx;
	}

	.price {
		color: red;
	}

	.volume {
		color: #999999;
	}
</style>