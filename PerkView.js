// main.js (your existing JS without the images array)

function displayImages(imagesToDisplay) {
    const grid = document.getElementById('imageGrid');
    grid.innerHTML = '';

    imagesToDisplay.sort((a, b) => a.title.localeCompare(b.title));

    imagesToDisplay.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.title;
        imgElement.title = image.title;
        grid.appendChild(imgElement);
    });
}

function matchesClassFilter(imageClasses, selectedClasses, strictFilter) {
    if (selectedClasses.length === 0) return true;
    return strictFilter
        ? selectedClasses.every(cls => imageClasses.includes(cls))
        : selectedClasses.some(cls => imageClasses.includes(cls));
}

function filterImages() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const selectedTier = document.getElementById('tierSelect').value;
    const selectedClasses = Array.from(document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    const strictFilter = document.getElementById('strictFilter').checked;

    const filteredImages = images.filter(image => {
        const matchesSearch = image.title.toLowerCase().includes(searchValue);
        const matchesTier = selectedTier === "" || image.tier.toString() === selectedTier;
        const matchesClass = matchesClassFilter(image.classes, selectedClasses, strictFilter);

        return matchesSearch && matchesTier && matchesClass;
    });

    displayImages(filteredImages);
}

// Call this only after `images` is defined
document.addEventListener('DOMContentLoaded', () => {
    displayImages(images); // assumes `images` is already loaded
});
