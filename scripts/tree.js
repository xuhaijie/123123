/*产品树展开和关闭*/
$(function(){
	   $(".m-treeview > li > span").click(function(){ // 注意用的是 子选择器 (  >  )
			    var $ul = $(this).siblings("ul");
				if($ul.is(":visible")){
					$(this).parent().attr("class","m-collapsed");
					$ul.hide();
				}else{
					$(this).parent().attr("class","m-expanded");
					$ul.show();
				}
				return false;
	   })
})

//$(function(){
//	$(".m-treeview>li>ul").css("display","none");
//	$(".m-treeview>li>span").toggle(function() {
//		$(this).next("ul").show();
//	},function(){
//		$(this).next("ul").hide();
//	})
//})