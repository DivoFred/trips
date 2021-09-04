const display = document.querySelector(".display");
const message2 = document.querySelector(".message2");
const message1 = document.querySelector(".message");
// For Register
const register = document.querySelector(".register-form");
const userRegister = document.querySelector(".user-register");
const passRegister = document.querySelector(".pass-register");

// For Login
const login = document.querySelector(".login-form");
const userLogin = document.querySelector(".user-login");
const passLogin = document.querySelector(".pass-login");

login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userLogin.value && passLogin.value) {
    axios
      .post("/trip/loginUser", {
        user: userLogin.value,
        password: passLogin.value,
      })
      .then((res) => {
        console.log(res);
        //   passLogin.value = "";
        //   userLogin.value = "";
        //   userLogin.focus();
        res.data.user.role === "admin"
          ? (window.location.href = "./architectui-html-free/admin.html")
          : (window.location.href = "./architectui-html-free/index.html");
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
  if (userRegister.value && passRegister.value) {
    axios
      .post("/trip/postUser", {
        user: userRegister.value,
        password: passRegister.value,
      })
      .then((res) => {
        console.log(res);
        passRegister.value = "";
        userRegister.value = "";
        userRegister.focus();
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
  userRegister.focus();
});
message1.addEventListener("click", () => {
  userRegister.focus();
});

$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});
