		

var fadeinmodal = function() {
	$('.modal').fadeIn(1000);
};
$('.signin').on('click', fadeinmodal);



var fadeoutmodal = function() {
	$('.modal').fadeOut(1000);
};
$('.close').on('click', fadeoutmodal);
$('.modal').on('click', fadeoutmodal);

var stopmodal = function() {
	event.stopPropagation();
};
$('.getstarted').on('click', stopmodal)






var submiterror = function() {
	$('input').addClass('error')
};
$('.submit').on('click', submiterror);



var removeerror = function() {
	$(this).removeClass('error')	
};
$('input').on('focus', removeerror);












/* $('.modal').on('click', fadeoutmodal);

$('.username').on('click', nofadeoutmodal);
$('.password').on('click', nofadeoutmodal);













/*$('signin').on(.click(){
        $(".modal").fadeIn('slow');
        $(".modal").css('display', 'block');
};
*/

