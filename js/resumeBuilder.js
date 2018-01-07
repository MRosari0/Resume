var bio = {
    "name": "Mahariel Rosario",
    "role": "IT and CS Scholar",
    "welcomeMessage": 'Computing technology is a major passion of mine and as part of my morning routine, I dedicate at least an hour to learning something new about it. And, that\'s not including time during and after business hours.<br><br> Becoming my greatest version is the goal I\'ve set for myself. My lifestyle involves using creativity to solve technical challenges in front-end web development, IT infrastructure, networking and security, and I gather information quickly, making myself an expert on your problem.<br><br> I commit 100% focus to projects, goals, plans, despite any crisis or present negative situations. Adding to that, I can teach you how to be a pro at most computer software and how to troubleshoot common problems. I\'ve contributed to a Google Tag Manager user guide and taught two people how to use it.<br><br> Personal development is very important to me and even when faced with negativity and overwhelming odds, I foster an "anything is possible" mindset and belief system. That\'s why I take the time to meditate before 6 am. This enables me to provide curated, high-quality content that will inspire and uplift you as well as gives me a bright smile, warmth, and brings positivity to my environment.',
    "biopic": "images/pro-pic-small.jpg",
    "skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Information Technology", "Git and GitHub", "Data Management", "Responsive Web Design", "GIMP"],
    "contacts": {
        "mobile": "301-367-6178",
        "email": "Mahariel.rosario@gmail.com",
        "github": '<a class="col-6 col-sm-3" href="https://github.com/MRosari0/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>',
        "linkedin": '<a class="col-6 col-sm-3" href="https://www.linkedin.com/in/mahariel/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>',
        "twitter": '<a class="col-6 col-sm-3" href="https://twitter.com/mr0sari0h/" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>',
        "facebook": '<a class="col-6 col-sm-3" href="https://www.facebook.com/mr0sari0h" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>',
        "location": "Hagerstown, MD"
    },
    display: function() {
        var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        //var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        //console.log(formattedGithub);
        //$(formattedGithub).attr("href").replace("#", "https://github.com/MRosari0/");
        //var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        //var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        //$(".flex-item a").css("display", "none");

        $("#footerContacts").append(bio.contacts.linkedin, bio.contacts.github, bio.contacts.twitter, bio.contacts.facebook);
        $("#header").prepend(formattedHTMLheaderName, formattedHTMLheaderRole);
        $("#header").append(formattedBioPic, formattedHTMLwelcomeMsg, HTMLskillsStart);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedLocation);
        bio.skills.forEach(function(skill, num) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[num]);
            $("#skills:last").append(formattedSkill);
        });
    }
}
bio.display();
var work = {
    "jobs": [{
        "employer": "NewMarket Group",
        "dates": "December 2015 to May 2017",
        "title": "Web Marketing Operations Specialist",
        "location": "Baltimore, MD",
        "description": "•Attracted customers to 50+ products and subscriptions by designing web pages using CSS3, HTML5, and jQuery<br><br>•Programed 100% of choice selection scripts every week using JavaScript and jQuery to ensure customers receive correct products and quantities<br><br>•Improved overall site performance and code management by 50% by upgrading more than 50 old versions of code a week to HTML5, CSS3, simplifying existing scripts or creating new ones, and minimizing system failures by doing preventative maintenance and troubleshooting errors in OPIUM or IRIS(e-commerce applications) 10 times every week"
    }, {
        "employer": "Walker & Dunlop",
        "dates": "July 2015 to August 2015",
        "title": "Help Desk Support Technician Intern",
        "location": "Bethesda, MD",
        "description": "•Cared for the business’ technical needs by contributing to the installation and maintenance of  500 computers’ hardware, input/output  and peripheral devices, bimonthly<br><br>•Solved 10 help desk tickets daily using KBOX<br><br>•Provided technical expertise, documentation, and support to users in multiple applications and environments"
    }],
    display: function() {
        work.jobs.forEach(function(mywork, num) {
            $("#workExperience:last").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[num].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[num].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[num].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[num].location);
            var formattedDescripton = HTMLworkDescription.replace("%data%", work.jobs[num].description);
            $(".work-entry:last").append(formattedEmployer, formattedDates, formattedTitle, formattedLocation, formattedDescripton);
        });
    }
}
work.display();
var projects = {
    "projects": [{
        "title": "Portfolio HTML Mockup",
        "dates": "November 2017",
        "description": "I designed a portfolio site using a provided mockup of general design guidelines. This site will host my completed projects made during my studies with Udacity. Once designed, I hand-coded the content using the latest standards of HTML5, CSS3, JS and Bootstrap 3.0.",
        "images": [
            "images/portfolio.png"
        ]
    }, {
        "title": "Responsive Blog",
        "dates": "November 2017",
        "description": "Using a basic HTML template, I created a repsonsive blog that highlights the use of srcset for images, full responsiveness, CSS3 styles, Google Fonts, low performance, images and graphics in SVG, and animated icons using jQuery.",
        "images": [
            "images/blog.png"
        ]
    }, {
        "title": "JavaScript Resume",
        "dates": "January 2018",
        "description": "Using a basic template, I created an online resume that uses JSON to display resume information.",
        "images": [
            "images/resume.png"
        ]
    }],
    display: function() {
        projects.projects.forEach(function(project, num) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[num].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[num].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[num].description);
            var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[num].images);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImages);
        });
    }
}
projects.display();
var education = {
    "schools": [{
        "name": "Northern Virginia Community College",
        "location": "Arlington, VA",
        "degree": "",
        "dates": "January 2015 - July 2015",
        "major": ["IT"]
    }, {
        "name": "Year Up",
        "location": "Arlington, VA",
        "degree": "",
        "dates": "January 2015 - July 2015",
        "major": "Professional and Career Development, Business Communications"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015 to Present",
        "url": "https://www.udacity.com/"
    }],
    display: function() {
        education.schools.forEach(function(school, num) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[num].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[num].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[num].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[num].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[num].major);
            if (education.schools[num].major.includes(",")) {
                formattedSchoolMajor = HTMLschoolMajor.replace("Major", "Majors").replace("%data%", education.schools[num].major);
            }
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName, formattedSchoolDates, formattedSchoolMajor, formattedSchoolLocation);
        });
        $("#onlineCourses").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineSchool, num) {
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[num].school).replace("#", education.onlineCourses[num].url);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[num].title);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[num].dates);
            $("#onlineCourses").append(HTMLonlineStart);
            $(".online-entry:last").append(formattedOnlineSchool, formattedOnlineDates, formattedOnlineTitle);

        });
    }
}
education.display();

//Shows coorinates of user click in the console
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

//Button that coverts name into international version

//$("#main").append(internationalizeButton);

function inName(name) {
    var name = bio.name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);