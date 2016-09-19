
var bio = {
    "name": "Leonel Tejeda",
    "role": "Software Developer",
    "contacts": {
        "mobile": "510-213-3592",
        "email": "leonelhtejeda@gmail.com",
        "github": "@devbuilt",
        "twitter": "@leotejeda",
        "location": "Albany, California, USA",
        "slack": "@devbuilt"
    },
    "welcomeMessage": "An entry-level software development position that utilizes my technical skills, education, business experience and passion for solving interesting problems and transforming complication into simplicity.",
    "skills": ["JavaScript", "jQuery", "HTML", "CSS", "Python", "Software Development", "Test Driven Development"],
    "biopic": "images/leoneltejeda.jpg"

};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLslack.replace("%data%", bio.contacts.slack));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }

}

bio.display();

var education = {
    "schools": [{
        "name": "Heald College",
        "location": "Salinas, California, USA",
        "degree": "Associates Degree",
        "majors": ["Accounting"],
        "dates": "June 2001 - June 2003",
        "url": "www.heald.edu"
    }, {
        "name": "Telegraph Acadamy Prep ",
        "dates": "Dec 2015 - Jan 2016",
        "location": "Berkeley, California, USA",
        "degree": "Intro to Javascript",
        "majors": ["Sofware Development"],
        "url": "http://www.telegraphacademy.com/prep/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "July 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajors = HTMLschoolMajors.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajors);

        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);

                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

var work = {

    "jobs": [{
            "employer": "Freedom Motors",
            "title": "Operations Manager",
            "location": "Freedom, CA, USA",
            "dates": "June 2003 - October 2015",
            "description": "Planed, directed, and coordinated the distribution of automobiles to independent customers. Coordinated sales distribution by establishing sales territories, quotas, and goals. Analyzed sales statistics gathered by staff to determine sales potential and based on inventory and customer preferences."
        }, {
            "employer": "H & R Block",
            "title": "Manager",
            "location": "Salinas, California, USA",
            "dates": "January 2001 - June 2003",
            "description": "Effectively lead and managed 15 tax associates and ensured pleasant client experiences for both new and existing customer. Using effective local marketing, I grew our customer portfolio from 2,000 to 3,500 customers. Implemented continued training for employees as well customized learning experiences in order to increase efficiency and productivity in a pleasant climate."
        }

    ]
};


work.display = function() {
    if (work.jobs.length > 0) {
        for (i in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

work.display();

var projects = {
    "projects": [{
        "title": "Portfolio Page",
        "dates": "May 2016",
        "description": "Created my portfolio page Udacity's Front-End Web Developer " + "Nanodegree.",
        "images": ["images/portfolio.jpg"],
        "url": "https://github.com/devbuilt/portfolioPage.git"
    }, {
        "title": "Animal Trading Cards",
        "dates": "April 2016",
        "description": "Created a Trading Card project of work as part of Udacity's Front-End Web Developer" +
            "Nanodegree.",
        "images": ["images/lion.jpg"],
        "url": "https://github.com/devbuilt/Animal-Trading-Cards.git"
    }, {
        "title": "Mockup To Article",
        "dates": "April 2016",
        "description": "Created a Mockup Article for Udacity's Front-End Web Development Course" + " Nanodegree.",
        "images": ["images/mockup.jpg"],
        "url": "https://github.com/devbuilt/mockupArticle.git"
    }]
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

$(function() {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Skills'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Skills',
            colorByPoint: true,
            data: [{
                name: 'Javascript',
                y: 25.00
            }, {
                name: 'jQuery',
                y: 15.0,
                sliced: true,
                selected: true
            }, {
                name: 'HTML',
                y: 15.00
            }, {
                name: 'CSS',
                y: 15.00
            }, {
                name: 'Software Development',
                y: 15.00
            }, {
                name: 'Test Driven Development',
                y: 15.00
            }]
        }]
    });
});

$("#mapDiv").append(googleMap);