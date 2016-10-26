		$(document).ready(function(e) {
			$('#numericcontrol input[type="text"]').val("0");
			$val=$('#numericcontrol input[type="text"]').val();
			$('#numericcontrol a.rating__plus').click(function(){
				if($val<10){
					$val++;
					$(this).parent('div#numericcontrol').find('input[type="text"]').val($val);
				}
				else{
					$val = 10;
				}
			});
			$('#numericcontrol a.rating__minus').click(function(){
				if($val>0)
				{
					$val--;	
					$(this).parent('div#numericcontrol').find('input[type="text"]').val($val);
				}
				else{
					$val = 0;
				}
			});

			var current_text = "";

			$('.not_hidcont>td>.student-info>.show-hide-command').click(function(){  

				var current_tr = $(this).parent().parent().parent();
				var first_td = current_tr[0].firstElementChild;

				var team_id = $(current_tr).data("teamId");

				var trs = $('[data-team-id="'+team_id+'"]:not(.not_hidcont)');
				var hidcont = trs;
				var s = $(this).text();
				var d = s!="Свернуть";
				if($(this).text()!="Свернуть")
					current_text = $(this).text();

				console.log(first_td);
				if (hidcont.is(':hidden')){
					hidcont.show();
					$(first_td).addClass('light-blue');
					$(this).text("Свернуть");
				}
				else{        
					hidcont.hide();
					$(first_td).removeClass('light-blue');
					$(this).text(current_text);
				}
			}); 

			var overlay = $('#overlay'); 
			var open_modal = $('.open_modal'); 
			var close = $('.modal_close, #overlay'); 
			var modal = $('.modal_div');

			open_modal.click( function(event){
				event.preventDefault(); 
				var div = $(this).attr('href');
				overlay.fadeIn(400,
					function(){
						$(div)
						.css('display', 'block') 
						.animate({opacity: 1, top: '5%'}, 200);
					});
			});
			close.click( function(){ 
				modal 
				.animate({opacity: 0, top: '45%'}, 200, 
					function(){ 
						$(this).css('display', 'none');
						overlay.fadeOut(400);
					});
			});


			$('.questioner__show').click(function(){  

				var current_th = $(this).parent().parent();

				var questioner_id = $(current_th).data("questioner");

				var ths = $('[data-questioner="'+questioner_id+'"]:not(.not-collapsed)');
				var cols = [];

				$(ths).each(function(i,elem){
					cols[i] = $(elem).parent().children().index($(elem));
				});

				if (ths.is(':hidden')){
					$(cols).each(function(i,col){
						$('#table-of-progress tbody td:nth-child('+(col+1)+')').show();
					});
					ths.show();
					$(current_th).addClass('opened-questioner');
				}
				else{        
					ths.hide();
					$(current_th).removeClass('opened-questioner');
					$(cols).each(function(i,col){
						$('#table-of-progress tbody td:nth-child('+(col+1)+')').hide();
					});
				}
			}); 
			client_w=document.body.clientWidth;
			client_h=document.body.clientHeight;
			if(client_w<1000){
				var step_txt = $('.questioner-details__step');
				$(step_txt).each(function(i,elem){
					$(step_txt).text($(elem).text().slice(0,1)+$(elem).text().slice(-1));
				});
				var ths_text = $('#table-of-progress .questioner__title, #table-of-progress .questioner-details__description');
				$(ths_text).each(function(i,elem){
				var df = cropTxt($(elem).text());// ;
				$(elem).text(df);
			});
			}
		});


		function cropTxt(str){
			if (str.length > 30) str = str.slice(0, 10) + ' ... ' + str.slice(-5);
			return str;
		}