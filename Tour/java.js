const contact=document.getElementById("contact");
const result=document.getElementById("contact-result");
const opentag=document.getElementById("bar");
const closetag=document.getElementById("xmark");
const nav=document.getElementById("Nav");

/*contact*/
function on(){


 if(contact){
    result.classList.add("show");
 }

 }
 contact.addEventListener("click",on);

 const icon=document.getElementById("icon");
 function off(){
 if(icon){
    result.classList.remove("show");
 }}
 icon.addEventListener("click",off);
 /*Login*/
const login=document.getElementById("login");
const loginresult=document.getElementById("login-result");
const closetwotag=document.getElementById("icon-two");

function loginopen(){
   if(login){
      loginresult.classList.add("show-two");

   }
}
login.addEventListener("click",loginopen);

function loginclose(){
   if(closetwotag){
      loginresult.classList.remove("show-two");

   }
}
closetwotag.addEventListener("click",loginclose);

const button=document.querySelectorAll(".btn");
 function buttonn(){
   if(button){
      const loginresult=document.getElementById("login-result");
      
      loginresult.classList.remove("show-two");
   }
 }
 button.forEach(n=>n.addEventListener("click",buttonn));

 

/*mobile resposive*/
      function sh(){
         if(opentag){
            nav.classList.add("showup");

         }
      }
      opentag.addEventListener("click",sh);

      function van(){
         if(closetag){
            nav.classList.remove("showup");

         }
      }
      closetag.addEventListener("click",van);


      const total=document.querySelectorAll(".list li");
      function linkaction(){
         const nav=document.getElementById("Nav");
         nav.classList.remove("showup");
      }
      total.forEach((n)=>n.addEventListener("click",linkaction))



//       const Name=document.getElementById("text-input");
//       const email=document.getElementById('email-input');
//       const NameError=document.getElementById('error-name');
//       const EmailError=document.getElementById('email-error');
//       const MobileError=document.getElementById('tel-error');
//       const mobile=document.getElementById('Phone-input');
//       const btn=document.getElementById('button')

//   function  fullName(){
//                 const NameValue=Name.value;
//                 if(NameValue.length===0){
//                     NameError.innerHTML=('Your Name is Not Valid');
//                     btn.disabled=true;
//                     return false;
//                 } else if(!NameValue.match(/^[A-Za-z]{3,}\s{1}[A-Za-z]+$/)){
//                     NameError.innerHTML="Proper First Name and LastName";///Same this character its going to true if the character is different its stayed here
//                     btn.disabled=true;
//                     return false;

//                 }
                
//                 else{
//                     NameError.innerHTML=`<i class='fas fa-check-circle icon'></i>`;
//                     btn.disabled=false;
//                     return true;
//                 }
//             }
//             Name.addEventListener('keyup',fullName)
//             Name.addEventListener('blur',fullName)

//             function  EmailName(){
//                 const EmailValue=email.value;
//                 if(EmailValue.length===0){
//                     EmailError.innerHTML=('Your Email is Not Valid');
//                     btn.disabled=true;
//                     return false;///return a+b example
//                 }else{
//                     EmailError.innerHTML=`<i class='fas fa-check-circle icon'></i>`;
//                     btn.disabled=false;
//                     return true;
//                 }
//             }
//             email.addEventListener('keyup',EmailName)
//             email.addEventListener('blur',EmailName)

/*Opening tag*/

const tan=document.getElementById('open')


function officeOpening(){
const shop={
               name:'Annnu',
               Opening:{
                   thu:{open:12,closed:22},
                   fri:{open:11,closed:23},
                   sat:{open:10,closed:9},
               }
           }
   const days=['sun','mon','tue','wed','thu','fri','sat']
  
  

   
      for(let i=0;i<days.length;i++){
       const open=shop.Opening[days[i]]?.open??'closed'; 
   
       if(shop.Opening.hasOwnProperty(days[i])){
           innerHTML(`open on ${days[i]} at ${open} `)
   
       }else{
           (`closed on ${days[i]}`)
       }
      }
   }
   officeOpening()
   tan.addEventListener('click',officeOpening)

