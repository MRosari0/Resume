const data = '%data%';
const bio = {
    "name": "Mahariel Rosario",
    "role": "IT and CS Scholar",
    "welcomeMessage": "Computing technology is a major passion of mine and as" + " part of my morning routine, I dedicate at least an hour to learning something new about it." + " And, that's not including time during and after business hours.<br><br>" + "Becoming my greatest version is the goal I've set for myself." + " My lifestyle involves using creativity to solve technical challenges in front-end web development" + ", IT infrastructure, networking and security, and I gather information quickly," + " making myself an expert on your problem.<br><br> I commit 100%" + " focus to projects, goals, plans, despite any crisis or present negative situations." + " Adding to that, I can teach you how to be a pro at most computer software" + " and how to troubleshoot common problems. I've contributed to a Google" + " Tag Manager user guide and taught two people how to use it.<br><br>" + "Personal development is very important to me and even when faced with" + " negativity and overwhelming odds, I foster an \"anything is possible\" mindset and" + " belief system. That's why I take the time to meditate before 6 am." + " This enables me to provide curated, high-quality content that will inspire" + " and uplift you as well as it gives me a bright smile, warmth," + " and brings positivity to my environment.",
    "biopic": "images/pro-pic-small.jpg",
    "skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Information Technology", "Git and GitHub", "Data Management", "Responsive Web Design", "GIMP"],
    "contacts": {
        "mobile": "301-367-6178",
        "email": "Mahariel.rosario@gmail.com",
        "github": "<a class=\"col-6 col-sm-3\" href=\"https://github.com/MRosari0/\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>",
        "linkedin": "<a class=\"col-6 col-sm-3\" href=\"https://www.linkedin.com/in/mahariel/\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a>",
        "twitter": "<a class=\"col-6 col-sm-3\" href=\"https://twitter.com/mr0sari0h/\" target=\"_blank\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a>",
        "facebook": "<a class=\"col-6 col-sm-3\" href=\"https://www.facebook.com/mr0sari0h\" target=\"_blank\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>",
        "location": "Hagerstown, MD"
    },
    display: function() {
        const formattedHTMLheaderName = HTMLheaderName.replace(data, bio.name);
        const formattedHTMLheaderRole = HTMLheaderRole.replace(data, bio.role);
        const formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        const formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        const formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        const formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        const formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        $("#footerContacts").append(bio.contacts.linkedin, bio.contacts.github, bio.contacts.twitter, bio.contacts.facebook);
        $("#header").prepend(formattedHTMLheaderName, formattedHTMLheaderRole);
        $("#header").append(formattedBioPic, formattedHTMLwelcomeMsg, HTMLskillsStart);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedLocation);
        bio.skills.forEach(function(skill) {
            const formattedSkill = HTMLskills.replace(data, skill);
            $("#skills:last").append(formattedSkill);
        });
    }
};
bio.display();
const work = {
    "jobs": [{
            "employer": "NewMarket Group",
            "dates": "December 2015 to May 2017",
            "title": "Web Marketing Operations Specialist",
            "location": "Baltimore, MD",
            "description": "•Attracted customers to 50+ products and subscriptions by designing" + " web pages using CSS3, HTML5, and jQuery<br><br>•Programed" + " 100% of choice selection scripts every week using JavaScript" + " and jQuery to ensure customers receive correct products and" + "quantities<br><br>•Improved overall site performance and code management" + " by 50% by upgrading more than 50 old versions of code" + " a week to HTML5, CSS3, simplifying existing scripts or creating new ones," + " and minimizing system failures by doing preventative maintenance and" + " troubleshooting errors in OPIUM or IRIS(e-commerce applications) 10 times every week"
        },
        {
            "employer": "Walker & Dunlop",
            "dates": "July 2015 to August 2015",
            "title": "Help Desk Support Technician Intern",
            "location": "Bethesda, MD",
            "description": "•Cared for the business’ technical needs by contributing to the installation" + " and maintenance of 500 computers’ hardware, input/output" + " and peripheral devices, bimonthly<br><br>•Solved 10 help desk" + " tickets daily using KBOX<br><br>•Provided technical expertise," + " documentation, and support to users in multiple applications and environments"
        }
    ],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience:last").append(HTMLworkStart);
            const formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
            const formattedTitle = HTMLworkTitle.replace(data, job.title);
            let employerTitle = formattedTitle + formattedEmployer;
            const formattedDates = HTMLworkDates.replace(data, job.dates);
            const formattedLocation = HTMLworkLocation.replace(data, job.location);
            const formattedDescripton = HTMLworkDescription.replace(data, job.description);
            $(".work-entry:last").append(formattedEmployer, formattedDates, formattedTitle, formattedLocation, formattedDescripton);
        });
    }
};
work.display();
const projects = {
    "projects": [{
            "title": "Portfolio HTML Mockup",
            "dates": "November 2017",
            "description": "I designed a portfolio site using a provided mockup of general design guidelines." + " This site will host my completed projects made during my studies with Udacity." + " Once designed, I hand-coded the content using the latest standards of HTML5, CSS3, JS and Bootstrap 3.0.",
            "images": [
                "images/portfolio.png"
            ]
        },
        {
            "title": "Responsive Blog",
            "dates": "November 2017",
            "description": "Using a basic HTML template, I created a repsonsive blog that highlights" + " the use of srcset for images, full responsiveness, CSS3 styles, Google Fonts, low performance," + " images and graphics in SVG, and animated icons using jQuery.",
            "images": [
                "images/blog.png"
            ]
        },
        {
            "title": "JavaScript Resume",
            "dates": "January 2018",
            "description": "Using a basic template, I created an online resume that uses JSON to display resume information.",
            "images": [
                "images/resume.png"
            ]
        }
    ],
    display: function() {
        projects.projects.forEach(function(project) {
            const formattedProjectTitle = HTMLprojectTitle.replace(data, project.title);
            const formattedProjectDates = HTMLprojectDates.replace(data, project.dates);
            const formattedProjectDescription = HTMLprojectDescription.replace(data, project.description);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
            project.images.forEach(function(image) {
                let formattedProjectImages = HTMLprojectImage.replace(data, image);
                $(".project-entry:last").append(formattedProjectImages);
            });
        });
    }
};
projects.display();
const education = {
    "schools": [{
            "name": "Northern Virginia Community College",
            "location": "Arlington, VA",
            "degree": "",
            "dates": "January 2015 - July 2015",
            "majors": ["Information Technology"]
        },
        {
            "name": "Year Up",
            "location": "Arlington, VA",
            "degree": "",
            "dates": "January 2015 - July 2015",
            "majors": ["Professional and Career Development", " Business Communications"]
        }
    ],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015 to Present",
        "url": "https://www.udacity.com/"
    }],
    display: function() {
        education.schools.forEach(function(school) {
            const formattedSchoolName = HTMLschoolName.replace(data, school.name);
            const formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
            const formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
            const formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
            const formattedSchoolMajor = HTMLschoolMajor.replace(data, school.majors);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName, formattedSchoolDates, formattedSchoolMajor, formattedSchoolLocation);
        });
        $("#onlineCourses").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            const formattedOnlineSchool = HTMLonlineSchool.replace(data, onlineCourse.school).replace("#", onlineCourse.url);
            const formattedOnlineTitle = HTMLonlineTitle.replace(data, onlineCourse.title);
            const formattedOnlineDates = HTMLonlineDates.replace(data, onlineCourse.dates);
            $("#onlineCourses").append(HTMLonlineStart);
            $(".online-entry:last").append(formattedOnlineSchool, formattedOnlineDates, formattedOnlineTitle);

        });
    }
};
education.display();

$(function() {
    //Singularization
    $(".major").text(function(index, text) {
        if (text.indexOf(',') === -1) {
            return text.replace("Majors", "Major");
        }
    });
    //Swap element positions
    if ($(window).width() < 576) {
        $(".work-entry").each(function(index) {
            const workTitle = $(this).find($(".workTitle"));
            const dateText = $(this).find($(".date-text"));
            dateText.before(workTitle);
        });
    }
    //hide empty sections
    if ($(".flex-item, h1, .work-entry, .project-entry, .education-entry, .online-entry").length === 0) {
        $(this).css("display", "none");
    } else if ($("#map") === null) {
        $("mapDiv").css("display", "none");
    }
    //show Google Maps API
    $("#mapDiv").append(googleMap);
    //Shows coorinates of user click in the console
    $(document).click(function(loc) {
        const x = loc.pageX;
        const y = loc.pageY;
        logClicks(x, y);
    });
    // //Button that coverts name into international version

    // //$("#main").append(internationalizeButton);

    // function inName(name) {
    //     let intlName = bio.name.trim().split(" ");
    //     intlName[0] = intlName[0].slice(0, 1).toUpperCase() + intlName[0].slice(1).toLowerCase();
    //     intlName[1] = intlName[1].toUpperCase();
    //     return intlName[0] + " " + intlName[1];
    // }
});