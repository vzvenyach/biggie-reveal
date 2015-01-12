wget https://github.com/hakimel/reveal.js/archive/2.6.2.zip
unzip 2.6.2.zip
mv reveal.js-2.6.2/* reveal
./cli.js test.html > reveal/index.html
serve