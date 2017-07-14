export default {
	get: [
		{
			title: '大区校区专业数据',
			url: 'http://tp.feicuiedu.com:8081/recentServlet'
		},
		{
			title: '获取班级和老师名称信息',
			url: 'http://tp.feicuiedu.com:8081/ClassAndTeacherServlet?schoolName=北京回龙观&majorName=UI设计&role_Level=讲师'
		}
	],
	post: [
		{
			title: '检查是否本月已经评论',
			url: 'http://tp.feicuiedu.com:8081/CheckServlet',
			data: {
				
			}
		},
		{
			title: '提交评分数据',
			url: 'http://tp.feicuiedu.com:8081/SaveServlet',
			data: {
				
			}
		}
	]
}
