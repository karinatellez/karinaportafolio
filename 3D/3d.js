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
var materialEsferaDos = new THREE.MeshLambertMaterial({
  color: 0x2c93f2,
});
var materialEsferaTres = new THREE.MeshLambertMaterial({
  color: 0xc82cf2,
});
var materialCubo = new THREE.MeshLambertMaterial({
  color: 0xe6f22c,
});

var materialCuboDos = new THREE.MeshLambertMaterial({
  color: 0x3df22c,
});

var radio = 40;
var segmento = 16;
var anillo = 16;

const esfera = new THREE.Mesh(
  new THREE.SphereGeometry(radio, segmento, anillo),
  materialEsfera
);
// esfera.position.x = 0;
// esfera.position.y = 0;
esfera.position.z = -300;
escena.add(esfera);

var esferaDos = new THREE.Mesh(
  new THREE.SphereGeometry(radio, segmento, anillo),
  materialEsferaDos
);
escena.add(esferaDos);
esferaDos.position.z = -200;
esferaDos.position.y = 100;

var esferaTres = new THREE.Mesh(
  new THREE.SphereGeometry(radio, segmento, anillo),
  materialEsferaTres
);
escena.add(esferaTres);
esferaTres.position.z = -200;
esferaTres.position.y = -100;

var cubo = new THREE.Mesh(new THREE.BoxGeometry(30, 20, 10), materialCubo);
escena.add(cubo);
cubo.position.x = -90;
cubo.position.z = -200;

var cuboDos = new THREE.Mesh(
  new THREE.BoxGeometry(30, 20, 10),
  materialCuboDos
);
escena.add(cuboDos);
cuboDos.position.z = -200;
cuboDos.position.x = 90;

function update() {
  render1.render(escena, camara);
  requestAnimationFrame(update);
  cubo.rotation.x += 0.1;
  esferaDos.rotation.y -= 0.01;
  cubo.position.z += 0.1;
  cuboDos.rotation.z += 0.1;
  esfera.position.y += 0.1;
  luz.position.z -= 0.1;
}
// requestAnimationFrame(update);
