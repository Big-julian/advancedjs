document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('productName');
    const remainingCharsElement = document.getElementById('remainingChars');
    const errorMessage = document.getElementById('errorMessage');
    
    const maxLength = inputElement.maxLength;

    inputElement.addEventListener('input', () => {
        const currentLength = inputElement.value.length;
        remainingCharsElement.textContent = maxLength - currentLength;

        if(currentLength == 60) {
            inputElement.style.borderColor = "red"
            errorMessage.style.color = "red"
            errorMessage.innerHTML = "Max exceeded!"
        }

    });


    remainingCharsElement.textContent = maxLength;
});
