var name = "Tommy Alsup";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio = {
"name" : "Tommy " ,
"role" : "Web Developer ",
"contact" :  "tommyalsup@gmail.com ",
"message" : "Welcome to my portfolio! ",
"location" : "Rochester, NY",
"phone" : "585-555-5555",
"biopic" : "images/fry.jpg",
"skills" : [
"awesomness", " snowboarding", " sleeping", " html"
]
};

var contacts = {

    "location": "Rochester, NY"
}

    var formattedMobile = HTMLmobile.replace("%data%", bio.phone);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contact);
    $("#topContacts").append(formattedEmail);
    var formattedLocation = HTMLlocation.replace("%data%", bio.location);
    $("#topContacts").append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#topContacts").prepend(formattedBioPic);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    

var education = {
	"school": [
	{ 
		"name" : "Palmyra-Macedon High School",
		"city" : "Palmyra, NY",
		"degree" : "High School Diploma",
	}
    ],
    "onlineCourses" : [
    {
    	"title": "Javascript Crash Course",
    	"school": "Udacity",
    	"dates": 2015,
    	"url": "https://www.udacity.com",
    }
    ]
}

    $("#education").append(HTMLschoolStart)
    var formattedName = HTMLschoolName.replace("%data%", education.school[0].name);
    $("#education .education-entry").append(formattedName);
    var formattedCity = HTMLschoolLocation.replace("%data%", education.school[0].city);
    $("#education .education-entry").append(formattedCity);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[0].degree);
    $("#education .education-entry").append(formattedDegree);

    $("#education").append(HTMLonlineClasses)
    $("#education").append(HTMLschoolStart)
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
    $("#education .education-entry").last().append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
    $("#education .education-entry").last().append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
    $("#education .education-entry").last().append(formattedDates);
    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);
    $("#education .education-entry").last().append(formattedUrl);

var work = {
	"jobs":[ 
	{
		"employer": "Mcdonalds",
		"title": "Fry Cook",
		"dates": "March 2014-October 2014",
        "description" : "Cooking food, preparing food, washing dishes, and keeping the kitchen clean."
	},

	{
		"employer": "Bristol Mountain",
		"title": "Bus Boy",
		"dates": "February 2015-March 2015",
        "description": "Washing dishes and tables, as well as keeping the lounge clean."
	}	
	]
}
	$("#workExperience").append(HTMLworkStart)
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
    $("#workExperience .work-entry").append(formattedEmployer + formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
    $("#workExperience .work-entry").append(formattedDates)
    var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[0].description);
    $("#workExperience .work-entry").append(formattedDescription);


    $("#workExperience").append(HTMLworkStart)
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[1].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[1].title);
    $("#workExperience .work-entry").eq(1).append(formattedEmployer + formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[1].dates);
    $("#workExperience .work-entry").eq(1).append(formattedDates);
    var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[1].description);
    $("#workExperience .work-entry").eq(1).append(formattedDescription);
    
var projects = {
	"projects":
	{	"title": "Sample Project 1",
		"dates": "2015",
        "image" : "images/Screenshot.png"
	}

}

    $("#projects").append(HTMLprojectStart)
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
    $("#projects .project-entry").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
    $("#projects .project-entry").append(formattedDates);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects.image);
    $("#projects .project-entry").append(formattedProjectImage);


  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    $("#skills").append(formattedSkills);
}




 function inName(name) {
    name= name.trim().split("");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toLowerCase();

    return name[0] +""+name[1];
}


 $("#mapDiv").append(googleMap);