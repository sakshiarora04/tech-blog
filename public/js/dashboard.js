const addPostHandler = async (event) => {
  event.preventDefault();

  document.location.replace('/dashboard/add');
};

document
  .querySelector('#add-new-post')
  .addEventListener('click', addPostHandler);
