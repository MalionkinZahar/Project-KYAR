/*Персонажи*/
function toggleDetails(card) {
    const details = card.querySelector('.character-details');
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}
/*Карта в index*/
function toggleMap() {
    let mapContent = document.querySelector('.map-content');
    let toggleIcon = document.querySelector('.map-toggle');
    if (mapContent.style.display === 'none' || mapContent.style.display === '') {
        mapContent.style.display = 'block';
        toggleIcon.textContent = '▲';
    } else {
        mapContent.style.display = 'none';
        toggleIcon.textContent = '▼';
    }
}
/*Фракции*/
function toggleFactionDetails(element) {
    let details = element.querySelector('.details');
    let text = element.querySelector('.toggle-text');
    let isVisible = details.style.display === 'block';

    document.querySelectorAll('.details').forEach(d => d.style.display = 'none');
    document.querySelectorAll('.toggle-text').forEach(t => t.textContent = 'узнать больше'); 

    details.style.display = isVisible ? 'none' : 'block';

    if (!isVisible) {
        text.textContent = '';
    }
}

/*Хроники*/
document.querySelectorAll('.chronicle-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const entry = this.closest('.chronicle-entry');
        const details = entry.querySelector('.chronicle-details');
        const isShowing = details.style.display === 'block';
        
        document.querySelectorAll('.chronicle-details').forEach(d => {
            d.style.display = 'none';
        });
        document.querySelectorAll('.chronicle-more').forEach(b => {
            b.textContent = 'Показать подробности';
        });
        
        if (!isShowing) {
            details.style.display = 'block';
            this.textContent = 'Скрыть подробности';
            entry.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});

document.querySelectorAll('.timeline-filter').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.timeline-filter').forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');
        
        const filter = this.dataset.filter;
        document.querySelectorAll('.chronicle-entry').forEach(entry => {
            if (filter === 'all' || entry.classList.contains(filter)) {
                entry.style.display = 'block';
            } else {
                entry.style.display = 'none';
            }
        });
    });
});


document.addEventListener('click', function() {
    document.querySelectorAll('.chronicle-details').forEach(d => {
        d.style.display = 'none';
    });
    document.querySelectorAll('.chronicle-more').forEach(b => {
        b.textContent = 'Показать подробности';
    });
});

document.querySelectorAll('.chronicle-entry').forEach(entry => {
    entry.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});