export default function (instance) {
  const html = document.documentElement;
  let left = html.offsetLeft, top = html.offsetTop;

  while (instance) {
    left += instance.offsetLeft;
    top += instance.offsetTop;

    instance = instance.offsetParent;
  }

  return { left, top };
}