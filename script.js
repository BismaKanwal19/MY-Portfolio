let btn3 = document.querySelector(".btn3");
const skillBtn = document.querySelectorAll(".skills-btn")
const furtherSkills = document.querySelectorAll(".further-skills");

btn3.addEventListener("click", ()=>{
    window.open("Bisma_Kanwal_CV.pdf", "_blank")
    //  const link = document.createElement("a")
    //  link.href = "Bisma_Kanwal_CV.pdf";
    //  link.download = "Bisma_Kanwal_CV.pdf";
    //  link.click();
})
skillBtn.forEach((btn, idx)=>{
    btn.addEventListener("click", ()=>{
        furtherSkills.forEach((ctn)=>{
            ctn.classList.remove("active")
        });
        furtherSkills[idx].classList.add("active")
    })
})