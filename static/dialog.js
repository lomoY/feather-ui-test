require.async(["common:ui/jquery", 'common:ui/dialog'], function($, Dialog) {
	var page = {

		init: function() {
			this.$myBtn = $("#mybtn");
			this.createMod();
			this.addEvent();
		},

		createMod:function(){
            //这一步到底是干嘛
			$('#dialog').dialog({
                customWraper : true,
                width:'400',
            }).dialog('instance').setButtons({
                '确定':function(){
                    if($('#addForm').formValid('instance').check()){
                        _this.sendQuery(_this.queryLink,$('#addForm').serialize(),function(data){
                            alert(_this.successmsg);
                            $('#dialog').dialog('instance').close();
                            _this.getResultWrap();
                        });                   
                    }
                },
                '取消':function(){
                    $("#addForm")[0].reset();
                    this.close();
                    
                }
            });
		},

		addEvent:function(){
			this.$myBtn.on("click",function(){
 				$('#dialog').dialog('instance').setContent('#myContent3');
				$('#dialog').dialog('open');
			})
		},


	};
	page.init();
});