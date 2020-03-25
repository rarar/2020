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



// router.get('/cbm', function(req, res, next) {
//   res.locals.h1 = "CBM.next";
//   res.locals.desc = "This internal IBM product helped experienced strategy and transformation consultants model and visualize their clients’ organizational structures in effort to help them restructure and optimize their enterprises.";
//   res.locals.largethumb = "/images/CBM-large.png";
//   res.locals.deets = "<h2>❤️ Users</h2><ul><li>Experienced IBM Strategy & Transformation Consultants</li></ul><h2>🏢 Employer</h2><ul><li>IBM Research / IBM Services</li></ul><h2>💼 Role</h2><ul><li>Product Design Lead</li></ul><h2>👥 Team</h2><ul><li>1 Design Technologist </li><li>5 Software Engineers</li><li>1 Product Manager </li><li>2 Data Scientists</li></ul><h2>✅ Responsibilities</h2><ul><li>Product design including user research, interaction design, visual design and prototyping</li><li>Design Thinking workshop facilitation</li><li>Client management</li><li>Strategy & leadership</li></ul>";
//   res.locals.problemStatement = "<p>The Component Business Model (CBM) is an advanced ideology developed by IBM to enable strategy consultants to better assist their clients. CBM’s framework is one of strategic management where opportunities for improvement or innovation in an organization can be easily identified and dealt with smartly.</p><p>Early on, we encountered a serious setback with the existing software, integral to the framework. To start, the pre-existing software to support the framework was PC-only and it required users to go through a painstaking download process. It also had significant user experience hurdles including an inability for users to collaborate, outdated content harmonization and cumbersome presenting tools.</p><p>This kickstarted a joint initiative between my team within IBM Research and our Global Business Services strategy team to redesign the CBM software so that it was cloud-enabled and optimized for remote collaboration to enable users to perform their consulting jobs better and from any location.</p><section class='image-block'><figure><img src='/images/cbm-old-1.png'/><figcaption>View of the existing CBM software showing a custom heat map for a government client</figcaption></figure><figure><img src='/images/cbm-old-2.png' /><figcaption>View of the existing CBM software showing a default template and export options</figcaption></figure></section>";
//   res.locals.processSolution = "<p>My team and I utilized IBM Design Thinking to really understand our users’ needs and wants. Due to the complexity of the CBM framework and tooling, I led the interview process starting with some of the most advanced and knowledgeable Strategy & Transformation consultants within the company. This led us to the creation of our first persona Paul Sanchez, which in turn directed us to craft three hills, our desired outcomes. After checking in with our sponsor users and stakeholders, we then kicked off design sprints in tandem with Agile development sprints. Our sprints were scheduled with frequent playbacks to ensure we were on target.</p><section class='image-block'><figure><img src='/images/cbm-sketch-1.png' /><figcaption>Early sketches of the Project Dashboard</figcaption></figure><figure><img src='/images/cbm-sketch-2.png' /><figcaption>Create new project assistant flow</figcaption></figure></section><p>Following a structured design process, every sprint involved in a user scenario that our team ranked in priority based on user needs. These scenarios ranged from \“finding a CBM model\” to \“creating a new project\” and \“adding a collaborator\”. The designs were first collaboratively sketched out and then digitally-designed. Once the designs were approved, these scenarios would be incorporated into the development plan.</p><section class='jumbo'><div class='img-container'><img src='/images/cbm-detail-1.png' /></div><div class='detail'><p>Detail of a business component.</p><p>In this view, a user has access to  insights driven by a machine learning algorithm that leverage IBM’s data lake of content on a particular client.</p></div></section>";
//   res.locals.title = 'Raphael Arar';
//   res.render('project');
// });


router.get('/', function(req, res, next) {
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
