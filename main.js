song1 = "";
song2 = "";


song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;


function preload() {

    song1 = loadSound("count_on_me.mp3");
    song2 = loadSound("TOGETHER_WE_CAN_CHANGE_THE_WORLD.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded");
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;


        console.log("LeftWrist = " + leftWristx + " , " + leftWristy);
        console.log("RightWrist = " + rightWristx + " , " + rightWristy);
    }
}


function draw() {
    image(video, 0, 0, 400, 400);


    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristx,rightWristy,20);

			song2.stop();

		if(song1_status == false)
		{
			song1.play();
			document.getElementById("song_name").innerHTML = "Playing - Harry Potter Theme Song"
		}
	}

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristx,leftWristy,20);

			song1.stop();

		if(song2_status == false)
		{
			song2.play();
			document.getElementById("song_name").innerHTML = "Playing - Peter Pan Song"
		}
	}


    fill("red");
    stroke("red");
    
}


function stop() {
    song1.stop();
    song2.stop();
}