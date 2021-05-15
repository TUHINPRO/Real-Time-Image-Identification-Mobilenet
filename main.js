function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier('MobileNet',ModelLoaded);
  }
  function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
  }
  function ModelLoaded() {
    console.log("Model is loaded ok?");
  }

  function gotResult(error,results) {
    if(error){
      console.error(error);
    }
    else {
      console.log(results);
      document.getElementById("hey").innerHTML=results[0].label;
      document.getElementById("hi").innerHTML=results[0].confidence.toFixed(2);
    }
  }

  



