const debounce = (callback, delay) => {

    let timeout;
    
    return () => {
    
        if (timeout) {
        
            clearTimeout(timeout);
        
        }
        
        timeout = setTimeout(callback, delay);
    
    };
    
};
    
    
    const debounceButton = document.getElementById("debounce");
    
    debounceButton.addEventListener("click", debounce(() => {console.log('debounce')}, 3000));
    
    document.getElementById("debounce").innerHTML = `
    
    <button>debounce</button>
    
`;