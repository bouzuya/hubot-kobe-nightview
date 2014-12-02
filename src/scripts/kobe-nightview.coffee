# Description
#   A Hubot script that returns a night view in Kobe
#
# Configuration:
#   None
#
# Commands:
#   hubot kobe-nightview - returns a night view in Kobe
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  fs = require 'fs'
  path = require 'path'
  parse = require 'csv-parse'

  file = path.resolve(__dirname, '../../yakei_kobe_20141128.csv')
  data = fs.readFileSync(file, encoding: 'utf-8')
  views = []
  parse data, (err, result) ->
    views = result.slice(1) # skip header

  robot.respond /kobe[- ]?night[- ]?view$/i, (res) ->
    view = res.random views
    name = view[1]
    tagline = view[3]
    image = view[6]
    lat = view[7]
    lng = view[8]
    map = "https://www.google.com/maps?q=#{lat},#{lng}"

    res.send """
      #{image}
      #{name}
      #{tagline}
      #{map}
    """
