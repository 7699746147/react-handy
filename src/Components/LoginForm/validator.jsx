export function validEmail(email) {
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !emailformat.test(email);
}
export function emailValidator() {
  return {
    required: {
      value: true,
      message: "Email is required",
    },
    validate: {
      validateRexExp: (value) => !validEmail(value) || "Invalid email",
    },
  };
}

export function passwordValidator() {
  return {
    required: {
      value: true,
      message: "Password is required",
    },
  };
}
