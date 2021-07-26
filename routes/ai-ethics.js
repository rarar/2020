var express = require('express');
var router = express.Router();

const ethicsmeta = {
  h1: 'Helping AI Scientists create systems ethically',
  desc: 'While at IBM Research, I began working with ethnographers and AI scientists to untangle various AI services in effort to expose their inner workings and develop guidelines around how to both build and utilize them ethically. Since moving on, my inquiries in this space have continued.',
};



const ethicspresentations = [
  {
    title: "WHY AI Research Needs Art",
    venue: "TED",
    url: "http://go.ted.com/raphaelarar"
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
    desc: "If AI will ultimately be a reflection of ourselves, how can it understand emotions we can’t describe to one another?",
    img: "/images/nostalgia-main.png"
  },
  {
    name: "Vibes",
    type: "Art Research",
    url: "/ai-ethics/vibes",
    desc: "What's the overall vibe of your browsing activity? A commentary on both doomscrolling culture as well as the advancements and perceived accuracy of emerging developments in affective computing.",
    img: "/images/vibes-main.png"
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
  res.locals.desc = "If AI will ultimately be a reflection of ourselves, how can it understand emotions we can’t describe to one another?";
  res.locals.largethumb = "/images/nostalgia-thumb.png";
  res.locals.deets = "<h2>Medium</h2><ul><li>acrylic, steel, modified electronics, various plastic components</li></ul><h2>Year</h2><ul><li>2017–Present</li></ul><h2>Venues</h2><ul><li>SLAC National Accelerator Laboratory - Menlo Park, California</li><li>IEEE VisArts 2018 - Berlin, Germany</li></ul>";
  res.locals.concept = "<p>Nostalgia invites participants to share their stories, and in the process, engage in an inter- and intra-personal conversation about feelings of nostalgia. The installation is designed to ground our conceptual notions of nostalgia in participant interactions. First, participants are asked to enter a story or memory on a keyboard guided by a software user interface. Then, the computer tries to make sense of the story, reflecting its understanding through both a digital visualization and physical embodiment. Light-based sculptures are positioned in front of the keyboard entry pedestal, which change hue based on the nostalgic strength of participants' entries. In other words, through participant actions in the form of storytelling, the algorithmic system converts the qualitative affect of nostalgia to a quantitative digital and physical aesthetic representation. Metadata, like time and occupancy, are captured at the moment of submission to help the system predict the degree of nostalgia for future contributions. Some of the questions the installation seeks to answer are: How can we quantify feelings of nostalgia? Does our sense of nostalgia change as we gain awareness of it in real-time? Are we more likely to be nostalgic when we're around others? Are we humans so alike that we can begin to predict when and how nostalgia might arise?</p><p>When a participant submits a memory, the system computes a nostalgia score/index ranging from 0-100 based on an algorithmic model, which is driven by a machine learning algorithm that was trained with texts classified against the <a href=\"https://www.southampton.ac.uk/nostalgia/the-southampton-nostalgia-scale.page\">Southampton Nostalgia Scale</a> coupled with <a href=\"https://www.ibm.com/watson/services/natural-language-understanding/\">IBM's Natural Language Understanding API</a>. This nostalgia score is largely relative-the aggregate of stories submitted during the exhibition drives its weighting mechanism. As a result, its value serves as a reflection of its community of participants. Once an index has been determined, participants are able to see a visualized breakdown of the pre-defined factors that contributed to the score along with a timestamp and occupancy and virtual visitor. These components along with the written memory act as inputs into a multiple regression model, which attempts to predict how nostalgic the next contribution might be.</p><p>Many people in the Western world are familiar with the idiom \"looking at the world through rose-colored glasses\” (Doyle, 2001), and it has a scientific corollary known as Rosy Retrospection. This notion refers to the tendency for people to remember events and their experiences more fondly or positively than they evaluated them to be at the time of their occurrence (Mitchell, Thompson, Peterson, Cronk, 1997). It is in this vein that the work achieves its visual aesthetic referring literally to the word \"rosy\". Both its digital visualization and set of electro-mechanical sculptures demonstrate aspects of its computational understanding through color; stronger nostalgia scores correspond with rosier hues throughout.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/257528276?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video documentation of the installation</p></div></section><section class="references"><h3>References</h3><ul><li>Charles Clay Doyle. 2001. Seeing through Colored Glasses. Western Folklore 60, 1 (2001), 67-91. DOI:<a href="http://dx.doi.org/10.2307/1500196">http://dx.doi.org/10.2307/1500196</a></li><li>Terence R. Mitchell, Leigh Thompson, Erika Peterson, and Randy Cronk. 1997. Temporal Adjustments in the Evaluation of Events: The "Rosy View". Journal of Experimental Social Psychology 33, 4 (1997), 421-448. DOI:<a href="http://dx.doi.org/10.1006/jesp.1997.1333">http://dx.doi.org/10.1006/jesp.1997.1333</a></li></ul></section>';
  res.locals.title = 'Nostalgia - Raphael Arar';
  res.render('art');
});

router.get('/fail-engine', function(req, res, next) {
  res.locals.h1 = "Fail Engine";
  res.locals.desc = "What if computers could learn one of our strangest emotions: the tendency to laugh at others' misfortune?";
  res.locals.largethumb = "/images/fail-engine-thumb.png";
  res.locals.deets = "<h2>Medium️</h2><ul><li>net art</li></ul><h2>Year</h2><ul><li>2019—Present</li></ul><h2>Venues</h2><ul><li>Aurum Ideas Factory - Pescara, Italy</li></ul>";
  res.locals.concept = "<p>Fail Engine is an aesthetic experiment that explores the intersection of emotion and artificial intelligence, particularly the complicated feeling of <a href=\"https://en.wikipedia.org/wiki/Schadenfreude\">schadenfreude</a>. By watching videos of potentially hilarious human foibles, can we teach a computational system to understand how to laugh at our misfortune?</p><p>Human nature is sometimes inexplicable. Why do we have a tendency to laugh at someone else’s misfortune? Maybe it’s better explained through the Nietzsche saying \“To see others suffer does one good\” (Nietzsche, F. W., Kaufmann, W. A., & Hollingdale, R. J., 1989). When push comes to shove, we’re wired to avoid what we fear and seek what gives us pleasure (Aschwanden C. 2018). That said, this feeling seems to be highly individualized and inconsistent. When juxtaposed with the precision of computation being applied to emotion detection and sentiment analysis, the following questions may ensue: can schadenfreude be taught to a computer? Are there situations where its understanding can provide us value? Or will its understanding be misused in malicious ways?</p><p>Fail Engine is a poetic thought-experiment-turned-installation that explores the confusing nature of schadenfreude and serves as an effort to draw attention to the complexity of machine intelligence in an era when we may have barely scratched the surface of the human psyche. Through artificial intelligence services that involve affective computing, an online experience invites participants to watch popular fail videos and gifs. In the process, a real-time facial emotion detection service monitors facial expressions to determine specific points of cringe-worthy humor. These reactions serve as training data for a computational system that attempts to learn when and where schadenfreude occurs.</p><p>Participants can contribute their reactions to fail videos via a web application. Once access to the web cam is granted, the system will monitor facial expressions that simultaneously occur with video playback. The underlying data containing real-time emotional responses (without images of participants) fuels a computational system that attempts to learn when and where to laugh at these videos based on crowdsourced reactions. Then, in a video installation setting, a playlist of trained fail videos screens back to participants along with the computer’s reaction, completing the training loop.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:82.82% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/337194153?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video documentation of the participatory experience of the installation</p></div></section><section class="jumbo"><div class="video-wrapper full"><div style="padding:73.17% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/341078918?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video documentation of the gallery experience of the installation</p></div></section><section class="references"><h3>References</h3><ul><li>Nietzsche, F. W., Kaufmann, W. A., & Hollingdale, R. J. (1989). On the genealogy of morals / Ecce homo. New York: Vintage.</li><li>Aschwanden, C. (2018, October 19). \'The Joy of Pain,\' and What We Get Out of It. Retrieved from <a href="https://www.nytimes.com/2013/12/24/science/the-joy-of-pain-and-what-we-get-out-of-it.html">https://www.nytimes.com/2013/12/24/science/the-joy-of-pain-and-what-we-get-out-of-it.html</a></li></ul></section>';
  res.locals.title = 'Fail Engine - Raphael Arar';
  res.render('art');
});

router.get('/vibes', function(req, res, next) {
  res.locals.h1 = "Vibes";
  res.locals.desc = "What's the overall vibe of your browsing activity? A commentary on both doomscrolling culture as well as the advancements and perceived accuracy of emerging developments in affective computing.";
  res.locals.largethumb = "/images/vibes-main.png";
  res.locals.deets = "<h2>Medium️</h2><ul><li>net art</li></ul><h2>Year</h2><ul><li>2021—Present</li></ul>";
  res.locals.concept = "<p>Vibes serves as a commentary on both doomscrolling culture as well as the advancements and perceived accuracy of emerging developments in affective computing. What's the overall vibe of your browsing activity? Is your online activity bumming you out or brightening your mood?</p><p>Vibes is a browser extension that will run in the background in your browser and analyze the content of the pages you access. It serves as a passive intervention for you to take control of your online access by computing a sentiment score over time. By raising awareness to the overall mood of your activity, it shifts the onus on you as an individual to determine whether or not to alter browsing habits based on the data it collects. Its output is limited to the accuracy of the latest iterations of sentiment analysis libraries, and as a result may feel both accurate and at other times may feel off. The intent is to not only serve as a passive intervention but also to raise awareness and serve as a catalyst for you to question the limits of artificial intelligence.</p><p><a href='https://chrome.google.com/webstore/detail/vibes/gcmghplpfllklhbaigbliohbhcbhdnbb'>Install Vibes for Google Chrome</a></p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/542160863?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Vibes in action</p></div></section>';
  res.locals.title = 'Vibes - Raphael Arar';
  res.render('art');
});

module.exports = router;
