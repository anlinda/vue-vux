<template>
	<div class="Fir_cont">
		<!--轮播图-->
		<swiper loop auto :show-dots="false" class="lunbo">
		 	<swiper-item><img src="../../img/b1.jpg"/></swiper-item>
		 	<swiper-item><img src="../../img/b2.jpg"/></swiper-item>
		 	<swiper-item><img src="../../img/b3.jpg"/></swiper-item>
		 	<swiper-item><img src="../../img/b4.jpg"/></swiper-item>
		 	<swiper-item><img src="../../img/b5.jpg"/></swiper-item>
		</swiper>
		<!--导航部分-->
		<div class="F_nav">
			<grid :rows="4">
		      <grid-item :label="('歌手')" >
		        <img slot="icon" src="../../img/1-1.png">
		      </grid-item>
		      <grid-item :label="('歌曲分类')" >
		        <img slot="icon" src="../../img/1-2.png">
		      </grid-item>
		      <grid-item :label="('会员专区')" >
		        <img slot="icon" src="../../img/1-3.png">
		      </grid-item>
		      <grid-item :label="('电台')" >
		        <img slot="icon" src="../../img/1-4.png">
		      </grid-item>
		    </grid>
		</div>
		<!--内容-->
		<!--歌单推荐-->
		<div class="F_tuijian ftent">
			<div class="F_title">
				<div  class="F_title_left"><img src="../../img/1-5.png"/>歌单推荐</div>
				<div class="F_title_right" is-link link='/Second'>更多 <</div>
			</div>
			<div class="F_tuicon ">
				<ul >
					<li is-link link='/detail' v-for="data in list" ><img :src="data.albumpic_big"/><p>{{data.songname}}</p></li>
				</ul>
			</div>
		</div>
		<div class="F_tuicon2 ftent">
			<img src="../../img/1-6.png"/>
		</div>
		<!--新碟上架-->
		<div class="F_new ftent">
			<div class="F_title">
				<div  class="F_title_left"><img src="../../img/1-7.png"/>新碟上架</div>
				<div class="F_title_right">更多 <</div>
			</div>
			<div class="F_tuicon">
				<ul >
					<li is-link link='/detail' v-for="data in list1" ><img :src="data.albumpic_big"/><p>{{data.singername}}</p></li>
				</ul>
			</div>
		</div>
 		<!--热销专辑-->
		<div class="F_hot ftent">
			<div class="F_title">
				<div  class="F_title_left"><img src="../../img/1-8.png"/>热销专辑</div>
				<div class="F_title_right">更多 <</div>
			</div>
			<div class="F_tuicon">
				<ul >
					<li is-link link='/detail' v-for="data in list2" ><img :src="data.albumpic_big"/><p>{{data.songname}}</p><p>{{data.singername}}</p></li>
				</ul>
			</div>
		</div>
		<!--场景电台-->
		<div class="F_chang ftent">
			<div class="F_title">
				<div  class="F_title_left"><img src="../../img/1-9.png"/>场景电台</div>
				<div class="F_title_right">更多 <</div>
			</div>
			<div class="F_tuicon3">
				<img src="../../img/1-10.png">
				<img src="../../img/1-11.png">
				<img src="../../img/1-12.png">
				<img src="../../img/1-13.png">
			</div>
		</div>
		<!--今日推荐-->
		<div class="F_today ftent">
			<div class="F_title">
				<div  class="F_title_left"><img src="../../img/1-14.png"/>今日推荐</div>
				<div class="F_title_right">更多 <</div>
			</div>
			<div class="F_tuicon4">
				<div class="Ft4_list">
					<img src="../../img/t5.jpg"/>
					<div>
						<p>
							<span>一笑倾城(合唱版)</span><br>
							<span>张贺，白羽</span>
						</p>
						<img src="../../img/1-16.png"/>
					</div>
				</div>
				<div class="Ft4_list">
					<img src="../../img/t6.jpg"/>
					<div>
						<p>
							<span>一笑倾城(合唱版)</span><br>
							<span>张贺，白羽</span>
						</p>
						<img src="../../img/1-16.png"/>
					</div>
				</div>
				<div class="Ft4_list">
					<img src="../../../music/img/x2.jpg"/>
					<div class=" Ft4_list_last">
						<p>
							<span>一笑倾城(合唱版)</span><br>
							<span>张贺，白羽</span>
						</p>
						<img src="../../img/1-16.png"/>
					</div>
				</div>
			</div>
		</div>
 		<!--原创音乐-->
 		<div class="F_yuan ftent">
 			<div class="F_title">
				<div class="F_title_left"><img src="../../img/1-8.png"/>原创音乐</div>
				<div class="F_title_right">更多 <</div>
			</div>
				<div class="F_tuicon">
				<ul >
					<li is-link link='/detail' v-for="data in list3" ><img :src="data.albumpic_big"/><p>{{data.songname}}</p><p>{{data.singername}}</p></li>
				</ul>
			</div>
		</div>
		<!--乐播节目-->
		<div class="F_hot ftent">
			<div class="F_title">
				<div  class="F_title_left"><img src="../../img/1-21.png"/>乐播节目</div>
				<div class="F_title_right">更多 <</div>
			</div>
			<div class="F_tuicon">
				<ul >
					<li is-link link='/detail' v-for="data in list4" ><img :src="data.albumpic_big"/><p>{{data.songname}}</p></li>
				</ul>
			</div>
		</div>
		<!--专栏-->
		<div class="F_zhuanlan F_today ftent">
			<div class="F_title">
				<div  class="F_title_left"><img src="../../img/1-18.png"/>专栏</div>
			</div>
			<div class="F_tuicon4">
				<div class="Ft4_list">
					<img src="../../img/1-19.png"/>
					<div>
						<p>
							<span>春风十里不如你</span><br>
							<span>一周音乐热|网罗一周乐坛动态</span>
						</p>
						<img src="../../img/1-20.png"/>
					</div>
				</div>
				<div class="Ft4_list">
					<img src="../../img/t1.jpg"/>
					<div>
						<p>
							<span>滚石情怀，重温经典</span><br>
							<span>一周音乐热|网罗一周乐坛动态</span>
						</p>
						<img src="../../img/1-20.png"/>
					</div>
				</div>
				<div class="Ft4_list">
					<img src="../../img/t4.jpg"/>
					<div>
						<p>
							<span>你需要一场电子音乐的盛宴</span><br>
							<span>一周音乐热|网罗一周乐坛动态</span>
						</p>
						<img src="../../img/1-20.png"/>
					</div>
				</div>
				<div class="Ft4_list">
					
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import { Swiper, SwiperItem,Grid, GridItem } from 'vux'

export default {
  components: {Swiper, SwiperItem, Grid,GridItem},
   data () {
    return {
	    index:0,
	    list:[],
	    list1:[],
	    list2:[],
	    list3:[],
	    list4:[]
    }
  },
	mounted(){
		var that = this
			this.$http({
				method:"get",
				url:"http://route.showapi.com/213-4",
				params:{"showapi_appid":36929,'showapi_sign':'de7dc6efbef44e3ea0d4dd2ac169d0d5',"topid":5}
			}).then((data) => {
//				console.log(data.data.showapi_res_body.pagebean.songlist)
				let datas = eval(data.data.showapi_res_body.pagebean.songlist);
				that.list = datas.slice(0,6)
			}),
			this.$http({
				method:"get",
				url:"http://route.showapi.com/213-4",
				params:{"showapi_appid":36929,'showapi_sign':'de7dc6efbef44e3ea0d4dd2ac169d0d5',"topid":3}
			}).then((data) => {
				let datas = eval(data.data.showapi_res_body.pagebean.songlist);
				that.list1 = datas.slice(0,6)
//				console.log(that.list1);
			}),
			this.$http({
				method:"get",
				url:"http://route.showapi.com/213-4",
				params:{"showapi_appid":36929,'showapi_sign':'de7dc6efbef44e3ea0d4dd2ac169d0d5',"topid":5}
			}).then((data) => {
				let datas = eval(data.data.showapi_res_body.pagebean.songlist);
//				console.log(data)
				that.list2 = datas.slice(10,13)
			}),
			this.$http({
				method:"get",
				url:"http://route.showapi.com/213-4",
				params:{"showapi_appid":36929,'showapi_sign':'de7dc6efbef44e3ea0d4dd2ac169d0d5',"topid":5}
			}).then((data) => {
				let datas = eval(data.data.showapi_res_body.pagebean.songlist);
//				console.log(data)
				that.list3 = datas.slice(13,16)
			}),
			this.$http({
				method:"get",
				url:"http://route.showapi.com/213-4",
				params:{"showapi_appid":36929,'showapi_sign':'de7dc6efbef44e3ea0d4dd2ac169d0d5',"topid":6}
			}).then((data) => {
				let datas = eval(data.data.showapi_res_body.pagebean.songlist);
//				console.log(data)
				that.list4 = datas.slice(1,7)
			})
		},
  methods:{
  	
  }
}
</script>

<style>
.Fir_cont{background-color: #FFFFFF;}
.Fir_cont .lunbo{height:9.3rem;}
.Fir_cont .lunbo img{ height: 100%;width: 100%;}
.Fir_cont .F_nav{height: 6.5rem; background:#FFFFFF;}
.Fir_cont .F_nav .weui-grid:before{border:none}
.Fir_cont .F_nav .weui-grid__icon{width:2.8rem;height:2.8rem;}
.Fir_cont .F_nav .weui-grid__label{color:#1cb2ff;}
.Fir_cont .ftent {height:auto; background:#FFFFFF;width:90%;margin:0 auto;}
.Fir_cont .ftent .F_title{height:3rem;font-size:15px;line-height: 3rem; font-weight: 600;display: flex; justify-content: space-between;}
.Fir_cont .ftent .F_title .F_title_left img{ width:1.2rem;height:0.9rem;margin-right:0.4rem;}
.Fir_cont .ftent .F_title .F_title_right{font-size: 14px;color:#a1a1a1;}
.Fir_cont .ftent .F_tuicon ul{display: flex; justify-content: space-between;flex-wrap: wrap;}
.Fir_cont .ftent .F_tuicon li{width:5.5rem; float:left;margin-bottom: 0.5rem;}
.Fir_cont .ftent .F_tuicon img{width:5.5rem;height:5.5rem;}
.Fir_cont .ftent .F_tuicon p{font-weight: 600;font-size: 12px; white-space: pre-line; line-height: 1rem;margin-top:0.4rem}
.Fir_cont .ftent .F_singername{ color:#999999;}
.Fir_cont .F_hot,.F_today {border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee;}
.Fir_cont .F_tuicon2 { width:90%; height:5rem;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee;}
.Fir_cont .F_tuicon2 img{height:3rem;width:100%; margin:1rem 0;}
.Fir_cont .F_chang .F_tuicon3 {display: flex;justify-content: space-between;}
.Fir_cont .F_chang .F_tuicon3 img{width:4rem;height:4rem;margin-bottom: 1rem;} 
.Fir_cont .F_today .F_tuicon4 .Ft4_list{height:4rem;}
.Fir_cont .F_today .F_tuicon4 .Ft4_list img{width:3rem;height:3rem;float:left;border-radius:100%;}
.Fir_cont .F_today .F_tuicon4 .Ft4_list div{ width:80%;height:3rem;border-bottom:1px solid #EEEEEE;float:left;margin-left:2%}
.Fir_cont .F_today .F_tuicon4 .Ft4_list .Ft4_list_last{border:none; }
.Fir_cont .F_today .F_tuicon4 .Ft4_list div p{font-size:12px;margin-left:1rem;line-height: 1rem;float:left;margin-top:0.6rem;}
.Fir_cont .F_today .F_tuicon4 .Ft4_list div p span:nth-of-type(1){font-weight: 600;}
.Fir_cont .F_today .F_tuicon4 .Ft4_list div img{ float:left;width:2rem;height:2rem; margin:0.5rem 0 0 5.5rem;  }
.Fir_cont .F_zhuanlan .F_tuicon4 .Ft4_list div img{ float:left;width:1rem;height:1rem; margin:1.2rem 0 0 0.8rem }
.Fir_cont .F_zhuanlan .F_tuicon4 .Ft4_list p{width:11rem}
.Fir_cont .F_zhuanlan .F_tuicon4 .Ft4_list img{border-radius: 0;}


</style>




anlinda
a123zxcv@#