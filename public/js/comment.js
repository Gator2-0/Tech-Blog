const commentFormHandler =async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-text').ariaValueMax.trim();

  if(comment){
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
}




document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);