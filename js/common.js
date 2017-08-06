$(document).ready(function() {

	$("form").submit(function() { return false; });

	$("input[name='phone']").inputmask("+7(999)999-99-99");

	var clickId;

	$('.button').click(function(){
	  if ('send3' != this.id) {
	    window.clickId = this.id;
	  }
	});

	$("#send1").on("click", function(){
		var nameval = $("#name1").val();
		var namelen = nameval.length;
		var tph = document.getElementById("phone1").value;
		tph = !tph.match(/^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}\-[0-9]{2}/);

		if( namelen < 3 ) { $("#name1").addClass("error");
		}
		else if( namelen >= 3){ $("#name1").removeClass("error");
		}

		if(tph == true) { $("#phone1").addClass("error");
		}
		else if(tph == false){ $("#phone1").removeClass("error");
		}

		if(tph == false && namelen >= 3) {
		  $.ajax({
		    type: 'POST',
		    url: '/sendmessage.php',
		    data: $("#contact1").serialize(),
				success: function(data) {
					if(data == "true") {
					  $.fancybox.close();
	          $("#contact1")[0].reset();
						location = "/thankyou.php" + "?click=" + window.clickId;
					}
				}
		  });
		}
	});
	$("#send2").on("click", function(){
		var nameval = $("#name2").val();
		var namelen = nameval.length;
		var tph = document.getElementById("phone2").value;
		tph = !tph.match(/^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}\-[0-9]{2}/);

		if( namelen < 3 ) { $("#name2").addClass("error");
		}
		else if( namelen >= 3){ $("#name2").removeClass("error");
		}

		if(tph == true) { $("#phone2").addClass("error");
		}
		else if(tph == false){ $("#phone2").removeClass("error");
		}

		if(tph == false && namelen >= 3) {
			$.ajax({
				type: 'POST',
				url: '/sendmessage.php',
				data: $("#contact2").serialize(),
				success: function(data) {
					if(data == "true") {
						$.fancybox.close();
						$("#contact2")[0].reset();
						location = "/thankyou.php" + "?click=" + window.clickId;
					}
				}
			});
		}
	});
	$("#send3").on("click", function(){
		var nameval = $("#name3").val();
		var namelen = nameval.length;
		var tph = document.getElementById("phone3").value;
		tph = !tph.match(/^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}\-[0-9]{2}/);

		if( namelen < 3 ) { $("#name3").addClass("error");
		}
		else if( namelen >= 3){ $("#name3").removeClass("error");
		}

		if(tph == true) { $("#phone3").addClass("error");
		}
		else if(tph == false){ $("#phone3").removeClass("error");
		}

		if(tph == false && namelen >= 3) {
			$.ajax({
				type: 'POST',
				url: '/sendmessage.php',
				data: $("#contact3").serialize(),
				success: function(data) {
					if(data == "true") {
						$.fancybox.close();
						$("#contact3")[0].reset();
						location = "/thankyou.php" + "?click=" + window.clickId;
					}
				}
			});
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > $(".main.sect").offset().top + $('.main.sect').outerHeight()) {
			$(".header.sect").addClass('fixed');
		}
		else {
			$(".header.sect").removeClass('fixed');
		}
	});
	$('.header.sect .nav ul li a').click(function(){
		var nav_height = $('.header.sect').outerHeight();
		var dest = $(this).attr('href');
		var dest_offset = $(dest).offset().top - nav_height;
		$('body, html').animate({scrollTop: dest_offset}, 1000);
		return false;
	});

	$('.main.sect .ornament .inner').parallax({
		xparallax: '20px',
		yparallax: '0',
		decay: 0,
		mouseport: $('.main.sect')
	});
	$(".modalbox").fancybox({
		closeBtn: true,
		scrolling:'visible',
		margin: 0,
		padding: 0
	});
	function response_content() {
		if(window.innerWidth<1200) {
			$(".listening.sect").before($('.price.sect'));
		}
		else {
			$(".listening.sect").after($('.price.sect'));
		}
	}
	$(window).resize(function(){
		response_content();
	});
	response_content();
	ymaps.ready(function(){
		myMap = new ymaps.Map("map", {
			center: [56.85410627, 35.86647699],
			zoom: 16,
			controls: ['zoomControl']
		});
		var myPlacemark1 = new ymaps.Placemark(
			[56.85456475, 35.87130552], {}, {}
			);
		myMap.behaviors.disable("scrollZoom");
		var collection = new ymaps.GeoObjectCollection();
		collection.add(myPlacemark1);
		myMap.geoObjects.add(collection);
	});
});
