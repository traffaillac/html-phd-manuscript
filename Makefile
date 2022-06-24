manuscrit.pdf: *.html *.css *.js figures/* Makefile
#	NODE_PATH=/usr/local/lib/node_modules node make.js
	pagedjs-cli manuscrit.html -o manuscrit.pdf
