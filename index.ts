let user = "Guest";

function greet(fn: (a: string) => void) {
  fn("Welcome " + user);
}

function alert(s: string) {
  console.log(s);
}

greet(alert);
