class Tooltip {
	$tooltips = null;
	tooltipDiv = null;

	constructor(selector) {
		console.log('creating new tooltip', selector);

		this.$tooltips = document.querySelectorAll(selector);

		this.$tooltips.forEach(($tooltip) => {
			this.setupTooltip($tooltip);
		});
		this.tooltipDiv = document.createElement('div');
		this.tooltipDiv.innerHTML = '';
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

		$tooltip.addEventListener('mouseover', this.mouseover);

		// this.tooltipDiv = document.createElement('div');
		// this.tooltipDiv.innerHTML = '';
		// this.tooltipDiv.classList.add('show-tooltip');
		// document.body.appendChild(this.tooltipDiv);
	}

	mouseover = (evt) => {
		console.log('mousing over', evt.target, evt);

		var tooltipText = evt.target.getAttribute('data-tooltip');
		this.tooltipDiv.innerHTML = tooltipText;
	};
}