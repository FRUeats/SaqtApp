let tg = window.Telegram.WebApp;

// Инициализация TWA
tg.expand();

// Получение информации о пользователе
let user = tg.initDataUnsafe.user;
document.getElementById('user-name').textContent = user.first_name;
document.getElementById('user-avatar').src = user.photo_url;

// Функции для каждой секции
function showDiscover() {
    document.getElementById('page-title').textContent = 'Discover';
    document.getElementById('content').innerHTML = `
        <div class="card">
            <h2>Find a Surprise Bag</h2>
            <p>You don't have any orders yet.</p>
            <button class="button">Find a Surprise Bag</button>
        </div>
        <div class="card">
            <h2>CO2e avoided</h2>
            <p>0 kWh</p>
        </div>
        <div class="card">
            <h2>Money saved</h2>
            <p>0 USD</p>
        </div>
    `;
}

function showBrowse() {
    document.getElementById('page-title').textContent = 'Browse';
    document.getElementById('content').innerHTML = `
        <div id="map" style="height: 300px; background-color: #e0e0e0;">
            Map placeholder
        </div>
        <div class="card">
            <img src="cafe-image.jpg" alt="Mediterranean Cafe">
            <h2>Mediterranean Cafe - Berwick St</h2>
            <p>Surprise Bag</p>
            <p>Collect tomorrow 4:00 PM - 8:00 PM</p>
            <p>Rating: 4.0 | 7.0 km</p>
            <p>£3.36</p>
        </div>
    `;
}

function showFavourites() {
    document.getElementById('page-title').textContent = 'Favourites';
    document.getElementById('content').innerHTML = `
        <div class="card">
            <img src="cafe-brera-image.jpg" alt="Cafe Brera">
            <h2>Cafe Brera - Canary Wharf</h2>
            <p>Mixed Surprise Bag</p>
            <p>Collect today 11:00 PM - 1:00 AM</p>
            <p>Rating: 4.2 | 613 m</p>
            <p>£6.50 <span style="text-decoration: line-through;">£18.00</span></p>
        </div>
    `;
}

function showProfile() {
    document.getElementById('page-title').textContent = 'Profile';
    document.getElementById('content').innerHTML = `
        <div class="card">
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>@${user.username}</p>
        </div>
        <div class="card">
            <h2>Settings</h2>
            <p>Manage your account settings</p>
        </div>
    `;
}

// Обработчики событий для кнопок навигации
document.getElementById('discover').addEventListener('click', showDiscover);
document.getElementById('browse').addEventListener('click', showBrowse);
document.getElementById('favourites').addEventListener('click', showFavourites);
document.getElementById('profile').addEventListener('click', showProfile);

// Функция для обновления активной вкладки
function updateActiveTab(activeTabId) {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(activeTabId).classList.add('active');
}

// Обновляем обработчики событий
document.getElementById('discover').addEventListener('click', () => {
    showDiscover();
    updateActiveTab('discover');
});
document.getElementById('browse').addEventListener('click', () => {
    showBrowse();
    updateActiveTab('browse');
});
document.getElementById('favourites').addEventListener('click', () => {
    showFavourites();
    updateActiveTab('favourites');
});
document.getElementById('profile').addEventListener('click', () => {
    showProfile();
    updateActiveTab('profile');
});

// Показать начальный экран
showDiscover();
updateActiveTab('discover');