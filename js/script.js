let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// smtp js area started
function sendmail(){
    
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var number = $('#Number').val();
var message = $('#Message').val();

   
    var Body='Name: '+name+'<br>Email: '+email+'<br>Number: '+number+'<br>Message: '+message;
    

    Email.send({
SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'official00980@gmail.com',
        From: "theislam00980@gmail.com",
        Subject: "New message on contact from "+name,
        Body: Body
    }).then(
        message =>{
            console.log (message);
            if(message=='OK'){
            alert('Your Message has been send. Thank you for connecting.');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );



}