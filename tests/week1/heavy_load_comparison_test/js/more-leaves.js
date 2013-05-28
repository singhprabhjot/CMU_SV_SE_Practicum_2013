function addLeaves(){
	i = 1;
	$('#leafCount').text("Leaf count = " + i);

	$('#addBtn').click(function() {
		j = i*2;

		while (i < j) {
			$block = $('#leaf').clone();
			i++;
			$block.attr('id', 'leaf' + i)
			$block.appendTo('body');		
		};

		$('#leafCount').text("Leaf count = " + i);
		// alert('Surprise!');
	});
}