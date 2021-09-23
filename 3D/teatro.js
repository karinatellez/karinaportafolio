import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/MTLLoader.js";
var gui = new dat.GUI();
const escena = new THREE.Scene();

var SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight;

var VIEW_ANGLE = 45,
  ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
  NEAR = 0.1,
  FAR = 20000;

var camara = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

camara.position.set(0, 150, -400);
camara.lookAt(escena.position);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometria = new THREE.CylinderGeometry();

var loader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({
  map: loader.load(
    "https://thumbs.dreamstime.com/b/ahueque-el-perro-7899998.jpg"
  ),
});
const objeto = new THREE.Mesh(geometria, material);
escena.add(objeto);

var carpetaEscala = gui.addFolder("escala");
carpetaEscala.add(objeto.scale, "x", 1, 10, 0.1);
carpetaEscala.add(objeto.scale, "y", 1, 10, 1);
carpetaEscala.open();
var carpetaPosition = gui.addFolder("position");
carpetaPosition.add(objeto.position, "z", -4, 3);
carpetaPosition.add(objeto.position, "y", -4, 3);
carpetaPosition.add(objeto.position, "x", -4, 3);
carpetaPosition.open();

camara.position.z = -200;
var luz = new THREE.PointLight(0xfffaf2, 1, 100, 2);

luz.position.x = 0;
luz.position.y = 5;
luz.position.z = 6;
escena.add(luz);
var luzAmbiente = new THREE.AmbientLight(0x404040);

escena.add(luzAmbiente);

var luzTrasera = new THREE.PointLight(0xfffaf2, 1, 100, 2);

luzTrasera.position.x = 0;
luzTrasera.position.y = 0;
luzTrasera.position.z = -6;
escena.add(luzTrasera);

var carpetaLuz = gui.addFolder("luces");
carpetaLuz.add(luz.position, "y", -1, 150, 0.5);
carpetaLuz.add(luz.position, "x", -5, 4, 0.1);
carpetaLuz.add(luz.position, "z", -2, 6, 1);
var carpetaCamara = gui.addFolder("camara");
carpetaCamara.add(camara.position, "x", -5, 5, 1);
carpetaCamara.add(camara.position, "y", -5, 5, 1);
carpetaCamara.add(camara.position, "z", -5, 5, 1);

var materialLineaX = new THREE.LineBasicMaterial({ color: 0xeb4034 });
const pointsX = [];
pointsX.push(new THREE.Vector3(-5, 0, 0));
pointsX.push(new THREE.Vector3(0, 0, 0));
pointsX.push(new THREE.Vector3(5, 0, 0));

const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX);
const lineaX = new THREE.Line(geometryX, materialLineaX);
escena.add(lineaX);

var materialLineaY = new THREE.LineBasicMaterial({ color: 0x37eb34 });
const pointsY = [];
pointsY.push(new THREE.Vector3(0, 5, 0));
pointsY.push(new THREE.Vector3(0, 0, 0));
pointsY.push(new THREE.Vector3(0, -5, 0));

const geometryY = new THREE.BufferGeometry().setFromPoints(pointsY);
const lineaY = new THREE.Line(geometryY, materialLineaY);
escena.add(lineaY);

var materialLineaZ = new THREE.LineBasicMaterial({ color: 0x34d3eb });
const pointsZ = [];
pointsZ.push(new THREE.Vector3(0, 0, 5));
pointsZ.push(new THREE.Vector3(0, 0, 0));
pointsZ.push(new THREE.Vector3(0, 0, -5));

const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ);
const lineaZ = new THREE.Line(geometryZ, materialLineaZ);
escena.add(lineaZ);

var geometriaPiso = new THREE.PlaneGeometry(1000, 1000, 1, 1);
var materialPiso = new THREE.MeshBasicMaterial({
  color: 0xcccac2,
  side: THREE.DoubleSide,
});
var piso = new THREE.Mesh(geometriaPiso, materialPiso);
escena.add(piso);

piso.rotation.x = Math.PI / 2;


var carpetaPiso = gui.addFolder("piso");
carpetaPiso.add(piso.position, "y", -5, 5, 1);
carpetaPiso.add(piso.position, "x", -5, 5, 1);
carpetaPiso.add(piso.position, "z", -5, 5, 1);

carpetaPiso.add(piso.rotation, "y", -200, 200, 1);
carpetaPiso.add(piso.rotation, "x", -200, 200, 1);
carpetaPiso.add(piso.rotation, "z", -200, 200, 1);

var geometriaCielo = new THREE.BoxGeometry(10000, 10000, 10000);
var materialCielo = new THREE.MeshBasicMaterial({
  color: 0x9999ff,
  side: THREE.BackSide,
});
var cielo = new THREE.Mesh(geometriaCielo, materialCielo);
escena.add(cielo);

var geometriaEsfera = new THREE.SphereGeometry(30, 32, 16);
var materialEsfera = new THREE.MeshBasicMaterial({
  map: loader.load("https://freesvg.org/img/LeadGlassBackground.png"),
});
var esfera = new THREE.Mesh(geometriaEsfera, materialEsfera);
escena.add(esfera);

esfera.position.x = -40;
esfera.position.y = 58;

var geometriaCajita = new THREE.BoxGeometry(20, 20, 20);
var materialCajita = new THREE.MeshBasicMaterial({
  color: 0xeaff00,
  side: THREE.BackSide,
});
var cajita = new THREE.Mesh(geometriaCajita, materialCajita);
escena.add(cajita);

cajita.position.x = 40;
cajita.position.y = 20;

var rotacionObjetos = 0;

function girarObjetosDerecha() {
  rotacionObjetos = "derecha";
}
function girarObjetosIzquierda() {
  console.log(rotacionObjetos);
  rotacionObjetos = "izquierda";
  console.log(cajita.rotation.y);
}
function detenerObjetos() {
  rotacionObjetos = "detener";
}

var controls = new OrbitControls(camara, renderer.domElement);

var cambioTextura = false;

var cambiarColorAzul = true;

function cambiarColor() {
  cambioTextura = true;
  if (cambiarColorAzul == true) {
    materialCajita = new THREE.MeshBasicMaterial({
      color: 0x3455eb,
      side: THREE.BackSide,
    });

    cambiarColorAzul = false;
  } else if (cambiarColorAzul == false) {
    materialCajita = new THREE.MeshBasicMaterial({
      color: 0xf00000,
      side: THREE.BackSide,
    });
    cambiarColorAzul = true;
  }
}
var elMono;
var ship_material = new THREE.MeshBasicMaterial({ color: 0x444444 });
var mtlLoader = new MTLLoader();

new MTLLoader().load("mono.mtl", function (materials) {
  materials.preload();

  new OBJLoader().setMaterials(materials).load(
    "mono.obj",
    function (objetoMono) {
      elMono = objetoMono;
      escena.add(objetoMono);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
});

var elRobot;

new MTLLoader().load("RedRobot.mtl", function (materials) {
  materials.preload();

  new OBJLoader().setMaterials(materials).load(
    "RedRobot.obj",
    function (objetoRobot) {
      elRobot = objetoRobot;
      escena.add(objetoRobot);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
});

new MTLLoader().load("tv.mtl", function (materials) {
  materials.preload();

  new OBJLoader().setMaterials(materials).load(
    "tv.obj",
    function (objetoTv) {
      escena.add(objetoTv);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
});

var direccion = 0;

document.addEventListener("keydown", logKey);
document.addEventListener("keyup", logKey);
function logKey(e) {
  direccion = e.code;
  return e.code;
}

const animate = function () {
  requestAnimationFrame(animate);

  if (direccion == "KeyE") {
    elMono.position.x = 0;
    elMono.position.y = 0;
    elMono.position.z = 0;
  }

  if (rotacionObjetos == "derecha") {
    cajita.rotation.y = cajita.rotation.y + 0.1;
    esfera.rotation.y = esfera.rotation.y + 0.1;
  }
  if (rotacionObjetos == "izquierda") {
    cajita.rotation.y = cajita.rotation.y - 0.1;
    esfera.rotation.y = esfera.rotation.y - 0.1;
  }
  if (cambioTextura == true) {
    cajita.material = materialCajita;
    cambioTextura = false;
  }

  if (
    (direccion == "ArrowUp" || direccion == "KeyW") &&
    elMono.position.y <= 20
  ) {
    elMono.position.y += 0.1;
  }

  if (
    (direccion == "ArrowDown" || direccion == "KeyS") &&
    elMono.position.y >= -20
  ) {
    elMono.position.y -= 0.1;
  }

  if (
    (direccion == "ArrowRight" || direccion == "KeyD") &&
    elMono.position.x <= 20
  ) {
    elMono.position.x += 0.1;
  }

  if (
    (direccion == "ArrowLeft" || direccion == "KeyA") &&
    elMono.position.x >= -20
  ) {
    elMono.position.x -= 0.1;
  }

  renderer.render(escena, camara);
};

function moverMono(event) {
  var tecla = event.wich || event.keyCode;
  console.log(tecla);
}

animate();
export { girarObjetosDerecha };
export { girarObjetosIzquierda };
export { detenerObjetos };
export { cambiarColor };
