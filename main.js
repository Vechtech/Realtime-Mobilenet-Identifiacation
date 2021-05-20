function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(600,420);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelloaded);
}

function modelloaded(){
  console.log("model loaded successfully");
}

function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotresults);
}

function gotresults(error,results){
if(error){
  console.error(error);
}
else{
  console.log(results);
  document.getElementById("obj").innerHTML = results[0].label;
  document.getElementById("acc").innerHTML = results[0].confidence;
}
}

