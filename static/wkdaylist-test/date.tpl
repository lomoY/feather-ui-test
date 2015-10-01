<div  class="col-xs-12">
	<table class="table text-center table-bordered">						
	    <tr>
		<% for(j=0;j<7;j++){ %>
		<td <%= list[j].status == "2" ? "class='holidays'" : "" %>><%= list[j].day %></td>
		<% } %>
	    </tr>
	    <tr>
		<% for(j=7;j<14;j++){ %>
		<td <%= list[j].status == "2" ? "class='holidays'" : "" %>><%= list[j].day %></td>
		<% } %>
	    </tr>
	    <tr>
		<% for(j=14;j<21;j++){ %>
		<td <%= list[j].status == "2" ? "class='holidays'" : "" %>><%= list[j].day %></td>
		<% } %>
	    </tr>
	    <tr>
		<% for(j=21;j<28;j++){ %>
		<td <%= list[j].status == "2" ? "class='holidays'" : "" %>><%= list[j].day %></td>
		<% } %>
	    </tr>
	    <% if(list.length > 28){ %>
	    <tr>
		<% for(j=28;j<list.length;j++){ %>
		<td <%= list[j].status == "2" ? "class='holidays'" : "" %>><%= list[j].day %></td>
		<% } %>
	    </tr>	
	    <% } %>
	</table>
</div>