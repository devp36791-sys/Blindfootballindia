// Search functionality for players
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const positionFilter = document.getElementById('positionFilter');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', filterPlayers);
    }
    
    if (positionFilter) {
        positionFilter.addEventListener('change', filterPlayers);
    }

    // State search functionality
    const stateSearch = document.getElementById('stateSearch');
    if (stateSearch) {
        stateSearch.addEventListener('keyup', filterStates);
    }

    // Tournament filter
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', filterTournaments);
    }

    // Match filter
    const matchFilter = document.getElementById('matchFilter');
    if (matchFilter) {
        matchFilter.addEventListener('change', filterMatches);
    }
});

function filterPlayers() {
    const searchInput = document.getElementById('searchInput');
    const positionFilter = document.getElementById('positionFilter');
    const playerCards = document.querySelectorAll('.player-card');
    
    const searchTerm = searchInput.value.toLowerCase();
    const positionTerm = positionFilter.value.toLowerCase();

    playerCards.forEach(card => {
        const playerName = card.querySelector('h3').textContent.toLowerCase();
        const playerPosition = card.querySelector('.position').textContent.toLowerCase();
        
        const matchesSearch = playerName.includes(searchTerm);
        const matchesPosition = positionTerm === '' || playerPosition.includes(positionTerm);
        
        if (matchesSearch && matchesPosition) {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterStates() {
    const stateSearch = document.getElementById('stateSearch');
    const stateCards = document.querySelectorAll('.state-card');
    
    const searchTerm = stateSearch.value.toLowerCase();

    stateCards.forEach(card => {
        const stateName = card.querySelector('h3').textContent.toLowerCase();
        
        if (stateName.includes(searchTerm)) {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterTournaments() {
    const statusFilter = document.getElementById('statusFilter');
    const tournamentCards = document.querySelectorAll('.tournament-card');
    
    const statusTerm = statusFilter.value.toLowerCase();

    tournamentCards.forEach(card => {
        const tournamentStatus = card.querySelector('.status').classList;
        
        if (statusTerm === '') {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else if (Array.from(tournamentStatus).includes(statusTerm)) {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterMatches() {
    const matchFilter = document.getElementById('matchFilter');
    const matchCards = document.querySelectorAll('.match-card');
    
    const filterTerm = matchFilter.value.toLowerCase();

    matchCards.forEach(card => {
        if (filterTerm === '') {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else if (card.classList.contains(filterTerm)) {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to current page
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});
