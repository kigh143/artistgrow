const KEY = "artist_grow";

export const store = {
  store(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  },
  get() {
    const result = localStorage.getItem(KEY);
    return JSON.parse(result);
  },
  delete() {
    localStorage.clear();
  },
};
