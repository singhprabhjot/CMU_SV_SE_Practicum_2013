
$(document).ready(function(){
	i = 1;
	$('#nodeCount').text(i);

	$('#addBtn').click(function() {
		i = addNodes (i);
	});
});

//THIS DETECTS SCROLL POSITION AND DOUBLES THE NODES IF BELOW 200
$(window).scroll(function(){
    //LOAD MORE PORTFOLIOS
    // var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    var scrollBottom = $(window).height() - $(window).scrollTop();
    if(scrollBottom <= 600){
        addNodes(parseInt($('#nodeCount').text()));
    }
});

function addNodes(numNodes){
	j = numNodes*2;

	while (numNodes < j) {
		$block = $('#node0').clone();
		numNodes++;
		$block.attr('id', 'node' + numNodes)
		$block.appendTo('body');		
	};

	$('#nodeCount').text(numNodes);

	return numNodes;
}
