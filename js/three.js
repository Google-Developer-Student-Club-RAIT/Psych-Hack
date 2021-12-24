//Responsive
const resizeRendererToDisplaySize = (renderer) => {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  // resize only when necessary
  if (needResize) {
    //3rd parameter `false` to change the internal canvas size
    renderer.setSize(width, height, false);
  }
  return needResize;
};

//Generates Random pos of particles
const getRandomParticelPos = (particleCount) => {
const arr = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  arr[i] = (Math.random() - 0.5) * 10;
}
return arr;
};

//Setting mouse
let mouseX = 0;
let mouseY = 0;
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const main = () => {
// create scene
const scene = new THREE.Scene();

// Create Camera
const fov = 40, aspect = 2, near = 1, far = 20;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = -3;

 //attached 3js to canvas element named ID
const canvas = document.getElementById("c"); 

//3js will render in the selected camvas element
const renderer = new THREE.WebGLRenderer({ 
  canvas: canvas,
    alpha: true
});   

//Changing the background colour of the canvas
renderer.setClearColor( 0x0000000,0);


// create a light source
const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
 light.position.set(-1, 2, 4);
scene.add(light);

 // create a PointGeometry

 //star1 Geometry
 const geometry = new THREE.BufferGeometry();
 const noOfPoints = 7000; //2100;
 geometry.setAttribute(
   "position",
   new THREE.BufferAttribute(getRandomParticelPos(noOfPoints), 3)
 );

 //star2 Geometry
 const geometry2 = new THREE.BufferGeometry();
 const noOfPoints2 = 2000; //2100;
 geometry2.setAttribute(
   "position",
   new THREE.BufferAttribute(getRandomParticelPos(noOfPoints2), 3)
 );
  //star3 Geometry
  const geometry3 = new THREE.BufferGeometry();
  const noOfPoints3 = 1000; //2100;
  geometry3.setAttribute(
    "position",
    new THREE.BufferAttribute(getRandomParticelPos(noOfPoints3), 3)
  );

 // Texture loader for stars
 const loader = new THREE.TextureLoader();

 //create points
 //star1
 const material = new THREE.PointsMaterial({
    size: 0.5, 
    //texture pack //loader.load converts png to texture map 
    map: loader.load("images/snow (2).png"),
    transparent: false,
    alphaTest: 0.5, //removes annoying outlines to the texture 
    color: 0xf5f5f5,
  });

 //star2
  const material2 = new THREE.PointsMaterial({
    size: 0.2, 
    //texture pack //loader.load converts png to texture map 
    map: loader.load("images/snow (3).png"),
    transparent: true,
    alphaTest: 0.5 , //removes annoying outlines to the texture 
    // color: 0x44aa88
  });
 //star3
 const material3 = new THREE.PointsMaterial({
  size: 0.2, 
  //texture pack //loader.load converts png to texture map 
  map: loader.load("images/snow (3).png"),
  transparent: true,
  alphaTest: 0.5, //removes annoying outlines to the texture 
  color: 0x44aa88
});

 // create Points
 const stars = new THREE.Points(geometry, material);
 const stars2 = new THREE.Points(geometry2, material2);
 const stars3 = new THREE.Points(geometry3, material3);

 scene.add(stars,stars2,stars3);
const clock = new THREE.Clock();

const render = (time) => {
    time *= 0.001; //in seconds

    const elapsedTime = clock.getElapsedTime();
    
    //console.log(geometry);
    // geometry.forEach(star => {
    //   star.rotation.y =  -.1 * elapsedTime;
    // });
    
    //falling effect
    stars.rotation.x = -.05 * elapsedTime; 
    stars2.rotation.x = -.05 * elapsedTime;
    stars3.rotation.x = -.05 * elapsedTime;  

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      // changing the camera aspect to remove the strechy problem
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    if(mouseX > 0){
    // stars.rotation.x = mouseY * (elapsedTime * -0.00008); //move up down
    stars.rotation.y = mouseX * ( 0.001);
    stars2.rotation.y = mouseX * ( 0.00009);
    stars3.rotation.y = mouseX * ( 0.00009);
    }
    // render the scene
    renderer.render(scene, camera);
    // loop
    requestAnimationFrame(render);
  };
 requestAnimationFrame(render);
};
main();