let body = document.body;
// console.log(body);
let pdfBtn = document.querySelector('#save');
console.log(pdfBtn);
let a = document.getElementsByClassName('t');
// console.log(a);
let input =document.querySelectorAll('input');
let select = document.querySelectorAll('select');
let backBtn = document.getElementsByClassName('previous');
// console.log(backBtn);
const canvas = document.querySelector('canvas');
const form = document.querySelector('.signature-pad-form');
const clearButton = document.querySelector('.clear-button');
const submitButton = document.querySelector('.submit-button');
const ctx = canvas.getContext('2d');
let writingMode = false;
let date = new Date();

// console.log(date);

a[0].innerHTML = localStorage.getItem('activity');
a[1].innerHTML = localStorage.getItem('location');
a[2].innerHTML = localStorage.getItem('name');
a[3].innerHTML = localStorage.getItem('activity');
a[4].innerHTML = localStorage.getItem('location');
a[5].innerHTML = localStorage.getItem('activity');
a[6].innerHTML = localStorage.getItem('location');
a[7].innerHTML = localStorage.getItem('activity');
a[8].innerHTML = localStorage.getItem('location');
a[9].innerHTML = localStorage.getItem('activity');
a[10].innerHTML = localStorage.getItem('location');
a[11].innerHTML = localStorage.getItem('activity');
a[12].innerHTML = localStorage.getItem('location');
a[13].innerHTML = localStorage.getItem('location');



a[14].innerHTML = date;


input[1].value = localStorage.getItem('name');

  
  input[2].value = localStorage.getItem('email');
  
  input[3].value = localStorage.getItem('phone')
  
  input[4].value = localStorage.getItem('age');
  
  input[5].value = localStorage.getItem('weight');
  
  select[0].value = localStorage.getItem('medical')

  input[6].value = localStorage.getItem('city')
  
  input[7].value = localStorage.getItem('state')
  
  input[8].value = localStorage.getItem('pincode')
  
  input[9].value = localStorage.getItem('country')

  input[10].value = localStorage.getItem('eName')
  
  input[11].value = localStorage.getItem('ePhone')
  
  input[12].value = localStorage.getItem('eEmail')



form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const imagUrl = canvas.toDataURL();
  const img = document.createElement('img');
  img.src = imagUrl;
  img.height = canvas.height;
  img.width = canvas.width;
  img.style.display = 'block';
  form.appendChild(img);
  clearpad();
  canvas.remove();
  clearButton.remove();
  submitButton.remove();
})

const clearpad = ()=>{
  ctx.clearRect(0,0, canvas.width, canvas.height);
}

clearButton.addEventListener('click',(e)=>{
  e.preventDefault();
  clearpad();
})

const getTargetPosition = (e)=>{
  positionX = e.clientX - e.target.getBoundingClientRect().x;
  positionY = e.clientY - e.target.getBoundingClientRect().y;

  return [positionX, positionY];
}

const handlePointerMove = (e)=>{
  if(!writingMode) return

  const [positionX, positionY] = getTargetPosition(e);
  ctx.lineTo(positionX, positionY);
  ctx.stroke();
}

const handlePointerUp = ()=>{
  writingMode = false;
}

const handlePointerDown = (e)=>{
  writingMode = true;
  ctx.beginPath();

  const [positionX, positionY] = getTargetPosition(e);
  ctx.moveTo(positionX, positionY);
}

ctx.lineWidth = 3;
ctx.lineJoin = ctx.lineCap = 'round';

canvas.addEventListener('pointerdown',handlePointerDown, {passive: true});
canvas.addEventListener('pointerup',handlePointerUp, {passive: true});
canvas.addEventListener('pointermove',handlePointerMove, {passive: true});

pdfBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  // console.log(window);
  // const pdf = document.querySelector('#pdf');
  var opt = {
    margin:       0,
    filename:     `${input[1].value}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(body).set(opt).save();
  localStorage.clear();
  pdfBtn.remove();
  let b = document.createElement('a');
  b.href = "https://script.google.com/macros/s/AKfycbz_CnQJI8AdUu5jAsKoz9hK6wOCX5bevXQS1NB-YcH917M4cU_zR4seEGTnUQuNIlb_OQ/exec";
  b.target = "_blank";
  b.innerHTML = "Submit";
  b.classList.add('myStyle');
  document.querySelector('#target').appendChild(b);
});

// Handle image preview on file selection
document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const preview = document.getElementById('preview');

  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      preview.src = e.target.result;  // Display image preview
      preview.style.display = 'block';
    };
    
    reader.readAsDataURL(file);  // Read file as data URL for preview
  } else {
    preview.style.display = 'none';  // Hide preview if no file is selected
  }
});

// Clear image preview function
function clearImage() {
  document.getElementById('fileInput').value = "";  // Reset file input
  const preview = document.getElementById('preview');
  preview.src = "";
  preview.style.display = 'none';
}

function goBack(){
  history.back();
}
