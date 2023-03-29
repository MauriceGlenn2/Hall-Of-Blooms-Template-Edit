//Template ID template_ivhy4qi
//service ID service_d087sxt
//public key cmoJvDUK808Fy3WFe

function contact(event) {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_d087sxt",
      "template_ivhy4qi",
      event.target,
      "cmoJvDUK808Fy3WFe"
    )
    .then(() => {
      console.log("this worked");

      // Clear the form
      event.target.reset();

      // Show the modal and blur the background
      const modalContainer = document.getElementById("modal-container");
      modalContainer.style.display = "flex";

      const blurredContent = document.querySelector(".contact__container");
      blurredContent.classList.add("blur-background");

      // Remove the modal and unblur the background after 3 seconds
      setTimeout(() => {
        modalContainer.style.display = "none";
        blurredContent.classList.remove("blur-background");
      }, 6000);
    });
}

const modalContainer = document.createElement("div");
modalContainer.classList.add("modal-container");

const img = document.createElement("img");
img.src = "./img/thankyou.png";
img.classList.add("thankyou__img");

modalContainer.appendChild(img);
document.body.appendChild(modalContainer);


