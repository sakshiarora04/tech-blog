const editFormHandler = async (event) => {
  event.preventDefault();
  // Collect values
  const title = document.querySelector('#post-name').value.trim();
  const content = document.querySelector('#post-desc').value.trim();
  // get post id by spliting location path
  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  if (title && content) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('post has been updated');
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post. Kindly do some changes');
    }
  }
};
document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
