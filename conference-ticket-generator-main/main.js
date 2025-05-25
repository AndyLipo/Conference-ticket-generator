const fileInput = document.getElementById('file-upload');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const previewImage = document.getElementById('previewImage');

// Handle file selection
fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        displayPreview(file);
    }
});

// Handle drag and drop
uploadArea.addEventListener('dragover', function (e) {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', function (e) {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', function (e) {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        fileInput.files = files;
        displayPreview(file);
    }
});

function displayPreview(file) {
    // Validate file type
    if (!file.type.match('image.*')) {
        alert('Please select an image file (JPG or PNG)');
        return;
    }

    // Validate file size (500KB = 500 * 1024 bytes)
    if (file.size > 500 * 1024) {
        alert('File size must be less than 500KB');
        return;
    }

    // Create file reader
    const reader = new FileReader();
    reader.onload = function (e) {
        previewImage.src = e.target.result;
        uploadArea.style.display = 'none';
        previewContainer.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// Click on preview to change image
previewContainer.addEventListener('click', function () {
    fileInput.click();
});

function changeImage() {
    fileInput.click();
}