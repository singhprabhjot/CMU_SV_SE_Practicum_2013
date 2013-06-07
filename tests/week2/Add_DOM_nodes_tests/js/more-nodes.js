
$(document).ready(function(){
	i = 1;
	$('#nodeCount').text(i);

	$('#addBtn').click(function() {
		i = addNodes (i);
	});
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