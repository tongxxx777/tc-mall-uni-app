<template>
	<view class="index">
		<Banners :banners='banners'></Banners>
		<Categories :categories='categories'></Categories>
		<Card cardTitle='热销爆品'></Card>
		<Products :products='products'></Products>
	</view>
</template>

<script>
	import Banners from '@/components/index/Banners.vue'
	import Categories from '@/components/index/Categories.vue'
	import Card from '@/components/common/Card.vue'
	import Products from '@/components/common/Products.vue'
	export default {
		data() {
			return {
				banners:[],
				categories:[],
				products:[],
			}
		},
		onLoad() {
			this._index();
		},
		methods: {
			_index(){
				uni.request({
					url:"http://api.tc-mall.local/api/index",
					success: (res) => {
						let data = res.data.data;
						this.banners = data.banners;
						this.categories = data.categories;
						this.products = data.products;
					}
				})
			},
		},
		components: {
			Banners,
			Categories,
			Card,
			Products
		}
	}
</script>

<style>

</style>