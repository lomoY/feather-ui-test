require.async(["common:jquery", 'common:dialog','common:template'], function($, Dialog,Template) {
	var page = {

		init: function() {
			this.$mybtn = $("#getInfo");
			this.dateTpl = __inline("./date.tpl");
			this.$dateListWrap = $("#dateListWrap");

			this.addEvents();
			this.getDayList(2006,5);
		},

		//创建日历表
		createDateList: function(list) {
			var _this = this;
			var html = Template.parse(_this.dateTpl, {//这条看不懂!!!!
				list: list
			});
			_this.$dateListWrap.html(html);
		},
		//创建日历表结束
		
		//事件绑定开始
		addEvents: function() {
			var _this = this;
			_this.$mybtn.on("click", function() {
				alert("点了我了");
				
			});
		},
		//事件绑定结束

		//获取数据开始
		getDayList: function(year,curMonth) {
			var _this = this;
			$.ajax({
				url: pageConfig.getDaylistURL,
				type: "post",
				dataType: "json",
				data: {
					yaer: year
				},

				success: function(data) {
					console.log(data.data);
					_this.createDateList(data.data[curMonth]);
				}
			});
		},
		//获取数据结束
	};
	page.init();
});