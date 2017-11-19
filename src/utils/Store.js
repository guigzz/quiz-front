const storage = window.localStorage

class Store {

  constructor(storeId) {
    console.log("init local storage")
    const initState = this.get()
    if(!initState) {
      this.clear();
    }
  }

  set(data) {
    console.log("setting in local storage :", data);
    storage.setItem(this.storeId, JSON.stringify(data))
  }

  get() {
    const rawData = storage.getItem(this.storeId)
    const data = JSON.parse(rawData)
    console.log("getting from local storage :", data)
    return data
  }

  clear() {
    this.set({
      username: ""
    })
  }
}

export default Store