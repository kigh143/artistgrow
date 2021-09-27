const baseURL = "https://artist-grow-backend.herokuapp.com";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

export const api = {
  registerUser(user) {
    requestOptions['body'] = JSON.stringify(user);
    return fetch(`${baseURL}/api/v1/users/signup`, requestOptions).then( res => res.json());
  },
  loginUser(user) {
    return fetch(`${baseURL}/api/v1/users/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then( res => res.json());
  },

  addProject(project) {
    return fetch(`${baseURL}/api/v1/artist/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    }).then( res => res.json());
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
    }).then( res => res.json());
  },

  getAllArtists() {
    return fetch(`${baseURL}/api/v1/users/artist/all`);
  },

  getUserById(user_id) {
    return fetch(`${baseURL}/api/v1/users/artist/${user_id}`);
  },
};
