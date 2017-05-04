<template>
	<div class="Second_con">
		<div class="S_title">
			<div class="S_title_left">
				<span>全部</span>
			   <img src="../../img/1-16.png"/>
			</div>
			
		</div>
		<div class="Sec_list">
			<ul >
				<li is-link link='/detail' v-for="data in slist" >
					<img :src="data.albumpic_big"/>
					<p class="sl_title">{{data.songname}}</p>
					<p class="sl_zuozhe">by {{data.singername}}</p>
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
    	slist:[]
    }
  },
  mounted(){
		var that = this
			this.$http({
				method:"get",
				url:"http://route.showapi.com/213-4",
				params:{"showapi_appid":36929,'showapi_sign':'de7dc6efbef44e3ea0d4dd2ac169d0d5',"topid":6}
			}).then((data) => {
//				console.log(data.data.showapi_res_body.pagebean.songlist)
				let datas = eval(data.data.showapi_res_body.pagebean.songlist);
				that.slist = datas.splice(20,29)
//				console.log(that.slist)
		})
  },
  methods:{
  	
  }
}
</script>

<style>
.Second_con{background:#FFFFFF;margin:0 auto}
.S_title{width:90%;height:3rem; display: flex; justify-content: space-between;margin: 0 auto;}
.S_title .S_title_left img{width:1rem; height:1rem}
.S_title .S_title_left{margin-top:1rem;font-weight: 600;}
.S_title .S_title_left span{display: inline-block; border-left:0.3rem solid #00b7fe;padding-left:0.3rem;border-radius: 10%;}
.Sec_list ul{width:90%;margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap;}
.Sec_list li{float: left;}
.Sec_list li img{width:8.5rem; height:8rem}
.Sec_list li p{line-height: 1.3rem;font-size: 14px;}
.Sec_list li .sl_title{font-weight: 600;}
.Sec_list li .sl_zuozhe{color:#949494;font-size: 12px; margin-bottom: 0.5rem;}
</style>