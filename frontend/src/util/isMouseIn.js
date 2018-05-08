export default function (x, y, target) {
  let width = target.offsetWidth,
      height = target.offsetHeight;

  let x0 = document.documentElement.offsetLeft,
      y0 = document.documentElement.offsetTop;

  while (target) {
    x0 += target.offsetLeft;
    y0 += target.offsetTop;

    target = target.offsetParent;
  }

  return x > x0 && y > y0 && x < x0 + width && y < y0 + height;
}