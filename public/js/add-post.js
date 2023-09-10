const newFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the add post form
  const title = document.querySelector('#post-name').value.trim();
  const content = document.querySelector('#post-desc').value.trim();
  // sending title and content
  if (title && content) {
    const response = await fetch('/api/add-post', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
