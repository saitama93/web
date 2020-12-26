

//Ants

var text = new Blotter.Text("Ants!", {
	family : "serif",
	size : 150,
	fill : "white",
});

var material = new Blotter.FliesMaterial();

material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = .8;
material.uniforms.uSpeed.value = 10;

var blotter = new Blotter(material, { 
	texts : text,
});

var scope = blotter.forText(text);
let elem = document.getElementById('Ants');
scope.appendTo(elem);


