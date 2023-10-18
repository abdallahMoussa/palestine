window.onload = () => {
  let input = document.querySelector("#input");
  let output = document.querySelector("#output");
  let btn = document.querySelector("#btn");
  let copyBtn = document.querySelector("#copy");

  const trans = () => {
    let text = input.value;
    let outputText = "";
    for (let i = 0; i < text.length; i++) {
      switch (text[i]) {
        case "ب":
        case "ت":
        case "ث":
          outputText += "ٮ";
          break;
        case "ن":
          if (i + 1 < text.length) {
            outputText += "ٮ";
          } else {
            outputText += "ں";
          }
          break;
        case "ي":
          if (text.length - 1 == 0) {
            outputText += "ٮ";
          } else {
            outputText += "ى";
          }
          break;
        case "ج":
        case "خ":
          outputText += "ح";
          break;
        case "ذ":
          outputText += "د";
          break;
        case "ز":
          outputText += "ر";
          break;
        case "ش":
          outputText += "س";
          break;
        case "ض":
          outputText += "ص";
          break;
        case "ة":
          outputText += "ه";
          break;
        case "ظ":
          outputText += "ط";
          break;
        case "غ":
          outputText += "ع";
          break;
        case "ف":
        case "ق":
          outputText += "ٯ";
          break;
        default:
          outputText += text[i];
      }
    }
    output.innerHTML = outputText;
  };
  const copy = () => {
    output.select();
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(output.value)

        .catch((err) => {});
    } else {
      console.error("Clipboard API not available in this browser.");
    }
  };

  btn.addEventListener("click", () => {
    trans();
  });

  btn.onclick = () => trans();
  copyBtn.onclick = () => copy();
};
