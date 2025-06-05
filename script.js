async function fetchUsers() {
  const userContainer = document.getElementById('users');
  const errorElement = document.getElementById('error');

  userContainer.innerHTML = '';
  errorElement.textContent = '';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users = await response.json();

    users.forEach(user => {
      const div = document.createElement('div');
      div.classList.add('user');
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(div);
    });
  } catch (error) {
    errorElement.textContent = 'Failed to fetch user data. Please check your internet connection.';
    console.error('Error fetching users:', error);
  }
}

// Initial load
window.onload = fetchUsers;
