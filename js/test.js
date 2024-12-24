document.addEventListener('DOMContentLoaded', () => {
    const storedLogin = localStorage.getItem('userLogin');
    if (!storedLogin) {
        
        window.location.href = 'auth.html';
    }

    const testForm = document.getElementById('test-form');
    const resultsDiv = document.getElementById('results');
    const retryBtn = document.getElementById('retry-btn');

    testForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const answers = {
            answer1: 'Секиро',
            answer2: 'Протез',
            q1: "Геничиро", 
            q2: "Клинок бессмертных", 
            q3: "Фляга с соком", 
            q4: "Семечко тыквы" 
        };

        let score = 0;
        const userAnswers = {
            answer1: document.getElementById('answer1').value.trim(),
            answer2: document.getElementById('answer2').value.trim(),
            q1: document.querySelector('input[name="q1"]:checked'),
            q2: document.querySelector('input[name="q2"]:checked'),
            q3: document.querySelector('input[name="q3"]:checked'),
            q4: document.querySelector('input[name="q4"]:checked')
        };

        
        if (userAnswers.answer1.toLowerCase() === 'секиро') {
            score++;
            document.getElementById('feedback1').innerText = "Правильный ответ";
            document.getElementById('feedback1').classList.add('correct');
        } else {
            document.getElementById('feedback1').innerText = `Неправильный ответ. Правильный ответ: Секиро`;
            document.getElementById('feedback1').classList.add('incorrect');
        }

        if (userAnswers.answer2.toLowerCase() === 'протез') {
            score++;
            document.getElementById('feedback2').innerText = "Правильный ответ";
            document.getElementById('feedback2').classList.add('correct');
        } else {
            document.getElementById('feedback2').innerText = `Неправильный ответ. Правильный ответ: Протез`;
            document.getElementById('feedback2').classList.add('incorrect');
        }

        if (userAnswers.q1 && userAnswers.q1.value === answers.q1) {
            score++;
            document.getElementById('feedbackQ1').innerText = "Правильный ответ";
            document.getElementById('feedbackQ1').classList.add('correct');
        } else {
            document.getElementById('feedbackQ1').innerText = `Неправильный ответ. Правильный ответ: Геничиро`;
            document.getElementById('feedbackQ1').classList.add('incorrect');
        }

        if (userAnswers.q2 && userAnswers.q2.value === answers.q2) {
            score++;
            document.getElementById('feedbackQ2').innerText = "Правильный ответ";
            document.getElementById('feedbackQ2').classList.add('correct');
        } else {
            document.getElementById('feedbackQ2').innerText = `Неправильный ответ. Правильный ответ: Клинок бессмертных`;
            document.getElementById('feedbackQ2').classList.add('incorrect');
        }

        if (userAnswers.q3 && userAnswers.q3.value === answers.q3) {
            score++;
            document.getElementById('feedbackQ3').innerText = "Правильный ответ";
            document.getElementById('feedbackQ3').classList.add('correct');
        } else {
            document.getElementById('feedbackQ3').innerText = `Неправильный ответ. Правильный ответ: Фляга с соком`;
            document.getElementById('feedbackQ3').classList.add('incorrect');
        }

        if (userAnswers.q4 && userAnswers.q4.value === answers.q4) {
            score++;
            document.getElementById('feedbackQ4').innerText = "Правильный ответ";
            document.getElementById('feedbackQ4').classList.add('correct');
        } else {
            document.getElementById('feedbackQ4').innerText
            document.getElementById('feedbackQ4').innerText = `Неправильный ответ. Правильный ответ: Семечко тыквы`;
            document.getElementById('feedbackQ4').classList.add('incorrect');
        }

        resultsDiv.innerHTML = `
            <p>Вы ответили на ${score} из 6 вопросов верно.</p>
        `;
        localStorage.setItem('testResult', score);
    });

    
    retryBtn.addEventListener('click', () => {
        testForm.reset(); 
        resultsDiv.innerHTML = ''; 

        
        const feedbackElements = [
            'feedback1',
            'feedback2',
            'feedbackQ1',
            'feedbackQ2',
            'feedbackQ3',
            'feedbackQ4'
        ];

        feedbackElements.forEach(feedbackId => {
            const feedbackElement = document.getElementById(feedbackId);
            feedbackElement.innerText = '';
            feedbackElement.classList.remove('correct', 'incorrect'); 
        });
    });
});
