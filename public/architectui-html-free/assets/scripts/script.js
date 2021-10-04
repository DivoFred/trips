const locate = document.querySelector("#location");
const destination = document.querySelector("#destination");
const btn = document.querySelector("#btn-modal");
const centerr = document.querySelector(".center");
const bookTripId = localStorage.getItem("id");
const diii = document.querySelector(".dii");

axios
  .post("/trip/gettrip", {
    id: bookTripId,
  })
  .then((res) => {
    // const newArry = [1, 2, 3, 4, 5, 6];
    // let sum = 0;
    // newArry.forEach((e) => {
    //   sum += e;
    // });
    // console.log(sum),
    diii.textContent = res.data.message;
    let mydata = res.data.trips.map((e) => {
      const li = document.createElement("li");
      li.textContent = `location: ${e.location}; destination: ${e.destination}`;
      centerr.appendChild(li);
      return e;
    });

    console.log(mydata);
    console.log(centerr);

    // centerr.textContent = "hell";
    const mess = `
      ${res.data.message} <br> 
      ${res.data.trips}
      `;
    // centerr.innerHTML = mess;
  })
  .catch((err) => {
    console.log(err.message);
  });

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (locate.value && destination.value) {
    let change = locate.value.toLowerCase();
    let change2 = destination.value.toLowerCase();
    axios
      .post("/trip/booktrip", {
        id: bookTripId,
        location: change,
        destination: change2,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "./mad.html";
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    // display.innerHTML = "Fill up The shit";
    // setTimeout(() => (display.innerHTML = ""), 1000);
  }
});
