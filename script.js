let input =document.querySelectorAll('input');
// console.log(input);
let select = document.querySelectorAll('select');
// console.log(select);
let btn = document.getElementsByClassName('btn');
// console.log(btn);

let val;

input[0].addEventListener('change',(e)=>{
  localStorage.setItem('name',e.target.value);
});


input[1].addEventListener('change',(e)=>{
  localStorage.setItem('email',e.target.value);
});

input[2].addEventListener('change',(e)=>{
  localStorage.setItem('phone',e.target.value);
});

input[3].addEventListener('change',(e)=>{
  localStorage.setItem('age',e.target.value);
});

input[4].addEventListener('change',(e)=>{
  localStorage.setItem('weight',e.target.value);
});

select[0].addEventListener('change',(e)=>{
  localStorage.setItem('medical',e.target.value);
})

input[5].addEventListener('change',(e)=>{
  localStorage.setItem('city',e.target.value);
});

input[6].addEventListener('change',(e)=>{
  localStorage.setItem('state',e.target.value);
});

input[7].addEventListener('change',(e)=>{
  localStorage.setItem('pincode',e.target.value);
});

input[8].addEventListener('change',(e)=>{
  localStorage.setItem('country',e.target.value);
});

input[9].addEventListener('change',(e)=>{
  localStorage.setItem('eName',e.target.value);
});

input[10].addEventListener('change',(e)=>{
  localStorage.setItem('ePhone',e.target.value);
});

input[11].addEventListener('change',(e)=>{
  localStorage.setItem('eEmail',e.target.value);
});

select[1].addEventListener('change',(e)=>{
  localStorage.setItem('location',e.target.value);
})

select[2].addEventListener('change',(e)=>{
  localStorage.setItem('activity',e.target.value);
})

select[3].addEventListener('change',(e)=>{
  localStorage.setItem('camera',e.target.value);
});

let url = 'https://script.google.com/macros/s/AKfycbybFcSJl08HHC-_7TlmB4tZ47fK3o4_FsaIPxZdNC6IApo5oxbJyi21GLRNv9bkcnMa/exec';

let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent the default form submission

  const formData = new FormData(event.target);

  // Convert the form data to a JSON object
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Send the data to the Google Apps Script endpoint (using fetch)
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  // Specify the content type
    },
    body: JSON.stringify(formDataObject)  // Send the data as JSON
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the response here (you can redirect or show a success message)
    console.log('Success:', data);
    window.location.href = './form.html'; // Redirect to the form page after success
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an issue with submitting the form. Please try again later.');
  });

});




// btn[0].addEventListener('click',()=>{
//   btn[0].remove();
//   let clear = document.createElement('a');
//   clear.href = './form.html';
//   clear.target = '_blank';
//   clear.innerHTML = 'Next';
//   document.querySelector('.registrationForm').appendChild(clear);
// })









