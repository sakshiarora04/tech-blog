const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-name').value.trim();
  const content = document.querySelector('#post-desc').value.trim();
  const postId = window.location.toString().split('/')[5];
  if (title && content) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};
document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
