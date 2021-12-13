console.log("start");
let sectionContainer = document.getElementById("container");

let input = document.getElementById("subreddit");
let jsonLink = input.value;

window.open(jsonLink, '_blank');


const clearInput = () => {
    const input = document.getElementById("subreddit");
    input.value = "";
};
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

const displayJsonLink = (e) => {
    e.preventDefault()
    console.log("hi");

    let input = document.getElementById("subreddit");
    let jsonLink = input.value;
    console.log(jsonLink);
  

    fetch(jsonLink)
      .then((res) => res.json())
      .then((data) => {
        let target = data.data.children;
        console.log(target);
        for (let i = 2; i <=12 - 1; i++) {
          let image = data.data.children[i].data.thumbnail;
          let title = data.data.children[i].data.title;
          let link = data.data.children[i].data.permalink;
          let titleText = document.createTextNode(title);
          let header = document.createElement("h1");
          let header2 = document.createElement("h2");
          header.appendChild(titleText);
          header2.append(link);
          header2.innerText = "https://www.reddit.com/" + link
          let postItem = document.createElement("div");
          let postImage = document.createElement("img");
          postImage.setAttribute("src", image);
          postItem.appendChild(postImage);
          console.log(postItem);
          sectionContainer.append(postItem);
          postItem.append(header);
          postItem.append(header2);
          postItem.id = postItem
        }
      });
};

let search = document.getElementById("search");
search.addEventListener("click", displayJsonLink);







//   let formDiv = document.getElementsByClassName("formDiv");
//   let form = document.getElementById("example");
//   function formSubmit (e) {
//       console.log("hi");
//       formDiv.append(form)
//       console.log("hi");
//   }

//   theForm.addEventListener('submit', formSubmit)
// let formDiv = document.getElementsByClassName("formDiv");
// let form = document.getElementById("example");
// formDiv.append(form)