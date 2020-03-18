var express = require('express');
var router = express.Router();

const mlaimeta = {
  h1: 'Creating user experiences driven by machine learning',
  desc: 'While at IBM and prior, I led design for a series of products, working prototypes and experiments that explored the possibilities of data science and design.',
};

const mlaipublications = [
  {
    title: "Applying User-Centered Design to Business Modeling: CBM.next as a Case Study",
    venue: "IEEE 20th Conference on Business Informatics (CBI) 2018",
    url: "https://ieeexplore.ieee.org/abstract/document/8453951"
  },
  {
    title: "Using Energy Storage to Modify the Shape of Internally Generated Demand to Fit a Prescribed Shape for Externally Presented Demand",
    venue: "IEEE International Conference on Services Computing (SCC) 2018",
    url: "https://ieeexplore.ieee.org/abstract/document/8456432"
  },
  {
    title: "Early Future Technology: Using Artificial Intelligence to Manage Design-driven Intellectual Property",
    venue: "IEEE PICMET 2017",
    url: "https://ieeexplore.ieee.org/document/8125332"
  },
  {
    title: "Wayfinding (Extended Abstract)",
    venue: "ACM CHI 2017",
    url: "https://dl.acm.org/doi/10.1145/3027063.3052543"
  },
  {
    title: "(+/-) Pendulum: Location in the Information Age",
    venue: "ISEA 2014",
    url: "http://www.isea-archives.org/isea2014-presentations-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-3-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-210/"
  },
  {
    title: "Participatory Data-Driven Art Objects: Vessels for Kinetic Information",
    venue: "xCoAx 2014",
    url: "http://2014.xcoax.org/pdf/xcoax2014-Arar.pdf"
  },
  {
    title: "Anatomical Analogies: the Evolution of Harmony and Noise in Relation to the Self and Society",
    venue: "MFA Thesis - California Institute of the Arts",
    url: "https://mtiid.calarts.edu/wp-content/uploads/2016/09/rarar_mfa_2014.pdf"
  },
  {
    title: "A History of Sequencers: Interfaces for Organizing Pattern-based Music",
    venue: "SMC/SMAC 2013",
    url: "https://zenodo.org/record/850188#.XnFiyi2ZNmA"
  }
];

const mlaipatents = [
  {
    title: "Context aware user interface",
    id: "US10452410",
    url: "https://patents.google.com/patent/US20180113586A1/"
  },
  {
    title: "Providing force input to an application",
    id: "US10318144B2",
    url: "https://patents.google.com/patent/US10318144B2/"
  },
  {
    title: "Stabilizing consumer energy demand",
    id: "US20180323643A1",
    url: "https://patents.google.com/patent/US20180323643A1/"
  },
  {
    title: "Managing consumer energy demand",
    id: "US20200006943A1",
    url: "https://patents.google.com/patent/US20200006943A1/"
  },
  {
    title: "Cognitive role-based policy assignment and user interface modification for mobile electronic devices",
    id: "US20200007411A1",
    url: "https://patents.google.com/patent/US20200007411A1/"
  }
];

const mlaipresentations = [
  {
    title: "Cognitive Creative Practices",
    venue: "The Tech Museum",
    url: "https://patents.google.com/patent/US20180113586A1/"
  }
];

const mlaipress = [
  {
    title: "Why Today’s Designers are Different",
    source: "Inc. Magazine",
    url: "https://www.inc.com/yazin-akkawi/how-technology-has-given-design-a-new-meaning.html"
  },
  {
    title: "This IBM researcher integrates science, math and art in his work",
    source: "Silicon Valley Business Journal",
    url: "https://www.bizjournals.com/sanjose/news/2017/02/09/this-ibm-researcher-integrates-science-math-and.html"
  },
  {
    title: "10 ways that IT pros and developers can keep their tech skills up to date",
    source: "TechRepublic",
    url: "https://www.techrepublic.com/article/10-ways-that-it-pros-and-developers-can-keep-their-tech-skills-up-to-date/"
  }
];


const mlaiprojects = [
  {
    name: "CBM.next",
    type: "Product Design",
    url: "/ml-ai/cbm",
    desc: "This internal IBM product helped experienced strategy and transformation consultants model and visualize their clients’ organizational structures in effort to help them restructure and optimize their enterprises.",
    img: "/images/placeholder.png"
  },
  {
    name: "IBM Travel Manager",
    type: "Product Design",
    url: "/ml-ai/travel-manager",
    desc: "Big enterprises spend enormous sums of money on business travel, and global procurement officers still track expenditure manually. This product was conceived to not only help procurement teams visualize spend data, but also to identify savings opportunities and negotiate discounts with vendors.",
    img: "/images/placeholder.png"
  },
  {
    name: "IBM Travel Concierge",
    type: "Prototype",
    url: "/ml-ai/travel-concierge",
    desc: "IBM employees travel a lot for business. How can we help help them aggregate their travel itineraries, explore new destinations and connect them with other colleagues while they’re in new destinations? This prototype served to be a nuanced, data-driven travel companion during business trips.",
    img: "/images/placeholder.png"
  }
];

const mlaiexperiments = [
  {
    name: "Wayfinding",
    type: "Art Research",
    url: "/ml-ai/wayfinding",
    desc: "Can computers learn to be intuitive? This art installation served as an aesthetic experiment in the direct translation of computational intuition to the physical space.",
    img: "/images/placeholder.png"
  },
  {
    name: "(+/-) Pendulum",
    type: "Art Research",
    url: "/ml-ai/pendulum",
    desc: "What does location mean in the information age? Using the mechanics of the Foucault Pendulum, this installation explores the physical and digital concepts of location.",
    img: "/images/placeholder.png"
  }
];


/* GET users listing. */
router.get('/ml-ai', function(req, res, next) {
  res.locals.projects = mlaiprojects;
  res.locals.meta = mlaimeta;
  res.locals.experiments = mlaiexperiments;
  res.locals.publications = mlaipublications;
  res.locals.patents = mlaipatents;
  res.locals.presentations = mlaipresentations;
  res.locals.press = mlaipress;
  res.locals.title = 'Raphael Arar';
  res.render('area');
});

module.exports = router;
