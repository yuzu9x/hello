let socket;  // WebSocket object
let currentFace = "";
const faces = [':3', ':D', '（＾ω＾） ', ':p', ';-;', 'T_T', '>:3', '>:D', '(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄', '(*´_ゝ｀)', '(◕ㅅ◕✿)', '(≧▽≦)', '乁(ツ)ㄏ'];

function setup() {
  createCanvas(400, 400);
  textSize(32);
  background(250);
  textAlign(CENTER);

  currentFace = random(faces);

  // Connect to the WebSocket server
  socket = new WebSocket('ws://localhost:8080'); // Connect to the WebSocket server

  // When a message is received from the WebSocket server
  socket.onmessage = function(event) {
    console.log('Received from server:', event.data);

    // If the button is pressed, change the face
    if (event.data === 'BUTTON_PRESSED') {
      currentFace = random(faces);
    }
  };

  // Log if the connection is successful
  socket.onopen = function() {
    console.log('Connected to WebSocket server');
  };
}

function keyPressed() {
  // Change face when a key is pressed
  currentFace = random(faces);
}

function draw() {
  background(250);

  // Display the face
  push();
  textSize(70);
  text(currentFace, width / 2, height / 2);
  pop();

  // Instructions
  push();
  textSize(20);
  text('press any key hehe', 200, 300);
  pop();

  // Brush effect when mouse moves
  push();
  strokeWeight(0);
  fill(255, 212, 241, 70);
  ellipse(mouseX, mouseY, 20);
  pop();
}

function mousePressed() {
  // Clear the drawing when the mouse is pressed
  background(250);
}
