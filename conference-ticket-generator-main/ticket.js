// ticket.js

window.addEventListener('DOMContentLoaded', () => {
    const ticketData = JSON.parse(sessionStorage.getItem('ticketData'));
    const ticketImage = sessionStorage.getItem('ticketImage');

    const nameSpans = document.querySelectorAll('.ticketName');
    const emailEl = document.getElementById('ticketEmail');
    const githubEl = document.getElementById('ticketGithub');
    const overlay = document.querySelector('.ticket-overlay');

    if (!ticketData || nameSpans.length === 0 || !emailEl || !githubEl) {
        console.error("Uno o más elementos no se encontraron en el DOM o faltan datos.");
        return;
    }

    nameSpans.forEach(span => span.textContent = ticketData.name);
    emailEl.textContent = ticketData.email;
    githubEl.textContent = `@${ticketData.github}`;

    if (ticketImage && overlay) {
        const imgEl = document.createElement('img');
        imgEl.src = ticketImage;
        imgEl.alt = 'Uploaded photo';
        imgEl.classList.add('ticket-user-photo');
        overlay.appendChild(imgEl);
    }
});
