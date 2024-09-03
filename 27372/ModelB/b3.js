document.getElementById('imageLoader').addEventListener('change', handleImage, false);

function handleImage(e) {
    const reader = new FileReader();
    reader.onload = function(event){
        const img = new Image();
        img.onload = function(){
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            document.getElementById('preview').src = event.target.result;
            document.getElementById('preview').style.display = 'block';
            extractColors(ctx, img.width, img.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}

function extractColors(ctx, width, height) {
    const imageData = ctx.getImageData(0, 0, width, height).data;
    let colorMap = {};
    
    // Count color occurrences
    for (let i = 0; i < imageData.length; i += 4) {
        const color = `rgb(${imageData[i]}, ${imageData[i+1]}, ${imageData[i+2]})`;
        colorMap[color] = (colorMap[color] || 0) + 1;
    }

    // Sort colors by frequency and pick top 5
    let colors = Object.keys(colorMap).sort((a, b) => colorMap[b] - colorMap[a]).slice(0, 5);

    displayPalette(colors);
    suggestAccessories(colors);
}

function displayPalette(colors) {
    const paletteDiv = document.getElementById('colorPalette');
    paletteDiv.innerHTML = '';
    colors.forEach(color => {
        const div = document.createElement('div');
        div.className = 'color-box';
        div.style.backgroundColor = color;
        paletteDiv.appendChild(div);
    });
}

function suggestAccessories(colors) {
    const suggestionsDiv = document.getElementById('accessorySuggestions');
    suggestionsDiv.innerHTML = '<h4>Suggested Accessories:</h4>';
    colors.forEach((color, index) => {
        // Here you would typically fetch suggestions from an API or a predefined list
        suggestionsDiv.innerHTML += `<p>Try finding a ${['belt', 'hat', 'scarf', 'bag', 'shoes'][index]} in ${color}. <a href="#" onclick="return false;">Search Online</a></p>`;
    });
}

// Note: For actual product suggestions, integrate with an e-commerce API like Amazon Product Advertising API or similar services.