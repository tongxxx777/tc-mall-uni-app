<template>
	<view class="index">
		<IndexSwiper></IndexSwiper>
		<Card cardTitle='热销爆品'></Card>
		<CommodityList></CommodityList>
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			IndexSwiper,
			Card,
			CommodityList
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	
</style>
