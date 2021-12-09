song1 = "";
song2 = "";

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
}

function draw()
{
    image(video, 0, 0, 380, 380);
}

