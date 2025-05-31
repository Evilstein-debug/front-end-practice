const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "Enjoy the ride!";
sect.appendChild(para);
const text = document.createTextNode(
    " - the premier source of web development knowledge"
);
const linkPara = document.querySelector("p")
linkPara.appendChild(text);
// sect.appendChild(linkPara);