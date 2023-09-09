const commentFormHandler = async (event) => {
  event.preventDefault();
  const postId = document.querySelector('input[name="comment"]').value;
  // Collect values from the comment textarea
  const commentText = document.querySelector('.form-input').value;
  if (commentText) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/comments/${postId}`, {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentText,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('unable to comment');
    }
  }
};
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);