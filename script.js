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

const url = 'https://script.google.com/macros/s/AKfycbwWFTJT7IvxA6iARfGPKhGULdiqwoW785xfhP8ymAFBAjAX0x-Q6ed9I5tLNxd_52ykAA/exec'; // Correct URL
const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent form's default submission

  const data = {
    clientName: form.clientName.value,
    clientEmail: form.clientEmail.value,
    clientPhone: form.clientPhone.value,
    clientAge: form.clientAge.value,
    clientWeight: form.clientWeight.value,
    clientMedicalCondition: form.clientMedicalCondition.value,
    clientCity: form.clientCity.value,
    clientState: form.clientState.value,
    clientPincode: form.clientPincode.value,
    clientCountry: form.clientCountry.value,
    clientEname: form.clientEname.value,
    clientEnumber: form.clientEnumber.value,
    clientEemail: form.clientEemail.value,
    clientLocation: form.clientLocation.value,
    clientActivity: form.clientActivity.value,
    clientCamera: form.clientCamera.value
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Handle the response as JSON
    if (!response.ok) {
      console.error("Server error:", response.status);
    } else {
      const result = await response.json(); // Now we can safely parse the JSON
      console.log(result.message); // Log success message from the response
      window.location.href = './form.html'; // Redirect to form.html after successful submission
    }
  } catch (error) {
    console.error("Network or Server error:", error);
  }
});

// btn[0].addEventListener('click',()=>{
//   btn[0].remove();
//   let clear = document.createElement('a');
//   clear.href = './form.html';
//   clear.target = '_blank';
//   clear.innerHTML = 'Next';
//   document.querySelector('.registrationForm').appendChild(clear);
// })









