let random_track = 0;

// 22 Places
// 26 Tracks
let tracks = [
	{
		country_name: "Australia",
		country_image: "https://cdn.countryflags.com/thumbs/australia/flag-square-250.png",
		track_name: "Melbourne Grand Prix Circuit",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png"
	},
	{
		country_name: "Bahrain",
		country_image: "https://cdn.countryflags.com/thumbs/bahrain/flag-square-250.png",
		track_name: "Bahrain International Circuit (Normal)",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/1024px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png"
	},
	{
		country_name: "Bahrain",
		country_image: "https://cdn.countryflags.com/thumbs/bahrain/flag-square-250.png",
		track_name: "Bahrain International Circuit (Short)",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bahrain_International_Circuit--Paddock_Circuit.svg/800px-Bahrain_International_Circuit--Paddock_Circuit.svg.png"
	},
	{
		country_name: "Vietnam",
		country_image: "https://cdn.countryflags.com/thumbs/vietnam/flag-square-250.png",
		track_name: "Hanoi Circuit",
		image: "https://www.clipartkey.com/mpngs/m/167-1672581_circuit-de-hanoi-hanoi-street-circuit-logo.png"
	},
	{
		country_name: "China",
		country_image: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
		track_name: "Shanghai International Circuit",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png.transform/9col/image.png"
	},
	{
		country_name: "The Netherlands",
		country_image: "https://cdn.countryflags.com/thumbs/netherlands/flag-square-250.png",
		track_name: "Circuit Zandvoort",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png"
	},
	{
		country_name: "Spain",
		country_image: "https://cdn.countryflags.com/thumbs/spain/flag-square-250.png",
		track_name: "Circuit de Barcelona-Catalunya",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png"
	},
	{
		country_name: "Monaco",
		country_image: "https://cdn.countryflags.com/thumbs/monaco/flag-square-250.png",
		track_name: "Circuit de Monaco",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png"
	},
	{
		country_name: "Azerbaijan",
		country_image: "https://cdn.countryflags.com/thumbs/azerbaijan/flag-square-250.png",
		track_name: "Baku City Circuit",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png.transform/9col/image.png"
	},
	{
		country_name: "Canada",
		country_image: "https://cdn.countryflags.com/thumbs/canada/flag-square-250.png",
		track_name: "Circuit Gilles-Villeneuve",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png"
	},
	{
		country_name: "France",
		country_image: "https://cdn.countryflags.com/thumbs/france/flag-square-250.png",
		track_name: "Circuit Paul Ricard",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/France_Circuit.png"
	},
	{
		country_name: "Austria",
		country_image: "https://cdn.countryflags.com/thumbs/austria/flag-square-250.png",
		track_name: "Spielberg",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/9col/image.png"
	},
	{
		country_name: "Britain",
		country_image: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png",
		track_name: "Silverstone Circuit (Normal)",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png"
	},
	{
		country_name: "Britain",
		country_image: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png",
		track_name: "Silverstone Circuit (Short)",
		image: "https://www.pngfind.com/pngs/m/142-1420031_international-circuit-silverstone-international-circuit-layout-hd-png.png"
	},
	{
		country_name: "Hungary",
		country_image: "https://cdn.countryflags.com/thumbs/hungary/flag-square-250.png",
		track_name: "Hungaroring",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/9col/image.png"
	},
	{
		country_name: "Belgium",
		country_image: "https://cdn.countryflags.com/thumbs/belgium/flag-square-250.png",
		track_name: "Circuit De Spa-Francorchamps",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png"
	},
	{
		country_name: "Italy",
		country_image: "https://cdn.countryflags.com/thumbs/italy/flag-square-250.png",
		track_name: "Autodromo Nazionale Monza",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png"
	},
	{
		country_name: "Singapore",
		country_image: "https://cdn.countryflags.com/thumbs/singapore/flag-square-250.png",
		track_name: "Marina Bay Street Circuit",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png"
	},
	{
		country_name: "Russia",
		country_image: "https://cdn.countryflags.com/thumbs/russia/flag-square-250.png",
		track_name: "Sochi Autodrom",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Russia_Circuit.png"
	},
	{
		country_name: "Japan",
		country_image: "https://cdn.countryflags.com/thumbs/japan/flag-square-250.png",
		track_name: "Suzuka International Racing Course (Normal)",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png"
	},
	{
		country_name: "Japan",
		country_image: "https://cdn.countryflags.com/thumbs/japan/flag-square-250.png",
		track_name: "Suzuka International Racing Course (Short)",
		image: "https://scontent.fbze2-1.fna.fbcdn.net/v/t1.0-9/47018821_2113526582294822_6844857541042634752_n.jpg?_nc_cat=108&ccb=2&_nc_sid=cdbe9c&_nc_ohc=4y09AYG0SGMAX8EWYEM&_nc_ht=scontent.fbze2-1.fna&oh=7b68edc66a47a1221adf6623331c72d3&oe=600CD66E"
	},
	{
		country_name: "USA",
		country_image: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
		track_name: "Circuit of The Americas (Normal)",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png"
	},
	{
		country_name: "USA",
		country_image: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
		track_name: "Circuit of The Americas (Short)",
		image: "https://www.racingcircuits.info/assets/components/phpthumbof/cache/COTA.Short.a06cde7ece8d50c8541455479e1721b2.png"
	},
	{
		country_name: "Mexico",
		country_image: "https://cdn.countryflags.com/thumbs/mexico/flag-square-250.png",
		track_name: "Autódromo Hermanos Rodríguez",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/9col/image.png"
	},
	{
		country_name: "Brazil",
		country_image: "https://cdn.countryflags.com/thumbs/brazil/flag-square-250.png",
		track_name: "Autódromo José Carlos Pace",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png"
	},
	{
		country_name: "Abu Dhabi",
		country_image: "https://cdn.countryflags.com/thumbs/united-arab-emirates/flag-square-250.png",
		track_name: "Yas Marina Circuit",
		image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png"
	},
];

let country_element = document.getElementById("country_element");
let country_img_element = document.getElementById("country_img_element");
let track_element = document.getElementById("track_element");
let image_element = document.getElementById("image_element");

function generate() {
	random_track = Math.floor(Math.random() * tracks.length);

	/* For Testing
	console.log(tracks[random_track].country_name);
	console.log(tracks[random_track].track_name);
	*/

	country_element.innerHTML = tracks[random_track].country_name;
	country_img_element.src = tracks[random_track].country_image;
	track_element.innerHTML = tracks[random_track].track_name;
	image_element.src = tracks[random_track].image;

	random_track = 0;
}