wget https://github.com/hakimel/reveal.js/archive/2.6.2.zip
unzip 2.6.2.zip
rm 2.6.2.zip
mv reveal.js-2.6.2 reveal
npm install
./cli.js slides.html > reveal/index.html