import App from './App.svelte';
import './global/global.scss'

const app = new App({
	target: document.body,
	props: {
		"basics": {
			"name": "Pierre-Mike",
			"label": "Developer",
			"picture": "",
			"email": "pm.lemeliner@gmail.com",
			"phone": "(206) 880-0036",
			"website": null,
			"summary": "I’m an experienced and proactive software engineer that will integrate quickly to your needs.",
			"location": {
				"address": "1509 31st avenue",
				"postalCode": "WA 98144",
				"city": "Seattle",
				"countryCode": "US",
				"region": "Washington"
			},
			"profiles": [{
				"network": "Github",
				"username": "Pierre-Mike",
				"url": "https://github.com/Pierre-Mike"
			}]
		},
		"work": [{
			"company": "Logic2020",
			"position": "Developer",
			"website": "https://www.logic2020.com/",
			"startDate": "2018-09-01",
			"endDate": null,
			"summary": "Description...",
			"highlights": [
				"Started the company"
			]
		},{
			"company": "CGI, France",
			"position": "Junior Developer",
			"website": "https://www.logic2020.com/",
			"startDate": "2015-08-01",
			"endDate": "2018-05-01",
			"summary": "",
			"highlights": [
				"Started the company"
			]
		},{
			"company": "CGI, France",
			"position": "Junior Developer",
			"website": "https://www.logic2020.com/",
			"startDate": "2015-08-01",
			"endDate": "2018-05-01",
			"summary": "",
			"highlights": [
				"Started the company"
			]
		}],
		"volunteer": [{
			"organization": "Organization",
			"position": "Volunteer",
			"website": "http://organization.com/",
			"startDate": "2012-01-01",
			"endDate": "2013-01-01",
			"summary": "Description...",
			"highlights": [
				"Awarded 'Volunteer of the Month'"
			]
		}],
		"education": [{
			"institution": "University",
			"area": "Software Development",
			"studyType": "Bachelor",
			"startDate": "2011-01-01",
			"endDate": "2013-01-01",
			"gpa": "4.0",
			"courses": [
				"DB1101 - Basic SQL"
			]
		}],
		"awards": [{
			"title": "Award",
			"date": "2014-11-01",
			"awarder": "Logic2020",
			"summary": "Get a award about for"
		}],
		"publications": [{
			"name": "Publication",
			"publisher": "Company",
			"releaseDate": "2014-10-01",
			"website": "http://publication.com",
			"summary": "Description..."
		}],
		"skills": [{
			"name": "Web Development",
			"level": "Master",
			"keywords": [
				"HTML",
				"CSS",
				"Javascript",
				"ES6",
				"nodeJS",
				"node"
			]
		}],
		"languages": [{
			"language": "English",
			"fluency": "fluent"
		},{
			"language": "French",
			"fluency": "Native speaker"
		}],
		"interests": [{
			"name": "Rugby",
			"keywords": [
				"Community",
				"Team",
				"perseverance",
				"leader",
				"teach"
			]
		},{
			"name": "Dev",
			"keywords": [
				"Passion",
				"Innovation",
				"Rigour",
				"Learn",
				"exchange"
			]
		}],
		"references": [{
			"name": "Jane Doe",
			"reference": "Reference..."
		}]
	}
});

export default app;
