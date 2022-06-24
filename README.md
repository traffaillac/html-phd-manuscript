This repository contains the raw files that I wrote to compose my PhD thesis in HTML and convert it to PDF with [PagedJS](https://pagedjs.org/).
The resulting manuscript is available at https://traffaillac.github.io/content/manuscrit.pdf.
I could not find the time to document the code better and the comments are in French, but the scripts are rather short so it should not be too difficult to understand and reuse them.

Some points worth mentioning that I can recall:

* The manuscript is composed of several HTML files, which are included in the main `manuscrit.html` file using a custom `include` function. Each file has its own redundant inclusion of CSS and JS files, to visualize them in the browser without having to generate the entire PDF. I had to use options to disable CORS to allow loading local files in JavaScript.
* I use `<i>` and `<b>` instead of `<em>` and `<strong>` because they are much shorter to write and there is no need for a semantic document.
* The table of contents and numbering of sections, figures and tables is generated with JavaScript instead of CSS. It is actually very easy thanks to the DOM, and gives a much better degree of control.
* There are 3 types of hyperlinks, cross-section links prefixed with `#sec`, reference links prefixed with `#`, and external links prefixed with `http`. In JavaScript I do various checks for the validity of links based on the errors I was doing. As a nice additional feature I replace reference links with their DOI hyperlink, i.e. when you click on a reference you are directed to its web page.
* The bibliography entries are copied from Zotero into APA format, using the citation key from Zotero as `id`. Since I'm used to copying Bibtex entries one by one from Zotero it was the same amount of work. Also I did not implement automatic numbering of bibliography references because I find them hard to read in a long text.
* The original repository was shared with my supervisor through git, and custom tag styles at the end of `style.css` allowed him to insert comments with `<sh>` and `<notesh>`. I gave them the exact same names and visuals as the macros `\sh` and `\notesh` he would define with LaTeX, to help him feel at ease.
* PagedJS would occasionally crash on headers with `break-after: avoid`, so I did not use it and instead did a manual scan of the manuscript to insert page breaks, once before submitting it to the reviewers, and once before submitting for archival.
* To reduce the sizes of images I would use GIMP to downsize to 300 dpi, convert to palette mode with the lowest number of colors, fix the white color in the palette which GIMP never gets right, export to PNG, then further compress the file with [ImageOptim](https://imageoptim.com/). That helped output a 182-pages PDF under 5 MB.
