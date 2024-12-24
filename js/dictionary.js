document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const dictionaryList = document.getElementById('dictionary-list');
    const termDescription = document.getElementById('term-description');

    const terms = {
        'Секиро': 'Главный герой игры, ниндзя, известный как "Секиро". Он однорукий воин, который стремится спасти своего господина.',
        'Замок Асина': 'Высокогорный Замок, принадлежащий клану Асина,хранилище многих реликвий клана.',
        'Драконье поветрие': 'Некая загадочная болезнь, поражающая действующих персонажей и торговцев сильным кашлем.',
        'Статуя Будды': ' Механика игры котрая выполняет следующие функции:Восстанавление здоровья,перемещение к доступным локациям, прокачка главного героя.',
        'Глубины Асина': 'Представляет собой обширную локацию с несколькими областями, которые сильно различаются между собой.',
        'Принц Куро': ' Молодой наследник, обладающий кровью дракона, что делает его объектом желания для многих его врагов.',
        'Бусина от чёток': 'Предмет с помощью котогрого  можно увеличить максимальный запас жизни и концентрации.',
        'Драже': 'Лечебное драже, постепенно восстанавливающее жизнь.',
        'Госпожа Бабочка': ' Старший синоби, куноити, на протяжении многих лет оттачивавшая мастерство создания иллюзий и использования их в бою.',
        'Клинок бессмертных': 'Меч-одати, способный убить бессмертного.'
    };

    dictionaryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const term = e.target.getAttribute('data-term');
            termDescription.textContent = terms[term];
            document.querySelectorAll('#dictionary-list li').forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const items = dictionaryList.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            const term = items[i].getAttribute('data-term').toLowerCase();
            if (term.includes(filter)) {
                items[i].style.display = '';
            } else {
                items[i].style.display = 'none';
            }
        }
    });
});