(function() {
	var canvas, ctx, width, height, bubbles, animateHeader = true, panel, rafId = 0;
	if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}
	initHeader();
	function initHeader() {
		canvas = document.getElementById('header_canvas');
		panel = document.getElementById('thumbnail_canvas');
		if (!canvas || !panel) {
			return;
		}
		window_resize();
		ctx = canvas.getContext('2d');
		bubbles = [];
		var num = width * 0.04;
		for (var i = 0; i < num; i++) {
			bubbles.push(new Bubble());
		}
		animate();
		window.addEventListener('resize', window_resize);
		if ('IntersectionObserver' in window) {
			var observer = new IntersectionObserver(function (entries) {
				animateHeader = entries[0].isIntersecting;
				if (animateHeader) {
					animate();
				}
			});
			observer.observe(panel);
		}
	}
	function animate() {
		if (!animateHeader) {
			return;
		}
		ctx.clearRect(0, 0, width, height);
		for (var i in bubbles) {
			bubbles[i].draw();
		}
		rafId = requestAnimationFrame(animate);
	}
	function window_resize() {
		if (!panel || !canvas) {
			return;
		}
		width = panel.offsetWidth;
		height = panel.offsetHeight;
		canvas.width = width;
		canvas.height = height;
	}
	function Bubble() {
		var _this = this;
		(function() {
			_this.pos = {};
			init();
		})();
		function init() {
			_this.pos.x = Math.random() * width;
			_this.pos.y = height + Math.random() * 100;
			_this.alpha = 0.1 + Math.random() * 0.3;
			_this.alpha_change = 0.0002 + Math.random() * 0.0005;
			_this.scale = 0.2 + Math.random() * 0.2;
			_this.scale_change = Math.random() * 0.002;
			_this.speed = 0.1 + Math.random() * 1.5;
		}
		this.draw = function() {
			if (_this.alpha <= 0) {
				init();
			}
			_this.pos.y -= _this.speed;
			_this.alpha -= _this.alpha_change;
			_this.scale += _this.scale_change;
			ctx.beginPath();
			ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
			ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
			ctx.fill();
		};
	}
})();
