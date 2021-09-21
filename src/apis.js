const baseURL = "https://artist-grow-backend.herokuapp.com";
export const api = {
  registerUser() {
    const user = {
      fullName: "string",
      email: "user@example.com",
      password: "string",
      confirm_password: "string",
      user_type: "fan",
    };
    return fetch(`${baseURL}/api/v1/users/signup`, {
      method: "post",
      body: user,
    });
  },
  loginUser() {
    const user = {
      fullName: "string",
      email: "user@example.com",
      password: "string",
      confirm_password: "string",
      user_type: "fan",
    };
    return fetch(`${baseURL}/api/v1/users/login`, {
      method: "post",
      body: user,
    });
  },

  addProject() {
    const project = {
      fullName: "string",
      email: "user@example.com",
      password: "string",
      confirm_password: "string",
      user_type: "fan",
    };
    return fetch(`${baseURL}/api/v1/artist/register`, {
      method: "post",
      body: project,
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

  editProfile(id) {
    const user = {
      id: "string",
      profile_pic: "user@example.com",
      gender: "string",
      spotify_link: "string",
    };
    return fetch(`${baseURL}//api/v1/users/artist/update/${id}`, {
      method: "put",
      body: user,
    });
  },

  getAllArtists() {
    return fetch(`${baseURL}/api/v1/users/artist/all`);
  },

  getUserById(user_id) {
    return fetch(`${baseURL}/api/v1/users/artist/${user_id}`);
  },
};
