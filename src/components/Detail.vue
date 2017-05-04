<template>
	<div class="S_cont">
			<div class="S_dnav">
			<tab :line-width=2 active-color='#33b5e5' v-model="index">
	        	<tab-item class="vux-center"  v-for="(item,index) in list1" @click.native="switchTo(index)" :key="index">{{item}}</tab-item>
	      	</tab>
			</div>
	    	  <!--第一个-->
	        <div class="first S_box ">
				<First></First>
	    	</div>
	    	<!--第二个-->
    	 	<div class="second S_box" >
		 		<Second></Second>
    		</div>
    		<!--第三个-->
    	 	<div class="third S_box" >
		 		<Third></Third>
    		</div>
    		<!--第四个-->
    	 	<div class="fourth S_box" >
		 		<Fourth></Fourth>
    		</div>
    		<!--第五个-->
    	 	<div class="five  S_box" >
		 		<Five></Five>
    		</div>
	</div>
</template>

<script>
import $ from 'n-zepto';
import {Tab, TabItem} from 'vux'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Five from './Five'
const list = () => ['推荐', '歌单', '榜单', '视频', 'K歌']

export default {
  components: {Tab,TabItem,First,Second,Third,Fourth,Five},
   data () {
    return {
    	list1: list(),
	    demo1: '推荐',
	    index:0
    }
  },
  methods:{
   	switchTo:function(index){
		  		switch (index){
		  			case 0:
		  				$('.S_box').eq(index).css('display','block')
		  				$('.S_box').eq(index).siblings('.S_box').css('display','none')
		  				break;
		  			case 1:
		  				$('.S_box').eq(index).css('display','block')
		  				$('.S_box').eq(index).siblings('.S_box').css('display','none')
		  				break;
		  			case 2:
		  				$('.S_box').eq(index).css('display','block')
		  				$('.S_box').eq(index).siblings('.S_box').css('display','none')
		  				break;
		  			case 3:
		  				$('.S_box').eq(index).css('display','block')
		  				$('.S_box').eq(index).siblings('.S_box').css('display','none')
		  				break;
		  			case 4:
		  				$('.S_box').eq(index).css('display','block')
		  				$('.S_box').eq(index).siblings('.S_box').css('display','none')
		  				break;
		  			default:
		  				break;
				}
  		}
  }
}
</script>

<style>
.S_cont .S_dnav{width:100%; height:2.5rem;z-index: 2; position: fixed; }
.S_cont .S_box{ position: relative; top:2.5rem;}
.S_cont .vux-tab .vux-tab-item.vux-tab-selected{color:#33b5e5;border-bottom:3px solid #33b5e5 !important;}
.S_cont .second,.third,.fourth,.five{display: none;}
</style>