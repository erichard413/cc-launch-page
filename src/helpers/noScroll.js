export default function noScroll(bool) {
  const rootDiv = document.getElementById("root");
  if (bool) {
    rootDiv.classList.add("Modal-noScroll");
  } else {
    rootDiv.classList.remove("Modal-noScroll");
  }
}
