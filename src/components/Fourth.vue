<template>
	<div class="Four_con">
		<div class="four_title">
			<div class="four_title_left">
				<span>全部</span>
			   <img src="../../img/1-16.png"/>
			</div>
			
		</div>
		<div class="four_list">
			<ul >
				<li is-link link='/detail' v-for="data in flist" >
					<img :src="data.albumpic_big"/>
					<p class="sl_title">{{data.songname}}</p>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>

export default {
  components: {},
   data () {
    return {
    	flist:[]
    }
  },
  mounted(){
		var that = this
			this.$http({
				method:"get",
				url:"http://route.showapi.com/213-4",
				params:{"showapi_appid":36929,'showapi_sign':'de7dc6efbef44e3ea0d4dd2ac169d0d5',"topid":3}
			}).then((data) => {
//				console.log(data.data.showapi_res_body.pagebean.songlist)
				let datas = eval(data.data.showapi_res_body.pagebean.songlist);
				that.flist = datas.splice(0,30)
//				console.log(that.slist)
		})
  },
  methods:{
  	
  }
}

</script>

<style>
.Four_con{background:#FFFFFF;margin:0 auto}
.four_title{width:90%;height:3rem; display: flex; justify-content: space-between;margin: 0 auto;}
.four_title .four_title_left img{width:1rem; height:1rem}
.four_title .four_title_left{margin-top:1rem;font-weight: 600;}
.four_title .four_title_left span{display: inline-block; border-left:0.3rem solid #00b7fe;padding-left:0.3rem;border-radius: 10%;}
.four_list ul{width:90%;margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap;}
.four_list li{float: left;}
.four_list li img{width:8.7rem; height:4.8rem}
.four_list li p{line-height: 1.3rem;font-size: 14px; margin-bottom: 1rem;}

</style>