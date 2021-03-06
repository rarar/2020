var express = require('express');
var router = express.Router();

router.get('/osc-osc', function(req, res, next) {
  res.locals.h1 = "Oscillating Oscillators";
  res.locals.desc = "A temporal sound sculpture exploring notions of feedback.";
  res.locals.videothumb = '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/573969157" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
  res.locals.deets = "<h2>Medium</h2><ul><li>acrylic, modified electronics, LEDs, sound, various plastic components</li></ul><h2>Year</h2><ul><li>2021</li></ul>";
  res.locals.concept = "<p>Oscillating Oscillators consists of a pair of sound sculptures, which contain an LED swung by a motor over a clear display containing a light-sensitive sound circuit. As the artificial as well as ambient light shifts throughout the course of an exhibition, the sound evolves. Due to the proximity of each sculpture to one another, a feedback loop occurs wherein the light of one sculpture affects the sonic output of the other further illustrating the cybernetic aspect of the work.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/573975499?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>A single sculpture in isolation</p></div></section><section class="jumbo"><div class="img-container full"><img src="/images/osc-osc-model.jpg" /></div><div class="detail"><p>Model of the sculpture set</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Oscillating Oscillators - Raphael Arar';
  res.render('art');
});

router.get('/noema-ai-poet', function(req, res, next) {
  res.locals.h1 = "Noema AI Poet";
  res.locals.desc = "As an external and increasingly intelligent form of memory, AI can broaden the effects of writing systems on the physical borders of the human mind.";
  res.locals.videothumb = '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/539142520?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
  res.locals.deets = "<h2>Medium</h2><ul><li>web application</li></ul><h2>Year</h2><ul><li>2020</li></ul><h2>Venues</h2><ul><li>Noema Magazine</li></ul>";
  res.locals.concept = "<p>To accompany an essay on AI and writing machines, Noema Magazine commissioned me to create a piece of net art. This experience allowed anyone to ask a question to an AI system, and in turn it would generate a story. While the project is no longer active, it served as a small example of the potential for unique collaborations between humans and machines.</p><p><a href='https://www.noemamag.com/prosthetic-memories-writing-machines/'>Read the essay and view the archived project.</a></p>";
  res.locals.goToIndex = true;
  res.locals.title = 'Noema AI Poet - Raphael Arar';
  res.render('art');
});



router.get('/fcfi', function(req, res, next) {
  res.locals.h1 = "Food Carbon Footprint Index";
  res.locals.desc = "Imagine a late-capitalist dystopian future in which individuals are held personally responsible for the climate crisis.";
  res.locals.largethumb = "/images/fcfi-main.jpg";
  res.locals.deets = "<h2>Medium</h2><ul><li>web application</li></ul><h2>Year</h2><ul><li>2020</li></ul><h2>Venues</h2><ul><li>Emerge Festival, Arizona State University - Mesa, Arizona</li><li>Participatory Design Conference (PDC), Situated Actions - Manizales, Colombia</li></ul>";
  res.locals.concept = "<p>Imagine a late-capitalist dystopian future in which individuals are held personally responsible for the climate crisis. Imagine a future where ubiquitous surveillance of individuals becomes the preferred method for curbing carbon emissions, where non-compliance results in serious penalties. The Food Carbon Footprint Index (FCFI) imagines just that vision of the future. FCFI invites participants to make meal decisions via a web application. The app calculates each meal’s carbon footprint and index this \“score\” against other participants. Scores are then broadcasted on a leaderboard for public scrutiny and collective shaming and musing.</p><p>The Food Carbon Footprint Index (FCFI) invites participants to engage in a social experiment wherein their food choices are monitored and indexed based on their daily carbon footprint. Participants each receive a daily allotment of 100 CO2 points, and are asked to log their meal choices via a web application. Meals with a higher carbon footprint require more CO2 points, while carbon-friendly meals require far fewer. Participants are then assessed based on their food choices, and their rank will be displayed on a public leaderboard. Those who exceed their daily carbon allotment will be \“fined\” and subject to public shame.</p><p>FCFI seeks to complicate our relationship with the \“power of individual choice\” in the face of a looming global environmental devastation. When capitalism requires that the individual bear the burden of responsibility in making smart, moral decisions with the low-burning hope of a share in prosperity, who benefits and who loses? Do these efforts actually encourage self-development for the collective good, or is there another way? Should each of us individually bear the brunt of environmental responsibility? With the future of our species hanging in the balance, what is the best way forward?</p><p><a href='https://fcfi.rarar.com'>Participate in the social experiment</a></p><p><a href='http://festivaldelaimagen.com/wp-content/uploads/2020/07/MEMORIAS_VOL3.pdf'>Read the paper in the PDC proceedings</a></p>";
  res.locals.content = '<section class="jumbo"><div class="img-container full"><img src="/images/fcfi-leaderboard.jpg" /></div><div class="detail"><p>Leaderboard displayed publicly on a global dashboard</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Food Carbon Footprint Index (FCFI) - Raphael Arar';
  res.render('art');
});


router.get('/motor-studies', function(req, res, next) {
  res.locals.h1 = "Motor Studies";
  res.locals.desc = "The attention economy drives much of the Western world. This set of minimal sculptures, each with its own simple gesture from one or more motors, is an effort to metaphorize this digital space in the physical world.";
  res.locals.videothumb = '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400945953?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
  res.locals.deets = "<h2>Medium</h2><ul><li>acrylic, steel, modified electronics, various plastic components</li></ul><h2>Year</h2><ul><li>2019–Present</li></ul><h2>Venues</h2><ul><li>The Holland Project - Reno, Nevada</li><li>IFL - Santa Cruz, California</li></ul>";
  res.locals.concept = "<p>Motor Studies consists of a set of minimal sculptures that vie for the attention of its participants. When installed, these pieces should be laid out sparsely. The negative space serves to accentuate the simple gestures from the motors within each piece. The end result is an effort to make the attention economy physical. Functionally, each sculpture is equipped with scanning capabilities to detect the number of connected personal devices (smartphones, wearables, etc.). Increasing counts of detected devices cause each sculpture to operate more erratically and chaotically as a way of relating to the increased anxiety one feels with prolonged technology usage.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400957539?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Motor study #1</p></div></section><section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400956754?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Motor study #2</p></div></section><section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400956783?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Motor study #3</p></div></section><section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400956828?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Motor study #4</p></div></section><section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400957484?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Motor study #5</p></div></section><section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400956911?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Motor study #6</p></div></section><section class="jumbo"><div class="video-wrapper"><div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400945953?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Motor study #7</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Motor Studies - Raphael Arar';
  res.render('art');
});

router.get('/gemini-heart', function(req, res, next) {
  res.locals.h1 = "Gemini Heart";
  res.locals.desc = "Gray areas are irrelevant. A work exploring dualities, choice and the fictitious divide between black and white.";
  res.locals.largethumb = "/images/gemini-heart-thumb.jpg";
  res.locals.deets = "<h2>Medium</h2><ul><li>ceramic, wood, steel, mirrored acrylic, electronics, high-gloss paint</li></ul><h2>Year</h2><ul><li>2014</li></ul><h2>Venues</h2><ul><li>Caltech - Pasadena, California</li><li>Calarts - Valencia, California</li></ul>";
  res.locals.concept = "<p>Gemini Heart pays homage to the choices we make on a daily basis. As we create a multitude of identities through digital platforms, these identities multiply, warp and ultimately mutate choices we initially make via systems beyond our control.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/89115969?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Gemini Heart exhibition at the California Institute of the Arts (2014)</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Gemini Heart - Raphael Arar';
  res.render('art');
});

router.get('/echo-echo-bot', function(req, res, next) {
  res.locals.h1 = "Echo Echo Bot";
  res.locals.desc = "How does an echo manifest itself in the digital space? This piece explores the evolution of an echo as we meander the analog/digital divide.";
  res.locals.largethumb = "/images/echoechobot-thumb.jpg";
  res.locals.deets = "<h2>Medium</h2><ul><li>text, software, projectors, electronics, sound</li></ul><h2>Year</h2><ul><li>2013–Present</li></ul><h2>Venues</h2><ul><li>Machine Inspired Art (MIA) Gallery - Los Angeles, California</li><li>Calarts - Valencia, California</li></ul>";
  res.locals.concept = "<p>The growing prevalence of text-based communication permeates our lives and is now one of our primary forms of interaction. In these situations, the technology appears to be concealed and unidirectional. Echo Echo Bot exposes the ramifications of interfacing with computation; the system responds, mangles and distorts. Computational interaction is a process with many layers now made aware to the participant with a simple line of text. Type what you’d like the world to experience in your loudest digital voice and watch/hear the permutations, reverberations and digital echoes unfold through a twitter bot, text message, web server and a conglomeration of digital noise.</p><p><a href='https://twitter.com/echoechobot'>Follow Echo echo bot on Twitter</a></p><p><a href='https://echo.rarar.com'>View the submitted echoes</a></p>";
  res.locals.content = '<section class="jumbo"><div class="img-container full"><img src="/images/echoechobot-sound-wave.jpg" /></div><div class="detail"><p>Audio visualiation of the echoes sonified</p></div></section><section class="jumbo"><div class="img-container full"><img src="/images/echoechobot-text.png" /></div><div class="detail"><p>Stream of jumbled text messages during the Downtown LA Art Walk</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Echo Echo Bot - Raphael Arar';
  res.render('art');
});

router.get('/metal-hearts', function(req, res, next) {
  res.locals.h1 = "Metal Hearts";
  res.locals.desc = "An installation exploring the blurred line between agency and autonomation.";
  res.locals.largethumb = "/images/metal-hearts-thumb.jpg";
  res.locals.deets = "<h2>Medium️</h2><ul><li>aluminum, plastic (3D print), electronics</li></ul><h2>Year</h2><ul><li>2013</li></ul><h2>Venues</h2><ul><li>Machine Project - Los Angeles, California</li><li>Calarts - Valencia, California</li></ul>";
  res.locals.concept = "<p>Metal Hearts consists of three nearly identical objects; in each, a bare solenoid strikes an aluminum-coated model of a human heart. A fundamental biological human process has now been automated by an electrical circuit serving as a reflection on human autonomy in light of technological progress. Collectively, the hearts beat in harmonic motion to delineate a mechanization of individuality.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/67088637?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video documentation of the installation</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Metal Hearts - Raphael Arar';
  res.render('art');
});

router.get('/forbidden-pixel', function(req, res, next) {
  res.locals.h1 = "Forbidden Pixel";
  res.locals.desc = "A projection-mapping piece that explores the intersection of science and art as it relates to the perception of light in space.";
  res.locals.largethumb = "/images/forbidden-pixel-thumb.jpg";
  res.locals.deets = "<h2>Medium</h2><ul><li>digital video</li></ul><h2>Year</h2><ul><li>2015</li></ul><h2>Venues</h2><ul><li>El Camino College Planetarium - Torrance, California</li></ul>";
  res.locals.concept = "<p>Presented as part of Forbidden Planet Night at El Camino College Planetarium, Forbidden Pixel was a collaborative projection-mapped work with artist/designer Chris Weisbart that explored the intersection of science and art as it relates to the perception of light in space. The content in the work was rooted in archival research around 50s sci-fi cinema and special effects coupled with scientific research around optical illusions dealing with refracted light in an architectural dome. The work was generated using Chromadepth 3D technology and guided viewers through an immersive 3D experience.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/142590887?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video footage of the projection-mapping event</p></div></section><section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/142104745?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Complete video of raw footage</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Forbidden Pixel - Raphael Arar';
  res.render('art');
});

router.get('/projected-shadows', function(req, res, next) {
  res.locals.h1 = "Projected Shadows";
  res.locals.desc = "An archival video piece exploring the architectural details of the Gamble House.";
  res.locals.largethumb = "/images/projected-shadows-thumb.jpg";
  res.locals.deets = "<h2>Medium️</h2><ul><li>digital video</li></ul><h2>Year</h2><ul><li>2014</li></ul><h2>Venues</h2><ul><li>Gamble House Museum - Pasadena, California</li></ul>";
  res.locals.concept = "<p>As part of the Machine Project Guide to the Gamble House, Projected Shadows was an architectural projection-mapping piece that explored the craftsmanship and fine woodworking of the Gamble House. The work explored the intersection of maker culture and contemporary art through an inside-out view of the house along with its strong Eastern Asian motifs.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/107896316?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video footage of the projection-mapping event</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Projected Shadows - Raphael Arar';
  res.render('art');
});

router.get('/desktop-computing', function(req, res, next) {
  res.locals.h1 = "Desktop Computing";
  res.locals.desc = "A commentary on the current state of the socio-economic landscape of the 21st century mediated through handmade oscillators.";
  res.locals.largethumb = "/images/oscillator-thumb.jpg";
  res.locals.deets = "<h2>Medium️</h2><ul><li>polyphonic light-sensitive oscillators, modified wild kingdom oscillator, field recording, mixer</li></ul><h2>Year</h2><ul><li>2013</li></ul><h2>Venues</h2><ul><li>the wulf. - Los Angeles, California</li></ul>";
  res.locals.concept = "<p>Desktop Computing is a performance that explores the current state of the socio-economic landscape in the 21st century. Western countries now value flexibility, creativity, immaterial labor and play in capitalist culture over prior concepts including discipline, hierarchy and brute force. With notions of play being paramount in the current workplace landscape, Desktop Computing explores the work-play divide in a performance, which further addresses both semantic and conceptual differences between performance and play in a sonic setting.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/62461679?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video excerpt of the performance at the wulf. gallery</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Desktop Computing - Raphael Arar';
  res.render('art');
});

router.get('/chance-meeting', function(req, res, next) {
  res.locals.h1 = "Chance Meeting in a Storefront of a Ping Pong Table and a Sound Installation";
  res.locals.desc = "An installation involving a ping-pong table and some sound commissioned by Machine Project";
  res.locals.largethumb = "/images/ping-pong-thumb.jpg";
  res.locals.deets = "<h2>Medium</h2><ul><li>polyphonic light-sensitive oscillators, assorted microphones, electronics, audio processing</li></ul><h2>Year</h2><ul><li>2013</li></ul><h2>Venues</h2><ul><li>Machine Project - Los Angeles, California</li></ul>";
  res.locals.concept = "<p>An installation involving a ping pong table and some sound at Machine Project created in collaboration with Wyatt Keusch. A set of activities was made available upon arrival—participants choose whether or not to follow them. The only guidelines were to interact with the space (play a match, walk around, throw some ping pong balls in the air) and experience a responsive sonic environment in the process.</p>";
  res.locals.content = '<section class="jumbo"><div class="video-wrapper full"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/65483994?loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div><div class="detail"><p>Video excerpt of the installation at Machine Project</p></div></section><section class="jumbo"><div class="video-wrapper full"><iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/91269299&amp;color=ff5500"></iframe></div><div class="detail"><p>Sound excerpt of the installation</p></div></section>';
  res.locals.goToIndex = true;
  res.locals.title = 'Chance Meeting - Raphael Arar';
  res.render('art');
});

module.exports = router;
