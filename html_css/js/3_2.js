(function(){
	var prog_bar = document.getElementById('prog');
	var prog = prog_bar.value;
	prog_bar.addEventListener('change', function(){
		prog = this.value;
		setProgress(prog);
	});
	
	setProgress(prog);

	function setProgress(prog) {
		var prog = prog || 0;
		prog = prog < 0 ? 0 : prog;
		prog = prog > 100 ? 100 : prog;
		
		var mask = document.querySelector('.mask');
		var layer = document.querySelector('.layer');
		var left_cir = document.querySelector('.left');
		var right_cir = document.querySelector('.right');

		if (prog <= 50) {
			var rotate_deg1 = prog * 3.6;
			mask.style.display = 'block';
			right_cir.style.display = 'none';
			left_cir.style.transform = "rotate("+rotate_deg1+"deg)";
		} else {
			var rotate_deg2 = (prog - 50) * 3.6;
			mask.style.display = 'none';
			right_cir.style.display = 'block';
			left_cir.style.transform = "rotate(180deg)";
			right_cir.style.transform = "rotate("+rotate_deg2+"deg)";
		}
		layer.innerText = prog;
	}


})()