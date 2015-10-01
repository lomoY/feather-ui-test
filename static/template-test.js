require.async(["common:jquery","common:template"],function($,Template){
	var content = Template.fetch("test",{
			list:[
				{
					name:'123'
				},

				{
					name:'456'
				}

			],
			aaa:123

	});
	
	console.log(content);
})