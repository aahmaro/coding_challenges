// Link to Question: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  let ascii = word.split("").map(letter => letter.charCodeAt(0) - 97);
  let hieght = 1;

  for (let i = 0; i < ascii.length; i++) {
    if (h[ascii[i]] > hieght) hieght = h[ascii[i]];
  }
  return hieght * word.length;
}
