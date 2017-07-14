<template>
	<div class="areaschool-wrapper">
		<div class="title">
			<h3>请选择您所在的区域：</h3>
		</div>
		<div class="arealist">
			<ul>
				<li v-for="(area, index) in recent.bigarea" 
					:class="{active: curActive==index, bottom: index>1,left: index%2==0,right: index%2!=0}"
					@click="showSchool(index, area.schoolcode)">
					<span class="text">{{area.name}}</span>
				</li>
			</ul>
		</div>
		<!-- 遮罩层 -->
		<transition name="fede">
			<div class="school-wrapper" v-if="isShow">
				<div class="sch-wrapper">
					<div class="close" @click="close">X</div>
					<ul v-if="recent.schools">
						<li v-for="(school, index) in recent.schools[schoolcode]" 
							:class="{active: curSchActive==index}"
							@click="chooseSchool(index, school.subcode)">
							<span>{{school.sch}}</span>
						</li>
					</ul>
				</div>
				<div class="btn-wrapper">
					<button class="sure" @click="sure">确定</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	const PAGE_NUM = 2;
	import Toast from 'mint-ui/lib/toast';
	
	export default {
		props: {
			recent: {
				type: Object,
				default: {
					schools: []
				}
			}
		},
		data() {
			return {
				isShow: false,
				isActive: false,
				schoolcode: 0,
				curActive: -1, //当前选中的大区索引
				curSchActive: -1, //当前选中的学校索引
				subcode: []
			}
		},
		methods: {
			showSchool(index, schoolcode) {
				this.curActive = index;
				this.isShow = !this.isShow;
				this.schoolcode = schoolcode;
			},
			chooseSchool(index, subcode){
				this.curSchActive = index;
				this.subcode = subcode;
			},
			sure(){
				if(this.curSchActive<0){
					Toast({
					  message: ' 请选择学校  ',
					  position: 'middle',
					  duration: 1000
					});
					return;
				}
				// 传递数据
				let subs = [];
				this.subcode.forEach((value)=>{
					if(value!=-1){
						let sub = this.recent.subject[value];
						subs.push(sub);
					}
				});
				if(subs.length>0){
					this.$emit('deliverData', subs);
				}else{
					Toast({
					  message: '没有可以评价老师',
					  position: 'middle',
					  duration: 1000
					});
					return;
				}
				// 通知切换页面
				this.$emit('exchange', PAGE_NUM);
			},
			close() {
				this.isShow = !this.isShow;
				this.curSchActive = -1;
			}
		}
	}
</script>

<style scoped>
	.fede-enter-active, .fede-leave-active {
	  transition: all .5s
	}
	.fede-enter, .fede-leave-to {
	  /*transform: translateX(100%);*/
	 opacity: 0;
	}
	.areaschool-wrapper {
		position: relative;		
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 10%;
	}
	.title {
		width:100%;
		margin-top:16%;
		color: #14c6d0;
		font-size: 30px;
		font-weight: 900;
		text-align: left;
	}
	.arealist {
		margin-top: 20px;
	}
	.arealist ul li {
		display: inline-block;
		width: 45%;
		box-sizing: border-box;
		border: 1px solid #14c6d0;
		text-align: center;
		height: 48px;
		font-size: 25px;
		line-height: 45px;
	}
	.active {
		background: #14c6d0;
		color: #fff;
	}
	.left {
		margin-right: 5%;
	}
	.right {
		margin-left: 5%;
	}
	.bottom {
		margin-top: 10%;
	}
	.school-wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
	.sch-wrapper {
		width: 80%;
		margin: 0 auto;
		padding: 0 5%;
		padding-bottom: 5%;
		box-sizing: border-box;
		margin-top: 25%;
		background: #fff;
		border-radius: 2%;
	}
	.close {
		position: absolute;
		margin-top: 26%;
		padding-right: 12%;
		top: 0;
		right: 0;
	}
	.sch-wrapper ul li {
		display: inline-block;
		margin-top: 10%;
		margin-right: 5% ;
		margin-left: 5% ;
		width: 40%;
		height: 40px;
		line-height: 40px;
		box-sizing: border-box;
		border: 1px solid #14c6d0;
		text-align: center;
	}
	.btn-wrapper {
		text-align: center;
		margin-top: 10%;
	}
	.sure {
		background: #0cd8e3;
		border: 0;
		width: 80%;
		height: 50px;
		font-size: 25px;
		color: #fff;
	}
</style>