<template>
	<view class="index">
		<scroll-view scroll-x="true" class="scroll-content">
			<view class="scroll-item" v-for="(item,index) in topBar" :key="index" @tap="changeTab(index)">
				<text :class='topBarIndex===index?"f-active-color":"f-color"'>{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper @change='onChangeTab' :current="topBarIndex">
			<swiper-item v-for="(item,index) in topBar" :key="index">
				<view>{{item.name}}</view>
			</swiper-item>
		</swiper>
		<!-- <IndexSwiper></IndexSwiper>
		<Icons></Icons>
		<Card cardTitle='热销爆品'></Card>
		<Hot></Hot>
		<Card cardTitle='随便看看'></Card>
		<CommodityList></CommodityList> -->
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	export default {
		data() {
			return {
				topBarIndex:0,
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
			Card,
			CommodityList,
			Icons,
			Hot
		},
		onLoad() {

		},
		methods: {
			changeTab(index){
				if(this.topBarIndex === index) {
					return ;
				}
				this.topBarIndex = index;
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
	.f-active-color{
		padding: 5rpx 0;
		border-bottom: 5rpx solid #49BDFB;
	}
</style>