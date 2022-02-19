// window.onload = function () {
//   var button = document.createElement("button");
//   console.log("Loaded javascript");
//   button.innerHTML = "Add to playlist";
//   document.body.prepend(button);
//   button.addEventListener("click", function () {
//     var link = window.location.href;
//     var name = document
//       .querySelector(".name_title")
//       .getElementsByTagName("h1")[0].textContent;

//     chrome.extension.sendMessage({
//       type: "add-song",
//       data: { link, name },
//     });
//   });

// function capture() {
//   return html2canvas(document.body)
//     .then((canvas) => {
//       var c = document.getElementById("cap-img-canvas").getContext("2d");
//       c.drawImage(canvas, 0, 0);
//       return canvas.toDataURL("image/png");
//     })
//     .catch((err) => {
//       alert("Error occured!");
//       console.log(err);
//     });
// }
// console.log(capture());
// };

// console.log("demo");
