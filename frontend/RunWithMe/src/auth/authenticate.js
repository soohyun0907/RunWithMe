export default (to, from, next) => {
  if (
    localStorage.getItem("userInfo") != null &&
    localStorage.getItem("userInfo").length > 0
  ) {
    next();
  } else {
    localStorage.removeItem("userInfo");
    next("/app/sessions/signIn");
  }
};
