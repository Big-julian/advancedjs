document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('productName');
    const remainingCharsElement = document.getElementById('remainingChars');

    
    const maxLength = inputElement.maxLength;

    inputElement.addEventListener('input', () => {
        const currentLength = inputElement.value.length;
        remainingCharsElement.textContent = maxLength - currentLength;
    });


    remainingCharsElement.textContent = maxLength;
});
