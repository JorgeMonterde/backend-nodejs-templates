let contactForm = document.querySelector("#contact_form");
if(contactForm){
    contactForm.addEventListener("submit", (event) => {
        let article = document.querySelector("article");
        article.innerHTML = `<h3>Thank you</h3><img src="/images/eberhard-grossgasteiger-iRD7PmG4Ygk-unsplash.jpg">`;
    })
}
