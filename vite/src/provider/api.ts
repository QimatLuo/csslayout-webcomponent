export function login(account: string) {
  return (password: string) =>
    new Promise((resolve, reject) =>
      setTimeout(
        () =>
          account && password ? resolve({ token: "token" }) : reject("login"),
        1000
      )
    );
}
