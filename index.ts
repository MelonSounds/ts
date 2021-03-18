var user = "Guest";

function greet(fn: (a: string) => void) => {
  fn("Welcome " + user);
}

function alert(s: string) {
  alert(s);
}

greet(alert)
