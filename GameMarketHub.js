// ===== JAVASCRIPT REQUIREMENTS =====

// --- 1. ARRAY with 5+ items ---
const pcGames = ["Stardew Valley", "Subnautica", "EA FC 26", "Crimson Desert", "Slay the Spire 2", "Wuthering Waves", "Dota 2", "PUBG"];
const consoleGames = ["GTA V Enhanced", "Red Dead Redemption 2", "Spider-Man 2", "Battlefield 6", "FC 26"];
const mobileGames = ["Mobile Legends", "Free Fire", "Roblox", "Clash of Clans", "Call of Duty Mobile", "Candy Crush", "EA FC Mobile 26"];
const tradingServices = ["Accounts", "In-game Items", "Currency", "Boosting", "Gift Cards"];


// --- 2. FUNCTION DEFINITION + PARAMETER + CONDITIONAL LOGIC ---
function renderListItems(array, containerId, maxItems = 5) {
    const container = document.getElementById(containerId);
    
    // Conditional logic: check if container exists and array has data
    if (!container || array.length === 0) {
        console.log("No data or container missing");
        return;
    }

    // --- 3. LOOP (for...of) to render items to page ---
    let count = 0;
    for (const item of array) {
        if (count >= maxItems) break; // conditional: limit items
        const li = document.createElement("li");
        li.textContent = item;
        container.appendChild(li);
        count++;
    }
}


// --- 4. CALL FUNCTIONS ---
renderListItems(pcGames, "pc-featured");
renderListItems(consoleGames, "console-featured");
renderListItems(mobileGames, "mobile-featured");
renderListItems(tradingServices, "trading-featured");


// --- 5. DOM MANIPULATION + EVENT INTERACTION ---
const gameLinks = document.querySelectorAll('.game-link');
const notification = document.getElementById('notification');

gameLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Show extra link
        const extraLink = this.nextElementSibling;
        extraLink.href = this.getAttribute('data-extra');
        extraLink.style.display = 'inline-block';
        extraLink.style.opacity = '1';

        // Get name and update notification
        const storeName = this.parentElement.querySelector('h3').textContent;
        showNotification(`Opening ${storeName}... Alternative link ready!`);
    });
});


// --- Helper function ---
function showNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}


// --- 6. ADDITIONAL INTERACTION: change card style on click ---
const cards = document.querySelectorAll('.game-link-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#2a2a2a'; // modify style
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = ''; // reset
    });
});
