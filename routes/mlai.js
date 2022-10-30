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
    title: "Analyzing temporal classes in user feedback",
    id: "US20200372516A1",
    url: "https://patents.google.com/patent/US20200372516A1/"
  },
  {
    title: "Automated Assignment of Tasks Based on User Profile Data for Improved Efficiency",
    id: "US20200364646A1",
    url: "https://patents.google.com/patent/US20200364646A1/"
  },
  {
    title: "Minimizing Risk Using Machine Learning Techniques",
    id: "US20200372397A1",
    url: "https://patents.google.com/patent/US20200372397A1/"
  },
  {
    title: "Optimized transportation selection",
    id: "US20200372590A1",
    url: "https://patents.google.com/patent/US20200372590A1/"
  },
  {
    title: "Cognitive visual and ontological mapping of tabular data based on a distribution of a measure of interest",
    id: "US20200192928A1",
    url: "https://patents.google.com/patent/US20200192928A1/"
  },
  {
    title: "Suggesting a destination folder for a file to be saved",
    id: "US20200174967A1",
    url: "https://patents.google.com/patent/US20200174967A1/"
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
    img: "/images/cbm-main.png"
  },
  {
    name: "IBM Travel Manager",
    type: "Product Design",
    url: "/ml-ai/travel-manager",
    desc: "Big enterprises spend enormous sums of money on business travel, and global procurement officers still track expenditure manually. This product was conceived to not only help procurement teams visualize spend data, but also to identify savings opportunities and negotiate discounts with vendors.",
    img: "/images/itm-main.png"
  },
  {
    name: "IBM Traveler Central",
    type: "Prototype",
    url: "/ml-ai/traveler-central",
    desc: "IBM employees travel a lot for business. How can we help help them aggregate their travel itineraries, explore new destinations and connect them with other colleagues while they’re in new destinations? This prototype served to be a nuanced, data-driven travel companion during business trips.",
    img: "/images/itc-main.png"
  }
];

const mlaiexperiments = [
  {
    name: "Wayfinding",
    type: "Art Research",
    url: "/ml-ai/wayfinding",
    desc: "Can computers learn to be intuitive? An aesthetic experiment in the direct translation of computational intuition to the physical space.",
    img: "/images/wayfinding-main.png"
  },
  {
    name: "(+/-) Pendulum",
    type: "Art Research",
    url: "/ml-ai/pendulum",
    desc: "What does location mean in the information age? Using the mechanics of the Foucault Pendulum, this installation explores the physical and digital concepts of location.",
    img: "/images/pendulum-main.png"
  }
];

router.get('/travel-manager', function(req, res, next) {
  res.locals.h1 = "IBM Travel Manager";
  res.locals.desc = "Big enterprises spend enormous sums of money on business travel, and global procurement officers still track expenditure manually. This product was conceived to not only help procurement teams visualize spend data, but also to identify savings opportunities and negotiate discounts with vendors.";
  res.locals.largethumb = "/images/itm-thumb.png";
  res.locals.deets = "<h2>Users</h2><ul><li>IBM Procurement Officers</li></ul><h2>Employer</h2><ul><li>IBM Research</li></ul><h2>Role</h2><ul><li>Product Design Lead</li></ul><h2>Team</h2><ul><li>4 Software Engineers</li><li>1 Product Manager</li><li>2 Data Scientists</li></ul><h2>Responsibilities</h2><ul><li>Product design including user research, interaction design, visual design and prototyping</li><li>Design Thinking workshop facilitation</li><li>Client management</li><li>Strategy & leadership</li></ul>";
  res.locals.problemStatement = "<p>IBM employees travel a lot for business. <a href='https://www.businesstravelnews.com/Corporate-Travel-100/2018/IBM'>According to Business Travel News</a>, IBM consistently ranks within the top 5 companies for travel spend the past few years. All of those dollars, vendor relationships and savings opportunities need to be tracked. IBM procurement faced a laborious process where travel managers needed to compile booking records from many disparate sources in order to actually understand how tickets were purchased and used. To sum it up, this process was inefficient and slow. Travel managers felt frustrated of the time it took to understand records, and at the same time, irritated that they could only negotiate with vendors for better deals after-the-fact. Ultimately, they felt that the existing process prevented them from saving the company money and helping employees get access to better benefits from airlines, hotels and car rental companies.</p>";
  res.locals.processSolution = "<p>My team and I worked with the Global Procurement managers to really understand the variety of data sources they needed to do their jobs. This was a rare enterprise scenario where the stakeholders were the end users of the product, which made it simpler to align business goals and user needs.</p><p>After tallying up and prioritizing pain points, we aligned them to user goals. This process enabled our team to envision capabilities that our users hadn’t thought of. These innovations grounded themselves in questions like \“What if travel managers could run what-if analyses to try and negotiate better deals?\” and \“How can a travel manager be proactively notified about excessive spend?\”. These questions helped us craft big outcomes that we could plan scenarios around to help us meet our users’ goals.</p><section class='jumbo'><div class='img-container'><img src='/images/itm-scenario-flow.gif' /></div><div class='detail'><p>Walk-through prototype of the scenario planning feature of the product.</p><p>This feature allowed users to create hypothetical situations in order to have fodder for vendor negotations.</p></div></section><p>With complex data comes complex challenges. Aside from the technical hurdles of cleaning and processing data sets, we had to give users visibility into where data was coming from and how it presented itself. This challenge served up the need for a robust notification section, allowing travel managers to see when data was updated and from what source. With all of the modeling tools available in the Travel Manager Solution, data set changes would alter a what-if scenario analysis. By notifying managers about data changes, this would allow for better estimates for better negotiations on supplier benefits from airlines, hotel chains and more.</p><p>An overarching challenge of this project was aligning UX goals with technical limitations. Due to the robustness of the data set, it was very difficult to asynchronously load data sets while users engaged in the experience. This called for a tight alignment with the development team to ensure that the interaction design provided ample feedback letting users know when data was processing and when it was ultimately available.</p><section class='jumbo'><div class='img-container'><img src='/images/itm-city-pair.png' /></div><div class='detail'><p>A view of the city-pair analysis experience in the product.</p></div></section>";
  res.locals.outcomeNextSteps = "<p>IBM Travel Manager became the first of its kind travel manager solution for procurement professionals. The experience was launched in 2017 and continues to be developed today with added customizations and custom analyses. The experience allows travel managers to not only visualize and view data of travel spend, but also enables them with the ability to model and predict deals that employees can take advantage of. From a procurement standpoint, the experience allows managers to monitor compliance, making sure that the company efficiently makes use of its travel budgets. Travel Manager also has robust collaboration features, allowing users to share data visualizations, export data sets and generate PDFs of custom analyses from detailed filter sets.</p>";
  res.locals.title = 'IBM Travel Manager - Raphael Arar';
  res.render('project');
});

router.get('/traveler-central', function(req, res, next) {
  res.locals.h1 = "IBM Traveler Central";
  res.locals.desc = "IBM employees travel a lot for business. How can we help help them aggregate their travel itineraries, explore new destinations and connect them with other colleagues while they’re in new destinations? This prototype served to be a nuanced, data-driven travel companion during business trips.";
  res.locals.largethumb = "/images/itc-review-web.png";
  res.locals.deets = "<h2>Users</h2><ul><li>IBM employees</li></ul><h2>Employer</h2><ul><li>IBM Research</li></ul><h2>Role</h2><ul><li>Design Lead</li></ul><h2>Team</h2><ul><li>2 Mobile Engineers</li><li>1 Product Manager</li><li>1 Data Scientists</li><li>1 Sociologist</li></ul><h2>Responsibilities</h2><ul><li>UX design including user research, interaction design, visual design and prototyping</li><li>Design Thinking workshop facilitation</li><li>Strategy & leadership</li></ul>";
  res.locals.problemStatement = "<p>Business travel, especially within an enterprise like IBM, is messy, nebulous and difficult to manage. From a user-centered standpoint, employees often find themselves juggling multiple parts of a trip at every touchpoint—from managing trip itineraries from airline, hotel and rental car companies to prepping for actual meetings to finding an impressive restaurant to entertain clients after a meeting. The stress factor of business travel increases when considering the number of software apps an employee must access to get all the information needed. Oftentimes, employees use both internal apps for corporate policy information while simultaneously relying on 3rd party apps for flight and hotel check-ins as well as restaurant recommendations.</p><p>In a study conducted by IBM’s HR and Global Procurement departments, the findings highlighted that employees feel friction during every leg of their journey. To make matters more challenging, these pain points translated into infrastructure inefficiencies—employees weren’t taking advantage of the benefits and programs stakeholders have worked hard to set in place from vendors like airlines and hotel chains. Recognizing that business travel is critical to IBM and serves as the cornerstone of a corporate travel program, HR and Procurement sought to engage our team at IBM Research to help them improve on policy, sourcing and innovation in this space. Through workshops conducted in 2016, the idea of IBM Traveler Central, a mobile application, emerged as a way to provide IBM employees with an innovative, friction-free travel experience.</p>";
  res.locals.processSolution = "<p>Due to the complexity and breadth of this solution, my team and I used IBM Design Thinking to understand the needs and wants of our employees. We began by interviewing a variety of IBM employees who travel for business—from the veteran road warriors taking multiple trips per month to the beginning consultant traveling once per year. Through these interviews, we were able to devise two personas, Yin and Stacey, who capture the essence of both sides. We also selected a few sponsor users who would help ensure that our design process aligned to their needs.</p><p>After checking in with our sponsor users and stakeholders, we kicked off a few ideation workshops. We crafted empathy maps to help us understand as-is states and then brainstormed innovation ideas with big vignettes, later translating those ideas on a prioritization plot. From these workshops, we were able to determine the desired outcomes we strived to achieve for our users and the end result. We decided to approach IBM Traveler Central first as a mobile application and then as a standalone web application. These outcomes ultimately drove the design sprints we planned in tandem with Agile development sprints.</p><section class='image-block'><figure class='lg'><img src='/images/itc-prior-plot.jpg'/><figcaption>Prioritization Plot from Design Thinking Exercises</figcaption></figure></section><p>In effect, every sprint led us closer to a working prototype that addressed the most fundamental business travel needs. Knowing that users want to feel less overwhelmed by business travel and simultaneously want it to be something they look forward to, we sought to use design and analytics to highlight the most important aspects of a trip and provide tailored recommendations while at a new destination. We used biweekly check-ins with our broader team to help us achieve these goals.</p><section class='image-block'><figure class='lg'><img src='/images/itc-sketches.jpg'/><figcaption>Initial wireframes of the prototype</figcaption></figure></section>";
  res.locals.outcomeNextSteps = "<p>Juggling the variety of user travel scenarios meant designing an experience that would adapt to every user. If successful, this would enable each user to focus only on the most pertinent aspects of a trip. While ideal in theory, designing such an experience was by no means a trivial task.</p><p>From an upfront Design Thinking standpoint, we had to exhaust all of the potential travel scenarios with end users. By synthesizing common themes, we were able to devise the outcomes we sought: easy access to trip information, personalized recommendations (gyms, restaurants, attractions) as well as up-to-date policy and legal information in human-readable formats.</p><section class='jumbo'><div class='img-container'><img src='/images/itc-land.png' /></div><div class='detail'><p>Two versions of the landing screen, which illustrate how the interface would dynamically flex based on the hours before a user's next travel event.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/itc-itinerary-web.png' /></div><div class='detail'><p>A detailed view of a user's itinerary and action sheet options.</p></div></section><p>All of these intersections meant managing touch points with multiple parties on the project: end users, data scientists, software engineers and legal entities. Wearing multiple hats became the norm on this project, so organization and time management evolved as design skills in and of themselves.</p><p>The prototype was ultimately sunset in late 2018, largely due to the overhead of maintaining content. We learned the hard way of the cold-start problem in data-driven apps, and unfortunately our team wasn't large enough to manage the overhead. That said, we learned a lot from this project!</p>";
  res.locals.title = 'IBM Traveler Central - Raphael Arar';
  res.render('project');
});


router.get('/cbm', function(req, res, next) {
  res.locals.h1 = "CBM.next";
  res.locals.desc = "This internal IBM product helped experienced strategy and transformation consultants model and visualize their clients’ organizational structures in effort to help them restructure and optimize their enterprises.";
  res.locals.largethumb = "/images/CBM-large.png";
  res.locals.deets = "<h2>Users</h2><ul><li>Experienced IBM Strategy & Transformation Consultants</li></ul><h2>Employer</h2><ul><li>IBM Research / IBM Services</li></ul><h2>Role</h2><ul><li>Product Design Lead</li></ul><h2>Team</h2><ul><li>1 Design Technologist</li><li>5 Software Engineers</li><li>1 Product Manager</li><li>2 Data Scientists</li></ul><h2>Responsibilities</h2><ul><li>Product design including user research, interaction design, visual design and prototyping</li><li>Design Thinking workshop facilitation</li><li>Client management</li><li>Strategy & leadership</li></ul>";
  res.locals.problemStatement = "<p>The Component Business Model (CBM) is an advanced ideology developed by IBM to enable strategy consultants to better assist their clients. CBM’s framework is one of strategic management where opportunities for improvement or innovation in an organization can be easily identified and dealt with smartly.</p><p>Early on, we encountered a serious setback with the existing software, integral to the framework. To start, the pre-existing software to support the framework was PC-only and it required users to go through a painstaking download process. It also had significant user experience hurdles including an inability for users to collaborate, outdated content harmonization and cumbersome presenting tools.</p><p>This kickstarted a joint initiative between my team within IBM Research and our Global Business Services strategy team to redesign the CBM software so that it was cloud-enabled and optimized for remote collaboration to enable users to perform their consulting jobs better and from any location.</p><section class='image-block'><figure><img src='/images/cbm-old-1.png'/><figcaption>View of the existing CBM software showing a custom heat map for a government client</figcaption></figure><figure><img src='/images/cbm-old-2.png' /><figcaption>View of the existing CBM software showing a default template and export options</figcaption></figure></section>";
  res.locals.processSolution = "<p>My team and I utilized IBM Design Thinking to understand our users’ needs and wants. Due to the complexity of the CBM framework and tooling, I led the interview process starting with some of the most advanced and knowledgeable Strategy & Transformation consultants within the company. This led us to the creation of a set of personas, which in turn directed us to craft three hills, our desired outcomes. After checking in with our sponsor users and stakeholders, we then kicked off design sprints in tandem with Agile development sprints. Our sprints were scheduled with frequent playbacks to ensure we were on target.</p><section class='image-block'><figure><img src='/images/cbm-sketch-1.png' /><figcaption>Early sketches of the Project Dashboard</figcaption></figure><figure><img src='/images/cbm-sketch-2.png' /><figcaption>Create new project assistant flow</figcaption></figure></section><p>Following a structured design process, every sprint involved in a user scenario that our team ranked in priority based on user needs. These scenarios ranged from \“finding a CBM model\” to \“creating a new project\” and \“adding a collaborator\”. The designs were first collaboratively sketched out and then digitally-designed. Once the designs were approved, these scenarios would be incorporated into the development plan.</p><section class='jumbo'><div class='img-container'><img src='/images/cbm-detail-1.png' /></div><div class='detail'><p>Detail of a business component.</p><p>In this view, a user has access to  insights driven by a machine learning algorithm that leverage IBM’s data lake of content on a particular client.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/cbm-search.gif' /></div><div class='detail'><p>Walk-through prototype of the search experience.</p><p>In CBM.next, users have the ability to search components, existing maps as well as articles that span a network of connected repositories.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/cbm-explore.gif' /></div><div class='detail'><p>Walk-through prototype of the explore experience.</p><p>In the old tool, users faced a steep learning curve—there was no way to get acquainted with existing models or the CBM methodology without an expert trainer. My team and I sought to rectify this user need by creating a robust onboarding experience.</p></div></section>";
  res.locals.outcomeNextSteps = "<p>In April 2017, CBM.next was launched globally within IBM, signifying the next era of the CBM methodology and tooling. Since then, the collaborative platform has over 5000 active consultants globally.  We defined an active user as someone who logs in to the tool at least twice a month. This is a significant jump from the initial data collected, which showed that the prior user base was less than 500 active users signifying an over 900% increase in our user base!</p><p>While I left the project prior to the collection of additional quantitative data, I would’ve loved to capture NPS scores to further validate its reception as well as completion rates for important tasks like creating a heatmap and customizing a template. That said, from the qualitative feedback collected, the reception of CBM.next and updates to the methodology have been well received. Users are keen to see continued work as future releases have been scheduled for the coming years. As of today, CBM.next represents the next era of collaborative business informatics software and demonstrates the possibilities of applying user-centered design methodologies and practices to the field of business modeling products and services at large.</p>";
  res.locals.title = 'CBM.next - Raphael Arar';
  res.render('project');
});

router.get('/wayfinding', function(req, res, next) {
  res.locals.h1 = "Wayfinding";
  res.locals.desc = "Can computers learn to be intuitive? An aesthetic experiment in the direct translation of computational intuition to the physical space.";
  res.locals.largethumb = "/images/wayfinding-thumb.png";
  res.locals.deets = "<h2>Medium</h2><ul><li>glass, steel, bungee cables, electronics, high-gloss paint</li></ul><h2>Year</h2><ul><li>2016–2019</li></ul><h2>Venues</h2><ul><li>ISEA - Centro Cultural Universitario Rogelio Salmona - Manizales, Colombia</li><li>CHI 2017 - Colorado Convention Center - Denver, Colorado</li><li>Santa Cruz Museum of Art & History - Santa Cruz, California</li></ul>";
  res.locals.concept = "<p>Wayfinding is a participatory installation that serves as a poetic reference to the design concept that describes the ways in which people navigate from place to place. The installation is comprised of a set of four electromechanical sculptures that operate in subsequent harmony and discord based on participant and environmental impulses. Each sculpture, positioned at a cardinal direction, operates independently by way of a motor that strikes tensed bungee cables containing a glass orb with a glass marble. In effect, both movement and sound ensue and the sequence and speed at which the motors fire is continuously manipulated by proximity sensors that poll the environment and mine through data collected throughout the installation’s exhibition history. Through the installation’s symbolic embodiment of a compass, the work seeks to reflect on the socio-technological forces that guide our direction in life.</p><p>By paying homage to the design principle of wayfinding (Lynch, 1960) coupled with underlying themes in metamorphosis and actor-network theory (Latour, 1996), this responsive installation invites participants to engage in a dialogue where their presence shapes the information transmitted to an electro-mechanical compass that serves as a reflection on the paths one chooses in life, and how subtle nudges from the environment transmitted through technological means can result in subsequent periods of chaos and harmony.</p><p>The installation is comprised of a set of four electromechanical sculptures that function based on environmental impulses. Each sculpture, positioned at a Cardinal Direction, operates independently by way of a servomotor that strikes taut bungee cables containing a glass orb with a glass marble. The resulting effect produces both movement and mechanical sound. Software manipulates and morphs the sequence at which the sculptures fire (both starting point and delay time), inviting participants to meddle with the notion of direction amidst time.</p><p>The physical component of the piece serves as the starting point of the interaction model. Each sculpture contains an ultrasonic range finder sensor, which detects motion and proximity. The motors fire in a sequence, the starting point of which is dependent on real-time and historic data captured from each sensor, and then stored on a server. The closer a participant is to a particular sculpture, the more likely it is to start a sequence from that direction. Additionally, the algorithm takes a running average of all distances captured from the ultrasonic range finders and maps it to the rest period between sequences. When more participants are present in the field of each sensor, the resulting data captured leads to more democratic effects, which toy with participants’ mental model of how the installation provides feedback. In this sense, action is the form (Easterling, 2015), and the action of the objects (i.e., actuator sequence) imbue meaning, which can be interpreted as a direct analogy to the unpredictability of life and the potential impact our interactions with others may have on our sense of space and time.</p><p>While the physicality of the work serves as a means to generate data, a digital projection placed behind the sculptures serves to visualize both real-time and historic data captured. During the course of the work’s exhibition history, proximity and motion data have been captured from the sensors. The data visualization entails a modular design to allow participants to glean visual insight from the installation’s sensors. As a result, a feedback loop exists between the physical and digital. The physical component serves as a means to generate data by starting a conversation with participants, while the digital component serves as a means to visualize it. Thus, the audience become actors in a loose feedback loop between data generation and data visualization that can be repeated indefinitely in order to find new meaning.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/171785296?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video documentation of the physical experience of the installation</p></div></section><section class="jumbo"><div class="video-wrapper full"><div style="padding:62.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/257552579?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video documentation of the digital experience of the installation</p></div></section><section class="references"><h3>References</h3><ul><li>Lynch, Kevin. The Image of the City. MIT Press, Cambridge, 1960.</li><li>Latour, Bruno. On actor-network theory: a few clarifications. Soziale Welt, 47, 4 (1996), 369-381.</li><li>Easterling, Keller. An Internet of Things. In Aranda, Julieta et al., eds., E-flux Journal: The Internet Does Not Exist. Sternberg Press, 2015.</li></ul></section>';
  res.locals.title = 'Wayfinding - Raphael Arar';
  res.render('art');
});

router.get('/pendulum', function(req, res, next) {
  res.locals.h1 = "(+/-) Pendulum";
  res.locals.desc = "What does location mean in the information age? Using the mechanics of the Foucault Pendulum, this installation explores the physical and digital concepts of location.";
  res.locals.largethumb = "/images/pendulum-thumb.jpg";
  res.locals.deets = "<h2>Medium</h2><ul><li>ceramic, steel, wood, copper, recycled aircraft gearbox, electronics, high-gloss paint</li></ul><h2>Year</h2><ul><li>2014–2016</li></ul><h2>Venues</h2><ul><li>ISEA - Zayed University - Dubai, UAE</li></ul>";
  res.locals.concept = "<p>The embodiment of physicality amidst digital noise has the potential to artificially harmonize notions of humanity. With one foot digital and one foot analog, how do we make sense of an environment that is partially synthetic? (+/-) Pendulum operates using the mechanics of the Foucault Pendulum (a mechanism created to demonstrate the Earth’s physical properties); however, intangible outlets (a smartphone and web application) inform its location based on participatory user input. Physicality has been not only democratized but thwarted—now malleable to the masses.</p><p>(+/-) Pendulum is a participatory installation created so that its internal driving mechanism is based on participatory data. Its intent is to serve as a starting point for the creation and collection of participant data. The work is meant to serve as a microcosm of the intersection of our digital and physical selves. Unlike a conventional pendulum, the arm of the installation operates horizontally using the same physical properties of the Foucault Pendulum as if gravity is still impacting it. The conceptual basis of the work is to reflect on the intersection of our digital lives with our physical lives. The Foucault Pendulum was created in the mid-19th Century to exemplify the Earth’s physical properties (i.e., the fact that it is round and rotates)(Aczel, 2003). Many may prescribe to the idea that we now live in an era where the Earth’s physical properties are of little importance. As a result, the rotation of the (+/-) Pendulum is based on participatory user input from a smartphone application, which asks the question \“Where do you want to be?\” From collective user input, the average of all data points orients the pendulum to a collective desired location, which seeks to show that our world is not flat, round or oblong&emdash;it is malleable and democratic in the digital sphere.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/110048161?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video documentation of the physical experience of the installation</p></div></section><section class="jumbo"><div class="img-container full"><img src="/images/ipad-pendulum.png" /></div><div class="detail"><p>Screenshot of the digital experience of the installation</p></div></section><section class="references"><h3>References</h3><ul><li>A. D. Aczel, Pendulum: Léon Foucault and the triumph of science. New York: Atria Books, 2003.</li></ul></section>';
  res.locals.title = '(+/-) Pendulum - Raphael Arar';
  res.render('art');
});


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
