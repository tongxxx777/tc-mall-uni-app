<template>
	<view class="index">
		<scroll-view scroll-x="true" :scroll-into-view="scrollIntoIndex" class="scroll-content">
			<view :id="'top'+index" class="scroll-item" v-for="(item,index) in topBar" :key="index"
				@tap="changeTab(index)">
				<text :class='topBarIndex===index?"f-active-color":"f-color"'>{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper @change='onChangeTab' :current="topBarIndex" :style="'height:'+clentHeight+'px;'">
			<swiper-item v-for="(item,index) in topBar" :key="index">
				<view class="home-data">
					<IndexSwiper></IndexSwiper>
					<Icons></Icons>
					<Card cardTitle='热销爆品'></Card>
					<Hot></Hot>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Icons from '@/components/index/Icons.vue'
	import Card from '@/components/common/Card.vue'
	import Hot from '@/components/index/Hot.vue'
	export default {
		data() {
			return {
				// 选中的索引
				topBarIndex: 0,
				// 顶栏跟随的索引ID值
				scrollIntoIndex: 'top0',
				// 内容块的高度值
				clentHeight:0,
				// 顶栏数据
				topBar: [{
						name: '推荐'
					},
					{
						name: '电脑办公'
					},
					{
						name: '办公用品'
					},
					{
						name: '数码硬件'
					},
					{
						name: '数码软件'
					},
					{
						name: '配件'
					},
					{
						name: '其它'
					},
				]
			}
		},
		components: {
			IndexSwiper,
			Icons,
			Card,
			Hot
		},
		onLoad() {

		},
		onReady() {
			let view = uni.createSelectorQuery().select(".home-data");
			view.boundingClientRect(data => {
				this.clentHeight = data.height;
			}).exec();
		},
		methods: {
			changeTab(index) {
				if (this.topBarIndex === index) {
					return;
				}
				this.topBarIndex = index;
				this.scrollIntoIndex = 'top' + index;
			},
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			}
		}
	}
</script>

<style scoped>
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}

	.scroll-item {
		display: inline-block;
		padding: 10rpx 20rpx;
		font-size: 30rpx;
	}

	.f-active-color {
		padding: 5rpx 0;
		border-bottom: 5rpx solid #49BDFB;
	}
</style>