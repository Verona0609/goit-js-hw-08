document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#name-input");
    const output = document.querySelector("#name-output");
    document.addEventListener("input", () =>{

  
        const trimInput = input.value.trim();
        if(trimInput){
            output.textContent = trimInput;
        }else{
            output.textContent = "Anonymous"
        }
        
        })
})
