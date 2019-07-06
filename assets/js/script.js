$(document).ready(function(){
	selectIndividual();
})

function selectBusiness(){
	$('.business').addClass('active-tab')
	$('.individual').removeClass('active-tab')

	$('.business .head').removeClass('text-white')
	$('.business .text').removeClass('text-white')

	$('.individual .head').addClass('text-white')
	$('.individual .text').addClass('text-white')

	$('.busin').removeClass('hidden')
	$('.indivi').addClass('hidden')
}

function selectIndividual(){
	$('.individual').addClass('active-tab')
	$('.business').removeClass('active-tab')

	$('.individual .head').removeClass('text-white')
	$('.individual .text').removeClass('text-white')

	$('.business .head').addClass('text-white')
	$('.business .text').addClass('text-white')

	$('.indivi').removeClass('hidden')
	$('.busin').addClass('hidden')
}