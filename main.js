var btnMonday = document.querySelector('.monday')
var btnTuesday = document.querySelector('.tuesday')
var btnWednesday = document.querySelector('.wednesday')
var btnThursday = document.querySelector('.thursday')
var btnFriday = document.querySelector('.friday')

var monday = document.getElementById("monday")
var tuesday = document.getElementById('tuesday')
var wednesday = document.getElementById('wednesday')
var thursday = document.getElementById('thursday')
var friday = document.getElementById('friday')

btnMonday.addEventListener('click', function (){
   
    show_hide(monday.id)
    
})


btnTuesday.addEventListener('click', function (){
   
    show_hide(tuesday.id)
    
})

btnWednesday.addEventListener('click', function (){
   
    show_hide(wednesday.id)
    
})

btnThursday.addEventListener('click', function (){
   
    show_hide(thursday.id)
    
})

btnFriday.addEventListener('click', function (){
   
    show_hide(friday.id)
    
})


function show_hide(dayId){
    switch(dayId){
    case 'monday':
        monday.style.display = 'block';
        thursday.style.display = 'none';
        wednesday.style.display = 'none';
        tuesday.style.display = 'none';
        friday.style.display = 'none';
        break;
    
        case 'tuesday':
                monday.style.display = 'none';
                tuesday.style.display = 'block';
                wednesday.style.display = 'none';
                thursday.style.display = 'none';
                friday.style.display = 'none';
                break;

                case 'wednesday':
                        monday.style.display = 'none';
                        tuesday.style.display = 'none';
                        wednesday.style.display = 'block';
                        thursday.style.display = 'none';
                        friday.style.display = 'none';
                        break;

                        case 'thursday':
                                monday.style.display = 'none';
                                tuesday.style.display = 'none';
                                wednesday.style.display = 'none';
                                thursday.style.display = 'block';
                                friday.style.display = 'none';
                                break;

                                case 'friday':
                                        monday.style.display = 'none';
                                        tuesday.style.display = 'none';
                                        wednesday.style.display = 'none';
                                        thursday.style.display = 'none';
                                        friday.style.display = 'block';
                                        break;
    }

    
}



