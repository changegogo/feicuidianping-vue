<template>
	<div class="enter-wrapper">
		<div class="background">
			<img src="./headingPage.jpg" width="100%" height="100%" />
		</div>
		<img id="headerImg" src="./headerImg.png" alt="满意度调查" />
		<button class="headingBtn" @click="next">进入
		</button>
	</div>
</template>

<script>
	const PAGE_NUM = 1;
	export default {
		methods: {
			next() {
				this.$emit('exchange', PAGE_NUM);
			}
		}
	}
</script>

<style scoped>
	.enter-wrapper {
		position:relative;
		width:100%;
		height:100%;
	}
	.background {
		/*filter: blur(5px);*/
	}
	#headerImg{
		position:absolute;
		left:10%;
		top:23%;
		width:80%;
	}
	.headingBtn{
		position:absolute;
		left:30%;
		bottom:20%;
		border:none;
		width:40%;
		height:40px;
		background: #0cd8e3;
		color:#fff;
		font-size:20px;
		cursor: pointer;
	}
	.alink {
		color: #fff;
	}
</style>