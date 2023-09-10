const deleteBtnHandler = async (event) => {
  event.preventDefault();
  //  delete user created posts
  if (event.target.hasAttribute('data-id')) {
    // get post id through data attribute
    const id = event.target.getAttribute('data-id');
    // Send a DELETE request to the API endpoint
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('post has been deleted');
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};
document
  .querySelector('#btn-delete')
  .addEventListener('click', deleteBtnHandler);
