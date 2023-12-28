const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 200)
});

// animation on h4 


const animatedH4 = document.getElementById('animatedH4');
    let colorIndex = 0;
    const colors = ['rgb(27, 178, 243)', 'red'];

    function applyAnimation() {
      animatedH4.style.transform = 'scale(1.2) rotate(5deg)';
      animatedH4.style.opacity = '0';
      animatedH4.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
      setTimeout(() => {
        animatedH4.style.transform = 'scale(1) rotate(0deg)';
        animatedH4.style.opacity = '1';
      }, 500);
    }

    setInterval(applyAnimation, 1550); 


   // menu section icon 

   let menu =document.querySelector('#menu-icon');
   let navlist =document.querySelector('.navlist');

   menu.onclick = () => {
     menu.classList.toggle('bx-x');
     navlist.classList.toggle('open');
   };

   window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
  }; 

// on form
document.getElementById('sendButton').addEventListener('click', function (event) {
  event.preventDefault();

  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;

  // Send email using mailto
  const mailtoLink = `mailto:ingabiremarieaimee6@gmail.com?subject=Message from ${name}&body=${message}%0A%0AReply to: ${email}`;
  window.location.href = mailtoLink;
});



// form animation
const form = document.getElementById('messageForm');
form.style.animation = 'colorCycle 5s linear infinite'; // 5s duration for the animation




