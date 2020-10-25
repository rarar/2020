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
    url: "https://2019.layers.is"
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
    img: "/images/map-main.png"
  },
  {
    name: "Khan Academy Refresh",
    type: "Microsite",
    url: "/ka/refresh",
    desc: "A collection of 5-minute classroom activities that provide a break from standard academic curricula intended to provide virtual/physical classrooms with a breath of fresh air.",
    img: "/images/refresh-thumb.png"
  },
  {
    name: "Mastery Challenges",
    type: "Feature Release",
    url: "/ka/mastery-challenges",
    desc: "One of the best ways to fill in learning gaps is to consistently review material students have seen before—teachers call this “Spiral Review”.  Learn how we incorporated this feature into Khan Academy.",
    img: "/images/mc-main.png"
  }
];

const kaexperiments = [
  {
    name: "Khantent Blocker",
    type: "Discursive Design",
    url: "/ka/khantent-blocker",
    desc: "A self-inflicted design provocation to get learners into a growth mindset.",
    img: "/images/khantent-blocker-main.png"
  }
];



router.get('/map', function(req, res, next) {
  res.locals.h1 = "MAP Accelerator";
  res.locals.desc = "The flagship product from Khan Academy’s partnership with NWEA that integrates diagnostic test score data to provide teachers with personalized content for each and every student.";
  res.locals.largethumb = "/images/ka-thumb.png";
  res.locals.deets = "<h2>Users ❤️</h2><ul><li>Teachers in a district using the MAP diagnostic</li></ul><h2>Employer 🏢</h2><ul><li>Khan Academy</li></ul><h2>Role 💼</h2><ul><li>Product Design Lead</li></ul><h2>Team 👥</h2><ul><li>3 Product Designers</li><li>8 Software Engineers</li><li>3 Product Managers</li><li>2 Product Analysts</li></ul><h2>Responsibilities ✅</h2><ul><li>Product design including user research, interaction design, visual design and prototyping</li><li>Partner management</li><li>Strategy & leadership</li></ul>";
  res.locals.problemStatement = "<p>Imagine this: Mrs. Espinoza is a 4th grade teacher in an inner-city school district in Clark County, Nevada. She’s got a class size of 40, and even though her school is common-core aligned, not every student is at a 4th grade level when it comes to Math and English Language Arts (ELA). In fact, the range is quite broad—some students are working at a 2nd grade level while others might be at a 6th grade level. How can she ensure to meet the needs of every student so that they can live up to their full learning potential?</p><p>This short anecdote is the reality of our school system today. In the past handful of years, we’ve seen class sizes increase as well as the gap in student ability. At the same time, teacher turnover rates in public schools are hitting new highs. How might we use technology in the classroom to better help teachers personalize the education experience for learners so that they can live up to their potential? This question sparked the inception for a new product between the non-profits NWEA and Khan Academy that I led the design for.</p><p><a href=\"http://nwea.org\">NWEA</a> is a research-driven non-profit that creates one of the most prevalent assessments for students in grades 3–8. This assessment, called MAP Growth, is typically administered 3x per year and covers Math and ELA. MAP allows schools and teachers to assess students for growth and help them differentiate and adjust instruction for the ways material is taught in classes.</p><p>While MAP Growth is definitely helpful, teachers and school districts without a lot of resources are caught in a tough situation: they know the needs of their students but they don’t have the time and the means to offer them personalized help. This gap in the public school system served as fertile ground for a partnership to form between Khan Academy, an online platform for personalized practice in foundational skills, and NWEA. Together, we started asking the following questions:</p><ul class='inner-content'><li>How might we help learners get the personalized practice they need to live up to their potential?</li><li>How might we help teachers differentiate instruction without unnecessary friction?</li><li>How might we help school districts integrate rosters and MAP Growth scores and then monitor progress?</li></ul><section class='jumbo'><div class='img-container full'><img src='/images/map-research.png' /></div><div class='detail'><p>Our team running a participatory design research session with a class in the Chicago Public School system.</p></div></section>";
  res.locals.processSolution = "<p>The team targeted to have an alpha release ready for back-to-school 2019, and we agreed that the bulk of the experience would rest on the teachers. Our end goal was to have a pilot product called MAP Accelerator that 5 districts across the country would use. While this product included roles for district leaders, teachers and students, the district leader experience relied largely on a subset of the teacher experience and the student experience relied heavily on the existing Khan Academy learner experience. As Principal Designer, my role was to lead the end-to-end product design effort for the overarching teacher experience. It was a lot of work, but I’ll try to succinctly outline the steps.</p><h4>Defining the constraints</h4><p>We were under a really tight timeline and a brand new user base. While Khan Academy has worked with teachers before, teachers using the MAP test was an entirely new demographic! When we started collecting information on these teachers, we realized that they were all so very different. Diving into the data, my Product Manager and I decided it would be inefficient to craft personas but rather we should focus on the market segment we wanted to tackle: <em>teachers with less than 5 years of experience who are new to MAP</em>. Defining these user constraints, helped my team and I design for these teachers’ specific needs.</p><p>The technical & business side presented a hurdle that we also had to design around: rostering students would be a manual process between NWEA and the school district. A large part of the experience hinged on onboarding teachers and subsequently onboarding their students. In order to do this with minimal friction, it was essential for teachers to be able to get their class up-and-running as soon as possible. This meant having all of their students in MAP Accelerator from day one. The experience would need to be designed around this manual rostering process—I’ll dive into more detail on that in a bit.</p><h4>Primary & secondary research</h4><p>With Khan Academy’s reach, we were able to line up school visits immediately. We started by doing field research at a public school in inner-city Chicago where a teacher was diligently using MAP test data to manually assign content in Khan Academy for each student. While laborious, this teacher said it was really effective in helping him differentiate each one of his students. We also ran co-design and participatory design sessions with teachers and students to help give us additional information while we were there.</p><p>Around the same time, we began outlining the technical steps for rostering and the onboarding experience teachers would have. This work led us to create a high-level journey map of the experience for district leaders, teachers and students. We knew there would be a lot of behind-the-scenes sequencing of steps that would lead to a choreography of these unique user roles, especially as it related to onboarding new users.</p><p>Lastly, we conducted some secondary research through conference proceedings at ISTE, books, journals and blogs around personalized education. What matters most to teachers when they look for personalized edtech supplements in the classroom? This led us down a path of looking into how teachers use competitor software from Pearson, IXL and the like to integrate with test score data.</p><section class='image-block'><figure><img src='/images/thappypath.png'/><figcaption>High-level journey map of the desired teacher experience.</figcaption></figure></section><h4>Findings</h4><p>Through both the primary and secondary research we uncovered that teachers tend to conduct class with math instruction in three main ways:</p><ol class='inner-content'><li>Teaching the whole class from a single lesson plan</li><li>Putting small groups of students together who are at a similar level and giving them unique assignments</li><li>Assigning personalized practice on an edtech supplement like Khan Academy</li></ol><p>With this research and our technical infrastructure, we blocked out the experience into a few major components:</p><ol class='inner-content'><li>Rostering & onboarding</li><li>Placement & assigning content</li><li>Reporting & adjusting placement</li></ol><p>You can see these specific steps in more detail on the following user flow.</p><section class='image-block'><figure><a href='/images/MGA.png'><img src='/images/MGA.png'/></a><figcaption>End-to-end user flow for MAP Accelerator (click for greater detail).</figcaption></figure></section><h4>Iterating on prototypes</h4><p>Armed with this high-level flow, we could now begin iterating on specifics with teachers. Placement emerged as a crucial part of the onboarding experience. In the Placement phase, a teacher would be able to see the student’s MAP score in an instructional area from their most recent test and assign Khan Academy content that is associated with that score range. This step would happen in tandem with rostering. Upon placing a student, the teacher would then be able to view a report that gives a high level overview of where each student is at with respect to each instructional area in Math. We sketched out numerous versions of this report and hopped on video calls with teachers around the country.</p><p>Here are some of the approaches we tried:</p><section class='image-block'><figure><img src='/images/mga-map-report-1.png'/></a><figcaption>Low-fidelity wireframe of a consolidated view of teacher reports.</figcaption></figure><figure><img src='/images/mga-map-report-2.png'/></a><figcaption>Low-fidelity wireframe of a more focused view of the placement scores.</figcaption></figure></section><p>We learned from teachers that they wanted to get a sense of progress in tandem with where their students placed. This information would help them learn if a student was working on material that was too easy or too challenging. This also gave them more insight when they wanted to group similar students together for small group activities.</p><p>After this learning phase, we dove in head first into an Agile process to begin implementing designs. While we were comfortable with the user experience that we wanted to have for our MVP, our timelines brought forth some compromises to the rostering and placement flows that were core to teacher onboarding.</p><h4>Shipped work</h4><p>We ended up shipping an entirely new product that included the ability for not only districts to easily roster classrooms and connect them to Khan Academy but for teachers to easily place students at their learning edge and monitor their progress accordingly. We called this the placement, practice, progress feedback loop. Our hypothesis was that this feedback loop, if properly instrumented, would help students achieve their full potential by consistently placing them at their learning edge and solving for the one-size-fits-all challenges teachers face when instructing a group of wildly different students. Here are some of the experiences we designed for:</p><section class='jumbo'><div class='img-container'><img src='/images/map-placement-flow.gif' /></div><div class='detail'><p>Walkthrough of the placement experience. When new MAP scores arrive, the experience prompts a teacher to review and place their students.</p><p>The MAP test is administered three times per year, so teachers will go through this process after each test.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/map-progress-report.png' /></div><div class='detail'><p>With the progress reports, a teacher could hone in on a specific time period and monitor how their students were progressing in each instructional area as defined by MAP.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/map-indie-student-report.png' /></div><div class='detail'><p>Teachers have a window into every student's unique needs.</p><p>On the individual student report, our MVP entailed a simple audit trail of tasks and activities done in the platform so teachers could get an overview of student effort.</p></div></section>";
  res.locals.outcomeNextSteps = "<p>MAP Accelerator launched its first pilot to 6 school districts in the Fall of 2019 to over 200 thousand students. That said, as an enterprise product, we had to develop different metrics for success from what we’re traditionally used to. Instead of indexing high on total users, we decided to place greater weight on the student activation rate and how many new students would become Monthly Very Active Learners (MVALs). MVALs include students who spend at least 120 minutes doing active learning on MAP Accelerator a month. Our target? 22% of licensed students. Our result? 23%. Overall, the pilot hit our success criteria giving us enough momentum to continue building on to the platform.</p><p>Like most times when we try something new, we learn something new. Working on this project definitely shed light on some growth opportunities for the organization and me!</p><p><strong>Lesson 1: 2 non-profits can bite off more than they can chew</strong></p><p>I think we were a bit over ambitious in terms of what we can accomplish and the realities of our resourcing capabilities. From exciting data visualizations to streamlined rostering, there were many areas of this project where we had to cut scope drastically.</p><section class='image-block'><figure><img src='/images/nixed-data-viz.png'/><figcaption>Some of the data visualization ideas we had to toss out since they were out of scope.</figcaption></figure></section><p><strong>Lesson 2: MAP Accelerator activation process</strong></p><p>We didn’t do enough research to learn how teachers would be signing up their students on MAP Accelerator. In fact, our “edge case” of signing up via classroom code became the primary way teachers would link their students to a class! This was definitely an oversight on our end and an opportunity to advocate for more upfront research in the future.</p>";
  res.locals.title = 'MAP Accelerator - Raphael Arar';
  res.render('project');
});

router.get('/mastery-challenges', function(req, res, next) {
  res.locals.h1 = "Mastery Challenges";
  res.locals.desc = "One of the best ways to fill in learning gaps is to consistently review material students have seen before—teachers call this “Spiral Review”.  Learn how we incorporated this feature into Khan Academy.";
  res.locals.largethumb = "/images/mc-thumb.png";
  res.locals.deets = "<h2>Users ❤️</h2><ul><li>Learners & teachers</li></ul><h2>Employer 🏢</h2><ul><li>Khan Academy</li></ul><h2>Role 💼</h2><ul><li>Product Design Lead</li></ul><h2>Team 👥</h2><ul><li>1 Product Manager</li><li>1 Engineering Manager</li><li>4 Software Engineers</li><li>1 Product Analyst</li></ul><h2>Responsibilities ✅</h2><ul><li>Product design including user research, interaction design, visual design and prototyping</li><li>Strategy & leadership</li></ul>";
  res.locals.problemStatement = "<p>We’ve all been there. You learn a concept, feel like you’ve got it, apply it and then weeks later can’t even remember seeing it.</p><p>Students and teachers deal with this all the time, especially with math. Imagine you’re a 5th grader learning how to add and subtract decimals, you study hard for a quiz, and then weeks later find that you don’t remember anything about it. One of the ways teachers in the classroom have learned to combat this is to apply a pedagogical pattern known as spiral review. The general idea is that concepts previously learned are later reinforced to help learners commit those concepts to long-term memory.</p><p>In Khan Academy, we realized we had developed a gap in our pedagogical approach. Teachers kept providing us feedback that they could only rely so much on our platform as a supplement to their teaching since it didn’t incorporate ways to help students really understand concepts they previously experienced.</p><section class='image-block'><figure><img src='/images/sr-graph.png'/><figcaption>The forgetting curve and how consistent review helps for long-term knowledge retention.</figcaption></figure></section>";
  res.locals.processSolution = "<p>The idea of launching a spiral review feature came at a delicate time for Khan Academy. We were in the midst of deprecating an outdated, but beloved feature known as Missions that had a small, but vocal user base. Through interviewing many of these users, we understood that one of the main reasons they loved Missions was because of its ability for students to review material they had previously seen before. This form of space repetition, while not perfect, was a huge help for teachers using our platform. We also interviewed teachers who had once tried Khan Academy and abandoned it. Many of these users indicated that the primary reason they were less inclined to rely on Khan Academy was due to their class being unable to consistently review content from earlier subjects. Both of these teachers had concerns that their students wouldn’t be able to retain what they were learning on Khan Academy without consistent review.</p><blockquote><p>The elimination of spiraling…is the primary reason our schools switched from Khan…. Khan is just much less effective for our needs this way.</p><footer>— District Leader</footer></blockquote><blockquote><p>…this year my honors students only saw a 5% gain over their prior year ranking. I suspect this decrease is largely attributable to recent changes in KA. Specifically, lack of Spiral Review…</p><footer>— Teacher</footer></blockquote><p>Through our research we identified 3 goals:</p><ol class='inner-content'><li>Boost learner knowledge retention over time, and increase teacher confidence in our Course Mastery system by introducing a spiraling feature that was personalized to the learner</li><li>Give learners a less-punitive place to review and level up their skills. Currently, there are only a few ways to show you’ve mastered a skill, and those are quite time-consuming for learners!</li><li>Encourage review of previously mastered skills. Our system previously had no mechanism to review skills students had already achieved mastery with.</li></ol><h4>Iterating on prototypes</h4><p>Having the green light on this feature set the stage for a few explorations. Our first approach involved incorporating “flashback” questions in new quizzes and unit tests that learners would take on the platform. After a few iterations on this concept, cross-functional discussions and interviews with teachers, we realized this approach wouldn’t work for a few key reasons. To start, having these flashback questions interspersed within existing quizzes and unit tests meant that teachers lacked visibility into the black box of our personalized learning platform. As a result, the skills and specific questions students addressed wouldn’t be visible to a teacher so they’d have no way to intervene and help reinforce concepts. Teachers and our pedagogy working group also felt that having these review questions tacked on to existing quizzes and unit tests wouldn’t allow for sufficient review to help with knowledge retention. On top of that, having questions embedded in other quizzes and unit tests meant increased complexity for our engineering team as opposed to having a standalone review feature, especially when it came down to showing this data on teacher reports. My team and I ended up taking this feedback and iterating on the design of a standalone module for spiral review called Mastery Challenges.</p><section class='image-block'><figure><img src='/images/sr-question.png'/><figcaption>Our first approach at incorporating spiral review questions, which was unsuccessful.</figcaption></figure></section><h4>Shipped work</h4><p>After a student spends some time working on a course, they would “unlock” a 6-question Mastery Challenge that spirals skills they have previously worked on. In order to do this, a learner would have to work on at least 3 skills in the course, 1 of which that they are ready to prove mastery on. The skills would be selected by our underlying system based on a student’s level of proficiency and the amount of time that’s elapsed since they last worked on that skill. Once a Mastery Challenge is unlocked, the student would have 12 hours to complete it before it resets. Having a time element on a Mastery Challenge ensures that the reviewed skills are always relevant (and adds a little gamification to the mix).</p.<p>On the teacher side of the experience, this item would show up as a unique entry on a student’s activity log. Teachers would be able to see the specific skills a student worked on and whether or not they leveled up in mastery. This aspect addressed the specific user need of providing visibility into what a student reviewed.</p><section class='jumbo'><div class='img-container'><img src='/images/sr-paper-prototype.gif' /></div><div class='detail'><p>A paper prototype of the shipped experience. This would mirror the experience of taking a quiz or a unit test on Khan Academy.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/sr-overview.png' /></div><div class='detail'><p>The default state of a Mastery Challenge and how it would appear to a learner when unlocked.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/sr-resume.png' /></div><div class='detail'><p>After starting a Mastery Challenge, a learner would have 12 hours to complete it.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/sr-eot.png' /></div><div class='detail'><p>After completing a Mastery Challenge, a learner would be able to see what skills it covered and how their mastery progress changed.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/sr-teacher-report-anim.gif' /></div><div class='detail'><p>When a student completes a Mastery Challenge, both the student and teacher have visibility into report data covering specific skills they practiced.</p></div></section>";
  res.locals.outcomeNextSteps = "<p>In all honesty, this feature release has been one of the highlights of my career. After launching this beta to 40+ teachers and their students, our NPS Score on the Spiral Review feature amongst teachers was 95.24%!</p><p>We announced this beta in a webinar to teachers, and of the 77% who took a post-webinar survey, 100% responded with “Launch it!”</p><blockquote><p>There are so many standards to cover in 4th grade math, that as a teacher I am forced to jump from one topic to another all year. This is a great tool to reinforce previous topics. Students also gain confidence and strengthen their math skills.</p><footer>— Robert</footer></blockquote><blockquote><p>I am a real believer in learning that it's not \"one and done\". I see kids who do well so they think they are \"experts\" and once they have been away from a subject for awhile they have forgotten part or all of the concept. This will continue to challenge them and ensure they really are masters.</p><footer>— Marcy</footer></blockquote><p>Overall, this feature has been a huge success. The next step for us as a team will be to continue monitoring data over time to measure efficacy results and see if knowledge retention increases on the platform.</p>";
  res.locals.title = 'Mastery Challenges - Raphael Arar';
  res.render('project');
});

router.get('/refresh', function(req, res, next) {
  res.locals.h1 = "Khan Academy Refresh";
  res.locals.desc = "A collection of 5-minute classroom activities that provide a break from standard academic curricula intended to provide virtual/physical classrooms with a breath of fresh air.";
  res.locals.largethumb = "/images/ka-refresh-main.png";
  res.locals.deets = "<h2>Users ❤️</h2><ul><li>Teachers, parents and learners</li></ul><h2>Employer 🏢</h2><ul><li>Khan Academy</li></ul><h2>Role 💼</h2><ul><li>Design lead</li></ul><h2>Team 👥</h2><ul><li>2 Designers</li><li>1 User Researcher</li><li>1 Product Manager</li></ul><h2>Responsibilities ✅</h2><ul><li>Design including user research, interaction design, visual design, prototyping and implementation</li><li>Strategy & leadership</li></ul>";
  res.locals.problemStatement = "<p>2020 brought forth an onslaught of challenges for teacher-learner and even parent-learner relationships. Once shleter-in-place orders were announced across the country, we knew there was work we could do as an organization to help bridge those personal gaps and facilitate stronger social-emotional bonds between teachers and learners in a virtual setting.</p><section class='image-block'><figure><img src='/images/idea-brainstorm.png'/><figcaption>Some of our initial explorations prior to landing on the final concept for Refresh.</figcaption></figure></section>";
  res.locals.processSolution = "<p>We immediately started interviewing teachers across the country. These first-hand sessions not only validated our assumptions but also gave us specific insight into the challenges teachers were facing. After interviewing educators, we uncovered these key insights:</p><ul class='inner-content'><li>The joy and fun that’s essential for student engagement is fading. It’s easy for students to opt out of school, and they’re only showing up when they have a compelling reason to participate.</li><li>Teacher-student relationships are dramatically fractured. These relationships are often associated with practical things like homework assignments, and not anything fun.</li></ul><p>These insights led us to two central questions:</p><ul class='inner-content'><li>How might we make it easier to have fun and be joyful in a blended learning environment?</li><li>How might we help teachers and students build strong relationships in a new context?</li></ul><p>We focused on aspects of social-emotional learning in order to get learners engaged in the new online classroom environment.</p><p>Our research served as the catalyst for a 2-week design sprint, where we iterated on a number of concepts to help teachers engage their classrooms. We ideated on concepts that were not only relevant for digital learning, but also could be used in hybrid and in-person learning models.</p><p>The design process followed the IDEO Design Sprint methodology. During the first week, we ran interviews both externally with teachers, administrators, parents and students and internally with Khan Academy stakeholders from Learning Science, Product Management and Marketing. We also conducted design exercises, from storyboarding to creative mash-ups, that allowed us to diverge and then converge on ideas. Taking our artifacts as inputs, we collaboratively came up with the concept of Refresh. The experience was initially conceived of as a slide-deck prototype, which we then used to validate with teachers. Our qualitative feedback was positive; teachers felt that having an experience that allowed them to get their class warmed up, cooled down or just reset would have a positive impact on learning outcomes.</p><section class='jumbo'><div class='img-container'><img src='/images/refresh-1.png' /></div><div class='detail'><p>The slide view of a prompt for when teachers want a random prompt.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/refresh-2.png' /></div><div class='detail'><p>The list view for when teachers want to scan through and find the right prompt.</p></div></section>";
  res.locals.outcomeNextSteps = "<p>Khan Academy Refresh was released right before the start of the school year in August. Its reception has been positive, and teachers all over the country have been eager to use it in their classrooms:</p><blockquote><p>I LOVE THE REFRESH IDEAS!! Lovely backgrounds and fun ideas! My burnt out brain needs these as much as the kids do! Thanks!</p></blockquote><blockquote><p>A friend of mine, just called me frantically. She needed a unique prompt to use with a student. Without hesitation, I said check out Khan Academy Refresh. Within seconds she did, said thank you and bye.</p></blockquote><p>The team and I hope to develop Refresh further and allow for teachers to submit their own contributions and share how their classrooms have interpreted the exercises included. Refresh can be experienced at <a href='https://refresh.khanacademy.org'>refresh.khanacademy.org</a></p>";
  res.locals.title = 'Khan Academy Refresh - Raphael Arar';
  res.render('project');
});

router.get('/khantent-blocker', function(req, res, next) {
  res.locals.h1 = "Khantent Blocker";
  res.locals.desc = "A self-inflicted design provocation to get learners into a growth mindset.";
  res.locals.largethumbnofull = "/images/khantent-blocker.png";
  res.locals.deets = "<h2>Users ❤️</h2><ul><li>Classroom learners</li></ul><h2>Employer 🏢</h2><ul><li>Khan Academy</li></ul>";
  res.locals.concept = "<p>From popular journalism to scholarly academic research, the 'attention economy' has been used quite a bit lately to describe social media's interest in incentivizing our attention for the purposes of collecting data. Classrooms are no exception—many schools haven't blocked social media sites. Once the chromebooks come out, student attention spans quickly wander to the realms of Facebook, Youtube, etc. What if we deflected some of that social media usage into learning?</p><p>Khantent Blocker is a simple browser extension that helps set limits on social media usage. When time is up, the end user is served up a random course on Khan Academy. It not only serves a functional purpose by allowing the end user to ration their daily social media usage, but it also serves a discursive, provocative purpose by imagining if part of student agency was offloaded to a machine.</p><p>Available for <a href=\"https://chrome.google.com/webstore/detail/khantent-blocker/ijljmllaclicikpfbemaacgmpndliala?hl=en\">Chrome</a> and <a href=\"https://addons.mozilla.org/en-US/firefox/addon/khantent-blocker/\">Firefox</a></p>";
  res.locals.content = '';
  res.locals.title = 'Khantent Blocker - Raphael Arar';
  res.render('art');
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
