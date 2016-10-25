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


			$('.not_hidcont>td>.show-hide-command').click(function(){  

				var current_tr = $(this).parent().parent();
				var first_td = current_tr[0].firstElementChild;

				var team_id = $(current_tr).data("teamId");

				var trs = $('[data-team-id="'+team_id+'"]:not(.not_hidcont)');
				var hidcont = trs;

				console.log(first_td);
				if (hidcont.is(':hidden')){
					hidcont.show();
					$(first_td).addClass('light-blue');
					$(this).text("Свернуть");
				}
				else{        
					hidcont.hide();
					$(first_td).removeClass('light-blue');
					$(this).text("Команда");
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
		});