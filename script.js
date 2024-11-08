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

let url = 'https://script.google.com/macros/s/AKfycbxYUKdI_UJurr5kQyKH0-U4kgsBjgSlLuyyvLAsnA6mSKfmwbM80M_Wz-GRY3qq7O6S/exec';

let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent the default form submission

  const formData = new FormData(event.target);

  // Convert the form data to an object
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Send data to Google Apps Script using fetch
  fetch(url, {
    method: 'POST',
    body: new URLSearchParams(formDataObject), // Send data as URLSearchParams
  })
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    if (data.message === 'Data Saved Successfully') {
      // If the data was saved successfully, redirect to form.html
      window.location.href = './form.html';
    } else {
      // If the response indicates an error
      alert('There was an issue with submitting the form. Please try again later.');
    }
  })
  .catch(error => {
    // Catch any errors that occur during the fetch
    console.error('Error submitting form:', error);
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









