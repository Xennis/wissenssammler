google.charts.load('current', {
	packages: ['timeline'],
	language: 'de',
});
google.charts.setOnLoadCallback(function() {
	var container = document.getElementById('timeline');
	var chart = new google.visualization.Timeline(container);
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn({type: 'string', id: 'Term'});
	dataTable.addColumn({type: 'string', id: 'Pandemie'});
	dataTable.addColumn({type: 'date', id: 'Start'});
	dataTable.addColumn({type: 'date', id: 'Ende'});
	dataTable.addRows([
		['1', 'Spanische Grippe*', new Date(1918,0,1), new Date(1920,11,31)],
		['2', 'Asiatische Grippe*', new Date(1957,0,1), new Date(1958,11,31)],
		['3', 'Hongkong-Grippe*', new Date(1968,0,1), new Date(1970,11,31)],
		['4', 'HIV*', new Date(1980, 0, 1), new Date()],
		['5', 'SARS-CoV', new Date(2002, 10, 16), new Date(2004, 4, 19)],
		['6', 'Schweinegrippe', new Date(2009, 3, 24), new Date(2010, 9, 10)]
	]);
	var options = {
		timeline: { showRowLabels: false }
	};
	chart.draw(dataTable, options);
});
