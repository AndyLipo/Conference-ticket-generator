//index.js

const fileInput = document.getElementById('file-upload');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const previewImage = document.getElementById('previewImage');
const uploadMessage = document.getElementById('uploadMessage');

// Mostrar mensajes
function showUploadError(message) {
    if (uploadMessage) {
        uploadMessage.textContent = message;
        uploadMessage.classList.add('error');
    }
}

function showUploadNormal() {
    if (uploadMessage) {
        uploadMessage.textContent = 'Upload your photo (JPG or PNG, max size: 500KB).';
        uploadMessage.classList.remove('error');
    }
}

// Validar archivo
function validateFile(file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
        showUploadError('Please select a valid JPG or PNG image.');
        return false;
    }
    if (file.size > 500 * 1024) {
        showUploadError('Image too large. Max 500KB allowed.');
        return false;
    }
    showUploadNormal();
    return true;
}

// Mostrar preview
function showPreview(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewContainer.style.display = 'block';
        uploadArea.style.display = 'none';
        sessionStorage.setItem('ticketImage', e.target.result);
    };
    reader.readAsDataURL(file);
}

// Manejar cambio de archivo
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
        showPreview(file);
    }
});

// Remover imagen
window.removeImage = function () {
    fileInput.value = '';
    previewImage.src = '';
    previewContainer.style.display = 'none';
    uploadArea.style.display = 'block';
    sessionStorage.removeItem('ticketImage');
    showUploadNormal();
};

// Manejar formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('ticketName').value.trim();
            const email = document.getElementById('ticketEmail').value.trim();
            const github = document.getElementById('ticketGithub').value.trim();
            const file = fileInput.files[0];

            if (!validateEmail(email)) {
                showError("Please enter a valid email address");
                return;
            }

            const ticketData = { name, email, github };
            sessionStorage.setItem('ticketData', JSON.stringify(ticketData));

            if (file && validateFile(file)) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    sessionStorage.setItem('ticketImage', event.target.result);
                    window.location.href = 'ticket.html';
                };
                reader.readAsDataURL(file);
            } else {
                window.location.href = 'ticket.html';
            }
        });
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showError(message) {
        if (errorContainer && errorMessage) {
            errorMessage.textContent = message;
            errorContainer.style.display = 'block';
        }
    }
});
