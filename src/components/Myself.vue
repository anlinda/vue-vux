<template>
	<div class="M_cont">
		<div class="M_tilte">
			<img src="../../img/m-1.png"/>
		</div>
		<div class="M_del" >
			<cell-box is-link>
		        <img src="../../img/m-2.png"/>
		        <p>
		        	<span>本地音乐</span>
		        	<span>100首</span>
		        </p>
		     </cell-box>
		     <cell-box is-link>
		        <img src="../../img/m-3.png"/>
		        <p>
		        	<span>最近播放</span>
		        	<span>100首</span>
		        </p>
		     </cell-box>
		     <cell-box is-link>
		        <img src="../../img/m-4.png"/>
		        <p>
		        	<span>我的下载</span>
		        	<span>0首</span>
		        </p>
		     </cell-box>
		    <div class="M_list">自建歌单   <span>新建</span></div>
		      <cell-box is-link>
		        <img src="../../img/m-5.png"/>
		        <p>
		        	<span>我喜欢的单曲</span>
		        	<span>0首</span>
		        </p>
		     </cell-box>
		    <div class="M_list">我的收藏</div>
			<div class="M_list">
			  	<ul>
			  		<li>歌手</li>
			  		<li>专辑</li>
			  		<li>歌单</li>
			  		<li>文章</li>	
			  	</ul>
			</div>
		</div>
		
		
	</div>
	
	
</template>

<script>
import {CellBox } from 'vux'

export default {
  components: {
   CellBox
  },
  methods: {
  },
  data () {
  	return {
    	
    }
  }
  
}

</script>

<style>
.M_cont{background-color: #FFFFFF; height:30rem;}
.M_tilte{ height:7rem;}
.M_tilte img{ width:100%; height: 100%;}
.M_del{width:95%; margin:0 auto ; margin-top:1rem;font-size: 14px; color:#000000}
.M_del img{ width:2.5rem; height:2.5rem; float:left; margin-left:1rem;}
.M_del .vux-cell-box{ padding:0;}
.M_del p{ float:left; margin-left:1rem; margin-top:1rem; }
.M_del p span:nth-of-type(2){ color:#999999; }
.M_del .M_list{ width:90%; margin:0 auto;height:2rem; line-height: 2.5rem;}
.M_del .M_list span{margin-left:11rem;}
.M_del .M_list ul li {float:left; color:#999999; list-style: circle;margin-left:2rem;}
.M_del .vux-cell-box :nth-of-type(5){height:5rem;}
</style>