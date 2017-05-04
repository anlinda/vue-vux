<template>
<!--	<h2>这是内容页</h2>-->
<div>
	<group>
	 <cell-box is-link link='/detail' v-for="data in list">{{data.goodsName}}</cell-box>
	</group>
</div>

</template>

<script>
	import {CellBox,Group} from 'vux'
	export default {
		name:'info',
		components:{CellBox,Group},
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			var that = this
			this.$http({
				method:'get',
				url:'http://datainfo.duapp.com/shopdata/getGoods.php?callback=',
				params:{"classID":1}
			}).then((data)=>{
				let datas = eval(data.data);
				that.list = datas
			})
		}
		
	}
	
</script>

<style>
	.weui-cells{margin-top: 0 !important;}
</style>