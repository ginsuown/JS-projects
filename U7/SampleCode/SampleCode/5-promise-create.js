let isMomHappy = true;

let getNewPhone = new Promise(function(resolve, reject) {
  if (isMomHappy) {
    let phone = {
      brand: "iPhone",
      color: "white"
    };
    resolve(phone);
  } else {
    reject(new Error("mom is not happy"));
  }
});

getNewPhone.then(
  fulfilled => console.log(fulfilled),
  error => console.log(error.message)
);
