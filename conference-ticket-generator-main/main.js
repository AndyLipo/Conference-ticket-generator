// const fileInput = document.getElementById('file-upload');
// const uploadArea = document.getElementById('uploadArea');
// const previewContainer = document.getElementById('previewContainer');
// const previewImage = document.getElementById('previewImage');
// const uploadMessage = document.getElementById('uploadMessage');

// // Funciones para manejar mensajes
// function showUploadError(message) {
//     uploadMessage.textContent = message;
//     uploadMessage.classList.add('error');
// }

// function showUploadNormal() {
//     uploadMessage.textContent = 'Upload your photo (JPG or PNG, max size: 500KB).';
//     uploadMessage.classList.remove('error');
// }

// function validateFile(file) {
//     // Validate file type
//     if (!file.type.match('image.*')) {
//         showUploadError('Please select an image file (JPG or PNG).');
//         return false;
//     }

//     // Validate file size (500KB = 500 * 1024 bytes)
//     if (file.size > 500 * 1024) {
//         showUploadError('File too large. Please upload a photo under 500KB.');
//         return false;
//     }

//     // Si llegamos aquí, el archivo es válido
//     showUploadNormal();
//     return true;
// }

// //handle email message error
// function showEmailError(email) {
//     const errorContainer = document.getElementById('errorContainer');
//     const errorMessage = document.getElementById('errorMessage');
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (regex.test(email)) {
//         errorContainer.classList.remove('show');
//         return true;
//     } else {
//         errorMessage.textContent = 'Please enter a valid email address';
//         errorContainer.classList.add('show');
//         return false;
//     }
// }
// const emailInput = document.getElementById('ticketEmail');
// if (emailInput) {
//     emailInput.addEventListener('blur', function () {
//         showEmailError(this.value);
//     });
// }
// // Handle file selection
// fileInput.addEventListener('change', function (e) {
//     const file = e.target.files[0];
//     if (file && validateFile(file)) {
//         displayPreview(file);
//     }
// });

// // Handle drag and drop
// uploadArea.addEventListener('dragover', function (e) {
//     e.preventDefault();
//     uploadArea.classList.add('drag-over');
// });

// uploadArea.addEventListener('dragleave', function (e) {
//     e.preventDefault();
//     uploadArea.classList.remove('drag-over');
// });

// uploadArea.addEventListener('drop', function (e) {
//     e.preventDefault();
//     uploadArea.classList.remove('drag-over');

//     const files = e.dataTransfer.files;
//     if (files.length > 0) {
//         const file = files[0];
//         if (validateFile(file)) {
//             fileInput.files = files;
//             displayPreview(file);
//         }
//     }
// });

// function displayPreview(file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//         const base64Image = e.target.result;
//         previewImage.src = base64Image;
//         uploadArea.style.display = 'none';
//         previewContainer.style.display = 'block';
//         showUploadNormal();

//         // Guardar la imagen en sessionStorage
//         sessionStorage.setItem('ticketImage', base64Image);
//     };
//     reader.readAsDataURL(file);
// }


// // Click on preview to change image
// previewContainer.addEventListener('click', function () {
//     fileInput.click();
// });

// function changeImage() {
//     fileInput.click();
// }

// function removeImage() {
//     // Reset file input
//     fileInput.value = '';

//     // Hide preview and show upload area
//     previewContainer.style.display = 'none';
//     uploadArea.style.display = 'block';

//     // Reset message to normal
//     showUploadNormal();
// }

// function handleForm(event) {
//     event.preventDefault();

//     const fullName = document.getElementById('ticketName').value.trim();
//     const email = document.getElementById('ticketEmail').value.trim();
//     const github = document.getElementById('ticketGithub').value.trim();

//     // Validaciones...
//     let isValid = true;

//     if (fullName === '' || !showEmailError(email) || github === '') {
//         isValid = false;
//     }

//     if (isValid) {
//         // Guardar datos en sessionStorage
//         const ticketData = {
//             name: fullName,
//             email: email,
//             github: github,
//             timestamp: new Date().getTime()
//         };

//         sessionStorage.setItem('ticketData', JSON.stringify(ticketData));

//         // Redirigir con transición suave
//         document.body.style.opacity = '0';
//         document.body.style.transition = 'opacity 0.5s ease';

//         setTimeout(() => {
//             window.location.href = 'Ticket.html';
//         }, 500);
//     }

//     return false;
// }
// window.addEventListener('DOMContentLoaded', function () {
//     const ticketData = JSON.parse(sessionStorage.getItem('ticketData'));
//     const ticketImage = sessionStorage.getItem('ticketImage');

//     // Buscamos los elementos que puedan existir
//     const nameEl = document.getElementById('ticketName');
//     const emailEl = document.getElementById('ticketEmail');
//     const githubEl = document.getElementById('ticketGithub');

//     if (!nameEl || !emailEl || !githubEl) {
//         console.error("Uno o más elementos no se encontraron en el DOM.");
//         return;
//     }

//     // Asignamos los datos si están presentes
//     if (ticketData) {
//         nameEl.textContent = ticketData.name;
//         emailEl.textContent = ticketData.email;
//         githubEl.textContent = `@${ticketData.github}`;
//     }

//     if (ticketImage) {
//         const imgEl = document.createElement('img');
//         imgEl.src = ticketImage;
//         imgEl.alt = 'Uploaded photo';
//         imgEl.classList.add('ticket-user-photo');

//         const overlay = document.querySelector('.ticket-overlay');
//         if (overlay) {
//             overlay.appendChild(imgEl);
//         }
//     }
// });

// document.getElementById('myForm').addEventListener('submit', handleForm);
