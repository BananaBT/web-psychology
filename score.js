window.addEventListener('load', () => {


    const score = sessionStorage.getItem('Score');
    const name = sessionStorage.getItem('Name')

    document.getElementById('show_score').innerHTML = score;
    document.getElementById('show_name').innerHTML = name;



})