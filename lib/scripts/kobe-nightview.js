// Description
//   A Hubot script that returns a night view in Kobe
//
// Configuration:
//   None
//
// Commands:
//   hubot kobe-nightview - returns a night view in Kobe
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var data, file, fs, parse, path, views;
  fs = require('fs');
  path = require('path');
  parse = require('csv-parse');
  file = path.resolve(__dirname, '../../yakei_kobe_20141128.csv');
  data = fs.readFileSync(file, {
    encoding: 'utf-8'
  });
  views = [];
  parse(data, function(err, result) {
    return views = result.slice(1);
  });
  return robot.respond(/kobe[- ]?night[- ]?view$/i, function(res) {
    var image, lat, lng, map, name, tagline, view;
    view = res.random(views);
    name = view[1];
    tagline = view[3];
    image = view[6];
    lat = view[7];
    lng = view[8];
    map = "https://www.google.com/maps?q=" + lat + "," + lng;
    return res.send("" + image + "\n" + name + "\n" + tagline + "\n" + map);
  });
};
