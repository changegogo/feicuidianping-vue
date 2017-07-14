<template>
	<div>
		<ul>
			<li v-for="result in results" v-html="result"></li>
		</ul>
	</div>
</template>

<script>
	import api from '../../API.js';
	export default {
		data() {
			return {
				results: [],
			}
		},
		created() {
			api.get.forEach(function(_url){
				this.$http.get(_url.url)
					.then(function(res){
					  	console.log(res);
					  	this.results.push('<p>'+_url.title+'</p>'+'GET: '+window.decodeURI(res.url)+'<br/>'+res.data.msg);
					  });
				}.bind(this));
		}
	}
</script>

<style>
</style>