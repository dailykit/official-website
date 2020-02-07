window.onload = () => {
    const tabs = document.getElementsByClassName('tab');
    const boxes = document.getElementsByClassName('questions-box');
    const questions = document.getElementsByClassName('question');
    
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            for(let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
            }
            for(let j = 0; j < boxes.length; j++) {
                boxes[j].classList.remove('active');
            }
            document.getElementById(tabs[i].dataset.key).classList.add('active');
            tabs[i].classList.add('active');
        })
    }

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', () => {
            const answer = questions[i].children[0];
            if (answer.style.display === 'none' || !answer.style.display) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        })
    }
}