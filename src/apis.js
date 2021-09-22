const baseURL = "https://artist-grow-backend.herokuapp.com";
export const api = {
  registerUser(user) {
    return fetch(`${baseURL}/api/v1/users/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },
  loginUser(user) {
    return fetch(`${baseURL}/api/v1/users/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },

  addProject(project) {
    return fetch(`${baseURL}/api/v1/artist/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
  },
  getAllProjects() {
    return fetch(`${baseURL}/api/v1/users/projects/artist/all`);
  },

  getAProjectById(userId) {
    return fetch(
      `${baseURL}/api/v1/users/projects/{projectId}/artist/${userId}`
    );
  },

  editProfile(user, id) {
    return fetch(`${baseURL}//api/v1/users/artist/update/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },

  getAllArtists() {
    return fetch(`${baseURL}/api/v1/users/artist/all`);
  },

  getUserById(user_id) {
    return fetch(`${baseURL}/api/v1/users/artist/${user_id}`);
  },
};
