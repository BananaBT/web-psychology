

function check(){

    var score = 0;
	var question1 = document.question.quiz_1.value;
    var question2 = document.question.quiz_2.value;
    var question3 = document.question.quiz_3.value;
    var question4 = document.question.quiz_4.value;
    var question5 = document.question.quiz_5.value;
    var question6 = document.question.quiz_6.value;
    var question7 = document.question.quiz_7.value;
    var question8 = document.question.quiz_8.value;
    var question9 = document.question.quiz_9.value;
    var question10 = document.question.quiz_10.value;
    var question11 = document.question.quiz_11.value;
    var question12 = document.question.quiz_12.value;
	var question13 = document.question.quiz_13.value;
    var question14 = document.question.quiz_14.value;
    var question15 = document.question.quiz_15.value;
    
    
    const question_name=[question1,question2,question3,question4,question5,question6,
        question7,question8,question9,question10,question11,question12,question13,question14,question15]
    
    for (var i = 0; i < question_name.length; i++) {
    if (question_name[i] == 1){
        score+=1
    }
    else if (question_name[i] == 2){
        score+=2
    }
    else if (question_name[i] == 3){
        score+=3
    }
    }
    window.location.href = "index.html";
    alert("คะแนนของคุณคือ "+score);
    



    



/*

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
 */
	}