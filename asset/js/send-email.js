
const form= document.querySelector("form");
const button= document.querySelector("#submit");
form.addEventListener("submit",function(event){
    event.preventDefault()

let mail={ 
 name :form.querySelector("#name").textContent,
 email :form.querySelector("#email").textContent,
 object:form.querySelector("#object").textContent,
 message:form.querySelector("#textarea").textContent,
};

emailjs.send("service_30tej4x", "template_imop7pe", mail, "v8ZH_DvxkGKdhTTVh");




});




function send(parametri){
    emailjs.send(service_30tej4x, template_imop7pe, templateParams, v8ZH_DvxkGKdhTTVh);
   
       }