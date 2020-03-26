var express = require('express');
var router = express.Router();

const kameta = {
  h1: 'Personalizing classroom learning',
  desc: 'In my current role at Khan Academy, I’ve been focusing on the future of personalized education in the classroom. Here are a few case studies of shipped work and related links that dive in deeper.',
};



const kapresentations = [
  {
    title: "5 things designers can learn from classrooms",
    venue: "Layers 2019",
    url: "#"
  }
];

const kapress = [
  {
    title: "SF Design Week: Designing for classrooms and beyond",
    source: "Clever Blog",
    url: "https://blog.clever.com/2019/10/sf-design-week-designing-for-classrooms-and-beyond/"
  }
];


const kaprojects = [
  {
    name: "MAP Accelerator",
    type: "Product Design",
    url: "/ka/map",
    desc: "The flagship product from Khan Academy’s partnership with NWEA that integrates diagnostic test score data to provide teachers with personalized content for each and every student.",
    img: "/images/placeholder.png"
  },
  {
    name: "Mastery Challenges",
    type: "Feature Release",
    url: "/ka/map",
    desc: "One of the best ways to fill in learning gaps is to consistently review material students have seen before—teachers call this “Spiral Review”.  Learn how we incorporated this feature into Khan Academy.",
    img: "/images/placeholder.png"
  }
];

const kaexperiments = [
  {
    name: "Khantent Blocker",
    type: "Discursive Design",
    url: "/ka/khantent-blocker",
    desc: "The flagship product from Khan Academy’s partnership with NWEA that integrates diagnostic test score data to provide teachers with personalized content for each and every student.",
    img: "/images/placeholder.png"
  }
];



router.get('/map', function(req, res, next) {

  res.render('project');
});


router.get('/', function(req, res, next) {
  res.locals.press = kapress;
  res.locals.presentations = kapresentations;
  res.locals.patents = "";
  res.locals.publications = "";
  res.locals.experiments = kaexperiments;
  res.locals.projects = kaprojects;
  res.locals.meta = kameta;
  res.locals.title = 'Raphael Arar';
  res.render('area');
});

module.exports = router;
