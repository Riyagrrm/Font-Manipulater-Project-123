left_x = ""
right_x = ""
difference=""
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
    textSize('20px')
    fill('black')
    text('Hello', 50, 300)
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)
        left_x = results[0].pose.leftWrist.x
        right_x = results[0].pose.rightWrist.x
        difference = left_x - right_x
        textSize(difference)
    }
}