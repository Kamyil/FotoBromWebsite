$(document).ready(function(){

$('.galleryTiles').click(function(){


	$('.galleryPopUp').css('display','block');


});
$('.lnr-cross').click(function(){

	$('.galleryPopUp').find('*').not('.lnr-cross').remove();
	$('.galleryPopUp').css('display','none');



});
// Ślubne
$('#slubne').click(function(){
let modal = $('.galleryPopUp');

//let photos = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg',
	//'15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];
modal.append('<h1 class="sectionTitle text-center">Ślubne</h1>');
	for(i=1;i<=321;i++){
	
	modal.append( $("<img/>",{class:'photos',"src":'galeria/slub/'+i+'.jpg'}));

	
	}

	



	
});

//Koncerty
$('#koncerty').click(function(){
let modal = $('.galleryPopUp');

//let photos = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg',
	//'15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];
modal.append('<h1 class="sectionTitle text-center">Koncerty</h1>');
	for(i=1;i<=300;i++){
	
	modal.append( $("<img/>",{class:'photos',"src":'galeria/koncerty/'+i+'.jpg'}));

	
	}

	



	
});


//Reklamowe
$('#reklamowe').click(function(){
let modal = $('.galleryPopUp');

//let photos = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg',
	//'15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];
modal.append('<h1 class="sectionTitle text-center">Reklamowe</h1>');
	for(i=1;i<=42;i++){
	
	modal.append( $("<img/>",{class:'photos',"src":'galeria/dentystka/'+i+'.jpg'}));

	
	}

	



	
});

});