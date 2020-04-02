var express = require('express');
var router = express.Router();

const conversationmeta = {
  h1: 'Codifying the discipline of Conversational UX',
  desc: 'At IBM Research, I partnered with a Sociologist to establish a set of guidelines and prototypes for how to work with conversational agents.',
};



const conversationpresentations = [
  {
    title: "5 things designers can learn from classrooms",
    venue: "Layers 2019",
    url: "#"
  }
];

const conversationpress = [
  {
    title: "Conversation Guidelines",
    source: "IBM Design for AI",
    url: "https://www.ibm.com/design/ai/conversation/"
  }
];

const conversationpublications = [
  {
    title: "Conversational UX Design: A Practitioner's Guide to the Natural Conversation Framework",
    venue: "ACM Books",
    url: "https://dl.acm.org/doi/book/10.1145/3304087"
  },
  {
    title: "Studies in Conversational UX Design",
    venue: "Springer",
    url: "https://link.springer.com/book/10.1007/978-3-319-95579-7"
  },
  {
    title: "Conversation Guidelines",
    venue: "IBM Design for AI",
    url: "https://www.ibm.com/design/ai/conversation/"
  },
  {
    title: "Conversational UX Design",
    venue: "ACM Conference on Human Factors in Computing Systems (CHI) 2017",
    url: "https://dl.acm.org/doi/10.1145/3027063.3027077"
  }
];


const conversationprojects = [
  {
    name: "IBM Travel Concierge",
    type: "Prototype",
    url: "/conversation/travel-concierge",
    desc: "A prototype exploring the next era of travel shopping through the combination of a traditional online experience and a conversational agent.",
    img: "/images/placeholder.png"
  }
];

const conversationexperiments = [
  {
    name: "bot2bot",
    type: "Art Research",
    url: "/conversation/bot2bot",
    desc: "What happens when you place one conversational agent against another and exposing the dialogue?",
    img: "/images/placeholder.png"
  }
];



router.get('/map', function(req, res, next) {

  res.render('project');
});


router.get('/', function(req, res, next) {
  res.locals.press = "";
  res.locals.presentations = "";
  res.locals.patents = "";
  res.locals.publications = conversationpublications;
  res.locals.experiments = conversationexperiments;
  res.locals.projects = conversationprojects;
  res.locals.meta = conversationmeta;
  res.locals.title = 'Raphael Arar';
  res.render('area');
});

module.exports = router;