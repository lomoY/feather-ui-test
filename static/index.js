require.async(["common:jquery", 'common:dialog'], function($, Dialog) {
	var page={

		init:function(){
			this.mybtn=("#getInfo")
		}
	}







	new Dialog({
		title: '我是一个对话框',
		width: 200,
		height: 100,
		mask: false,
		container: '#container_test',
		esc: true,
		//autoOpen: true,
		content: $('<div>关闭我吧，呵呵</div>'),
		handle:'#btn_dialog',
		buttons:{
			'确定': {
				events:{
					click:function(){
						alert('click');
					}
				}
			},

			'取消': {
				events:{
					click:function(){
						alert('click');
					}
				}
			}
		},	



		close: function() {
			alert("关闭囖");
			this.destroy();
		}
	});
});