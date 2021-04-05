
function setup() {
    createCanvas(888, 500);
    example = createVideo(['/vc/docs/sketches/example.mp4']);
    example.loop();
    example.hide(); // by default video shows up in separate dom
    noStroke();
    fill(0);
  }

  function draw() {
    
    example.loadPixels();
    for (let i = 0; i < example.width; i++) {
        for (let j = 0; j < example.height; j++) {
            let oldColor = example.pixels[i];
            let oldR = red(oldColor);
            let oldG = green(oldColor);
            let oldB = blue(oldColor);
            let gray = oldR/3 +oldG/3 +oldB/3;
            example.pixels[i] = color(gray,gray,gray);
        }
    }
    example.updatePixels();
    image(example,500, 888);
  }
