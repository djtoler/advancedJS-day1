console.log("start");
let sectionContainer = document.getElementById("container");
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
        for (let i = 2; i <= target.length - 1; i++) {
          let image = data.data.children[i].data.thumbnail;
          let title = data.data.children[i].data.title;
          let link = data.data.children[i].data.permalink;
          let titleText = document.createTextNode(title);
          let header = document.createElement("h1");
          let header2 = document.createElement("h2");
          header.appendChild(titleText);
          header2.append(link);
          let postItem = document.createElement("li");
          let postImage = document.createElement("img");
          postImage.setAttribute("src", image);
          postItem.appendChild(postImage);
          console.log(postItem);
          sectionContainer.append(postItem);
          postItem.append(header);
          postItem.append(header2);
        }
      });
};

let search = document.getElementById("search");
search.addEventListener("click", displayJsonLink);














// let jsonLink = "https://www.reddit.com/r/chiraqology/.json";
// console.log(jsonLink);
// fetch(jsonLink)
//   .then((res) => res.json())
//   .then((data) => {
//     let target = data.data.children;
//     // console.log(target);
//     for (let i = 2; i <= target.length - 1; i++) {
//       let image = data.data.children[i].data.thumbnail;
//       let title = data.data.children[i].data.title;
//       let link = data.data.children[i].data.permalink;
//       let titleText = document.createTextNode(title);
//       let header = document.createElement("h1");
//       let header2 = document.createElement("h2");
//       header.appendChild(titleText);
//       header2.append(link);
//       let postItem = document.createElement("li");
//       let postImage = document.createElement("img");
//       postImage.setAttribute("src", image);
//       postItem.appendChild(postImage);
//       console.log(postItem);
//       sectionContainer.append(postItem);
//       postItem.append(header);
//       postItem.append(header2);
//     }
//   });