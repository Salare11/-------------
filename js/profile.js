document.addEventListener('DOMContentLoaded', () => {
    const profileLogin = document.getElementById('profile-login');
    const profileTestResult = document.getElementById('profile-test-result');
    const logoutBtnProfile = document.getElementById('logout-btn-profile');

    const storedLogin = localStorage.getItem('userLogin');
    const storedTestResult = localStorage.getItem('testResult');

    if (profileLogin) {
        profileLogin.textContent = storedLogin;
    }

    if (profileTestResult) {
        profileTestResult.textContent = storedTestResult;
    }

    if (logoutBtnProfile) {
        logoutBtnProfile.addEventListener('click', () => {
            localStorage.removeItem('userLogin');
            localStorage.removeItem('userDob');
            localStorage.removeItem('userGender');
            localStorage.removeItem('testResult');
            window.location.href = 'index.html';
        });
    }
});