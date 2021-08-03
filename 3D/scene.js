var ancho = 1000;
var alto = 1000;
var vistaDeAngulo = 120;
var aspecto = ancho / alto;
var cercania = 0.1;
var lejania = 10000;
var container = document.querySelector("#container");
var render1 = new THREE.WebGLRenderer();
var camara = new THREE.PerspectiveCamera(
  vistaDeAngulo,
  aspecto,
  cercania,
  lejania
);


var escena = new THREE.Scene();
escena.add(camara);
render1.setSize(ancho, alto);
container.appendChild(render1.domElement);
var luz = new THREE.PointLight(0xffffff);

luz.position.x = 10;
luz.position.y = 50;
luz.position.z = 120;

escena.add(luz);
var materialEsfera = new THREE.MeshLambertMaterial({
  color: 0xcc0000,
});

var radio = 40;
var segmento = 16;
var anillo = 16;

var esfera=new THREE.Mesh(
    new THREE.SphereGeometry(radio, segmento, anillo),
    materialEsfera
  );

  escena.add(esfera);

  esfera.position.x= 0;
  esfera.position.y= 0;
  esfera.position.z= -300;

  function update(){
    render1.render(escena, camara);
    requestAnimationFrame(update);
    esfera.position.z+=0.1;
    esfera.rotation.y+=0.01;
  }