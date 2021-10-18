// Header 
const bar = document.getElementById('bar');
const headerBar = document.getElementById('headerBar');
const navbar = document.getElementById('navbar');
const navbarUl = document.getElementById('navbarUl');
bar.onclick = () => {
    headerBar.classList.toggle('active');
    navbar.classList.toggle('active');
    navbarUl.classList.toggle('active');
};



const search = document.querySelector('.search');
const h2 = document.querySelector('#h2');
const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#inputParagraph');
const searchTab = document.querySelector('#searchTab');

searchBtn.onclick = function() {
    h2.classList.toggle('active');
    search.classList.toggle('active');


};


// Toogle
const changeHeight = (angle, question, answer) => {
    question.addEventListener('click', function() {
        angle.classList.toggle('active');
        answer.classList.toggle('active');
        question.classList.toggle('active');
    });
};
//Answer
const answer_1 = document.querySelector('#answer-1');
const answer_2 = document.querySelector('#answer-2');
const answer_3 = document.querySelector('#answer-3');
const answer_4 = document.querySelector('#answer-4');
// Angle
const angle_1 = document.querySelector('#angle-1');
const angle_2 = document.querySelector('#angle-2');
const angle_3 = document.querySelector('#angle-3');
const angle_4 = document.querySelector('#angle-4');
// Question
const qCard_1 = document.querySelector('#qCard_1');
const qCard_2 = document.querySelector('#qCard_2');
const qCard_3 = document.querySelector('#qCard_3');
const qCard_4 = document.querySelector('#qCard_4');


changeHeight(angle_1, qCard_1, answer_1);
changeHeight(angle_2, qCard_2, answer_2);
changeHeight(angle_3, qCard_3, answer_3);
changeHeight(angle_4, qCard_4, answer_4);