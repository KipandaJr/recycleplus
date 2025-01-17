$(function() {

	var todayDate = moment().startOf('day');
	var YM = todayDate.format('YYYY-MM');
	var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
	var TODAY = todayDate.format('YYYY-MM-DD');
	var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek'
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		navLinks: true,
		backgroundColor: '#1f2e86',   
		eventTextColor: '#1f2e86',
		textColor: '#378006',
		dayClick: function(date, jsEvent, view) {

        alert('Clicked on: ' + date.format());

        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        alert('Current view: ' + view.name);

        // change the day's background color just for fun
        $(this).css('background-color', 'red');

    },
		events: [
			{
				title: 'Recolha diária (Festa)',
				start: YM + '-01',
				color: '#e91e63'
			},
			{
				title: 'Recolha prolongada (Seminário)',
				start: YM + '-07',
				end: YM + '-10',
				color: '#59e0c5'
			},
			{
				id: 999,
				title: 'Rec. repetitiva (Bar)',
				start: YM + '-09T16:00:00',
				color: '#FF5370'
			},
			{
				id: 999,
				title: 'Rec. repetitiva (Bar)',
				start: YM + '-16T16:00:00',
				color: '#FF5370'
			},
			{
				title: 'Recolha prolongada (Maratona)',
				start: YESTERDAY,
				end: TOMORROW,
				color: '#f3c30b'
			},
			{
				title: 'Mercado',
				start: TODAY + 'T10:30:00',
				end: TODAY + 'T12:30:00',
				color: '#1f2e86'
			},
			{
				title: 'Restaurante',
				start: TODAY + 'T12:00:00',
				color: '#0D4CFF'
			},
			{
				title: 'Mercado',
				start: TODAY + 'T14:30:00',
				color: '#1f2e86'
			},
			{
				title: 'Merc. Informal',
				start: TODAY + 'T17:30:00',
				color: '#AA00FF'
			},
			{
				title: 'Bar',
				start: TODAY + 'T20:00:00',
				color: '#00BCD4'
			},
			{
				title: 'Festa',
				start: TOMORROW + 'T07:00:00',
				color: '#FF5722'
			}
		]
	});
});