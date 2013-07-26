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
	var totalTestNum = 18; 
	var testNumber = 0;
	var toggle;
	var factor = 4;
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
	    factor=5;
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

		  factor=5;
	  	testNumber++;
	    compileResults(event.target, "two");
	})
	.on('complete', function() {
	  checkTestCompletion();
	});

	suiteThree.add("Transform: Translate(x,y)", function(){
	  factor+=1;
	  block.style.transform = "translate("+factor+"px,"+factor+"px)";
	  block.style.webkitTransform = "translate("+factor+"px,"+factor+"px)"; 
	  if(factor>=19)
	    factor=1;

	})
	.add("Transform: scale(x,y)", function(){
	  factor+=0.1;
	  block.style.transform = "scale("+factor+","+factor+")";
	  block.style.webkitTransform = "scale("+factor+","+factor+")"; 
	  if(factor>=6)
	    factor=0.5;

	})
	.add("Transform: Rotate(angle)", function(){
			factor+=2;
			block.style.transform = "factor("+factor+"deg)"; 
			block.style.webkitTransform = "factor("+factor+"deg)"; 

	})
	.add("Transform: Skew(x-angle, y-angle)", function(){
	  factor+=2;
	  block.style.transform = "skew("+factor+"deg,"+factor+"deg)"; 
	  block.style.webkitTransform = "skew("+factor+"deg,"+factor+"deg)"; 
	  if(factor>=25)
	    factor=5;

	})
	.add("Transition: width, height", function(){
	  block2.style.width="180px";
	  block2.style.height="180px";
	})
	.on('cycle', function(event, bench) {
	  console.log(event.target);

		  factor=4;
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
	.add('DOM Relayout', function(){
		relayout.style.display="block";
		factor+=2;
		Block.style.width=5+factor+"px";
		Block.style.height=5+factor+"px";
		console.log($('#relayout').offset({relativeTo: "body"})['0'].offsetTop)
	})
	.on('cycle', function(event, bench) {
	  	console.log(event.target);
	  	Block.style.position = "relative";
		Block.className = "movingBlock";
	    testNumber++;
	    compileResults(event.target, "four");
	    factor = 0;
	})
	.on('complete', function() {
	  checkTestCompletion();
	});
	drawRelayoutBlocks();
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

	function drawRelayoutBlocks(){
		relayout.style.display="none";
		for(var i = 0; i< totalTestNum; i++){
			var blocks = document.createElement('div');
			blocks.className='relayoutBlock';
			relayout.appendChild(blocks);
		}

	}