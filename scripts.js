function prefix_headers(chapter, section) {
	let subsection = 0, subsubsection = 0
	for (let h of document.querySelectorAll('h1,h2,h3,h4')) {
		if (h.id)
			continue
		if (h.tagName === 'H1') {
			h.id = `sec${chapter}`
			h.innerHTML = `Chapitre ${chapter}.&emsp;${h.innerHTML}`
		} else if (h.tagName === 'H2') {
			h.id = `sec${chapter}x${section}`
			h.innerHTML = `${chapter}.${section}&emsp;${h.innerHTML}`
		} else if (h.tagName === 'H3') {
			subsubsection = 0
			h.id = `sec${chapter}x${section}x${++subsection}`
			h.innerHTML = `${chapter}.${section}.${subsection}&emsp;${h.innerHTML}`
		} else {
			h.id = `sec${chapter}x${section}x${subsection}x${++subsubsection}`
			h.innerHTML = `${chapter}.${section}.${subsection}.${subsubsection}&emsp;${h.innerHTML}`
		}
	}
	
	if (typeof(figNumber) === 'undefined')
		figNumber = tabNumber = 0
	for (let f of document.querySelectorAll('figure:not([num])')) {
		f.setAttribute('num', ++figNumber)
		let c = f.getElementsByTagName('figcaption')[0]
		c.innerHTML = `Figure ${figNumber} : ${c.innerHTML}`
	}
	for (let t of document.querySelectorAll('table[id]:not([num])')) {
		t.setAttribute('num', ++tabNumber)
		let c = t.getElementsByTagName('caption')[0]
		c.innerHTML = `Tableau ${tabNumber} : ${c.innerHTML}`
	}
	
	for (let a of document.querySelectorAll('a:not([suffix])[href^="#fig-"]')) {
		let fig = document.querySelector(a.getAttribute('href'))
		if (fig !== null) {
			a.setAttribute('suffix', fig.getAttribute('num'))
			a.innerHTML = `${a.innerHTML} ${fig.getAttribute('num')}`
		}
	}
	for (let a of document.querySelectorAll('a:not([suffix])[href^="#tab-"]')) {
		let tab = document.querySelector(a.getAttribute('href'))
		if (tab !== null) {
			a.setAttribute('suffix', tab.getAttribute('num'))
			a.innerHTML = `${a.innerHTML} ${tab.getAttribute('num')}`
		}
	}
}
