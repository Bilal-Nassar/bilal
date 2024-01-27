
const formEl=document.querySelector("#form");
const email=document.querySelector("#email")
const password=document.querySelector("#password");


formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
      checkInputs()
})


 const checkInputs=()=>{
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
   
    if(!emailValue){
        
        setErrFor(email,"Email cannot be blank");
        
    }
    else if(!isEmail(emailValue)) {
        
        setErrFor(email, 'Email is not valid');
      } else {
        
        setSuccessFor(email);
      }


      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      if(!passwordValue) {
       
        setErrFor(password, 'Password cannot be blank');
      } else if(passwordValue.length < 8){
        setErrFor(password, 'Password to short');
      } else if(!passwordValue.match(re)){
        setErrFor(password, 'it have to contains a upper, lower and a number');
      } else {
        setSuccessFor(password);
      }
     

      

 }


 const setErrFor=(input,msg)=>{
      const  formctr=input.parentElement;
      const small=formctr.querySelector("small");
      const wrong=formctr.querySelector(".fa-circle-xmark");
      const check=formctr.querySelector(".fa-circle-check");

      small.innerText=msg;
      small.classList.remove("hidden")
      input.classList.remove("border-slate-400")
      input.classList.add("border-red-500")
      wrong.classList.remove("invisible")
      check.classList.add("invisible")


      
 }

 const setSuccessFor=(input)=>{
     
    const  formctr=input.parentElement;
    const small=formctr.querySelector("small");
    const check=formctr.querySelector(".fa-circle-check");
    const wrong=formctr.querySelector(".fa-circle-xmark");
    small.classList.add("hidden")
    check.classList.remove("invisible")
    wrong.classList.add("invisible")
    input.classList.remove("border-red-500")
    input.classList.add("border-green-500")
 }


 const isEmail = (email) => {  
    
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      
  }
