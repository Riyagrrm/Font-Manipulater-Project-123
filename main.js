left_x = ""
right_x = ""
function preload()
{}
function setup()
{
    canvas = createCanvas(550, 500)
    canvas.position(800, 150)
    video = createCapture(VIDEO)
    video.size(550, 500)
    video.position(100, 150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded()
{
    console.log("modelLoaded")
}
function draw()
{
    background("#B6FFBB")
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)
    }
}