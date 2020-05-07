class Tooltip {
	//setnup a couple of variables that will be used in different locations
	$tooltips = null; //$ means it will be a dom element and plural means its an array
	tooltipDiv = null; // will hold the single tooltip that we create

	// the constructor is the starting point for our class anytime its loaded via Tooltip()
	constructor(selector) {
		console.log('creating new tooltip', selector);

		this.$tooltips = document.querySelectorAll(selector);

		this.$tooltips.forEach(($tooltip) => {
			this.setupTooltip($tooltip);
		});
		this.tooltipDiv = document.createElement('div');
		this.tooltipDiv.innerHTML = 'TEST';
		this.tooltipDiv.classList.add('show-tooltip');
		document.body.appendChild(this.tooltipDiv);
	}

	setupTooltip($tooltip) {
		console.log('tip', $tooltip);

		var tooltipText = $tooltip.getAttribute('data-tooltip');
		console.log('text', tooltipText);
		if (!tooltipText) {
			return;
		}

		console.log('setting up tooltip for', tooltipText);

		//add a hover state with addEventListener
		$tooltip.addEventListener('mouseover', this.mouseover);
	}
	// mouseover(evt){}		//"this" maps to the evt.target

	mouseover = (evt) => {
		// "this" maps to the tooltip instance
		console.log('mousing over', evt.target, evt);

		var tooltipText = evt.target.getAttribute('data-tooltip');
		this.tooltipDiv.innerHTML = tooltipText;
	};
}
