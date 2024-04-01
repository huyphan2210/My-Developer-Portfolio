export default class Utilities {
  static isTopOfElementInView(el: Element) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
