$(function(){ analog_clock(); });

function analog_clock(){
	today = new Date();
	var hour = today.getUTCHours() + 7;			// インドネシア時間はGMT +7
	var minute = today.getUTCMinutes();
	var second = today.getUTCSeconds();
	$('#clock_hours_hand').rotate(hour * 30 + minute / 2);
	$('#clock_minutes_hand').rotate(minute * 6 + second / 10);
	$('#clock_seconds_hand').rotate(second * 6);
	setTimeout("analog_clock()",1000);
}

$(function(){ analog_clock2(); });

function analog_clock2(){
	today = new Date();
	var hour = today.getUTCHours() + 9;			// 日本時間はGMT +9
	var minute = today.getUTCMinutes();
	var second = today.getUTCSeconds();
	$('#clock_hours_hand2').rotate(hour * 30 + minute / 2);
	$('#clock_minutes_hand2').rotate(minute * 6 + second / 10);
	$('#clock_seconds_hand2').rotate(second * 6);
	setTimeout("analog_clock2()", 1000);
}
