const button = document.querySelector('.botao')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', () => {
    const classNameOfClickedElement = event.target.classList[0]
    const ClassNames = ['popup-close', 'popup-wrapper','popup-link']
    const shouldClosePopup = ClassNames.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
        popup.style.display = 'none'
    }
})





/*        
        echo    '<div class="popup-wrapper">';
        echo        '<div class="popup">';
        echo            '<div class="popup-close">x</div>';
        echo        '<div class="popup-content">';


        echo                '<h2>teste do pop-up</h2>';
        echo                '<p>Os testes devem ser parciais</p>';
        echo        '<a  class="popup-link"href="#"> etc!!!</a>';
        

        echo "<a href=\"jogos.php\">VOLTAR</a>"; 
        echo    '</div>';
        echo'</div>';
        echo'</div>';
*/