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
    img: "/images/wta-main.png"
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

const conversationpatents = [
  {
    title: "Method and system for correcting speech-to-text auto-transcription using local context of talk",
    id: "US20200160866A1",
    url: "https://patents.google.com/patent/US20200160866A1/"
  },
  {
    title: "Method and system for displaying automated agent comprehension",
    id: "US20200134021A1",
    url: "https://patents.google.com/patent/US20200134021A1/"
  },
  {
    title: "Dynamic modification of placeholder text in conversational interfaces",
    id: "US20200134017A1",
    url: "https://patents.google.com/patent/US20200134017A1/"
  },
  {
    title: "Speech-to-text transcription with multiple languages",
    id: "US20200098370A1",
    url: "https://patents.google.com/patent/US20200098370A1/"
  }
];

router.get('/travel-concierge', function(req, res, next) {
  res.locals.h1 = "IBM Travel Concierge";
  res.locals.desc = "A prototype exploring the next era of travel shopping through the combination of a traditional online experience and a conversational agent.";
  res.locals.largethumb = "/images/wta-thumb.png";
  res.locals.deets = "<h2>Users ❤️</h2><ul><li>Anyone booking flights online</li></ul><h2>Employer 🏢</h2><ul><li>IBM Research</li></ul><h2>Role 💼</h2><ul><li>User Experience Design Lead / Conversation Designer</li></ul><h2>Team 👥</h2><ul><li>1 Sociologist</li><li>3 Software Engineers</li><li>1 Product Manager</li><li>1 Data Scientists</li></ul><h2>Responsibilities ✅</h2><ul><li>User experience design</li><li>Design Thinking workshop facilitation</li><li>Client management</li><li>Strategy & leadership</li></ul>";
  res.locals.problemStatement = "<p>In early 2016, my team and I met with a number of different airlines to understand challenges they faced in maintaining business and being of better service to their customers. Many of them who were more consumer-facing felt that they were in danger of becoming irrelevant due to the amount of disruption that’s occurred in the travel business. Throughout these meetings, a common theme emerged: in the age of the automated travel agent, how do we inspire our users to visit a destination they had never seen before?</p><p>User research revealed that their customers wanted better recommendations and that they actually missed the ease of working with travel agents. We knew that in order to meet these needs in an increasingly AI-driven landscape, a solution had to be first and foremost personalized to every user, easy to understand and ultimately human-like in its experience—just like working with a travel agent.</p>";
  res.locals.processSolution = "<p>My team at IBM Research and I ran a number of Design Thinking ideation workshops with various airlines in order to determine how to meet their needs. Many of the airlines we met with had collected a variety of qualitative and quantitative data from users, which accelerated the process of uncovering a solution. Users wanted to go on family vacations, weekend getaways and romantic trips but didn’t know how to find places that would match their criteria and personalities. To top it off, when they threw in the caveat of budget, the result often led to feelings of overwhelm.<p>Stakeholders from airlines were intrigued by the capabilities of new technologies, primarily chatbots and conversational assistants. Realizing that texting has become such a dominant mode of interaction, they were intrigued as to how to incorporate it into the solution.</p><p>Taking all of this information, my team and I began to synthesize a result that incorporated our knowledge of Conversation Analysis as well as User Experience Design. We embarked on a solution that would incorporate a conversational agent with a vivid, image-driven destination-shopping experience. As users engaged in dialogue, recommendations would be refreshed and targeted specifically to the preferences and characteristics of them.</p><section class='image-block'><figure><img src='/images/wta-sketch-1.jpg'/><figcaption>Low-fidelity wireframe of a landing screen concept of the prototype</figcaption></figure><figure><img src='/images/wta-sketch-2.jpg' /><figcaption>Low-fidelity wireframe of how the user would be able to save favorite destinations in the prototype</figcaption></figure></section><p>Being a first-of-a-kind solution, IBM Travel Concierge involved managing multiple technical teams and business units. We closely aligned with our Proof-of-Concept client, the IBM Sales team and our Research team. Managing all expectations from a design standpoint was not a trivial task. It involved recurring check-ins and playbacks with stakeholders that fell in tandem with Design & Agile Sprints. We instilled the approach wherein every design decision fell back on research. This allowed for every conversation to be grounded on as much information from users as possible, which alleviated team members’ needs to base decisions off of personal preference.</p><p>From a craft standpoint, devising the UX was a challenge. The application hinged on the IBM Watson Assistant platform, and the conversational component relied on a back-end database and recommendation engine. Ultimately this meant understanding each technical call and how that might impact the UX. With every new preference gleaned from user conversation, recommendations on the main UI would evolve to reflect new information. As a result, providing ample user feedback became critical and failing to do so would translate to a poor user experience.</p>";
  res.locals.outcomeNextSteps = "<p>The first working prototype of IBM Travel Concierge was revealed at the IBM Think event in Las Vegas in 2018. We collaborated with United Airlines to produce a fully functioning working prototype. The experience hinged on a chat window being the primary mode of interaction, accompanied by a traditional shopping experience. As users talked to the agent like they would to any travel agent, the agent would start to capture preferences and characteristics in order to build out a profile. Furthermore, while chatting, recommendations would appear on the other half of the screen, allowing users to explore photos and read more information. From a UX standpoint, my team and I had to manage expectations: how would the experience handshake from conversation to traditional GUI? We devised the solution wherein conversational triggers would update the GUI and GUI interactions would cause the agent to respond to them.</p><section class='jumbo'><div class='img-container'><img src='/images/wta-walkthrough-1.png' /></div><div class='detail'><p>In order to encourage interaction through conversation, the first interaction a user has of the prototype is mediated through a modal that nudges the user to chat.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/wta-walkthrough-2.png' /></div><div class='detail'><p>Upon iteracting, the modal dismisses itself and the resulting experience provides two avenues for interaction: one through conversation and the other through a more conventional user experience.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/wta-walkthrough-3.png' /></div><div class='detail'><p>After the user interacts with a destination card, they have the ability to find more about the locale.</p><p>Many of the data elements on this screen, such as weather predictions and attraction information, are powered through machine learning, particularly collaborative filtering.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/wta-walkthrough-4.png' /></div><div class='detail'><p>Whether the user decides to advance the experience through conversation or by more conventional interaction paradigms, the end goal is to book a flight.</p><p>When the user reaches this step, they will be presented with a bar chart that shows them a breakdown of price points for different dates of interest.</p></div></section><section class='jumbo'><div class='video-wrapper full'><div style='padding:58.78% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/404289291?loop=1&title=0&byline=0&portrait=0' style='position:absolute;top:0;left:0;width:100%;height:100%;' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe></div><script src='https://player.vimeo.com/api/player.js'></script></div><div class='detail'><p>Recording of the working prototype prior to demo at IBM Think 2018</p></div></section><p>The prototype was successfully delivered to our first set of pilot clients in mid-2018. After this time, the United's usability and development teams took on the work of running alpha testing with a select group of their MileagePlus customers. Despite having left shortly after this project was handed off, the client signed on for additional work to be completed on this alpha release pending testing results. All that said, early qualitative feedback from customers has been positive and our NPS score tracked in the low 60s with this select group of testing customers.</p>";
  res.locals.title = 'Raphael Arar';
  res.render('project');
});

router.get('/bot2bot', function(req, res, next) {
  res.locals.h1 = "bot2bot";
  res.locals.desc = "What happens when you place one conversational agent against another and exposing the dialogue?";
  res.locals.videothumb = '<div style="padding:68.88% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/404026366?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
  res.locals.deets = "<h2>Medium ⚒️️</h2><ul><li>net art</li></ul><h2>Year 🕒</h2><ul><li>2017–2019</li></ul>";
  res.locals.concept = "<p>bot2bot is an installation that shifts the perspective of human engagement from that of participant to observer. Through this vantage point, participants eavesdrop on a conversation occurring between two conversational agents. In effect, the ensuing conversation can be logical but often ends up in nonsensical tangents and infinite loops of misunderstanding. The work serves to highlight the challenges in state-of-the-art voice-based agents.</p><p>Truly understanding how to hold conversation is a part of life that feels second nature. Regardless of conversational aptitude, most humans are able to hold a basic conversation and at least have small talk with one another.</p><p>Despite its seemingly mundane qualities, conversation is complex and can be a delicate dance between two or more individuals. The study of conversational analysis is a testament to the complexity at which humanity operates. Its literature shows that humans in practice are not as eloquent or clear as dialog in literature or modern-day cinema, yet mutual understanding is still achieved.</p><p>How do we embed a sense of conversational understanding and capability within computational systems?</p><p>bot2bot leverages the Natural Conversation Framework (NCF) developed at IBM Research - Almaden to place one agent in conversation with another. This framework takes a more holistic and human approach in the design of turn-based interactions by utilizing the formal field of Conversation Analysis (CA) (Sacks, Schegloff, Jefferson, 1974). CA studies the manner in which humans take turns and sequentially organize conversation. In leveraging NCF, bot2bot elucidates the challenges of mimicking human conversation, since its nuanced components are difficult to replicate. The work not only serves an aesthetic purpose but is now being used to test for the humanness of conversation and the parts the get lost in translation.</p>";
  res.locals.content = '<section class="references"><h3>References</h3><ul><li>Sacks, Harvey, Schegloff, Emanuel A., & Jefferson, Gail (1974). A simplest systematics for the organization of turn-taking for conversation. Language, 50, 696–735</li></ul></section>';
  res.locals.title = 'Raphael Arar';
  res.render('art');
});


router.get('/', function(req, res, next) {
  res.locals.press = conversationpress;
  res.locals.presentations = conversationpresentations;
  res.locals.patents = conversationpatents;
  res.locals.publications = conversationpublications;
  res.locals.experiments = conversationexperiments;
  res.locals.projects = conversationprojects;
  res.locals.meta = conversationmeta;
  res.locals.title = 'Raphael Arar';
  res.render('area');
});

module.exports = router;
