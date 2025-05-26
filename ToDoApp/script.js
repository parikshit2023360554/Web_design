document.addEventListener("DOMContentLoaded", () => {
    // Add new task
    document.querySelector(".add-task").addEventListener("click", () => {
      const name = document.getElementById("taskname").value;
      const desc = document.getElementById("taskDesc").value;
      if (name.trim() === "" || desc.trim() === "") return;
  
      const card = document.createElement("div");
      card.className = "w-[360px] mx-auto text-center mt-4 border border-neutral-300 rounded-2xl p-5 hover:shadow-xl task-card bg-white";
  
      card.innerHTML = `
        <div class="text-left mb-4">
          <h1 class="text-xl font-semibold">${name}</h1>
          <p>${desc}</p>
        </div>
        <div class="flex gap-7 text-right">
          <div class="flex gap-1 text-neutral-400 items-center hover:text-blue-700 mark-complete">
            <button><img src="./photo/checked.png" alt="" class="h-4"></button>
            <p>Task Completed</p>
          </div>
          <div class="flex gap-1 text-neutral-400 hover:text-red-600 delete-task">
            <button><img src="./photo/bin.png" alt="" class="h-4"></button>
            <p>Delete</p>
          </div>
        </div>
      `;
  
      document.body.appendChild(card);
      attachTaskHandlers(card);
      document.getElementById("taskname").value = "";
      document.getElementById("taskDesc").value = "";
    });
  
    // Attach handlers to existing task card
    document.querySelectorAll(".task-card").forEach(card => attachTaskHandlers(card));
  
    function attachTaskHandlers(card) {
      card.querySelector(".mark-complete").addEventListener("click", () => {
        card.classList.add("bg-green-100");
      });
      card.querySelector(".delete-task").addEventListener("click", () => {
        card.remove();
      });
    }
  
    // Add login form when profile icon clicked
    const profileIcon = document.querySelector(".bi-person-circle");
    profileIcon.addEventListener("click", () => {
      if (document.getElementById("loginModal")) return;
  
      const form = document.createElement("div");
      form.id = "loginModal";
      form.className = "fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-80 z-50";
  
      form.innerHTML = `
        <div class="bg-gray-100 p-8 rounded-xl shadow-xl w-[320px] text-center">
          <h2 class="text-xl font-bold mb-4">Login</h2>
          <input type="text" id="loginUsername" placeholder="Username" class="w-full p-2 mb-3 border rounded" />
          <input type="password" id="loginPassword" placeholder="Password" class="w-full p-2 mb-3 border rounded" />
          <button id="submitLogin" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Login</button>
        </div>
      `;
  
      document.body.appendChild(form);
  
      document.getElementById("submitLogin").addEventListener("click", () => {
        const username = document.getElementById("loginUsername").value;
        if (username.trim() !== "") {
          document.querySelector("span.text-neutral-500").textContent = username;
          profileIcon.outerHTML = `<p class="text-white font-bold">${username}</p>`;
          form.remove();
        }
      });
    });
  });