<template>
	<view class="product">
		<!-- 单个商品组件 -->
		<view class="product-item" v-for="(product,index) in products" :key="index" style="width:375rpx">
			<image class='product-img' :src="`https://image.baidu.com/search/down?url=${product.cover}`" style="height:375rpx"></image>
			<!-- <image class='product-img' src="http://cdn.learnku.com/uploads/images/201806/01/5320/uYEHCJ1oRp.jpg" style="height:375rpx"></image> -->
			<view class="product-content">
				<text class="product-name">{{ product.name }}</text>
				<view>
					<text class='price'>￥{{ product.price }}</text>
					<text class='sold-count'>销量 {{ product.sold_count }} 笔</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			products: Array,
		}
	}
</script>

<style scoped>
	.product {
		display: flex;
		flex-wrap: wrap;
	}

	.product-item {
		padding: 10rpx;
		box-sizing: border-box;
	}

	.product-img {
		width: 100%;
		border-radius: 10rpx;
		object-fit: cover;
	}

	.product-content {
		text-align: center;
	}

	.product-name {
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
	.sold-count {
		font-size: 24rpx;
		margin-right: 10rpx;
	}

	.price {
		color: red;
	}

	.sold-count {
		color: #999999;
	}
</style>