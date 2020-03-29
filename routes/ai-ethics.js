var express = require('express');
var router = express.Router();

const ethicsmeta = {
  h1: 'Helping AI Scientists create systems ethically',
  desc: 'While at IBM Research, I worked with ethnographers and AI scientists to untangle various AI services in effort to expose their inner workings and develop guidelines around how to both build and utilize them ethically.',
};



const ethicspresentations = [
  {
    title: "WHY AI Research Needs Art",
    venue: "TED",
    url: "http://go.ted.com/raphaelarar"
  }
];

const ethicspress = [
  {
    title: "SF Design Week: Designing for classrooms and beyond",
    source: "Clever Blog",
    url: "https://blog.clever.com/2019/10/sf-design-week-designing-for-classrooms-and-beyond/"
  }
];

const ethicspublications = [
  {
    title: "Co-designing AI Futures: Integrating AI Ethics, Social Computing, and Design",
    venue: "Designing Interactive Systems Conference (DIS) 2019",
    url: "https://dl.acm.org/doi/abs/10.1145/3301019.3320000"
  },
  {
    title: "PD Manifesto for AI Futures",
    venue: "Participatory Design Conference (PDC) 2018",
    url: "https://dl.acm.org/citation.cfm?id=3210614"
  },
  {
    title: "Nostalgia: a Human-machine Transliteration",
    venue: "IEEE VisArts Program (VISAP) 2018",
    url: "https://2019.rarar.com/docs/Nostalgia-IEEE-VisArts2018-FINAL.pdf"
  }
];

const ethicsexperiments = [
  {
    name: "Nostalgia",
    type: "Art Research",
    url: "/ai-ethics/nostalgia",
    desc: "If AI will ultimately be a reflection of ourselves, how it understand emotions we can’t describe to one another?",
    img: "/images/nostalgia-main.png"
  },
  {
    name: "Fail Engine",
    type: "Art Research",
    url: "/ai-ethics/fail-engine",
    desc: "What if computers could learn one of our strangest emotions: the tendency to laugh at others' misfortune?",
    img: "/images/fail-engine-main.png"
  }
];



router.get('/', function(req, res, next) {
  res.locals.press = ethicspress;
  res.locals.presentations = ethicspresentations;
  res.locals.patents = "";
  res.locals.publications = ethicspublications;
  res.locals.experiments = ethicsexperiments;
  res.locals.projects = "";
  res.locals.meta = ethicsmeta;
  res.locals.title = 'Raphael Arar';
  res.render('area');
});

router.get('/nostalgia', function(req, res, next) {
  res.locals.h1 = "Nostalgia";
  res.locals.desc = "If AI will ultimately be a reflection of ourselves, how it understand emotions we can’t describe to one another?";
  res.locals.largethumb = "/images/nostalgia-thumb.png";
  res.locals.deets = "<h2>⚒️️ Medium</h2><ul><li>acrylic, steel, modified electronics, various plastic components</li></ul><h2>🕒 Year</h2><ul><li>2017–Present</li></ul><h2>🏛 Venues</h2><ul><li>SLAC National Accelerator Laboratory - Menlo Park, California</li></ul>";
  res.locals.concept = "<p>Nostalgia invites participants to share their stories, and in the process, engage in an inter- and intra-personal conversation about feelings of nostalgia. The installation is designed to ground our conceptual notions of nostalgia in participant interactions. First, participants are asked to enter a story or memory on a keyboard guided by a software user interface. Then, the computer tries to make sense of the story, reflecting its understanding through both a digital visualization and physical embodiment. Light-based sculptures are positioned in front of the keyboard entry pedestal, which change hue based on the nostalgic strength of participants' entries. In other words, through participant actions in the form of storytelling, the algorithmic system converts the qualitative affect of nostalgia to a quantitative digital and physical aesthetic representation. Metadata, like time and occupancy, are captured at the moment of submission to help the system predict the degree of nostalgia for future contributions. Some of the questions the installation seeks to answer are: How can we quantify feelings of nostalgia? Does our sense of nostalgia change as we gain awareness of it in real-time? Are we more likely to be nostalgic when we're around others? Are we humans so alike that we can begin to predict when and how nostalgia might arise?</p><p>When a participant submits a memory, the system computes a nostalgia score/index ranging from 0-100 based on an algorithmic model, which is driven by a machine learning algorithm that was trained with texts classified against the <a href=\"https://www.southampton.ac.uk/nostalgia/the-southampton-nostalgia-scale.page\">Southampton Nostalgia Scale</a> coupled with <a href=\"https://www.ibm.com/watson/services/natural-language-understanding/\">IBM's Natural Language Understanding API</a>. This nostalgia score is largely relative-the aggregate of stories submitted during the exhibition drives its weighting mechanism. As a result, its value serves as a reflection of its community of participants. Once an index has been determined, participants are able to see a visualized breakdown of the pre-defined factors that contributed to the score along with a timestamp and occupancy and virtual visitor. These components along with the written memory act as inputs into a multiple regression model, which attempts to predict how nostalgic the next contribution might be.</p><p>Many people in the Western world are familiar with the idiom \"looking at the world through rose-colored glasses\” (Doyle, 2001), and it has a scientific corollary known as Rosy Retrospection. This notion refers to the tendency for people to remember events and their experiences more fondly or positively than they evaluated them to be at the time of their occurrence (Mitchell, Thompson, Peterson, Cronk, 1997). It is in this vein that the work achieves its visual aesthetic referring literally to the word \"rosy\". Both its digital visualization and set of electro-mechanical sculptures demonstrate aspects of its computational understanding through color; stronger nostalgia scores correspond with rosier hues throughout.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/257528276?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video documentation of the installation</p></div></section><section class="references"><h3>References</h3><ul><li>Charles Clay Doyle. 2001. Seeing through Colored Glasses. Western Folklore 60, 1 (2001), 67-91. DOI:<a href="http://dx.doi.org/10.2307/1500196">http://dx.doi.org/10.2307/1500196</a></li><li>Terence R. Mitchell, Leigh Thompson, Erika Peterson, and Randy Cronk. 1997. Temporal Adjustments in the Evaluation of Events: The "Rosy View". Journal of Experimental Social Psychology 33, 4 (1997), 421-448. DOI:<a href="http://dx.doi.org/10.1006/jesp.1997.1333">http://dx.doi.org/10.1006/jesp.1997.1333</a></li></ul></section>';
  res.locals.title = 'Raphael Arar';
  res.render('art');
});

module.exports = router;
