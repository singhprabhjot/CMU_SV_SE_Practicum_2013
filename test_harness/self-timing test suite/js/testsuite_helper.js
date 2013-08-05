/*
    .::CSS Operations Test Suite::.
    CMUSV SE Practicum Summer 2013 : Appception
    Team Tahoe

    testsuite_helper.js contains helper functions for the test suite.
    - checks if css operations are supported on device
    - compiles the test results into a json 
    - uploads test details to backend
*/

	var results = {};
	var i=0;

	getDeviceInfo();


	function getDeviceInfo(){
		var platform = navigator.platform;
		var userAgent = navigator.userAgent;
		
		//This will go in  submit results action //
		results['UserAgent'] = userAgent;
		results['Platform'] = platform;
		testsArray = new Array();
		results['tests'] = testsArray;

		document.getElementById("platform").innerHTML = platform;
		document.getElementById("user_agent").innerHTML = userAgent;
		
	}

	function uploadResults(){
		results['device_name'] = document.getElementById("device_name").value;
		if(results['device_name'] != ""){
			error.style.display = "none";
			var url = "http://appception-tahoe.herokuapp.com/environments";
       		//POST, and log the result
  			$.post(url, results, function(data){console.log(data);}, "json");
		}else{
			error.style.display = "block";
		}
        
	}

	function compileResults(result, testNumber){
			
		var style_name = result.name;
		
		var avgTime = (result.stats.mean*1000).toFixed(5);
		var kOps = (result.hz/1000).toFixed(3); 

		//populate json
		var style_test = {};
		style_test["name"] = style_name;
		if (checkCSSsupport()){
			style_test["msTime"] = avgTime;
			style_test["kOps"] = kOps;
		}
		else{
			style_test["msTime"] = "CSS operation not supported.";
			style_test["kOps"] = "CSS operation not supported.";
		}

		testsArray[i] = style_test;
		i++;
		console.log(results);
	}
//Checks if css operation is supported as and when test is run.
//TO-DO: Simplify this code
	function checkCSSsupport(){
		var isSupported = true;
	
			switch(testNumber){
				case 0:
				if (typeof document.body.style.boxShadow == "undefined" && typeof document.body.style.WebkitBoxShadow == "undefined")
					isSupported = false;
				break;
				case 1:
					if (typeof document.body.style.borderRadius == "undefined" && typeof document.body.style.WebkitBorderRadius == "undefined")
						isSupported = false;
				break;
				case 2:
					if ((typeof document.body.style.boxShadow == "undefined" && typeof document.body.style.WebkitBoxShadow == "undefined") || (typeof document.body.style.borderRadius == "undefined" && typeof document.body.style.WebkitBorderRadius == "undefined"))
						isSupported = false;
				break;
				case 3:
					if (typeof document.body.style.opacity == "undefined")
						isSupported = false;
				break;
				case 4:
					if (typeof document.body.style.visibility == "undefined")
						isSupported = false;
				break;
				case 5:
					if (typeof document.body.style.width == "undefined" || typeof document.body.style.height == "undefined")
						isSupported = false;
				break;
				case 6:
					if (typeof document.body.style.overflow == "undefined")
						isSupported = false;
				break;
		
				case 7:
				var elem = document.createElement('canvas');
				if (!(elem.getContext && elem.getContext('2d')))
					isSupported = false;
				break;
				case 8:
					var elem = document.createElement('canvas');
					if (!(elem.getContext && elem.getContext('2d')))
						isSupported = false;
				break;
			
		
				case 9:
				if (typeof document.body.style.transform == "undefined" && typeof document.body.style.webkitTransform == "undefined")
					isSupported = false;
				break;
				case 10:
					if (typeof document.body.style.transform == "undefined" && typeof document.body.style.webkitTransform == "undefined")
						isSupported = false;
				break;
				case 11:
					if (typeof document.body.style.transform == "undefined" && typeof document.body.style.webkitTransform == "undefined")
						isSupported = false;
				break;
				case 12:
					if (typeof document.body.style.transform == "undefined" && typeof document.body.style.webkitTransform == "undefined")
						isSupported = false;
				break;
				case 13:
					if (typeof document.body.style.transition == "undefined" && typeof document.body.style.webkitTransition == "undefined")
						isSupported = false;
				break;
			
		
				case 14:
				if ((typeof document.body.style.animationName == "undefined" && typeof document.body.style.webkitAnimationName == "undefined")|| typeof document.body.style.position == "undefined")
					isSupported = false;
				break;
				case 15:
					if ((typeof document.body.style.animationName == "undefined" && typeof document.body.style.webkitAnimationName == "undefined")|| typeof document.body.style.position == "undefined")
						isSupported = false;
				break;
				case 16:
					if ((typeof document.body.style.animationName == "undefined" && typeof document.body.style.webkitAnimationName == "undefined") || typeof document.body.style.position == "undefined" || (typeof window.requestAnimationFrame == "undefined" && typeof window.webkitRequestAnimationFrame == "undefined"))
						isSupported = false;
				break;
		}

		return isSupported;
			
	}
	function displayTestSuite(){
		testsuite.style.display = "block";
    	testResults.style.display = "none";
	}
	function checkTestCompletion(){
		if(results['tests'].length == 18){
			$('#upload').attr("disabled", false);
			$('#result').attr("disabled", false);
		}
	}