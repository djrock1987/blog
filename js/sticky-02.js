
function agregarTexto() {
			var $contenedor = document.getElementById("contenedor");
			var $push = document.getElementById("push");
			var p = document.createElement("p");
			p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum fugit dignissimos, eaque quas aliquid laudantium, distinctio quaerat odit ad assumenda animi hic, in aspernatur nulla a amet provident esse mollitia.";
			$contenedor.insertBefore(p,$push);
		}	

function alto() {
var $body = document.getElementById('body');
var $header = document.getElementById('header');
var $cuerpo = document.getElementById('cuerpo');
var $footer = document.getElementById('footer');
var $contenido= document.getElementById('contenido')
var alto = $body.offsetHeight -($footer.offsetHeight + $header.offsetHeight);

$cuerpo.style.minHeight = alto + "px";
}