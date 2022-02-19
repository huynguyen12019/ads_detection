chrome.extension.onMessage.addListener(function (request) {
  console.log(request);
  switch (request.type) {
    case "save-img":
      saveToLocalStorage(request.data);
      break;
  }
});
const saveToLocalStorage = function (data) {
  localStorage.data = JSON.stringify(data);
};
