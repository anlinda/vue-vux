<template>
	<div class="Five_cont">
		 <div>
			<search
			@result-click="resultClick"
			@on-change="getResult"
			:results="results"
			v-model="value"
			position="fixed"
			auto-scroll-to-top top="51px"
			@on-focus="onFocus"
			@on-cancel="onCancel"
			@on-submit="onSubmit"
			ref="search"></search>
	  	</div>
		<div class="Five_banner" ><img src="../../img/5-1.png"/></div>
		 <div>
		    <group>
		      <cell title="我的K歌" is-link></cell>
		    </group>
 		 </div>
 		 <div class="Five_ksing">
	 		  <flexbox :gutter="0" wrap="wrap">
			  <flexbox-item :span="1/3"><div class="flex-demo"><img src="../../img/5-2.png"/><h5>KTV热歌榜</h5></div></flexbox-item>
			  <flexbox-item :span="1/3"><div class="flex-demo"><img src="../../img/5-3.png"/><h5>华语精曲</h5></div></flexbox-item>
			  <flexbox-item :span="1/3"><div class="flex-demo"><img src="../../img/5-4.png"/><h5>欧美经典</h5></div></flexbox-item>
			  <flexbox-item :span="1/3"><div class="flex-demo"><img src="../../img/5-5.png"/><h5>男歌手</h5></div></flexbox-item>
			  <flexbox-item :span="1/3"><div class="flex-demo"><img src="../../img/5-2.png"/><h5>女歌手</h5></div></flexbox-item>
			  <flexbox-item :span="1/3"><div class="flex-demo"><img src="../../img/5-3.png"/><h5>乐队组合</h5></div></flexbox-item>
			</flexbox>
			<div class="five_title">
				<span>大家都在唱</span>
			</div>
			<div class="five_list">
		     <cell-box is-link>
		        <p>给我一首歌的时间-杰伦</p>
		        <span>784394人唱过</span>
		      </cell-box>
		      <cell-box is-link>
		        <p>雨下一整晚-杰伦</p>
		        <span>784394人唱过</span>
		      </cell-box>
		      <cell-box is-link>
		        <p>我落泪情绪零碎-杰伦</p>
		        <span>784394人唱过</span>
		      </cell-box><cell-box is-link>
		        <p>一路向北-杰伦</p>
		        <span>784394人唱过</span>
		      </cell-box>
		      <cell-box is-link>
		        <p>稻香-杰伦</p>
		        <span>784394人唱过</span>
		      </cell-box>
		       <cell-box is-link>
		        <p>前世情人-杰伦</p>
		        <span>784394人唱过</span>
		      </cell-box>
 			 </div>
		</div>
		
</div>
</template>

<script>
import { Search, XButton, Group, Cell,CellBox,Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Search,
    XButton,
     Group, Cell,CellBox,
     Flexbox, FlexboxItem
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$vux.toast.show({
        type: 'text',
//      position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
      results: [],
      value: '搜索k歌伴奏'
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style>
.Five_cont .weui-search-bar{background-color: #FFFFFF;}
.Five_cont .Five_banner{ height:6rem;}
.Five_cont .Five_banner img{ width:100%;height:100%;}
.Five_cont .weui-cells{margin:0.5rem 0;font-size: 14px; color:#000000}
.Five_cont .Five_ksing{background-color:#FFFFFF;}
.Five_cont .vux-flexbox {width:90%; margin:0 auto;height:13rem; border-bottom: 1px solid #EEEEEE;}
.Five_cont .flex-demo{text-align: center; margin-top:0.5rem}
.Five_cont .flex-demo img{width:4rem;height:4rem;vertical-align: middle;}
.Five_cont .flex-demo h5{line-height: 2rem;}
.Five_cont  .five_title{width:90%;height:2rem;margin: 0 auto 1rem;}
.Five_cont  .five_title span{margin-top:1rem;color:#000000 ;}
.Five_cont  .five_title span{display: inline-block; border-left:0.3rem solid #00b7fe;padding-left:0.3rem;border-radius: 10%;}
.Five_cont .five_list .vux-cell-box{width:90%; margin: 0 auto; }
.Five_cont .five_list .vux-cell-box p{color:#000000;margin-bottom:0.3rem}
.Five_cont .five_list .vux-cell-box span{color:#B6B6B6;font-size: 14px;}
.Five_cont .five_list .vux-cell-box{width:90%;}



</style>