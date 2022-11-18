document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".ball-container");

  console.log(main, "test 1");

  main.style.width = "1400px";
  main.style.height = "575px";
  main.style.backgroundColor = "#566548";

  const ball = document.createElement("div");
  const ballObject = { x: 55, y: 0, w: 50, h: 50, dx: 4, dy: 4 };

  ball.style.backgroundColor = "#e5e771";
  ball.style.borderRadius = "50%";
  ball.style.width = `${ballObject.w}px`;
  ball.style.height = `${ballObject.h}px`;

  ball.style.position = "relative";
  ball.style.left = `${ballObject.x}px`;
  ball.style.top = `${ballObject.y}px`;

  main.prepend(ball);

  const animateBall = () => {
    if (ballObject.x > 1375 - ballObject.w || ballObject.x < 0) {
      ballObject.dx *= -1;
    }

    if (ballObject.y > 575 - ballObject.h || ballObject.y < 0) {
      ballObject.dy *= -1;
    }

    ballObject.x += ballObject.dx;
    ballObject.y += ballObject.dy;

    ball.style.left = `${ballObject.x}px`;
    ball.style.top = `${ballObject.y}px`;

    requestAnimationFrame(animateBall);
  };

  animateBall();
});
