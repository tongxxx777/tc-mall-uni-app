<template>
	<view class="index">
		<IndexSwiper></IndexSwiper>
		<Icons></Icons>
		<Card cardTitle='热销爆品'></Card>
		<Hot></Hot>
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
				
			}
		},
		methods: {
			
		},
		components: {
			IndexSwiper,
			Icons,
			Card,
			Hot
		}
	}
</script>

<style>

</style>