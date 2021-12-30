song1 = "";
song2 = "";

leftWristx = 0;
leftWristy = 0;
rightWristx = 0; 
rightWristy = 0;


function preload()
{

    song1 = loadSound("Song_1.mp3");
    song2 = loadSound("Song_2.mp3");
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded");
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;

        console.log("LeftWrist = " + leftWristx + " , " + leftWristy);
        console.log("RightWrist = " +  rightWristx + " , " + rightWristy);
    }
}


function draw()
{
    image(video, 0, 0, 380, 380);
}


function stop()
{
    song1.stop();
    song2.stop();
}