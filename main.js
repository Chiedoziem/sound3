function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nkjysLPtP/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}



function gotResults(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;


        document.getElementById('result_label').innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById('result_confidence').innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById('result_label').style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById('result_confidence').style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")" 



        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if (results[0].label == "cat"){
            img.src = 'giphy (1).gif';
            img1.src = 'png-transparent-black-and-brown-owl-eurasian-eagle-owl-snowy-owl-great-horned-owl-bird-owls-animals-fauna-wildlife.png';
            img2.src = 'png-transparent-monkey-cartoon-drawing-illustration-happy-little-monkey-brown-and-beige-monkey-sticker-comics-mammal-cat-like-mammal-thumbnail.png';
            img3.src = '899eda72-46a5-4524-a4e6-290d6ec1ab34-1652641110882.jpeg'
        }
        else if (results[0].label == "dog"){
            img.src = 'png-transparent-black-and-brown-owl-eurasian-eagle-owl-snowy-owl-great-horned-owl-bird-owls-animals-fauna-wildlife.png';
            img1.src = 'happy-happy-dog.gif';
            img2.src = 'png-transparent-monkey-cartoon-drawing-illustration-happy-little-monkey-brown-and-beige-monkey-sticker-comics-mammal-cat-like-mammal-thumbnail.png';
            img3.src = 'png-transparent-cat-animal-lovely-cat.png'
        }
        else if (results[0].label == "monkey"){
            img.src = 'png-transparent-black-and-brown-owl-eurasian-eagle-owl-snowy-owl-great-horned-owl-bird-owls-animals-fauna-wildlife.png';
            img1.src = 'png-transparent-cat-animal-lovely-cat.png';
            img2.src = 'giphy.gif';
            img3.src = '899eda72-46a5-4524-a4e6-290d6ec1ab34-1652641110882.jpeg'
        }
        else{
            img.src = 'png-transparent-monkey-cartoon-drawing-illustration-happy-little-monkey-brown-and-beige-monkey-sticker-comics-mammal-cat-like-mammal-thumbnail.png';
            img1.src = 'png-transparent-cat-animal-lovely-cat.png';
            img2.src = '899eda72-46a5-4524-a4e6-290d6ec1ab34-1652641110882.jpeg';
            img3.src = '200.gif';
        }

        
    }



}