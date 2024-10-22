// let loader = document.querySelectorAll("#loader");
// let image = document.querySelectorAll(".desing");

// loader.forEach(load => {
//     load.classList.add("loader")
//     load.classList.remove("hidden");
//     window.addEventListener("load", ()=>{
//         load.classList.remove("loader")
//         load.classList.add("hidden");
    
// });

// })

// let loader = document.querySelectorAll("#loader");
// let image = document.querySelectorAll(".design");

// loader.forEach(load => {
//     load.classList.add("loader");
//     load.classList.remove("hidden");
// });

// // Use a single event listener for window load event
// window.addEventListener("load", () => {
//     loader.forEach(load => {
//         load.classList.remove("loader");
//         load.classList.add("hidden");
//     });
// });


let loaders = document.querySelectorAll("#loader");
let images = document.querySelectorAll(".design");

images.forEach((image, index) => {
    let loader = loaders[index]; // Assuming each loader corresponds to an image
    
    // Show the loader initially
    loader.classList.add("loader");
    loader.classList.remove("hidden");

    // When the image is loaded
    image.addEventListener("load", () => {
        loader.classList.remove("loader");
        loader.classList.add("hidden");
    });
});

