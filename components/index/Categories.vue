<template>
	<view class="icons">
		<view class="icons-item"  v-for="(category, index) in categories" :key="index">
			<img class="icons-img" :src="`/static/img/${category.icon}`">
			<text class="f-color">{{ category.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			categories: Array,
		}
	}
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