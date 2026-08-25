// Live search including subtopics
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.topics-grid .topic-card');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector('.topic-title').textContent.toLowerCase();
        const desc = card.querySelector('.topic-description').textContent.toLowerCase();
        const subtopicsDiv = card.querySelector('.topic-subtopics');
        const subtopics = subtopicsDiv ? subtopicsDiv.textContent.toLowerCase() : '';

        if (title.includes(filter) || desc.includes(filter) || subtopics.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
