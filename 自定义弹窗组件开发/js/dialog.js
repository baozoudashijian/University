$.dialog = function (opts) {
	var $dialog =  $("<div class='dialog'>"+
				"<div class='title'>"+
					"<h3>"+opts.title+"</h3>"+
					"<a href='javascript:;'>X</a>"+
				"</div>"+
				"<div class='content'>"+
					"<span class='icon'></span>"+
					"<span>"+opts.content+"</span>"+
				"</div>"+
				"<div class='btn'>"+
					"<input type='button' value='确定' class='sure'/>"+
					"<input type='button' value='取消' class='cancel'/>"+
				"</div>"+
			"</div>");
			$('body').append($dialog/*+ "<div class='gray'></div>"*/);
			$('body').append("<div class='gray'></div>")
			//这里封装使dialog始终处于屏幕的正中央
			function autoCenter (center) {
				var w = center.width();
				var h = center.height();
				var l = $(window).width() - w;
				var t = $(window).height() - h;
				center.css({left:l/2,top:t/2});
			}
			$(window).resize(function () {
				autoCenter($dialog);
			})
			autoCenter($dialog);
			//封装鼠标移动弹窗跟随时间
			function initEvent ($dialog,opts) {
				$dialog.find('.title').mousedown(function (e) {
					var e = e || window.event;
					var dialogBox = $(this).parent();
					var _left = e.clientX - dialogBox.offset().left;
					var _top = e.clientY - dialogBox.offset().top;
					var move = true;
					$(document).mousemove(function (e) {
						if (move) {
							var e = e || window.event;
							var l = e.clientX - _left;
							var t = e.clientY - _top;
							dialogBox.css({left:l,top:t});
						}
					}).mouseup(function () {
						move = false;
					})
				})
			}
			initEvent($dialog);
			//点击确定按钮移除弹窗，注意隐藏和移除是有区别的
			$dialog.find('.sure').click(function () {
				$dialog.removeClass();
				$dialog.addClass("dialog");
				hdtv();
				setTimeout(function(){
					$dialog.remove();
					$('.gray').remove();
					$('.defined').css({background:'#4798EA',color:'white'})
				},1500)
			})
			//点击取消按钮移除弹窗，注意隐藏和移除是有区别的
			$dialog.find('.cancel').click(function () {
				$dialog.remove();
				$('.gray').remove();
				$('.defined').css({background:'#4798EA',color:'white'})
			})
			function 	hdtv () {
				var animateIn = [];
				animateIn.push("animated bounce");
				animateIn.push("animated swing");
				animateIn.push("animated wobble");
				animateIn.push("animated rubberBand");
				animateIn.push("animated tada");
				animateIn.push("animated bounceInUp");
				animateIn.push("animated bounceIn");
				animateIn.push("animated fadeInDown");
				animateIn.push("animated rotateInDownLeft");
				var n = Math.round(Math.random() * animateIn.length);
//				console.log(n);注意这里有可能会出现小数，所以必须使用round方法确保为整数
				return $dialog.addClass(animateIn[n]);
			}
//			console.log(hdtv());
			hdtv();
			

			$('.defined').css({background:'#666',color:'#999'})
}


