// Sample App Data
const apps = [
  { name: "App 1", description: "This is a description for App 1", category: "Productivity", rating: 4.5, price: "Free", logo: "src/images/chatgpt.png", downloadLink: "#" },
  { name: "App 2", description: "This is a description for App 2", category: "Games", rating: 4.0, price: "$1.99", logo: "src/images/chatgpt.png", downloadLink: "#" },
  { name: "App 3", description: "This is a description for App 3", category: "Social", rating: 4.2, price: "Free", logo: "src/images/chatgpt.png", downloadLink: "#" },
  // Add more apps here...
];

// Function to search apps
function searchApps() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();

  // Filter the apps based on the search query
  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(searchQuery) || 
    app.description.toLowerCase().includes(searchQuery)
  );

  renderAppList(filteredApps);
}

// Function to render the app list
function renderAppList(apps) {
  const appList = document.getElementById("app-list");
  appList.innerHTML = ''; // Clear existing content

  if (apps.length === 0) {
    document.getElementById("no-results-message").classList.remove("hidden");
  } else {
    document.getElementById("no-results-message").classList.add("hidden");
  }

  apps.forEach(app => {
    const appCard = document.createElement("div");
    appCard.classList.add("app-card", "bg-white", "p-4", "rounded-lg", "shadow-lg", "text-center", "cursor-pointer");
    appCard.innerHTML = `
      <img src="${app.logo}" alt="${app.name}" class="mx-auto mb-4 rounded-full">
      <h2 class="text-xl font-semibold">${app.name}</h2>
      <p class="text-gray-600">${app.category}</p>
      <p class="text-gray-700 mt-2">${app.description}</p>
      <div class="mt-4">
        <span class="font-bold">${app.rating}</span> | <span class="text-sm text-gray-500">${app.price}</span>
      </div>
    `;
    
    appCard.addEventListener("click", () => openAppDetail(app));
    
    appList.appendChild(appCard);
  });
}

// Function to open app details in modal
function openAppDetail(app) {
  const modal = document.getElementById("app-detail-modal");
  const content = document.getElementById("app-detail-content");

  content.innerHTML = `
    <h2 class="text-2xl font-bold text-gray-900">${app.name}</h2>
    <p class="mt-2">${app.description}</p>
    <p class="mt-2"><span class="font-bold text-gray-600">Category:</span> ${app.category}</p>
    <p class="mt-2"><span class="font-bold text-gray-600">Rating:</span> ${app.rating}</p>
    <p class="mt-2"><span class="font-bold text-gray-600">Price:</span> ${app.price}</p>
    <a href="${app.downloadLink}" class="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-bold rounded-lg text-center" target="_blank">Download</a>
  `;
  
  modal.classList.remove("hidden");
}

// Function to close Modal
function closeModal() {
  document.getElementById("app-detail-modal").classList.add("hidden");
}

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Initial Render
renderAppList(apps);
