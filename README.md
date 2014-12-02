# hubot-kobe-nightview

A Hubot script that returns a night view in Kobe

## Installation

    $ npm install https://github.com/bouzuya/hubot-kobe-nightview/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-kobe-nightview/archive/{VERSION}.tar.gz

## Example

    bouzuya> hubot kobe night view
      hubot> http://www.feel-kobe.jp/kobe-yakei/area/sea_side/03/images/01.png
             神戸ポートタワー・神戸海洋博物館 / カワサキワールド
             赤と白に輝く、ユニークなフォルムは港町のシンボル
             https://www.google.com/maps?q=34.682759,135.187303

## Configuration

See [`src/scripts/kobe-nightview.coffee`](src/scripts/kobe-nightview.coffee).

## Development

`npm run`

## License

### `yakei_kobe_20141128.csv`

CC BY 2.1 神戸市 (http://www.city.lg.jp/information/opendata/catalogue.html)

### Others

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-kobe-nightview
[travis-badge]: https://travis-ci.org/bouzuya/hubot-kobe-nightview.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-kobe-nightview
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-kobe-nightview.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-kobe-nightview
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-kobe-nightview.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
