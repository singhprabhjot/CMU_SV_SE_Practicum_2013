/*
    .::CSS Operations Test Suite::.
    CMUSV SE Practicum Summer 2013 : Appception
    Team Tahoe

    testsuite.js contains all the tests; Benchmark test suites, along with associated test functions.
*/

	var suiteOne = new Benchmark.Suite;
	var suiteTwo = new Benchmark.Suite;	
	var suiteThree = new Benchmark.Suite;
	var suiteFour = new Benchmark.Suite;
	var testNumber = 0;
	var toggle;
	var rotate = 4;
	var context = motion_canvas.getContext( '2d' );

	suiteOne.add('Box Shadow', function() {
		image.style.boxShadow="10px 10px 5px #888888";
		image.style.WebkitBoxShadow="10px 10px 5px #888888";
	})
	.add('Border Radius', function() {
		image.style.borderRadius="10px";
		image.style.WebkitBorderRadius="10px";
	})
	.add('Border Radius and Box Shadow', function() {
		image.style.boxShadow="10px 10px 5px #888888";
		image.style.borderRadius="10px";
		image.style.WebkitBoxShadow="10px 10px 5px #888888";
		image.style.WebkitBorderRadius="10px";
	})
	.add('Opacity', function() {
		toggle=!toggle;
	  image.style.opacity= toggle ? 0.5 : 0.9;
	})
	.add('Visibility', function() {
		toggle=!toggle;
	  image.style.visibility= toggle ? "hidden" : "visible";
	})
	.add('Image Resize', function() {
		toggle=!toggle;
		image.style.width= toggle ? "284px" : "300px";
	  	image.style.height= toggle ? "213px" : "230px";
	})
	.add('Overflow:Scroll', function() {
	  image.style.overflow="scroll";
	})
	.on('cycle', function(event, bench) {
	  console.log(event.target);

	  image.style.borderRadius = "";	
	  image.style.boxShadow="";
	  image.style.WebkitBorderRadius = "";
		  image.style.WebkitBoxShadow = "";
		  image.style.opacity=1;
		  image.style.visibility="";
		  image.style.width="284px";
	    image.style.height="213px";
	    rotate=5;
		testNumber++;
	    compileResults(event.target, "one");
	})
	.on('complete', function() {
	  checkTestCompletion();
	}); 

	suiteTwo.add('Rendering in Canvas', function(){
	  toggle=!toggle;
	  context = canvas.getContext( '2d' );
	  context.fillStyle = toggle ? 'rgb(200,200,20)' :  'rgb(20,20,200)';
	  context.fillRect(0,0,100,100);
	})
	.add('Animation in Canvas', function(){
		draw();
	})
	.on('cycle', function(event, bench) {
	  console.log(event.target);

		  rotate=5;
	  	testNumber++;
	    compileResults(event.target, "two");
	})
	.on('complete', function() {
	  checkTestCompletion();
	});

	suiteThree.add("Transform: Translate(x,y)", function(){
	  rotate+=1;
	  block.style.transform = "translate("+rotate+"px,"+rotate+"px)";
	  block.style.webkitTransform = "translate("+rotate+"px,"+rotate+"px)"; 
	  if(rotate>=19)
	    rotate=1;

	})
	.add("Transform: scale(x,y)", function(){
	  rotate+=0.1;
	  block.style.transform = "scale("+rotate+","+rotate+")";
	  block.style.webkitTransform = "scale("+rotate+","+rotate+")"; 
	  if(rotate>=6)
	    rotate=0.5;

	})
	.add("Transform: Rotate(angle)", function(){
			rotate+=2;
			block.style.transform = "rotate("+rotate+"deg)"; 
			block.style.webkitTransform = "rotate("+rotate+"deg)"; 

	})
	.add("Transform: Skew(x-angle, y-angle)", function(){
	  rotate+=2;
	  block.style.transform = "skew("+rotate+"deg,"+rotate+"deg)"; 
	  block.style.webkitTransform = "skew("+rotate+"deg,"+rotate+"deg)"; 
	  if(rotate>=25)
	    rotate=5;

	})
	.add("Transition: width, height", function(){
	  block2.style.width="180px";
	  block2.style.height="180px";
	})
	.on('cycle', function(event, bench) {
	  console.log(event.target);

		  rotate=4;
	  	testNumber++;
	    compileResults(event.target, "three");
	})
	.on('complete', function() {
	  checkTestCompletion();
	});

	suiteFour.add('Position:fixed', function(){
	  Block.style.position = "fixed";
	  Block.className = "animationBlock";
	})
	.add('Position:relative', function(){
	  Block.style.position = "relative";
	  Block.className = "animationBlock";
	})
	.add('requestAnimationFrame', function(){
	  requestAnimFrame( animate );
	  Block.className = "animationBlock";
	})
	.on('cycle', function(event, bench) {
	  console.log(event.target);
	  Block.style.position = "relative";
		  Block.className = "movingBlock";
	    testNumber++;
	    compileResults(event.target, "four");
	})
	.on('complete', function() {
	  checkTestCompletion();
	});

	window.requestAnimFrame = (function(){
      	return  window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
    })();

	//Test functions
	function draw() {
	    var time = new Date().getTime() * 0.002;
	    var x = Math.sin( time ) * 192 + 256;
	    var y = Math.cos( time * 0.9 ) * 192 + 256;
	    toggle = !toggle;

	    context.fillStyle = toggle ? 'rgb(200,200,20)' :  'rgb(20,20,200)';
	    context.beginPath();
	    context.arc( x, y, 10, 0, Math.PI * 2, true );
	    context.closePath();
	    context.fill();

	}
	function animate(){}