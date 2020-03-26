var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/motor-studies', function(req, res, next) {
  res.locals.h1 = "Motor studies";
  res.locals.desc = "The attention economy drives much of the Western world. This set of minimal sculptures, each with its own simple gesture from one or more motors, is an effort to metaphorize this digital space in the physical world.";
  res.locals.videothumb = '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/400945953?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
  res.locals.deets = "<h2>⚒️️ Medium</h2><ul><li>Acrylic, steel, modified electronics, various plastic components</li></ul><h2>🕒 Year</h2><ul><li>2019–Present</li><ul><h2>🏛 Venues</h2><ul><li>The Holland Project - Reno, Nevada</li><li>IFL - Santa Cruz, California</li></ul>";
  res.locals.concept = "<p>Motor studies consists of a set of 8 minimal sculptures that vie for the attention of its participants. When installed, these pieces should be laid out sparsely. The negative space serves to accentuate the simple gestures from the motors within each piece. The end result is an effort to make the attention economy physical. Functionally, each sculpture is equipped with scanning capabilities to detect the number of connected personal devices (smartphones, wearables, etc.). Increasing counts of detected devices cause each sculpture to operate more erratically and chaotically as a way of relating to the increased anxiety one feels with prolonged technology usage.</p>";
  res.locals.title = 'Raphael Arar';
  res.render('art');
});

module.exports = router;
