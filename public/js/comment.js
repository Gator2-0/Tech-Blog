const commentFormHandler =async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-text').value.trim();
  let url = document.location.href;
  const blog_id = url.substring(url.lastIndexOf('/') + 1);
  

  if(comment){
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ comment, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    
    if (response.ok) {
      // If successful, refresh page.
      window.location.reload();
    } else {
      alert(response.statusText);
    }

  }
}




document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);