document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const loginInput = document.getElementById('login');
    const dobInput = document.getElementById('dob');
    const genderInput = document.getElementById('gender');
    const loginError = document.getElementById('login-error');
    const dobError = document.getElementById('dob-error');
    const genderError = document.getElementById('gender-error');
    const userLogin = document.getElementById('user-login');
    const logoutBtn = document.getElementById('logout-btn');
    const testResult = document.getElementById('test-result');

    
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        
        if (!loginInput.checkValidity()) {
            loginError.textContent = 'Логин должен состоять из 4-10 символов, русских букв и цифр.';
            isValid = false;
        } else {
            loginError.textContent = '';
        }

       
        if (!dobInput.checkValidity()) {
            dobError.textContent = 'Дата рождения должна быть не раньше 1950 года и не позже текущей даты.';
            isValid = false;
        } else {
            dobError.textContent = '';
        }

       
        if (genderInput.value === '') {
            genderError.textContent = 'Пол обязателен для заполнения.';
            isValid = false;
        } else {
            genderError.textContent = '';
        }

        
        if (isValid) {
            const login = loginInput.value;
            localStorage.setItem('userLogin', login);
            localStorage.setItem('userDob', dobInput.value);
            localStorage.setItem('userGender', genderInput.value);
            window.location.href = 'description.html';
        }
    });

    
    const storedLogin = localStorage.getItem('userLogin');
    if (storedLogin) {
        userLogin.textContent = storedLogin;
        logoutBtn.style.display = 'block';

        
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('userLogin');
            localStorage.removeItem('userDob');
            localStorage.removeItem('userGender');
            localStorage.removeItem('testResult');
            window.location.href = 'auth.html';
        });
    }

    
    const storedTestResult = localStorage.getItem('testResult');
    if (storedTestResult) {
        testResult.textContent = `Ваш результат теста: ${storedTestResult} из 6`;
    }
});
