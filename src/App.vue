<template>
  <div id="app">
  	<transition-group name="slide">
  		<enter @exchange="changePage" v-show="curPage==1" :key=1></enter>
  		<area-school @deliverData="deliverData" @exchange="changePage" v-show="curPage==2" :recent="recentData" :key=2></area-school>
  		<subject v-show="curPage==3" :subs="subs" :key=3></subject>
  	</transition-group>
  </div>
</template>

<script>
	import Indicator from 'mint-ui/lib/indicator';
	import Enter from './components/enter/Enter'
	import AreaSchool from './components/areaschool/AreaSchool'
	import Subject from './components/subject/Subject'
	
	export default {
	  name: 'app',
	  components: {
	  	Enter,
	  	AreaSchool,
	  	Subject
	  },
	  data() {
	  	return {
	  		recentData: {},
	  		curPage: 1,
	  		subs: []
	  	}
	  },
	  created() {
	  	Indicator.open({
			  text: '加载中...',
			});
	  	let _url = 'http://tp.feicuiedu.com:8081/recentServlet';
  		this.$http.get(_url)
				.then(function(res){
						if(res.status === 200){
							Indicator.close();
							this.recentData = res.data.results;
						}
				  },function(){
				  	Indicator.close();
				  });
  		
		},
		methods: {
			changePage(index) {
				this.curPage = ++index;
			},
			deliverData(data){
				this.subs = data;
			}
		}
		
	}
</script>

<style scoped>
	#app{
		width: 100%;
		height: 100%;
	}
	.slide-enter-active, .slide-leave-active {
	  transition: all .5s
	}
	.slide-enter {
	 transform: translateY(100%);
	}
	.slide-leave {
		transform: translateY(0);
	}
	.slide-leave-to {
		transform: translateY(-100%);
	}
</style>
