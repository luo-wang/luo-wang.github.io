
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.getElementById("bg").appendChild(renderer.domElement);

const geometry=new THREE.PlaneGeometry(20,20,50,50);
const material=new THREE.MeshBasicMaterial({color:0x00ffff,wireframe:true});
const plane=new THREE.Mesh(geometry,material);
scene.add(plane);

camera.position.z=5;

function animate(){
  requestAnimationFrame(animate);
  plane.rotation.x+=0.002;
  plane.rotation.y+=0.003;
  renderer.render(scene,camera);
}
animate();
