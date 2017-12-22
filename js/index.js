$(function(){
	$(".btn_nav").click(function(){
		$(".menu").slideToggle()
		
	});
	$(".menu li").click(function(){
		var index=$(this).index();
		var $menuObj=$('.menu_list').eq(index);		
		if($menuObj.is(':visible')){
			$(this).find('.menu_list').stop().slideUp(500);
			$(this).children("a").find("img").attr("src","images/drop_btn_03.png")
			
		}else{
			$(this).find('.menu_list').stop().slideDown(500).parent("li").siblings().find('.menu_list').stop().slideUp(500);
			$(this).children("a").find("img").attr("src",'images/click_drop_03.png').parents("li").siblings().children("a")
			.find("img").attr("src",'images/drop_btn_03.png')
		}				
	});
//	//about 下拉
    $('.about_padds').click(function(){
		var $nav=$(this).next(".about_navs")
		if($nav.is(":visible")){
			$(this).children("i").addClass("three").removeClass("three_top");
			$nav.stop().slideUp();
		}else{
			$(this).children("i").removeClass("three").addClass("three_top");
			$nav.stop().slideDown();
		}
	});
	
		$(".about_navs>ul>li>a").click(function(){
			if($(this).parent().children("ul").length>0){
				$(this).parent().children("ul").slideToggle();
				if($(this).children("i").hasClass("sub_three")){
					$(this).children("i").removeClass("sub_three").addClass("sub_three_top")
				}else{
					$(this).children("i").removeClass("sub_three_top").addClass("sub_three")
				}				
			}		
		})
	
    $('.tab ul li').click(function(){
    	var index=$(this).index();
    	$(this).addClass('active').siblings().removeClass('active');
    	$('.sele_con>div').eq(index).show().siblings().hide();
    });
    
	$('.careermenu ul li').click(function(){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.career>div').eq(index).show().siblings().hide()
	})
	
	$('.faq p').click(function(){
			var index=$(this).parents('li').index();
			var $con_det=$(this).parent().find('.con_det');
			if($con_det.is(':visible')){
				$con_det.hide();
				$(this).children("span").html("+");
			}else{
				$(this).children("span").html("-").parents("li").siblings().find("span").html("+");
				$(this).parent().find('.con_det').show().parents("li").siblings().find('.con_det').hide();
			}
		})
//	addmisstion
	$(".tab_list li").click(function(){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".sele_con>div").eq(index).show().siblings().hide();
		$(".select>div").eq(index).show().siblings().hide();
	})
		
			$(".list_infor li").click(function(){
				$(".modal_bg").toggle();
				if($(this).find(".stu_modal").is(":visible")){
					$(this).find(".stu_modal").hide();
				}else{
					$(this).find(".stu_modal").show().siblings().find(".stu_modal").hide();
				}
			});			
	

})
