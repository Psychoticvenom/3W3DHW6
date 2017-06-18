var camera, scene, renderer, controls;

init();
animate();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.y = 200;
  scene.add(camera);

  var gridXZ = new THREE.GridHelper(200, 200, 'black', 'white');
  scene.add(gridXZ);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  /////////////////////////////////////////////////////////////////////

  /*var ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 2000), new THREE.MeshBasicMaterial({
    color: 0x886666,
    side: THREE.DoubleSide
  }));
  ground.rotation.x = Math.PI / 2;
  ground.position.y = 1;
  scene.add(ground);*/

  var pointLight = new THREE.PointLight(0xffffff, 5, 300);
  pointLight.position.set(0, 100, 100);
  scene.add(pointLight);
  
  /////////////////////////////////////////////////////////////////////

  var wall0 = new THREE.Mesh(new THREE.BoxGeometry(98, 30, 1), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall0.position.set(3, 15, 82);
  scene.add(wall0);
  
  var wall1 = new THREE.Mesh(new THREE.BoxGeometry(53, 30, 1), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall1.rotation.y = Math.PI / 2;
  wall1.position.set(-45.5, 15, 55);
  scene.add(wall1);
  
  var wall2 = new THREE.Mesh(new THREE.BoxGeometry(47, 30, 1), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall2.rotation.y = Math.PI / 2;
  wall2.position.set(51.5, 15, 58);
  scene.add(wall2);
  
  var wall3 = new THREE.Mesh(new THREE.BoxGeometry(38, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall3.position.set(61, 15, 32.5);
  scene.add(wall3);
  
  var wall4 = new THREE.Mesh(new THREE.BoxGeometry(35, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall4.position.set(-62.5, 15, 26.5);
  scene.add(wall4);
  
  var wall5 = new THREE.Mesh(new THREE.BoxGeometry(5, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall5.position.set(2.5, 15, 32.5);
  scene.add(wall5);
  
  var wall6 = new THREE.Mesh(new THREE.BoxGeometry(4, 30, 2), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall6.position.set(2, 15, 29.5);
  scene.add(wall6);
  
  var wall7 = new THREE.Mesh(new THREE.BoxGeometry(113, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall7.rotation.y = Math.PI / 2;
  wall7.position.set(78, 15, -26);
  scene.add(wall7);
  
  var wall8 = new THREE.Mesh(new THREE.BoxGeometry(55, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall8.position.set(48.5, 15, -80.5);
  scene.add(wall8);
  
  var wall9 = new THREE.Mesh(new THREE.BoxGeometry(49, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall9.rotation.y = Math.PI / 2;
  wall9.position.set(-78, 15, 0);
  scene.add(wall9);
  
  var wall10 = new THREE.Mesh(new THREE.BoxGeometry(31, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall10.position.set(-64.5, 15, -26.5);
  scene.add(wall10);
  
  var wall11 = new THREE.Mesh(new THREE.BoxGeometry(92, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall11.rotation.y = Math.PI / 2;
  wall11.position.set(-47, 15, -36.5);
  scene.add(wall11);
  
  var wall12 = new THREE.Mesh(new THREE.BoxGeometry(50, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall12.position.set(-20, 15, -80.5);
  scene.add(wall12);
  
  var wall13 = new THREE.Mesh(new THREE.BoxGeometry(11, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall13.position.set(-39.5, 15, 7.5);
  scene.add(wall13);
  
  var wall14 = new THREE.Mesh(new THREE.BoxGeometry(14, 30, 4), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall14.position.set(-7, 15, 7.5);
  scene.add(wall14);
  
  var wall15 = new THREE.Mesh(new THREE.BoxGeometry(4, 30, 5), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall15.position.set(2, 15, 8);
  scene.add(wall15);
  
  var wall16 = new THREE.Mesh(new THREE.BoxGeometry(19, 30, 2), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall16.rotation.y = Math.PI / 2;
  wall16.position.set(3, 15, -4);
  scene.add(wall16);
  
  var wall17 = new THREE.Mesh(new THREE.BoxGeometry(21, 30, 2), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall17.rotation.y = Math.PI / 2;
  wall17.position.set(3, 15, -39);
  scene.add(wall17);
  
  var wall18 = new THREE.Mesh(new THREE.BoxGeometry(19, 30, 2), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall18.position.set(-7.5, 15, -46.5);
  scene.add(wall18);
  
  var wall19 = new THREE.Mesh(new THREE.BoxGeometry(12, 30, 1), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall19.position.set(-23, 15, -46.5);
  scene.add(wall19);
  
  var wall20 = new THREE.Mesh(new THREE.BoxGeometry(13, 30, 2), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall20.position.set(-38.5, 15, -46.5);
  scene.add(wall20);
  
  var wall21 = new THREE.Mesh(new THREE.BoxGeometry(4, 30, 3), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall21.position.set(3, 15, -77);
  scene.add(wall21);
  
  var wall22 = new THREE.Mesh(new THREE.BoxGeometry(11, 30, 2), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall22.rotation.y = Math.PI / 2;
  wall22.position.set(3, 15, -70);
  scene.add(wall22);
  
  var wall23 = new THREE.Mesh(new THREE.BoxGeometry(13, 30, 2), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall23.position.set(69.5, 15, -28.5);
  scene.add(wall23);
  
  var wall24 = new THREE.Mesh(new THREE.BoxGeometry(3, 30, 2), new THREE.MeshLambertMaterial({
    color: 0x38548c, transparent: true, opacity: 0.5
  }));
  wall24.position.set(-43.5, 15, -59.5);
  scene.add(wall24);


}

function animate() {
  controls.update();

  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera);
}
