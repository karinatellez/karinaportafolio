var gui = new dat.GUI();
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

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
var carpetaEscala=gui.addFolder("escala");
carpetaEscala.add(objeto.scale,"x",1,3,0.1);
carpetaEscala.add(objeto.scale,"y",1,4,1);
carpetaEscala.open();
var carpetaPosition=gui.addFolder("position");
carpetaPosition.add(objeto.position,"z",-4,3);
carpetaPosition.open();

camara.position.z = 5;
var luz = new THREE.PointLight(0xfc0303,4,2);

luz.position.x = 0;
luz.position.y = 0;
luz.position.z = 0;

escena.add(luz);
var carpetaLuz=gui.addFolder("luces");
carpetaLuz.add(luz.position,"y",-1,5,0.5);
carpetaLuz.add(luz.position,"x",-5,4,0.1);
carpetaLuz.add(luz.position,"z",-2,6,1);

const animate = function () {
  requestAnimationFrame(animate);

/*   objeto.rotation.x += 0.01; */
  objeto.rotation.y += 0.01;

  renderer.render(escena, camara);
};

animate();
