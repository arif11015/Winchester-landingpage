$(function()
{   
   $('#map_addresses').gMap({
        zoom: 15,
        controls: {
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: false,
            overviewMapControl: false
        },		
		markers:[
			{
				latitude: 37.998108,
				longitude: -84.179168,
				html: "Address :Tyler Banks <br />Email: mail@company.com <br />Phone: +123 4567 8900",
			},		
			{
				latitude: 37.990283,
				longitude: -84.159188,
				html: "Address :main office <br />Email: mail@company.com <br />Phone: +123 4567 8900",
			},
			{
				latitude: 37.996437,
				longitude: -84.167445,
				html: "Address :117 Stevenson St, Winchester, KY 40391 <br />Email: mail@company.com <br />Phone: +123 4567 8900",
			},			
			{
				latitude: 37.991360,
				longitude: -84.159212,
				html: "Address :Sequoia Villiage <br />Email: mail@company.com <br />Phone: +123 4567 8900",
			},			
			{
				latitude: 37.990515,
				longitude: -84.168417,
				html: "Address :Memorial Park <br />Email: mail@company.com <br />Phone: +123 4567 8900",
			},			
			{
				latitude: 37.994962,
				longitude: -84.178288,
				html: "Address :Beverly White Towers <br />Email: mail@company.com <br />Phone: +123 4567 8900",
			},							
			{
				latitude: 38.002943,
				longitude: -84.188137,
				html: "Address :Smith Manor <br />Email: mail@company.com <br />Phone: +123 4567 8900",
			},			
		]
    });


});