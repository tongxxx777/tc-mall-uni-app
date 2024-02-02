<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(banner, index) in banners" :key="index">
			<view class="swiper-item">
				<image class="swiper-img" :src="`/static/img/${banner.image}`"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			banners: Array,
		}
	}
</script>

<style scoped>
	.swiper-img{
		width: 100%;
		height: 300rpx;
	}
</style>