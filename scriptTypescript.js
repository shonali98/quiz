//getting all required elemnts
const start_btn =document.querySelector(".start_btn button");
const info_box =document.querySelector(".info_box  ");
const exit_info_btn =document.querySelector(" .info_box .buttons .exit");
const continue_info_btn =document.querySelector(".info_box .buttons .continue  ");
const quiz_box =document.querySelector(".quiz_box ");
const result_box =document.querySelector(".result_box ");
const timeCount= quiz_box.querySelector(".quiz_box .timer .timer_sec ");
const timeline= quiz_box.querySelector(".quiz_box .time_line ");
const exit_quiz_btn =document.querySelector(".quiz_box .buttons .exit ");
const exit_result_btn =document.querySelector(".result_box .buttons .exit ");


// start quiz button clicked
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo");

    
}
// if  exit button clicked
exit_info_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); // hide the info box
}
// if  exit quiz  button clicked
exit_quiz_btn.onclick = () =>{
    quiz_box.classList.remove("activeQuiz"); // hide the info box
}
// if  exit result  button clicked
exit_result_btn.onclick = () =>{
    result_box.classList.remove("activeResult");// hide the info box
    quiz_box.classList.remove("activeQuiz"); // hide the info box
    info_box.classList.add("activeInfo");
}
// if continue button clicked
continue_info_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); // hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
    
    showquestions(0);
    startTimer(15);
    startTimeLine(0);
}

let que_count=0;
let counter;
let timeValue=15;
let widthValue=0;

const next_btn= quiz_box.querySelector(" .continue ");
// if next question select 
next_btn.onclick =()=>{
    
    if(que_count < questionsTs.length-1){
        que_count++;
        showquestions(que_count);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimeLine(widthValue);
    }
    else{
        console.log("questions complete");
        result();

    }
    
}


// getting que and option from array
function showquestions(index){
    
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".quiz_box .option_list");
    let que_tag ="<span>"+ questionsTs[index].numb+questionsTs[index].question+"</span>";
    let option_tag='<div class="option">'+questionsTs[index].options[0]+'</div>'
                      +'<div class="option">'+questionsTs[index].options[1]+'</div>'
                      +'<div class="option">'+questionsTs[index].options[2]+'</div>'
                      +'<div class="option">'+questionsTs[index].options[3]+'</div>';
    que_text.innerHTML=que_tag;
    option_list.innerHTML=option_tag;
    
    const option=option_list.querySelectorAll(".option");
    for(let i=0; i<option.length;i++){
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}
let marks=0;

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns=answer.textContent;
    let correctAns=questionsTs[que_count].answer;
    

    console.log(correctAns);

    if(userAns==correctAns){
         marks=marks+1;
         answer.classList.add("correct");
         console.log(marks);
    }
    else{
        answer.classList.add("incorrect");
        console.log(marks);

        
    }

}

function result(){
    
    result_box.classList.add("activeResult"); // show the quiz box
    const scoreText= result_box.querySelector(".score_text");
    let scoreTag='<div class="score_text">you WON '+ marks +' out of 5</div>';
    scoreText.innerHTML=scoreTag;
}


function startTimer(time){
    counter=setInterval(timer,1000);
    function timer(){
        timeCount.textContent=time;
        time--;
        if(time<9){
            let addZero= timeCount.textContent;
            timeCount.textContent="0" +addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent="00";
        }

    }
}

function startTimeLine(time){
    counterLine=setInterval(timer,29);
    function timer(){
        time +=1;
        timeline.style.width=time+"px";

        if(time > 549){
            clearInterval(counterLine);
        }

    }
}