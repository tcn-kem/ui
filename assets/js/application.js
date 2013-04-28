var i = 0;

$(document).ready(function() {
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
        	'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
         });
	});

	$('#banner-slide').bjqs({
            animtype : 'slide',
            width : 600,
            height: 500,
            centercontrols : false,
            showmarkers : false,
            automatic : false, 
            centermarkers : true,
            nexttext : '<i class="icon-angle-right icon-4x" style="margin-top: -380px; margin-left: 610px; position: absolute;"></i>',
			prevtext : '<i class="icon-angle-left icon-4x" style="margin-top: -380px; margin-left: -120px; position: absolute;"></i>',
            randomstart : false, 
			responsive : false
    });
    $('.bjqs-prev, .bjqs-next').click(function() {
    	if(i == 0) 
    	{
    		$('#step3').css('background-image', "url('assets/img/moor-lakes-opabin-highland-yoho-national-park-british-columbia-canada-800x1280.jpg')");
    		$('#selected-terrain').text('Highland');
    	}
    	else 
    	{
    		$('#step3').css('background-image', "url('assets/img/House-on-a-plain.jpg')");
			$('#selected-terrain').text('Lowland');    		
    	}
		if(i == 0) i = 1;
		else i = 0;
    });
});


