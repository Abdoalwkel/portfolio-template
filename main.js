



// هنا لما بتعمل سكرول منبداية الصفحة الناف بدل مبيكون  شفاف بيبقى بنفس لون الخلفية  (1)

// هنا لما يعمل سكرول ع السكشن يعمل فوكس على اللينك بتاعه ف الناف بار   (2)

// هنا لما تدوس على البار 3 شرطات يظهرلك القائمة ال فيها اللينكات وتتحول لعلامة اكس (3)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
// (3)

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
// (2)


window.onscroll = () => {

    //   (2)   هنا لما يعمل سكرول ع السكشن يعمل فوكس على اللينك بتاعه ف الناف بار 

    section.forEach( sec => {

        let top = window . scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(links => {


                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
// هنا كود علشان نطبق الانيميشن للسكاشن لما تسكرول ف الصفحة 
// بحيث ان الكلاس show-animateينتقل لكل سكشن لما تعمل سكرول عليه وتوصله 
sec.classList.add('show-animate');

        }
else{
    sec.classList.remove('show-animate');


}
    })


// (2)  


// هنا لما بتعمل سكرول منبداية الصفحة الناف بدل مبيكون  شفاف بيبقى بنفس لون الخلفية  (1)


let header = document.querySelector('header')

header.classList.toggle('sticky', window.scrollY > 100);   
// (1)





menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
// هنا لما تدوس على لينك من البار ف وضع التابلت يختفى القائمة ومتفضلش ظاهرة      (4)



}