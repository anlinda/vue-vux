<template>
	<div>
		<div class="S_head">
	      	<img src="../../img/s2.png"/>
	      	<tab v-model="index">
	        	<tab-item   v-for="(item,index) in listi" @click.native="switchTo(index)" :key="index">{{item}}</tab-item>
	      	</tab>
	        <img src="../../img/s1.png"/>
		</div>
		<!--内容区-->
	 	<div class="I_cont">
	 		<div class="Ifirst I_box ">
				<Myself></Myself>
	    	</div>
	    	<div class="Isecond I_box ">
				<Detail></Detail>
	    	</div>
	    	<div class="Ithird I_box ">
				<Action></Action>
	    	</div>
	    	<div class="Ifourth I_box ">
				<Find></Find>
	    	</div>
	 		
	 		
		</div>
		<!--底部-->
	 	<div class="S_bottom">
		    <img class="bfeng" src="../../img/1-25.png"/>
		    <p>
		    	<span>一点点</span>
		    	<span>周杰伦</span>
		    </p>
		    <div class="bbof">
		    <img src="../../img/1-22.png"/>
		    <img src="../../img/1-23.png"/>
		    <img src="../../img/1-24.png"/>
		    </div>
		</div>
</div>
</template>

<script>
import $ from 'n-zepto';
import Detail from './Detail';
import Myself from './Myself';
import Action from './Action';
import Find from './Find';
import {Tab, TabItem} from 'vux'
const listi = () => ['我的', '音乐', '动态', '发现']
export default {
  components: {Tab,TabItem,Detail,Myself,Action,Find},
   data () {
    return {
    	listi: listi(),
	    demo1: '我的',
	    index:0
    }
  },
  methods:{
   	switchTo:function(index){
		  		switch (index){
		  			case 0:
		  				$('.I_box ').eq(index).css('display','block')
		  				$('.I_box').eq(index).siblings('.I_box').css('display','none')
		  				break;
		  			case 1:
		  				$('.I_box').eq(index).css('display','block')
		  				$('.I_box').eq(index).siblings('.I_box').css('display','none')
		  				break;
		  			case 2:
		  				$('.I_box').eq(index).css('display','block')
		  				$('.I_box').eq(index).siblings('.I_box').css('display','none')
		  				break;
		  			case 3:
		  				$('.I_box').eq(index).css('display','block')
		  				$('.I_box').eq(index).siblings('.I_box').css('display','none')
		  				break;
		  			default:
		  				break;
				}
  		}
  }
}
</script>

<style>
.S_head{background: #00b4ff;position:fixed;z-index: 1;width:100%; height:2rem;display: flex;overflow: hidden; justify-content: space-around; padding:0.5rem;box-shadow: 0 1px 6px #ccc}
.S_head img{height: 2rem;width:2rem;}
.S_nav{height:2.4rem;}
.I_cont{position: absolute; top:3rem; width:100%;}
.I_cont .Isecond,.Ithird,.Ifourth,.Ifive{display: none;}
.S_head .vux-tab{background-color:#00b4ff ; height:46px; }
.S_head .vux-tab .vux-tab-item{border:none;font-size: 16px;margin-right: 1rem;margin-top:-0.3rem;}
.S_head .vux-tab .vux-tab-item.vux-tab-selected {color:#FFFFFF;}
.S_bottom{ background-color: #FFFFFF;width:100%; height:3rem; position: fixed;bottom:0}
.S_bottom .bfeng{height: 3rem;width:3rem; float:left;}
.S_bottom p{float:left;height: 3rem;width:3rem;margin-top:0.5rem; margin-left:1rem; font-weight: 600;}
.S_bottom p span:nth-of-type(2){font-size: 12px;color:#999999}
.S_bottom .bbof{float:left; margin-top:1rem; margin-left:5rem;}
.S_bottom .bbof img{ width:1rem; height:1rem; margin-right: 1rem;}





</style>
