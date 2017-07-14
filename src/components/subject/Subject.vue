<template>
	<div class="subjecttype-wrapper">
		<div class="subject-wrapper">
			<div class="title">
				<h3>请选择您所在的区域：</h3>
			</div>
			<div class="subject">
				<ul>
					<li 
						v-for="(sub, index) in subs"
						:class="{active: curActive==index, bottom: index>1,left: index%2==0,right: index%2!=0}"
						@click="showSubject(index)"
						>{{sub}}
					</li>
				</ul>
			</div>
		</div>
		<div class="type-wrapper">
			<div class="title">
				<h3>请选择老师类型：</h3>
			</div>
			<div class="chooise">
				<mt-radio
				  title=""
				  v-model="value"
				  :options="['讲师', '班主任', '就业老师', '在线老师','讲师', '班主任', '就业老师', '在线老师','讲师', '班主任', '就业老师', '在线老师']">
				</mt-radio>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			subs: {
				type: Array
			}
		},
		data() {
			return {
				curActive: -1, //当前选中的大区索引
				value: ''
			}
		},
		methods: {
			showSubject(index){
				this.curActive = index;
			}
		}
	}
</script>

<style scoped>
	.subjecttype-wrapper {
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
	.subject {
		margin-top: 20px;
	}
	.subject ul li {
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
</style>