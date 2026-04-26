const image = (name) => `assets/images/${name}`;

const roles = [
  {
    id: "plant-hunter",
    name: "Plant Hunter",
    moduleId: "exploring-nature",
    moduleTitle: "Exploring nature",
    color: "green",
    image: image("role-plant-hunter.png"),
    line: "I explore, I discover, I love plants!"
  },
  {
    id: "little-gardener",
    name: "Little Gardener",
    moduleId: "garden-design",
    moduleTitle: "Garden Design",
    color: "pink",
    image: image("role-little-gardener.png"),
    line: "I plant, I care, I help them grow!"
  },
  {
    id: "botanical-chef",
    name: "Botanical Chef",
    moduleId: "botanical-cooking",
    moduleTitle: "Botanical Cooking",
    color: "orange",
    image: image("role-botanical-chef.png"),
    line: "I cook with plants, I taste the nature!"
  },
  {
    id: "eco-guardian",
    name: "Environmental Protection Little Guardian",
    moduleId: "natural-conservation",
    moduleTitle: "Natural Conservation",
    color: "teal",
    image: image("role-eco-guardian.png"),
    line: "I protect our planet, I care for all living things!"
  }
];

const activities = [
  {
    id: "plant-observation-notebook",
    moduleId: "exploring-nature",
    title: "Plants Around Us: Creating a Plant Observation Notebook",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-green",
    image: image("activity-plant-notebook.png"),
    icon: "NOTE",
    intro:
      "For plant hunters on a science adventure, drawing is an essential skill. They gather all their knowledge and wonder about plants into unique and personal notebooks. Let's use our pencils and creativity to record the fascinating plants around us!",
    safety:
      "Please ask an adult before touching unknown plants, flowers, berries, or fungi. Always observe nature gently.",
    steps: [
      {
        title: "Observe: Find one plant that interests you",
        copy:
          "Look near a window, in a garden, on a path, or in a park. Choose one plant, leaf, flower, seed, twig, or natural texture that makes you curious.",
        question: "What caught your eye? What makes it special to you?",
        icon: "leaf"
      },
      {
        title: "Look Closer: Notice the details",
        copy:
          "Use your eyes like a plant hunter. Look carefully at the shape, colour, lines, edges, and patterns. You can use a magnifying glass if you have one.",
        question: "What tiny details can you find when you slow down and look again?",
        icon: "glass"
      },
      {
        title: "Draw: Record what you discover",
        copy:
          "Draw your plant or natural object in your notebook. You do not need to make it perfect. Try to show what you noticed through lines, colours, and marks.",
        question: "How can your drawing show what you discovered?",
        icon: "pencil"
      },
      {
        title: "Add Notes: Tell the plant's story",
        copy:
          "Write short notes beside your drawing. You can describe where you found it, what it feels like, what colours you see, or what questions you have.",
        question: "What would you like someone else to know about this plant?",
        icon: "note"
      },
      {
        title: "Reflect: Become a thoughtful plant hunter",
        copy:
          "Look back at your page. Think about your favourite detail and one new thing you learned. You can give your plant notebook page a title.",
        question: "What did this plant teach you about the nature around you?",
        icon: "reflect"
      }
    ]
  },
  {
    id: "botanical-collage",
    moduleId: "exploring-nature",
    title: "Botanical Collage",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-pink",
    image: image("art-leaf-paths.png"),
    icon: "CUT",
    intro:
      "Arrange paper, leaves, colour, and shapes into a personal botanical collage inspired by what you observe.",
    steps: null
  },
  {
    id: "plants-printing",
    moduleId: "exploring-nature",
    title: "Plants Printing",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-yellow",
    image: image("art-plant-prints.png"),
    icon: "PRINT",
    intro:
      "Use plant shapes and gentle pressure to make printed patterns from leaves, stems, and colour.",
    steps: null
  },
  {
    id: "story-of-plant-hunters",
    moduleId: "exploring-nature",
    title: "The story of Plant hunters",
    type: "Talks",
    age: "Ages 6-12",
    color: "pale-blue",
    image: image("role-plant-hunter.png"),
    icon: "STORY",
    intro:
      "Meet the Plant Hunters and discover how looking closely can become a story about plants.",
    steps: null
  },
  {
    id: "history-of-british-gardening",
    moduleId: "garden-design",
    title: "History of British Gardening",
    type: "Talks",
    age: "Ages 6-12",
    color: "pale-green",
    image: image("activity-history-gardening.png"),
    icon: "HIST",
    intro:
      "Explore how British gardening stories changed over time, then imagine a garden of your own.",
    steps: null
  },
  {
    id: "chilli-seed-planting",
    moduleId: "garden-design",
    title: "Chilli Seed Planting and Pot Decorating",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-pink",
    image: image("activity-chilli-seed.png"),
    icon: "CHILLI",
    intro:
      "Plant chilli seeds and decorate a pot that can help your plant feel at home.",
    steps: null
  },
  {
    id: "flower-arranging",
    moduleId: "garden-design",
    title: "Flower Arranging Workshop",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-yellow",
    image: image("activity-flower-arranging.png"),
    icon: "FLOWER",
    intro:
      "Look at colour, height, and balance while arranging flowers into a careful display.",
    steps: null
  },
  {
    id: "my-little-garden",
    moduleId: "garden-design",
    title: "My little garden",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-blue",
    image: image("art-little-garden.png"),
    icon: "GARDEN",
    intro:
      "Create a small garden world using paper, twigs, colour, and imagination.",
    steps: null
  },
  {
    id: "cook-with-pumpkin",
    moduleId: "botanical-cooking",
    title: "Cook with pumpkin",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-yellow",
    image: image("activity-cook-pumpkin.png"),
    icon: "PUMPKIN",
    intro:
      "Discover pumpkin as a plant ingredient and imagine how nature can become food.",
    steps: null
  },
  {
    id: "cook-with-flowers",
    moduleId: "botanical-cooking",
    title: "Cook with flowers",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-pink",
    image: image("activity-cook-flowers.png"),
    icon: "BLOOM",
    intro:
      "Think about flowers, colour, smell, and safe edible plant stories.",
    steps: null
  },
  {
    id: "cook-with-pomelo",
    moduleId: "botanical-cooking",
    title: "Cook with pomelo",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-green",
    image: image("activity-cook-pomelo.png"),
    icon: "POMELO",
    intro:
      "Use pomelo as a bright starting point for taste, smell, and botanical creativity.",
    steps: null
  },
  {
    id: "plastic-art-makers",
    moduleId: "natural-conservation",
    title: "Plastic Art Makers",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-blue",
    image: image("activity-plastic-art.png"),
    icon: "RECYCLE",
    intro:
      "Turn reused materials into an artwork about care, action, and the planet.",
    steps: null
  },
  {
    id: "food-waste-magic",
    moduleId: "natural-conservation",
    title: "Food Waste Magic: A Second Life for Scraps",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-yellow",
    image: image("activity-food-waste-magic.png"),
    icon: "SCRAPS",
    intro:
      "Look at food scraps differently and imagine a second life through making.",
    steps: null
  },
  {
    id: "cosy-birdhouse",
    moduleId: "natural-conservation",
    title: "Build a Cosy Birdhouse",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-green",
    image: image("activity-cosy-birdhouse.png"),
    icon: "BIRD",
    intro:
      "Design a cosy birdhouse and think about how small shelters help living things.",
    steps: null
  },
  {
    id: "bird-safe-window-sticker",
    moduleId: "natural-conservation",
    title: "Bird-Safe Window Sticker Design",
    type: "Workshop",
    age: "Ages 6-12",
    color: "pale-pink",
    image: image("activity-bird-safe-sticker.png"),
    icon: "STICKER",
    intro:
      "Design a window sticker that can be beautiful and help keep birds safer.",
    steps: null
  }
];

const modules = [
  {
    id: "exploring-nature",
    title: "Exploring nature",
    roleId: "plant-hunter",
    theme: "green",
    description: "Choose a Plant Hunter activity and begin your nature adventure."
  },
  {
    id: "garden-design",
    title: "Garden Design",
    roleId: "little-gardener",
    theme: "pink",
    description: "Choose a Little Gardener activity about planting, arranging, and designing."
  },
  {
    id: "botanical-cooking",
    title: "Botanical Cooking",
    roleId: "botanical-chef",
    theme: "orange",
    description: "Choose a Botanical Chef activity about plants and food."
  },
  {
    id: "natural-conservation",
    title: "Natural Conservation",
    roleId: "eco-guardian",
    theme: "teal",
    description: "Choose an Environmental Protection activity about care and action."
  }
];

const galleryItems = [
  {
    id: "sprout-sun",
    title: "A Sprout Finds the Sun",
    childName: "Milo",
    workshop: "Travel with a Seed",
    role: "Seed",
    image: image("art-leaf-paths.png"),
    tags: ["Seed", "growth", "paper"],
    story:
      "I made a small path for the seed. The yellow pieces are warm places where it wanted to grow.",
    audio: "assets/audio/story-leaf.wav"
  },
  {
    id: "quiet-leaf-lines",
    title: "Quiet Leaf Lines",
    childName: "Nora",
    workshop: "Leaf Observation Lab",
    role: "Leaf",
    image: image("art-plant-prints.png"),
    tags: ["Leaf", "texture", "rubbing"],
    story:
      "The lines looked like tiny rivers. I used soft colors so people would look slowly."
  },
  {
    id: "pocket-garden",
    title: "My Pocket Garden",
    childName: "Ari",
    workshop: "Little Gardener Studio",
    role: "Gardener",
    image: image("art-little-garden.png"),
    tags: ["Gardener", "care", "twigs"],
    story:
      "This garden is small enough to carry. I added twigs because they looked like paths."
  }
];

const state = {
  selectedRoleId: localStorage.getItem("gmk.role") || "plant-hunter",
  selectedActivityId: localStorage.getItem("gmk.activity") || "plant-observation-notebook",
  galleryFilterWorkshop: "All workshops",
  galleryFilterRole: "All roles",
  gallerySearch: "",
  pendingImage: "",
  pendingAudio: ""
};

const app = document.getElementById("app");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("hashchange", renderRoute);
  document.addEventListener("click", handleClick);
  document.addEventListener("input", handleInput);
  document.addEventListener("change", handleChange);
  renderRoute();
});

function handleClick(event) {
  const actionEl = event.target.closest("[data-action]");
  if (event.target.matches("[data-close-modal]")) {
    closeModal();
    return;
  }
  if (!actionEl) return;

  const { action } = actionEl.dataset;
  if (action === "select-role") {
    const role = roles.find((item) => item.id === actionEl.dataset.roleId);
    if (!role) return;
    state.selectedRoleId = role.id;
    localStorage.setItem("gmk.role", role.id);
    location.hash = `#module/${role.moduleId}`;
  }

  if (action === "open-activity") {
    state.selectedActivityId = actionEl.dataset.activityId;
    localStorage.setItem("gmk.activity", state.selectedActivityId);
    location.hash = `#activity/${state.selectedActivityId}`;
  }

  if (action === "demo-video") {
    openDemoModal(getActivity(actionEl.dataset.activityId));
  }

  if (action === "open-story") {
    const item = getAllGalleryItems().find((entry) => entry.id === actionEl.dataset.itemId);
    if (item) openArtworkModal(item);
  }

  if (action === "tour") {
    openTourModal(actionEl.dataset.moduleId);
  }
}

function handleInput(event) {
  if (event.target.id === "gallery-search") {
    state.gallerySearch = event.target.value;
    renderGalleryList();
  }
  if (event.target.closest("#upload-form")) updateUploadPreviewText();
}

function handleChange(event) {
  if (event.target.id === "workshop-filter") {
    state.galleryFilterWorkshop = event.target.value;
    renderGalleryList();
  }
  if (event.target.id === "role-filter") {
    state.galleryFilterRole = event.target.value;
    renderGalleryList();
  }
  if (event.target.id === "artwork-image") handleImageUpload(event);
  if (event.target.id === "artwork-audio") handleAudioUpload(event);
}

function renderRoute() {
  const raw = (location.hash || "#home").slice(1);
  const [route, id] = raw.split("/");

  if (route === "roles") return renderRoles();
  if (route === "module") return renderModule(id || getSelectedRole().moduleId);
  if (route === "activity") return renderActivity(id || state.selectedActivityId);
  if (route === "submit") return renderSubmit();
  if (route === "gallery") return renderGallery();
  if (route === "virtual") return renderVirtual();
  if (route === "parents") return renderParents();
  renderHome();
}

function updateNav(active) {
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href").replace("#", "");
    const isModule = ["module", "activity", "submit"].includes(active) && href === "roles";
    link.classList.toggle("is-active", href === active || isModule);
  });
}

function renderHome() {
  updateNav("home");
  app.innerHTML = `
    <section class="page hero-page">
      <img src="${image("gmk-hero-watercolor.png")}" alt="Watercolour garden museum scene with flowers and a glasshouse.">
      <div class="hero-center">
        <h1>Garden Museum Kids</h1>
        <p>Step into your <span class="word-art">art</span> adventure with nature!</p>
        <div class="hero-actions">
          <a class="button" href="#roles">Choose your role</a>
          <a class="button secondary" href="#gallery">Our galleries</a>
        </div>
      </div>
    </section>
  `;
}

function renderRoles() {
  updateNav("roles");
  app.innerHTML = `
    <section class="page page-pad garden-frame">
      <div class="container">
        <div class="screen-title">
          <h1>Garden Museum Kids</h1>
          <p>Choose your adventure character!</p>
        </div>
        <div class="role-grid">
          ${roles.map((role) => `
            <article class="role-card ${role.color}">
              <div class="role-ribbon ${role.id === "eco-guardian" ? "long" : ""}">
                <span class="ribbon-dot" aria-hidden="true"></span>
                <span class="ribbon-label">${escapeHtml(role.name)}</span>
              </div>
              <img src="${role.image}" alt="${escapeHtml(role.name)} character.">
              <div class="role-body">
                <p>${escapeHtml(role.line)}</p>
                <button class="round-arrow" type="button" data-action="select-role" data-role-id="${role.id}" aria-label="Choose ${escapeHtml(role.name)}">›</button>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderModule(moduleId) {
  const module = modules.find((item) => item.id === moduleId) || modules[0];
  const role = roles.find((item) => item.id === module.roleId);
  state.selectedRoleId = role.id;
  localStorage.setItem("gmk.role", role.id);
  updateNav("module");

  const moduleActivities = activities.filter((activity) => activity.moduleId === module.id);
  app.innerHTML = `
    <section class="page page-pad garden-frame">
      <div class="container">
        <div class="module-top">
          <a class="icon-button" href="#roles" aria-label="Back to role selection">‹</a>
          <a class="icon-button" href="#home" aria-label="Home">⌂</a>
        </div>
        <div class="screen-title">
          <h1>${escapeHtml(module.title)}</h1>
          <p>${escapeHtml(module.description)}</p>
        </div>
        <div class="level-grid">
          ${moduleActivities.map((activity) => renderLevelCard(activity)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderLevelCard(activity) {
  const media = activity.image
    ? `<img src="${activity.image}" alt="${escapeHtml(activity.title)} activity illustration.">`
    : `<div class="level-illustration" aria-hidden="true">${escapeHtml(activity.icon)}</div>`;
  return `
    <article class="level-card ${activity.color}">
      <h2>${escapeHtml(activity.title)}</h2>
      ${media}
      <div class="level-meta">
        <span>👥 ${escapeHtml(activity.age)}</span>
        <span>${activity.type === "Talks" ? "💬" : "🎨"} ${escapeHtml(activity.type)}</span>
      </div>
      <button class="round-arrow" type="button" data-action="open-activity" data-activity-id="${activity.id}" aria-label="Open ${escapeHtml(activity.title)}">›</button>
    </article>
  `;
}

function renderActivity(activityId) {
  const activity = getActivity(activityId);
  state.selectedActivityId = activity.id;
  localStorage.setItem("gmk.activity", activity.id);
  const module = modules.find((item) => item.id === activity.moduleId) || modules[0];
  const role = roles.find((item) => item.moduleId === module.id);
  if (role) {
    state.selectedRoleId = role.id;
    localStorage.setItem("gmk.role", role.id);
  }
  updateNav("activity");

  const steps = activity.steps || createGenericSteps(activity.title);
  app.innerHTML = `
    <section class="page activity-page garden-frame">
      <div class="module-top">
        <a class="icon-button" href="#module/${module.id}" aria-label="Back to ${escapeHtml(module.title)}">‹</a>
        <a class="icon-button" href="#home" aria-label="Home">⌂</a>
      </div>
      <div class="activity-hero">
        <div>
          <h1>${escapeHtml(activity.title)}</h1>
          <p>${escapeHtml(activity.intro)}</p>
          <button class="button demo-button" type="button" data-action="demo-video" data-activity-id="${activity.id}">▶ See How to Make It</button>
        </div>
        <img src="${activity.image || getSelectedRole().image}" alt="${escapeHtml(activity.title)} visual.">
      </div>

      <div class="steps">
        ${steps.map((step, index) => `
          <article class="step-card">
            <img src="${getStepImage(index)}" alt="">
            <span class="step-number">${index + 1}</span>
            <div>
              <h2>${escapeHtml(step.title)}</h2>
              <p>${escapeHtml(step.copy)}</p>
              <span class="question">? ${escapeHtml(step.question)}</span>
            </div>
            <span class="step-icon" aria-hidden="true">${stepIcon(step.icon)}</span>
          </article>
        `).join("")}
      </div>

      <div class="safety-row">
        <p>${escapeHtml(activity.safety || "Ask an adult for help when using tools, plants, food materials, or scanning apps.")}</p>
        <a class="button" href="#submit">⇧ Share My Plant Notebook</a>
      </div>
    </section>
  `;
}

function renderSubmit() {
  updateNav("submit");
  const activity = getActivity(state.selectedActivityId);
  const role = getSelectedRole();
  app.innerHTML = `
    <section class="page page-pad garden-frame">
      <div class="container">
        <div class="screen-title">
          <h1>Share My Plant Notebook</h1>
          <p>Parents or guardians can help children upload a scanned artwork and optional audio story. This prototype keeps everything local in the browser.</p>
        </div>
        <div class="upload-layout">
          <form class="upload-form" id="upload-form">
            <label>
              Artwork title
              <input name="title" type="text" value="My Plant Notebook" required>
            </label>
            <label>
              Child nickname
              <input name="childName" type="text" placeholder="Milo" required>
            </label>
            <label>
              Workshop name
              <input name="workshop" type="text" value="${escapeHtml(activity.title)}" readonly>
            </label>
            <label>
              Role name
              <input name="role" type="text" value="${escapeHtml(role.name)}" readonly>
            </label>
            <label class="wide">
              Short story / reflection
              <textarea name="story" rows="5" placeholder="Tell the story of your work and what you noticed." required></textarea>
            </label>
            <label>
              Image file
              <input id="artwork-image" name="image" type="file" accept="image/*">
            </label>
            <label>
              Optional audio file
              <input id="artwork-audio" name="audio" type="file" accept="audio/*">
            </label>
            <button class="button wide" type="submit">Add to Our galleries</button>
          </form>
          <aside class="upload-preview">
            <img id="upload-image-preview" src="${activity.image || image("activity-plant-notebook.png")}" alt="Artwork preview.">
            <div>
              <h2 id="upload-title-preview">My Plant Notebook</h2>
              <p id="upload-copy-preview">The story of my work will appear here.</p>
            </div>
            <audio id="upload-audio-preview" controls hidden></audio>
            <div class="success-note" id="upload-success" hidden>Your artwork has been added to Our galleries.</div>
          </aside>
        </div>
      </div>
    </section>
  `;

  document.getElementById("upload-form").addEventListener("submit", handleSubmit);
}

function renderGallery() {
  updateNav("gallery");
  app.innerHTML = `
    <section class="page page-pad">
      <div class="container">
        <div class="screen-title">
          <h1>Our galleries</h1>
          <p>Children's uploaded artworks are displayed here. Open The story of my work to hear or read their reflections.</p>
        </div>
        <div class="gallery-tools">
          <select id="workshop-filter" aria-label="Filter by workshop">
            <option>All workshops</option>
            <option>Travel with a Seed</option>
            <option>Leaf Observation Lab</option>
            <option>Little Gardener Studio</option>
            <option>${escapeHtml(getActivity(state.selectedActivityId).title)}</option>
          </select>
          <select id="role-filter" aria-label="Filter by role">
            <option>All roles</option>
            <option>Seed</option>
            <option>Leaf</option>
            <option>Gardener</option>
            <option>Plant Hunter</option>
            <option>Little Gardener</option>
            <option>Botanical Chef</option>
            <option>Environmental Protection Little Guardian</option>
          </select>
          <input id="gallery-search" type="search" placeholder="Search title or tag" aria-label="Search title or tag">
        </div>
        <div class="gallery-grid" id="gallery-grid"></div>
      </div>
    </section>
  `;
  document.getElementById("workshop-filter").value = state.galleryFilterWorkshop;
  document.getElementById("role-filter").value = state.galleryFilterRole;
  document.getElementById("gallery-search").value = state.gallerySearch;
  renderGalleryList();
}

function renderGalleryList() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  const search = state.gallerySearch.trim().toLowerCase();
  const items = getAllGalleryItems().filter((item) => {
    const workshopOk = state.galleryFilterWorkshop === "All workshops" || item.workshop === state.galleryFilterWorkshop;
    const roleOk = state.galleryFilterRole === "All roles" || item.role === state.galleryFilterRole;
    const haystack = [item.title, item.childName, item.workshop, item.role, ...(item.tags || [])].join(" ").toLowerCase();
    return workshopOk && roleOk && (!search || haystack.includes(search));
  });

  grid.innerHTML = items.map((item) => `
    <article class="gallery-card">
      <img src="${item.image}" alt="${escapeHtml(item.title)} artwork.">
      <div class="gallery-body">
        <h2>${escapeHtml(item.title)}</h2>
        <p>By ${escapeHtml(item.childName)} in ${escapeHtml(item.workshop)}</p>
        <div class="tag-row">
          ${(item.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <button class="button secondary" type="button" data-action="open-story" data-item-id="${item.id}">The story of my work</button>
      </div>
    </article>
  `).join("") || "<p>No artworks match these filters yet.</p>";
}

function renderVirtual() {
  updateNav("virtual");
  app.innerHTML = `
    <section class="page page-pad garden-frame">
      <div class="container">
        <div class="screen-title">
          <h1>Virtual exhibitions</h1>
          <p>Each module has its own virtual gallery space. The tour view is marked as under construction in this prototype.</p>
        </div>
        <div class="virtual-grid">
          ${modules.map((module) => `
            <article class="virtual-card">
              <span class="coming-soon">${escapeHtml(module.title)}</span>
              <h2>${escapeHtml(module.title)} Room</h2>
              <p>${escapeHtml(module.description)}</p>
              <button class="button ${module.theme}" type="button" data-action="tour" data-module-id="${module.id}">Tour</button>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderParents() {
  updateNav("parents");
  app.innerHTML = `
    <section class="page page-pad">
      <div class="container">
        <div class="screen-title">
          <h1>For Parents</h1>
          <p>Children can complete the workshop in real spaces. Adults help with safety, scanning, and upload, while the child's ideas remain at the centre.</p>
        </div>
        <div class="parent-grid">
          <article class="parent-card">
            <h2>Before the activity</h2>
            <p>Prepare paper, pencils, safe materials, and a phone or tablet for photographing or scanning the finished work.</p>
          </article>
          <article class="parent-card">
            <h2>During the workshop</h2>
            <p>Let children choose what they notice. Use open questions rather than giving them the answer.</p>
          </article>
          <article class="parent-card">
            <h2>Scanning artwork</h2>
            <p>Use a 2D or 3D scanning app if helpful. A clear photo with natural light also works for this prototype.</p>
          </article>
          <article class="parent-card">
            <h2>Prototype note</h2>
            <p>The upload and audio story are simulated. Files are stored locally in this browser for presentation only.</p>
          </article>
        </div>
      </div>
    </section>
  `;
}

function createGenericSteps(activityTitle) {
  return [
    {
      title: "Observe: Start with what you can see",
      copy: `Look carefully at the materials, plants, or story behind ${activityTitle}. Choose one detail that interests you.`,
      question: "What do you notice first?",
      icon: "leaf"
    },
    {
      title: "Sense: Gather gentle clues",
      copy: "Notice colour, texture, smell, weight, sound, or shape. Ask an adult before touching unknown plants or tools.",
      question: "How does it feel, smell, or change when you look closer?",
      icon: "glass"
    },
    {
      title: "Make: Create your workshop piece",
      copy: "Use your materials to draw, build, arrange, cook, decorate, or design something inspired by your observation.",
      question: "Which choice makes your idea clear?",
      icon: "pencil"
    },
    {
      title: "Share: Prepare your story",
      copy: "Photograph or scan your work with adult help. Think about one sentence you would like others to hear.",
      question: "What should visitors notice in your work?",
      icon: "note"
    },
    {
      title: "Reflect: Look back",
      copy: "Think about what you learned, what surprised you, and what you might try next time.",
      question: "What did this activity teach you?",
      icon: "reflect"
    }
  ];
}

function getSelectedRole() {
  return roles.find((role) => role.id === state.selectedRoleId) || roles[0];
}

function getActivity(id) {
  return activities.find((activity) => activity.id === id) || activities[0];
}

function getStepImage(index) {
  return [image("gmk-hero-watercolor.png"), image("activity-plant-notebook.png"), image("art-leaf-paths.png"), image("role-plant-hunter.png"), image("art-plant-prints.png")][index] || image("activity-plant-notebook.png");
}

function stepIcon(icon) {
  const icons = {
    leaf: "❧",
    glass: "⌕",
    pencil: "✎",
    note: "☰",
    reflect: "◌"
  };
  return icons[icon] || "•";
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.pendingImage = reader.result;
    document.getElementById("upload-image-preview").src = state.pendingImage;
  };
  reader.readAsDataURL(file);
}

function handleAudioUpload(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("upload-audio-preview");
  if (!file) {
    preview.hidden = true;
    state.pendingAudio = "";
    return;
  }
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
  if (file.size > 1500000) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.pendingAudio = reader.result;
  };
  reader.readAsDataURL(file);
}

function updateUploadPreviewText() {
  const form = document.getElementById("upload-form");
  if (!form) return;
  const title = form.elements.title.value || "My Plant Notebook";
  const story = form.elements.story.value || "The story of my work will appear here.";
  document.getElementById("upload-title-preview").textContent = title;
  document.getElementById("upload-copy-preview").textContent = story;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const item = {
    id: `local-${Date.now()}`,
    title: String(data.get("title") || "My Plant Notebook"),
    childName: String(data.get("childName") || "Young Artist"),
    workshop: String(data.get("workshop") || getActivity(state.selectedActivityId).title),
    role: String(data.get("role") || getSelectedRole().name),
    image: state.pendingImage || getActivity(state.selectedActivityId).image || image("activity-plant-notebook.png"),
    tags: [String(data.get("role") || getSelectedRole().name), "uploaded", "audio"],
    story: String(data.get("story") || "This is the story of my work."),
    audio: state.pendingAudio
  };
  const existing = getLocalGalleryItems();
  try {
    localStorage.setItem("gmk.uploads", JSON.stringify([item, ...existing]));
  } catch {
    localStorage.setItem("gmk.uploads", JSON.stringify([{ ...item, image: image("activity-plant-notebook.png"), audio: "" }, ...existing]));
  }
  document.getElementById("upload-success").hidden = false;
  setTimeout(() => {
    location.hash = "#gallery";
  }, 650);
}

function getLocalGalleryItems() {
  try {
    return JSON.parse(localStorage.getItem("gmk.uploads") || "[]");
  } catch {
    return [];
  }
}

function getAllGalleryItems() {
  return [...getLocalGalleryItems(), ...galleryItems];
}

function openArtworkModal(item) {
  modalContent.innerHTML = `
    <div class="modal-art">
      <img src="${item.image}" alt="${escapeHtml(item.title)} artwork.">
      <div class="modal-copy">
        <p class="coming-soon">Child's voice</p>
        <h2 id="modal-title">The story of my work</h2>
        <h3>${escapeHtml(item.title)}</h3>
        <p>By ${escapeHtml(item.childName)} in ${escapeHtml(item.workshop)}</p>
        <p>${escapeHtml(item.story)}</p>
        ${item.audio ? `<audio class="audio-story" src="${item.audio}" controls></audio>` : `<p class="audio-story">Submitted audio files will play here.</p>`}
      </div>
    </div>
  `;
  modal.hidden = false;
}

function openDemoModal(activity) {
  modalContent.innerHTML = `
    <div class="video-demo">
      <h2 id="modal-title">See How to Make It</h2>
      <p>${escapeHtml(activity.title)}</p>
      <div class="video-screen">
        <img src="${activity.image || image("activity-plant-notebook.png")}" alt="">
        <span class="play-circle">▶</span>
      </div>
      <div class="progress-fake"><span></span></div>
      <p>This frontend prototype reserves space for the recorded workshop demonstration video.</p>
    </div>
  `;
  modal.hidden = false;
}

function openTourModal(moduleId) {
  const module = modules.find((item) => item.id === moduleId) || modules[0];
  modalContent.innerHTML = `
    <div class="video-demo">
      <h2 id="modal-title">${escapeHtml(module.title)} Room</h2>
      <div class="video-screen">
        <img src="${image("gmk-hero-watercolor.png")}" alt="">
        <span class="play-circle">Tour</span>
      </div>
      <span class="coming-soon">Under construction</span>
      <p>The virtual exhibition space for this module is planned here. In a future version, visitors can tour children's uploaded works in a themed virtual gallery.</p>
    </div>
  `;
  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
  modalContent.innerHTML = "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
