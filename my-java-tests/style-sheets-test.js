window.onload = () => {
    const thisSection = document.getElementById('thisSection');
    const defaults=document.getElementById('default')
    const basic=document.getElementById('basic');

    thisSection.addEventListener('submit', (event) => {
        event.preventDefault();
        const value =document.querySelector('input[name="sorter"]:checked').value;
        if (value === 'First') {
            defaults.rel='stylesheet';
            basic.rel='alternate stylesheet';
 
        }else{
            basic.rel='stylesheet'
            defaults.rel='alternate stylesheet';
        }

        
    });

    }

