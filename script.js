
async function fetchGitHubUserDetails() {
    const username = document.getElementById('username').value;
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error(`User not found: ${response.status}`);
        }

        const data = await response.json();
        
        document.getElementById('Username').textContent = data.login;
        document.getElementById('Name').textContent = data.name || 'N/A';
        document.getElementById('UserId').textContent = data.id;
        document.getElementById('Company').textContent = data.company || 'N/A';
        document.getElementById('Followers').textContent = data.followers;
        document.getElementById('Following').textContent = data.following;
        document.getElementById('error').textContent = ''; // Clear any previous error
    } catch (error) {
        document.getElementById('error').textContent = `Error fetching GitHub user details: ${error.message}`;
    }
}

