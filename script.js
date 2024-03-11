document.addEventListener('DOMContentLoaded', domReady);

let nodeList = document.querySelectorAll(".b-dics");
// nodeList = document.querySelectorAll(".b-dics");
// console.log(nodeList);
function domReady() {

  for (let i = 0; i < nodeList.length; i++) {
      new Dics({
          container: document.querySelectorAll('.b-dics')[i],
          textPosition: 'top'
      });
  }
}


