<template>
	<view class="hot">
		<Commodity :dataList='hotList' itemW='375rpx' bigH='375rpx'></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default {
		data() {
			return {
				hotList: [{
						id: 1,
						imgUrl: "../../static/img/commodity-1.jpg",
						name: "七彩虹 RTX4090 Vulcan 火神/水神 台式组装电脑游戏直播设计渲染显卡 RTX4090 Vulcan W OC 白火神",
						price: "16999.00",
						volume: "15000"
					},
					{
						id: 2,
						imgUrl: "../../static/img/commodity-2.jpg",
						name: "七彩虹 iGame RTX 4090 火神 AD 战斧 水神 24G电脑游戏台式机显卡 【RTX 4090 24G】火神OC",
						price: "18999.00",
						volume: "43000"
					},
					{
						id: 3,
						imgUrl: "../../static/img/commodity-3.jpg",
						name: "微星魔龙/超龙/水超龙RTX4090显卡/万图师/白魔龙 微星万图师4090 OC 24G",
						price: "14499.00",
						volume: "5321"
					},
					{
						id: 4,
						imgUrl: "../../static/img/commodity-4.jpg",
						name: "技嘉华硕七彩虹微星4090显卡电脑台式机电竞专业游戏二手准新显卡 七彩虹4090白火神 99成新",
						price: "18999.00",
						volume: "3210"
					}
				]
			}
		},
		components: {
			Commodity
		}
	}
</script>

<style>
</style>