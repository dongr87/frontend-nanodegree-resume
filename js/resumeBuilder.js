var bio = {
  "name": "Dong Wang",
  "role": "Web Developer",
  "contacts": {
    "mobile": "1234567890",
    "email": "mtwcore@gmail.com",
    "github": "github.com/dongr87",
    "location": "Boston",
    "twitter": "@cicicore"
  },
  "bioPic": "http://vignette3.wikia.nocookie.net/nintendo/images/1/12/1upshroom.png/revision/latest?cb=20080812195802&path-prefix=en",
  "welcomeMessage": "Where the wind blows.",
  "skills": ["python", "html", "css", "javascript"]
};

var work = {
  "jobs": [
    {
      "title": "web developer",
      "employer": "Giantbug Education",
      "dates": "2015",
      "location": "Cambridge, MA"
    },
    {
      "title": "software consultant",
      "employer": "Bentley University",
      "dates": "2015",
      "location": "Waltham, MA"
    },
    {
      "title": "System Developer",
      "employer": "Haiyi Software Company",
      "dates": "2013-2014",
      "location": "Yantai, China"
    }
    ]
};

var education = {
  "schools": [
    {
      "name": "Bentley University",
      "city": "Waltham, MA, US",
      "degree": "Masters",
      "major": "Information Technology",
      "minor": "web development",
      "graduationYear": "2015"
    },
    {
      "name": "SUIBE",
      "city": "Shanghai, China",
      "degree": "BA",
      "major": "Economics",
      "minor": null,
      "graduationYear": "2013"
    }],
  "onlineCourses": [
    {
      "title": "Web Development",
      "school": "Udacity",
      "dates": "Feb-2016",
      "url": "http://www.udacity.com/courses/cs253"
    }]
};

var projects = {
  "projects": [
    {
      "title": "Database design and development for a teching institute",
      "dates": "Sep-Nov, 2014",
      "description": "Designed database and did system modeling for computer applications traning institute using Oracle SQL developer",
      "images": [
        "http://placehold.it/400x300",
        "http://placehold.it/400x300",
        "http://placehold.it/400x300"]
    },
    {
      "title": "Trip Planner",
      "dates": "Jan-May, 2015",
      "description": "Developed an Android app for travelers to organize their schedule with team of 4",
      "images": [
        "http://placehold.it/400x300",
        "http://placehold.it/400x300"]
    }]
};

function putOnResume(location, data, formatter, placeholder) {
  var formattedData = formatter.replace(placeholder, data);
  $(location).append(formattedData);
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


putOnResume("#header", bio.bioPic, HTMLbioPic, "%data%");

putOnResume("#header", bio.welcomeMessage, HTMLwelcomeMsg, "%data%");

// Add contacts from contacts obj
for(contact in bio.contacts) {
  var type = contact;
  var data = bio.contacts[contact];
  var contactInfo = HTMLcontactGeneric.replace("%contact%", type).replace("%data%", data);
  $("#topContacts").append(contactInfo);
}

// Add skill list from skills list
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for(i=0; i<bio.skills.length; i++) {
    putOnResume("#skills", bio.skills[i], HTMLskills, "%data%")
  }
}

// Add job from work obj
for(job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  $(".work-entry:last").append(formattedEmployer + formattedTitle);

  putOnResume(".work-entry:last", work.jobs[job].dates, HTMLworkDates, "%data%");
  putOnResume(".work-entry:last", work.jobs[job].location, HTMLworkLocation, "%data%");
}
// tips for selecting the right element:
// work.jobs

var locationizer = function(work_obj) {
  var locationArray = [];
  for(job in work_obj.jobs) {
    var location = work_obj.jobs[job].location;
    locationArray.push(location);
  }
  return locationArray;
};

var inName = function(name) {
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name = name.join(" ");
  return name;
}

$("#main").append(internationalizeButton);

projects.display = function() {
  for(project in this.projects) {
    $("#projects").append(HTMLprojectStart);

    putOnResume(".project-entry:last", this.projects[project].title, HTMLprojectTitle, "%data%");
    putOnResume(".project-entry:last", this.projects[project].dates, HTMLprojectDates, "%data%");
    putOnResume(".project-entry:last", this.projects[project].description, HTMLprojectDescription, "%data%");

    for (image in this.projects[project].images) {
      putOnResume(".project-entry:last", this.projects[project].images[image], HTMLprojectImage, "%data%");
    }
  }
}

projects.display();

$("#mapDiv").append(googleMap);
