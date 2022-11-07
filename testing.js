var scene = new THREE.Scene();

// create a point light
var pointLight =
  new THREE.PointLight(0xffffff);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
//scene.add(pointLight);
var spotLight = new THREE.SpotLight( 0x0000ff );
spotLight.position.set( -100, -200, 10 );

spotLight.castShadow = true;

spotLight.shadowMapWidth = 1024;
spotLight.shadowMapHeight = 1024;

spotLight.shadowCameraNear = 500;
spotLight.shadowCameraFar = 4000;
spotLight.shadowCameraFov = 30;

scene.add( spotLight );

var spotLight2 = new THREE.SpotLight( 0x00ff00 );
spotLight2.position.set( -200, -100, 10 );

spotLight2.castShadow = true;

spotLight2.shadowMapWidth = 1024;
spotLight2.shadowMapHeight = 1024;

spotLight2.shadowCameraNear = 500;
spotLight2.shadowCameraFar = 4000;
spotLight2.shadowCameraFov = 30;

scene.add( spotLight2 );

var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// create a new mesh with
// sphere geometry - we will cover
// the sphereMaterial next!
var geometry = new THREE.SphereGeometry( 5, 32, 32 );
var material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const geometry2 = new THREE.PlaneGeometry(40, 40);
const plane = new THREE.Mesh(geometry2,material);
scene.add(plane);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

camera.position.z = 50;

var angle = 0;
var angle2 = 0;

function render() {
requestAnimationFrame( render );

  angle-=0.01;
  angle2-= 0.1;
  spotLight.position.x =100+1000*Math.sin(angle);
  spotLight.position.y =100+1000*Math.cos(angle);

  spotLight2.position.x =10+10*Math.sin(angle);
  spotLight2.position.y =10+10*Math.cos(angle);


renderer.render( scene, camera );
}
render();
