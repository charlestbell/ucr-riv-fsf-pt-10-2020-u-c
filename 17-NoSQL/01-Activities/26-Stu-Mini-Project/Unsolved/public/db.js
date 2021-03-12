let db;
// create a new db request for a "budget" database.
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function ({ target }) {
  // create object store called "pending" and set autoIncrement to true
  const db = target.result;
  const objectStore = db.createObjectStore("budget", {
    keypath: "id",
    autoincrement: true,
  });
};

request.onsuccess = function (event) {
  db = event.target.result;
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event);
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  // access your pending object store
  const transaction = db.transaction(["budget"], "readwrite");
  const toDoListStore = transaction.objectStore("budget");
  // add record to your store with add method.
  budget.add(record);
}

function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["budget"], "readwrite");
  // access your pending object store
  const budgetStore = transaction.objectStore("budget");
  // get all records from store and set to a variable
  const getAll = budgetStore.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          const transaction = db.transaction(["budget"], "readwrite");
          // access your pending object store
          const budgetStore = transaction.objectStore("budget");
          // clear all items in your store
          budgetStore.clear();
        });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
