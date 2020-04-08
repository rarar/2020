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
    url: "#"
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
    name: "Mastery Challenges",
    type: "Feature Release",
    url: "/ka/map",
    desc: "One of the best ways to fill in learning gaps is to consistently review material students have seen before—teachers call this “Spiral Review”.  Learn how we incorporated this feature into Khan Academy.",
    img: "/images/placeholder.png"
  }
];

const kaexperiments = [
  {
    name: "Khantent Blocker",
    type: "Discursive Design",
    url: "/ka/khantent-blocker",
    desc: "The flagship product from Khan Academy’s partnership with NWEA that integrates diagnostic test score data to provide teachers with personalized content for each and every student.",
    img: "/images/placeholder.png"
  }
];



router.get('/map', function(req, res, next) {
  res.locals.h1 = "MAP Accelerator";
  res.locals.desc = "The flagship product from Khan Academy’s partnership with NWEA that integrates diagnostic test score data to provide teachers with personalized content for each and every student.";
  res.locals.largethumb = "/images/ka-thumb.png";
  res.locals.deets = "<h2>❤️ Users</h2><ul><li>Teachers in a district using the MAP diagnostic</li></ul><h2>🏢 Employer</h2><ul><li>Khan Academy</li></ul><h2>💼 Role</h2><ul><li>Product Design Lead</li></ul><h2>👥 Team</h2><ul><li>3 Product Designers</li><li>8 Software Engineers</li><li>3 Product Managers</li><li>2 Product Analysts</li></ul><h2>✅ Responsibilities</h2><ul><li>Product design including user research, interaction design, visual design and prototyping</li><li>Partner management</li><li>Strategy & leadership</li></ul>";
  res.locals.problemStatement = "<p>Imagine this: Mrs. Espinoza is a 4th grade teacher in an inner-city school district in Clark County, Nevada. She’s got a class size of 40, and even though her school is common-core aligned, not every student is at a 4th grade level when it comes to Math and English Language Arts (ELA). In fact, the range is quite broad—some students are working at a 2nd grade level while others might be at a 6th grade level. How can she ensure to meet the needs of every student so that they can live up to their full learning potential?</p><p>This short anecdote is the reality of our school system today. In the past handful of years, we’ve seen class sizes increase as well as the gap in student ability. At the same time, teacher turnover rates in public schools are hitting new highs. How might we use technology in the classroom to better help teachers personalize the education experience for learners so that they can live up to their potential? This question sparked the inception for a new product between the non-profits NWEA and Khan Academy that I led the design for.</p><p><a href=\"http://nwea.org\">NWEA</a> is a research-driven non-profit that creates one of the most prevalent assessments for students in grades 3–8. This assessment, called MAP Growth, is typically administered 3x per year and covers Math and ELA. MAP allows schools and teachers to assess students for growth and help them differentiate and adjust instruction for the ways material is taught in classes.</p><p>While MAP Growth is definitely helpful, teachers and school districts without a lot of resources are caught in a tough situation: they know the needs of their students but they don’t have the time and the means to offer them personalized help. This gap in the public school system served as fertile ground for a partnership to form between Khan Academy, an online platform for personalized practice in foundational skills, and NWEA. Together, we started asking the following questions:</p><ul class='inner-content'><li>How might we help learners get the personalized practice they need to live up to their potential?</li><li>How might we help teachers differentiate instruction without unnecessary friction?</li><li>How might we help school districts integrate rosters and MAP Growth scores and then monitor progress?</li></ul><section class='jumbo'><div class='img-container full'><img src='/images/map-research.png' /></div><div class='detail'><p>Our team running a participatory design research session with a class in the Chicago Public School system.</p></div></section>";
  res.locals.processSolution = "<p>The team targeted to have an alpha release ready for back-to-school 2019, and we agreed that the bulk of the experience would rest on the teachers. Our end goal was to have a pilot product called MAP Accelerator that 5 districts across the country would use. While this product included roles for district leaders, teachers and students, the district leader experience relied largely on a subset of the teacher experience and the student experience relied heavily on the existing Khan Academy learner experience. As Principal Designer, my role was to lead the end-to-end product design effort for the overarching teacher experience. It was a lot of work, but I’ll try to succinctly outline the steps.</p><h4>Defining the constraints</h4><p>We were under a really tight timeline and a brand new user base. While Khan Academy has worked with teachers before, teachers using the MAP test was an entirely new demographic! When we started collecting information on these teachers, we realized that they were all so very different. Diving into the data, my Product Manager and I decided it would be inefficient to craft personas but rather we should focus on the market segment we wanted to tackle: <em>teachers with less than 5 years of experience who are new to MAP</em>. Defining these user constraints, helped my team and I design for these teachers’ specific needs.</p><p>The technical & business side presented a hurdle that we also had to design around: rostering students would be a manual process between NWEA and the school district. A large part of the experience hinged on onboarding teachers and subsequently onboarding their students. In order to do this with minimal friction, it was essential for teachers to be able to get their class up-and-running as soon as possible. This meant having all of their students in MAP Accelerator from day one. The experience would need to be designed around this manual rostering process—I’ll dive into more detail on that in a bit.</p><h4>Primary & secondary research</h4><p>With Khan Academy’s reach, we were able to line up school visits immediately. We started by doing field research at a public school in inner-city Chicago where a teacher was diligently using MAP test data to manually assign content in Khan Academy for each student. While laborious, this teacher said it was really effective in helping him differentiate each one of his students. We also ran co-design and participatory design sessions with teachers and students to help give us additional information while we were there.</p><p>Around the same time, we began outlining the technical steps for rostering and the onboarding experience teachers would have. This work led us to create a high-level journey map of the experience for district leaders, teachers and students. We knew there would be a lot of behind-the-scenes sequencing of steps that would lead to a choreography of these unique user roles, especially as it related to onboarding new users.</p><p>Lastly, we conducted some secondary research through conference proceedings at ISTE, books, journals and blogs around personalized education. What matters most to teachers when they look for personalized edtech supplements in the classroom? This led us down a path of looking into how teachers use competitor software from Pearson, IXL and the like to integrate with test score data.</p><section class='image-block'><figure><img src='/images/thappypath.png'/><figcaption>High-level journey map of the desired teacher experience.</figcaption></figure></section><h4>Findings</h4><p>Through both the primary and secondary research we uncovered that teachers tend to conduct class with math instruction in three main ways:</p><ol class='inner-content'><li>Teaching the whole class from a single lesson plan</li><li>Putting small groups of students together who are at a similar level and giving them unique assignments</li><li>Assigning personalized practice on an edtech supplement like Khan Academy</li></ol><p>With this research and our technical infrastructure, we blocked out the experience into a few major components:</p><ol class='inner-content'><li>Rostering & onboarding</li><li>Placement & assigning content</li><li>Reporting & adjusting placement</li></ol><p>You can see these specific steps in more detail on the following user flow.</p><section class='image-block'><figure><a href='/images/MGA.png'><img src='/images/MGA.png'/></a><figcaption>End-to-end user flow for MAP Accelerator (click for greater detail).</figcaption></figure></section><h4>Iterating on prototypes</h4><p>Armed with this high-level flow, we could now begin iterating on specifics with teachers. Placement emerged as a crucial part of the onboarding experience. In the Placement phase, a teacher would be able to see the student’s MAP score in an instructional area from their most recent test and assign Khan Academy content that is associated with that score range. This step would happen in tandem with rostering. Upon placing a student, the teacher would then be able to view a report that gives a high level overview of where each student is at with respect to each instructional area in Math. We sketched out numerous versions of this report and hopped on video calls with teachers around the country.</p><p>Here are some of the approaches we tried:</p><section class='image-block'><figure><img src='/images/mga-map-report-1.png'/></a><figcaption>Low-fidelity wireframe of a consolidated view of teacher reports.</figcaption></figure><figure><img src='/images/mga-map-report-2.png'/></a><figcaption>Low-fidelity wireframe of a more focused view of the placement scores.</figcaption></figure></section><p>We learned from teachers that they wanted to get a sense of progress in tandem with where their students placed. This information would help them learn if a student was working on material that was too easy or too challenging. This also gave them more insight when they wanted to group similar students together for small group activities.</p><p>After this learning phase, we dove in head first into an Agile process to begin implementing designs. While we were comfortable with the user experience that we wanted to have for our MVP, our timelines brought forth some compromises to the rostering and placement flows that were core to teacher onboarding.</p><h4>Shipped work</h4><p>We ended up shipping an entirely new product that included the ability for not only districts to easily roster classrooms and connect them to Khan Academy but for teachers to easily place students at their learning edge and monitor their progress accordingly. We called this the placement, practice, progress feedback loop. Our hypothesis was that this feedback loop, if properly instrumented, would help students achieve their full potential by consistently placing them at their learning edge and solving for the one-size-fits-all challenges teachers face when instructing a group of wildly different students. Here are some of the experiences we designed for:</p><section class='jumbo'><div class='img-container'><img src='/images/map-placement-flow.gif' /></div><div class='detail'><p>Walkthrough of the placement experience. When new MAP scores arrive, the experience prompts a teacher to review and place their students.</p><p>The MAP test is administered three times per year, so teachers will go through this process after each test.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/map-progress-report.png' /></div><div class='detail'><p>With the progress reports, a teacher could hone in on a specific time period and monitor how their students were progressing in each instructional area as defined by MAP.</p></div></section><section class='jumbo'><div class='img-container'><img src='/images/map-indie-student-report.png' /></div><div class='detail'><p>Teachers have a window into every student's unique needs.</p><p>On the individual student report, our MVP entailed a simple audit trail of tasks and activities done in the platform so teachers could get an overview of student effort.</p></div></section>";
  res.locals.outcomeNextSteps = "<p>MAP Accelerator launched its first pilot to 6 school districts in the Fall of 2019 to over 200 thousand students. That said, as an enterprise product, we had to develop different metrics for success from what we’re traditionally used to. Instead of indexing high on total users, we decided to place greater weight on the student activation rate and how many new students would become Monthly Very Active Learners (MVALs). MVALs include students who spend at least 120 minutes doing active learning on MAP Accelerator a month. Our target? 22% of licensed students. Our result? 23%. Overall, the pilot hit our success criteria giving us enough momentum to continue building on to the platform.</p><p>Like most times when we try something new, we learn something new. Working on this project definitely shed light on some growth opportunities for the organization and me!</p><p><strong>Lesson 1: 2 non-profits can bite off more than they can chew</strong></p><p>I think we were a bit over ambitious in terms of what we can accomplish and the realities of our resourcing capabilities. From exciting data visualizations to streamlined rostering, there were many areas of this project where we had to cut scope drastically.</p><section class='image-block'><figure><img src='/images/nixed-data-viz.png'/><figcaption>Some of the data visualization ideas we had to toss out since they were out of scope.</figcaption></figure></section><p><strong>Lesson 2: MAP Accelerator activation process</strong></p><p>We didn’t do enough research to learn how teachers would be signing up their students on MAP Accelerator. In fact, our “edge case” of signing up via classroom code became the primary way teachers would link their students to a class! This was definitely an oversight on our end and an opportunity to advocate for more upfront research in the future.</p>";
  res.locals.title = 'Raphael Arar';
  res.render('project');
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
