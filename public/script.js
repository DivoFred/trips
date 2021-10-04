const display = document.querySelector(".display");
const message2 = document.querySelector(".message2");
const message1 = document.querySelector(".message");
const widgetHeading = document.querySelector(".widget-heading");
// For Register
const register = document.querySelector(".register-form");
const userRegister = document.querySelector(".user-register");
const passRegister = document.querySelector(".pass-register");
const nameRegister = document.querySelector(".name-register");

// For Login
const login = document.querySelector(".login-form");
const userLogin = document.querySelector(".user-login");
const passLogin = document.querySelector(".pass-login");

// For Post of Trips

login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userLogin.value && passLogin.value) {
    let change = userLogin.value.toLowerCase();

    axios
      .post("/trip/loginUser", {
        user: change,
        password: passLogin.value,
      })
      .then((res) => {
        console.log(res);
        //   passLogin.value = "";
        //   userLogin.value = "";
        //   userLogin.focus();
        let userID = res.data.user._id;
        localStorage.setItem("id", userID);
        res.data.user.role === "admin"
          ? (window.location.href = "./architectui-html-free/admin.html")
          : (window.location.href = "./architectui-html-free/mad.html");
      })
      .catch((err) => {
        display.innerHTML = err.response.data.message;
        setTimeout(() => (display.innerHTML = ""), 1000);
      });
  } else {
    display.innerHTML = "Fill up The shit";
    setTimeout(() => (display.innerHTML = ""), 1000);
  }
});
register.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userRegister.value && passRegister.value && nameRegister) {
    let change = userRegister.value.toLowerCase();
    axios
      .post("/trip/postUser", {
        name: nameRegister.value,
        user: change,
        password: passRegister.value,
      })
      .then((res) => {
        console.log(res);
        // passRegister.value = "";
        // userRegister.value = "";
        // nameRegister.value = "";
        // nameRegister.focus();
        $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
      })
      .catch((err) => {
        display.innerHTML = err.response.data.message;
        setTimeout(() => (display.innerHTML = ""), 1000);
      });
  } else {
    display.innerHTML = "Fill up The shit";
    setTimeout(() => (display.innerHTML = ""), 1000);
  }
});

message2.addEventListener("click", () => {
  nameRegister.focus();
});
message1.addEventListener("click", () => {
  userLogin.focus();
});

$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});
