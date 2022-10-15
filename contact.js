const scriptURL =
  'https://script.google.com/macros/s/AKfycbwSs19PWG7DVkaWbI3zU5lLXi9jCHYYjceSbObC5Ee44Dyrea3TOzb2UzlVQiUUS5QH/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
const button = document.getElementById('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  button.innerHTML = 'Sending...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      button.innerHTML = 'Submit';
      msg.innerHTML = 'I have got your message. Will get back to you ASAP!';
      setTimeout(() => {
        msg.innerHTML = '';
      }, 6000);

      for (let input = 0; input < form.length; input++) {
        form[input].value = '';
      }
    })
    .catch((error) => console.error('Error!', error.message));
});
