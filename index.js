const faqs = document.querySelectorAll('.content__question')

faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active")
    })
})