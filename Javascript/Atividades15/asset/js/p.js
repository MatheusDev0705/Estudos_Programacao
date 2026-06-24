const para = document.getElementById('para');
const ps = para.querySelectorAll ('p');
const estilosBody = getComputedStyle(document.body);
const CorBody = estilosBody.backgroundColor;

for (let v of ps) {
     v.style.backgroundColor = CorBody
     v.style.color = 'whitesmoke'
}