document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.gender');
  

    buttons.forEach(button => {
        button.addEventListener('click', () => {
   
            buttons.forEach(btn => btn.classList.remove('selected'));
   
            button.classList.add('selected');
        });
    });
});