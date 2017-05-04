<template>
	<div class="cont_Home" id='Con'>
		<div class="hhead" >
			<span class="iconfont scan">&#xe605;</span>
			<span class="iconfont search">&#xe66a;</span>
		</div>
		<swiper :options='options1' class='banner-s1'>
			 <swiper-slide class="black"><img src="../img/Hbanner-1.jpg" alt="" /></swiper-slide>
	     	 <swiper-slide class="black"><img src="../img/Hbanner-1.jpg" alt="" /></swiper-slide>
		</swiper>
		<p class="shanghu">查看咖啡联盟商户 </p>
		<div class="cont_cen">
			<a href="javascript:;"><img src="../img/kekashangcheng.jpg"/></a>
			<a href="javascript:;"><img src="../img/goerweima.jpg"/></a>
		</div>
		<div class="space"></div>
		<div class='cont_1'>
	      	<tab :line-width=2 active-color='#fc378c' v-model="index" class='tablist'>
	        	<tab-item class="vux-center"  v-for="(item,index) in list2" @click.native="switchTo(index)" :key="index">{{item}}</tab-item>
	      	</tab>
		    <div class="jingxuan listcard">
		    	<p class='hj_title'>-  专 题  -</p>
	    		<swiper :options='options2' class='banner-s2'>
					 <swiper-slide class="jinglist"><img src="../img/Hbanner-1.jpg" alt="" /></swiper-slide>
			     	 <swiper-slide class="jinglist"><img src="../img/Hbanner-1.jpg" alt="" /></swiper-slide>
			     	 <swiper-slide class="jinglist"><img src="../img/Hbanner-1.jpg" alt="" /></swiper-slide>
			     	 <swiper-slide class="jinglist"><img src="../img/Hbanner-1.jpg" alt="" /></swiper-slide>
				</swiper>
		    	<p class='hj_title'>-  精 选  -</p>
		    	<ul class='list1'>
		    		<li><img src="../img/Hj-list-2.jpg"/></li>
		    		<li><img src="../img/Hj-list-1.jpg"/></li>
		    		<li><img src="../img/Hj-list-2.jpg"/></li>
		    		<li><img src="../img/Hj-list-1.jpg"/></li>
		    	</ul>
		    	<p class="more">点击查看全部 >></p>
		    </div>
		    
		    <div class="tuijian listcard">
		    	<ul class='list2'>
		    		<li>
		    			<div class="left">
		    				<img src="../img/ht-list-1.jpg" alt="" />
		    			</div>
		    			<div class="right">
		    				<p class="right_t">
		    					由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道
		    				</p>
		    				<span class='right_n'>13559</span>
		    			</div>
		    		</li>
		    		<li>
		    			<div class="left">
		    				<img src="../img/ht-list-1.jpg" alt="" />
		    			</div>
		    			<div class="right">
		    				<p class="right_t">
		    					由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道
		    				</p>
		    				<span class='right_n'>13559</span>
		    			</div>
		    		</li>
		    		<li>
		    			<div class="left">
		    				<img src="../img/ht-list-1.jpg" alt="" />
		    			</div>
		    			<div class="right">
		    				<p class="right_t">
		    					由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道
		    				</p>
		    				<span class='right_n'>13559</span>
		    			</div>
		    		</li>
		    		<li>
		    			<div class="left">
		    				<img src="../img/ht-list-1.jpg" alt="" />
		    			</div>
		    			<div class="right">
		    				<p class="right_t">
		    					由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道
		    				</p>
		    				<span class='right_n'>13559</span>
		    			</div>
		    		</li>
		    	</ul>
		    	<p class="more">点击查看全部 >></p>
		    </div>
		    
		    <div class="xindian listcard">
		    	<ul class='list2'>
		    		<li>
		    			<div class="left">
		    				<img src="../img/ht-list-2.jpg" alt="" />
		    			</div>
		    			<div class="right">
		    				<p class="right_t">
		    					由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道
		    				</p>
		    				<span class='right_n'>13559</span>
		    			</div>
		    		</li>
		    		<li>
		    			<div class="left">
		    				<img src="../img/ht-list-2.jpg" alt="" />
		    			</div>
		    			<div class="right">
		    				<p class="right_t">
		    					由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道
		    				</p>
		    				<span class='right_n'>13559</span>
		    			</div>
		    		</li>
		    		<li>
		    			<div class="left">
		    				<img src="../img/ht-list-2.jpg" alt="" />
		    			</div>
		    			<div class="right">
		    				<p class="right_t">
		    					由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道
		    				</p>
		    				<span class='right_n'>13559</span>
		    			</div>
		    		</li>
		    		<li>
		    			<div class="left">
		    				<img src="../img/ht-list-2.jpg" alt="" />
		    			</div>
		    			<div class="right">
		    				<p class="right_t">
		    					由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道
		    				</p>
		    				<span class='right_n'>13559</span>
		    			</div>
		    		</li>
		    	</ul>
		    	<p class="more">点击查看全部 >></p>
		    </div>
		    
		</div>
	</div>
	
	
</template>

<script>
	import $ from 'n-zepto';
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	import { Tab, TabItem} from 'vux';
	const list = () => ['精选', '推荐', '新店'];
	export default{
		name:'info',
		components: {
		    Tab,
		    TabItem,
		    swiper,
		    swiperSlide
		  },
		  data () {
		    return {
		      list2: list(),
		      index: 0,
		      options1:{
		      	loop : true,
		      	autoplay:3000,
		      	autoplayDisableOnInteraction : false
		      },
		      options2:{
		      	loop : true,
		      	autoplay:1500,
		      	slidesPerView:'auto',
		      	autoplayDisableOnInteraction : false,
		      	centeredSlides:true,
		      	watchSlidesProgress:true,
		      	onProgress:function(swiper){
					for(var i=0;i<swiper.slides.length;i++){
						var slide = swiper.slides[i];
						var progress = slide.progress;
						var es = slide.style
						es.transform=es.webkitTransform = "perspective(1200px) translate3d(0,0,"+(-Math.abs(progress*150))+"px)"
					}
				},
				onSetTransition:function(swiper,duration){
					for(var i=0;i<swiper.slides.length;i++){
						 var slide = swiper.slides[i];
						 var es = slide.style
						 var duration1 = duration+500;
						 es.transition = es.webkitTransition = duration1+"ms"
					}
				}
		      }
		      
		    }
		  },
		  methods:{
		  	switchTo:function(index){
		  		switch (index){
		  			case 0:
		  				$('.listcard').eq(index).css('display','block')
		  				$('.listcard').eq(index).siblings('.listcard').css('display','none')
		  				break;
		  			case 1:
		  				$('.listcard').eq(index).css('display','block')
		  				$('.listcard').eq(index).siblings('.listcard').css('display','none')
		  				break;
		  			case 2:
		  				$('.listcard').eq(index).css('display','block')
		  				$('.listcard').eq(index).siblings('.listcard').css('display','none')
		  				break;
		  			default:
		  				break;
		  		}
		  	}
		  },
		  mounted:function(){
		  	var opa = 0
		  	$(".hhead").css('background','rgba(255,255,255,'+opa+')')
		  	$("#Con").scroll(function(){
		         var contentHeight=$(this).scrollTop();
//		         console.log(contentHeight)
		         if(contentHeight!="0"){
		          	opa = contentHeight/200;
		          	$(".hhead").css('background','rgba(255,255,255,'+opa+')')
		          }
//		         console.log($('.tablist').offset().top)
		         if(contentHeight>=288){
		         	$('.tablist').css({'position':'fixed','top':'46px'})
		         }else{
		         	$('.tablist').css({'position':'absolute','top':'0'})
		         }
		      });
		  }
		}
</script>

<style scoped>
	
	.hhead{position:fixed;height:46px;width:100%;z-index: 1000;}
	.hhead span{font-size:0.44rem;position:absolute;top:30%;}
	.hhead span.scan{left:5%}
	.hhead span.search{right:5%}
	.cont_Home img{width:100%;height:100%;}
	.banner-s1{height:170px;}
	.black img{width:100%;height: 100%;}
	.cont_cen{width:100%;height: 110px;display: flex;justify-content: space-around;}
	.cont_cen a{display: inline-block;width:49.5%;height: 100%;}
	 p.shanghu{background:#fff;line-height: 0.6rem;height:0.6rem;width:100%;font-size:.28rem;text-align: center;padding:0.1rem 0;font-family: "微软雅黑";color:#000;}
	.jingxuan p.hj_title{text-align: center;line-height: 0.6rem;font-size: 0.3rem;color:#000}
	.banner-s2{-webkit-perspective: 1200px;perspective: 1200px;transform-style: preserve-3d;-webkit-transform-style:preserve-3d ;height:150px;margin: 10px 0;}
	.listcard{display: none;}
	.jingxuan{display: block;}
	.jingxuan .list1{width:100%;}
	.jingxuan .list1 img{width:100%;}
	.jingxuan .list1 li{margin-bottom:1px;}
	.jinglist{width:80%;text-align: center;}
	.jinglist img{width:100%;display: inline-block;}
	.more{line-height: 1rem;text-align: center;font-size:0.3rem;background: #fff;}
	.cont_1{position:relative;padding-top:0.88rem;}
	.tablist{position: absolute;top:0;left:0;width:100%;height:0.88rem;z-index: 200;}
	.listcard{width:100%;background: #fff;}
	.listcard .list2 li{width:100%;box-sizing: border-box;padding:0.3rem;height:2.3rem;}
	.listcard .list2 li .left{width:30%;float:left;height:100%;margin-right:0.3rem;}
	.listcard .list2 li .left img{width:100%;height:100%;}
	.listcard .list2 li .right{width:60%;float:left;position:relative;height:100%;}
	.listcard .list2 li .right .right_t{font-size: 0.35rem;overflow: hidden;display: -webkit-box;
	-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-overflow: ellipsis;line-height: 0.5rem;
	color:#000;}
	.listcard .list2 li .right .right_n{font-size: 0.22rem;position:absolute;right:0.1rem;bottom:0.1rem;}
</style>

