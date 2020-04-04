var express = require('express');
var router = express.Router();

const conversationmeta = {
  h1: 'Codifying the discipline of Conversational UX',
  desc: 'At IBM Research, I partnered with a Sociologist to establish a set of guidelines and prototypes for how to work with conversational agents.',
};



const conversationpresentations = [
  {
    title: "Applying Science to Conversational UX Design",
    venue: "SXSW 2017",
    url: "https://www.slideshare.net/RaphaelArar/applying-science-to-conversational-ux-design"
  },
  {
    title: "Cultivating Cognitive Experiences",
    venue: "LAUNCH Festival 2017",
    url: "https://www.slideshare.net/RaphaelArar/cultivating-cognitive-experiences"
  }
];

const conversationpress = [
  {
    title: "At IBM, Researchers Are Working To Make Robots Engaging Conversationalists",
    source: "Inc. Magazine",
    url: "https://www.inc.com/greg-satell/at-ibm-researchers-are-working-to-make-robots-engaging-conversationalists.html?cid=sf01001"
  },
  {
    title: "Conversational UX design: What it is and who's paving the way",
    source: "TechTarget",
    url: "https://searchcio.techtarget.com/feature/Conversational-UX-design-What-it-is-and-whos-paving-the-way"
  },
  {
    title: "How to make AI agents better conversationalists: Context is key",
    source: "TechTarget",
    url: "https://searchcio.techtarget.com/feature/How-to-make-AI-agents-better-conversationalists-Context-is-key"
  },
  {
    title: "Tackling the 'ask me anything' challenge of a conversational interface",
    source: "TechTarget",
    url: "https://searchcio.techtarget.com/feature/Tackling-the-ask-me-anything-challenge-of-a-conversational-interface"
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
    img: "/images/bot2bot-main.png"
  }
];



router.get('/bot2bot', function(req, res, next) {
  res.locals.h1 = "bot2bot";
  res.locals.desc = "What happens when you place one conversational agent against another and exposing the dialogue?";
  res.locals.videothumb = '<div style="padding:68.88% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/404026366?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
  res.locals.deets = "<h2>⚒️️ Medium</h2><ul><li>net art</li></ul><h2>🕒 Year</h2><ul><li>2017–2019</li></ul>";
  res.locals.concept = "<p>bot2bot is an installation that shifts the perspective of human engagement from that of participant to observer. Through this vantage point, participants eavesdrop on a conversation occurring between two conversational agents. In effect, the ensuing conversation can be logical but often ends up in nonsensical tangents and infinite loops of misunderstanding. The work serves to highlight the challenges in state-of-the-art voice-based agents.</p><p>Truly understanding how to hold conversation is a part of life that feels second nature. Regardless of conversational aptitude, most humans are able to hold a basic conversation and at least have small talk with one another.</p><p>Despite its seemingly mundane qualities, conversation is complex and can be a delicate dance between two or more individuals. The study of conversational analysis is a testament to the complexity at which humanity operates. Its literature shows that humans in practice are not as eloquent or clear as dialog in literature or modern-day cinema, yet mutual understanding is still achieved.</p><p>How do we embed a sense of conversational understanding and capability within computational systems?</p><p>bot2bot leverages the Natural Conversation Framework (NCF) developed at IBM Research - Almaden to place one agent in conversation with another. This framework takes a more holistic and human approach in the design of turn-based interactions by utilizing the formal field of Conversation Analysis (CA) (Sacks, Schegloff, Jefferson, 1974). CA studies the manner in which humans take turns and sequentially organize conversation. In leveraging NCF, bot2bot elucidates the challenges of mimicking human conversation, since its nuanced components are difficult to replicate. The work not only serves an aesthetic purpose but is now being used to test for the humanness of conversation and the parts the get lost in translation.</p>";
  res.locals.content = '<section class="references"><h3>References</h3><ul><li>Sacks, Harvey, Schegloff, Emanuel A., & Jefferson, Gail (1974). A simplest systematics for the organization of turn-taking for conversation. Language, 50, 696–735</li></ul></section>';
  res.locals.title = 'Raphael Arar';
  res.render('art');
});


router.get('/', function(req, res, next) {
  res.locals.press = conversationpress;
  res.locals.presentations = conversationpresentations;
  res.locals.patents = "";
  res.locals.publications = conversationpublications;
  res.locals.experiments = conversationexperiments;
  res.locals.projects = conversationprojects;
  res.locals.meta = conversationmeta;
  res.locals.title = 'Raphael Arar';
  res.render('area');
});

module.exports = router;
