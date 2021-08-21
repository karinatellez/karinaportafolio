import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.131.3/examples/jsm/loaders/GLTFLoader.js'

var gui = new dat.GUI();
const escena = new THREE.Scene();
////////////
// CAMERA //
////////////

// set the view size in pixels (custom or according to window size)
// var SCREEN_WIDTH = 400, SCREEN_HEIGHT = 300;
var SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight;
// camera attributes
var VIEW_ANGLE = 45,
  ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
  NEAR = 0.1,
  FAR = 20000;
// set up camera
var camara = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
// the camera defaults to position (0,0,0)
//     so pull it back (z = 400) and up (y = 100) and set the angle towards the scene origin
camara.position.set(0, 150, 400);
camara.lookAt(escena.position);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
/* CircleGeometry
            ConeGeometry
            CylinderGeometry
            BoxGeometry
            SphereGeometry
            TorusGeometry */
/* const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
 */
const geometria = new THREE.CylinderGeometry();

/*             MeshPhongMaterial
            MeshBasicMaterial
            MeshDepthMaterial
            MeshNormalMaterial
             */
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
var luz = new THREE.PointLight(0xfc0303, 4, 2);

luz.position.x = 0;
luz.position.y = 0;
luz.position.z = 0;

escena.add(luz);
var carpetaLuz = gui.addFolder("luces");
carpetaLuz.add(luz.position, "y", -1, 5, 0.5);
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
/* piso.rotation.y= -0.5; */

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

var controls = new THREE.OrbitControls(camara, renderer.domElement);

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

const gltfLoader = new GLTFLoader();
gltfLoader.load(
  "https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf",
  (gltf) => {
    const root = gltf.scene;
    escena.add(root);
  }
);

const animate = function () {
  requestAnimationFrame(animate);

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

  /*   objeto.rotation.x += 0.01; */
  /*   objeto.rotation.y += 0.01; */
  renderer.render(escena, camara);
};

animate();
