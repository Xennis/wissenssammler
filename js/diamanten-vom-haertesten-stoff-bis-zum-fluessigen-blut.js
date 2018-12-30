google.charts.load('current', {
	packages: ['corechart', 'geochart'],
	language: 'de',
	mapsApiKey: 'AIzaSyBeK-vVloh1LTD6WAx49aQkBO3oYQNh0_k'
});

google.charts.setOnLoadCallback(function() {
	var data = google.visualization.arrayToDataTable([
		['Länder', 'Millionen Karat'],
		['De Beers (Luxemburg)', 6494],
		['ALROSA (Russland)', 4886],
		['Rio Tinto Group (GB, Australien)', 901],
		['Dominion Diamond Corporation (Kanada)', 817],
		['Petra Diamonds (Jersey)', 502],
		['Gem Diamonds (GB)', 277],
		['Lucara Diamond (Kanada)', 266],
		['Andere', 645]
	]);
	var options = {
		title: 'Gewinn nach Unternehmen in US-Dollar (2014)',
		pieHole: 0.4,
	};
	var chart = new google.visualization.PieChart(document.getElementById('diamondSales'));
	chart.draw(data, options);
});

google.charts.setOnLoadCallback(function() {
	var data = google.visualization.arrayToDataTable([
		['Country', 'Produktion in Tausend Karat'],
		['Russia', 37884],
		['Angola', 9360],
		['Botswana', 22693],
		['Central African Republic', 5000],
		['Congo', 56],
		['Democratic Republic of the Congo', 17624],
		['Ghana', 159],
		['Guinea', 202],
		['Lesotho', 414],
		['Liberia', 44],
		['Namibia', 1762],
		['Sierra Leone', 605],
		['South Africa', 8168],
		['Tanzania', 180],
		['Togo', 24],
		['Zimbabwe', 10412],
		['Canada', 10562],
		['Brazil', 49],
		['Guyana', 64],
		['China', 1100],
		['India', 38],
		['Australia', 11482]
	]);
	var options = { };
	var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
	chart.draw(data, options);
});
