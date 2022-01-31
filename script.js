//getting all required elemnts
const start_btn =document.querySelector(".start_btn button");
const info_box =document.querySelector(".info_box  ");
const exit_info_btn =document.querySelector(" .info_box .buttons .exit");
const continue_info_btn =document.querySelector(".info_box .buttons .continue  ");
const quiz_box =document.querySelector(".quiz_box ");
const result_box =document.querySelector(".result_box ");


// start quiz button clicked
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo");  // show the info box
}
// if  exit button clicked
exit_info_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); // hide the info box
}
// if continue button clicked
continue_info_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); // hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
    showQuestions(0);
}

let que_count=0;

const next_btn= quiz_box.querySelector(" .continue ");
// if next question select 
next_btn.onclick =()=>{
    if(que_count < questions.length-1){
        que_count++;
        showQuestions(que_count);
    }
    else{
        console.log("questions complete");
        result();

    }
    
}


// getting que and option from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".quiz_box .option_list");
    let que_tag ="<span>"+questions[index].numb+questions[index].question+"</span>";
    let option_tag='<div class="option">'+questions[index].options[0]+'</div>'
                      +'<div class="option">'+questions[index].options[1]+'</div>'
                      +'<div class="option">'+questions[index].options[2]+'</div>'
                      +'<div class="option">'+questions[index].options[3]+'</div>';
    que_text.innerHTML=que_tag;
    option_list.innerHTML=option_tag;
    
    const option=option_list.querySelectorAll(".option");
    for(let i=0; i<option.length;i++){
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}
let marks=0;

function optionSelected(answer){
    let userAns=answer.textContent;
    let correctAns=questions[que_count].answer;
    console.log(correctAns);

    if(userAns==correctAns){
         marks=marks+1;
         console.log(marks);
    }
    else{
        console.log(marks);
    }

}

function result(){
    
    result_box.classList.add("activeResult"); // show the quiz box
    const scoreText= result_box.querySelector(".score_text");
    let scoreTag='<div class="score_text">you WON '+ marks +' out of 5</div>';
    scoreText.innerHTML=scoreTag;
}
