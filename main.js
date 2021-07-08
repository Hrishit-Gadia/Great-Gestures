//Variables
var Emoji;
var Sentence;
var Photograph;
var Model;
var Gesture1;
var Gesture2;
var Speaker;
var Paragraph;
var ThumbsUp = '&#128077;&#127995;';
var Cool = '&#129304;&#127998;';
var Beautiful = '&#128076;&#127997;';
var Scissors = '&#129310;&#127996;';


//Setting Webcam
Webcam.set({
    width: 350,
    height: 308,
    image_format: 'png',
    png_format: 100
});
Webcam.attach('Webcam');

// Function For Clicking Picture
function ClickPic() {
    Webcam.snap(function (Photograph) {
        document.getElementById('Pic').innerHTML = "<img id = 'Picture' src = '" + Photograph + "'>"
    });
    View();
}

//Setting Teachable Machines
Model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Zy1FEfObR/model.json", Status);

//Functions

function Status() {
    console.info("Working")
}

function Speak() {
    Speaker = window.speechSynthesis;
    Sentence = "You Are Currently Showing " + Gesture1 + " Or " + Gesture2 + " Gesture";
    Paragraph = new SpeechSynthesisUtterance(Sentence);
    Speaker.speak(Paragraph);
}


function View() {
    Emoji = document.getElementById("Picture");
    Model.classify(Emoji, Setup);
}

function Setup(error, Emoticons) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(Emoticons);
        Gesture1 = Emoticons[0].label;
        Gesture2 = Emoticons[1].label;
        Speak();

        if (Gesture1 == 'Cool!') {
            document.getElementById('Prediction-1').innerHTML = Cool;
        }
        else {
            if (Gesture1 == 'Well Done!') {
                document.getElementById('Prediction-1').innerHTML = ThumbsUp;
            }
            else {
                if (Gesture1 == 'Scissors') {
                    document.getElementById('Prediction-1').innerHTML = Scissors;
                }
                else {
                    if (Gesture1 == 'Beautiful!') {
                        document.getElementById('Prediction-1').innerHTML = Beautiful;
                    }
                    else {

                    }
                }
            }
        }

        if (Gesture2 == 'Cool!') {
            document.getElementById('Prediction-2').innerHTML = Cool;
        }
        else {
            if (Gesture2 == 'Well Done!') {
                document.getElementById('Prediction-2').innerHTML = ThumbsUp;
            }
            else {
                if (Gesture2 == 'Scissors') {
                    document.getElementById('Prediction-2').innerHTML = Scissors;
                }
                else {
                    if (Gesture2 == 'Beautiful!') {
                        document.getElementById('Prediction-2').innerHTML = Beautiful;
                    }
                    else {

                    }
                }
            }
        }
    }
}