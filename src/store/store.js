const KEY = "artist_grow";

export const storeService = {
  save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  },
  get() {
    const result = localStorage.getItem(KEY);
    if(result!== null ) {
      return JSON.parse(result);
    }else{
      return null;
    }
  },
  delete() {
    localStorage.clear();
  },
};
