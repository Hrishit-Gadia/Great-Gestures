//Variables
var Emoji;
var Sentence;
var Photograph;
var Model;
var Gesture;
var Speaker;

//Setting Webcam
Webcam.set({
    width: 350,
    height: 308,
    image_format: 'png',
    png_format: 100
});
Webcam.attach('Webcam');

//Setting Teachable Machines
Model = imageClassifier("https://teachablemachine.withgoogle.com/models/Zy1FEfObR/model.json", Status);

//Functions

function Status(){
    console.info("Asd")
}
function ClickPic() {
    Webcam.snap(function (Photograph) {
        document.getElementById('Pic').innerHTML = "<img id = 'Picture' src = '" + Photograph + "'>"
    });
}

function Speak() {
    Sentence = "You Are Currently Showing" + Gesture + "Gesture";
    Speaker = window.speechSynthesis;
    Speaker.speak(Sentence);
}