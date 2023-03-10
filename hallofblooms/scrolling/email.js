//Template ID template_ivhy4qi
//service ID service_d087sxt
//public key cmoJvDUK808Fy3WFe

function contact(event) {
    event.preventDefault();
    emailjs.sendForm(
      "service_d087sxt",
      "template_ivhy4qi",
      event.target,
      "cmoJvDUK808Fy3WFe"
    ).then(() => {
        console.log("this worked")
    })
}