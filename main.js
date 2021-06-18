function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	coin_collect=loadSound("coin.wav");
	game_over=loadSound("gameover.wav");
	mario_kill=loadSound("kick.wav");
	mariodead=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video=createCapture(VIDEO);
	video.size(1000,400);
	video.parent("game_console");

	instializeInSetup(mario);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses)
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("Model Loaded!");
}

function gotPoses(results) {
	if(results.length>0) {
		console.log(results);

		noseX=results[0].pose.nose.x;
		console.log("Nose X= "+noseX);

		noseY=results[0].pose.nose.y;
		console.log("Nose Y= "+noseY);
	}
}