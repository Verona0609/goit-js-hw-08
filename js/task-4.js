document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const formData = {};
        let allFieldsFilled = true;
Array.from(form.elements).forEach(input => {
    if(input.type !== "submit"){
        const trimValue = input.value.trim();
        if(trimValue){
            formData[input.name] = trimValue;
        }else{
            allFieldsFilled = false;
        }
    }
})

    
    if (!allFieldsFilled){
        alert("All form fields must be filled in");
    }else{
        console.log(formData);
        form.reset();
    }
});
});


