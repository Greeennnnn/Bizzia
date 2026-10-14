
const recipes = [
  {
    id: 1,
    name: "Pancakes esponjosos",
    category: "Desayuno",
    time: 20,
    difficulty: "Fácil",
    emoji: "🥞",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
    description: "Un desayuno dulce, suave y perfecto para comenzar el día.",
    ingredients: [
      "1 taza de harina",
      "1 huevo",
      "3/4 de taza de leche",
      "1 cucharada de azúcar",
      "1 cucharadita de polvo para hornear",
      "1 cucharada de mantequilla"
    ],
    steps: [
      "Mezcla la harina, el azúcar y el polvo para hornear.",
      "Añade el huevo, la leche y la mantequilla derretida.",
      "Calienta una sartén ligeramente engrasada.",
      "Vierte pequeñas porciones de mezcla y cocina por ambos lados hasta dorar.",
      "Sirve con frutas, miel o tu acompañamiento favorito."
    ]
  },
  {
    id: 2,
    name: "Pasta cremosa",
    category: "Almuerzo",
    time: 25,
    difficulty: "Fácil",
    emoji: "🍝",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
    description: "Pasta deliciosa con una salsa cremosa y mucho sabor.",
    ingredients: [
      "200 g de pasta",
      "1/2 taza de crema de leche",
      "1 diente de ajo",
      "1 cucharada de mantequilla",
      "Queso parmesano al gusto",
      "Sal y pimienta"
    ],
    steps: [
      "Cocina la pasta siguiendo las instrucciones del paquete.",
      "Derrite la mantequilla y sofríe el ajo picado.",
      "Agrega la crema, sal y pimienta.",
      "Incorpora la pasta escurrida y mezcla bien.",
      "Sirve con queso parmesano por encima."
    ]
  },
  {
    id: 3,
    name: "Torta de chocolate",
    category: "Postre",
    time: 50,
    difficulty: "Media",
    emoji: "🍫",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
    description: "Una torta suave y chocolatosa para los amantes del dulce.",
    ingredients: [
      "1 taza de harina",
      "1/2 taza de cacao en polvo",
      "2 huevos",
      "3/4 de taza de azúcar",
      "1/2 taza de leche",
      "1 cucharadita de polvo para hornear"
    ],
    steps: [
      "Precalienta el horno a 180 °C.",
      "Mezcla la harina, el cacao, el azúcar y el polvo para hornear.",
      "Añade los huevos y la leche; mezcla hasta integrar.",
      "Vierte en un molde engrasado.",
      "Hornea aproximadamente 30–35 minutos y comprueba que esté cocida antes de servir."
    ]
  },
  {
    id: 4,
    name: "Batido de fresas",
    category: "Bebida",
    time: 5,
    difficulty: "Fácil",
    emoji: "🍓",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
    description: "Una bebida fresca, frutal y muy sencilla de preparar.",
    ingredients: [
      "1 taza de fresas lavadas",
      "1 taza de leche",
      "1/2 banano",
      "Hielo al gusto"
    ],
    steps: [
      "Lava las fresas y retira sus hojas.",
      "Agrega las fresas, el banano y la leche a la licuadora.",
      "Añade hielo si lo deseas.",
      "Licúa hasta conseguir una mezcla homogénea.",
      "Sirve inmediatamente y disfruta."
    ]
  },
  {
    id: 5,
    name: "Tostadas con aguacate",
    category: "Desayuno",
    time: 10,
    difficulty: "Fácil",
    emoji: "🥑",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80",
    description: "Una opción salada, rápida y deliciosa para el desayuno.",
    ingredients: [
      "2 rebanadas de pan",
      "1 aguacate maduro",
      "Unas gotas de limón",
      "Sal y pimienta",
      "Tomate cherry opcional"
    ],
    steps: [
      "Tuesta el pan hasta que esté crujiente.",
      "Tritura el aguacate con el limón, la sal y la pimienta.",
      "Extiende la mezcla sobre las tostadas.",
      "Añade tomate si te gusta y sirve."
    ]
  },
  {
    id: 6,
    name: "Tacos coloridos",
    category: "Almuerzo",
    time: 30,
    difficulty: "Media",
    emoji: "🌮",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=700&q=80",
    description: "Tortillas llenas de sabor, verduras frescas y un toque de limón.",
    ingredients: [
      "4 tortillas pequeñas",
      "250 g de pollo en tiras",
      "1 tomate",
      "Lechuga al gusto",
      "1/2 cebolla",
      "Limón, sal y especias"
    ],
    steps: [
      "Sazona el pollo y cocínalo completamente en una sartén.",
      "Pica el tomate, la cebolla y la lechuga.",
      "Calienta las tortillas.",
      "Reparte el pollo y las verduras entre las tortillas.",
      "Añade limón y sirve caliente."
    ]
  },
  {
    id: 7,
    name: "Brownies caseros",
    category: "Postre",
    time: 35,
    difficulty: "Media",
    emoji: "🍪",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
    description: "Bocados de chocolate ideales para compartir.",
    ingredients: [
      "100 g de chocolate",
      "80 g de mantequilla",
      "2 huevos",
      "3/4 de taza de azúcar",
      "1/2 taza de harina"
    ],
    steps: [
      "Precalienta el horno a 180 °C.",
      "Derrite el chocolate con la mantequilla.",
      "Bate los huevos con el azúcar.",
      "Mezcla ambas preparaciones e incorpora la harina.",
      "Vierte en un molde y hornea aproximadamente 20–25 minutos, hasta que el centro esté cocido."
    ]
  },
  {
    id: 8,
    name: "Limonada refrescante",
    category: "Bebida",
    time: 5,
    difficulty: "Fácil",
    emoji: "🍋",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=80",
    description: "Una bebida cítrica perfecta para los días soleados.",
    ingredients: [
      "3 limones",
      "3 tazas de agua fría",
      "Azúcar al gusto",
      "Hielo",
      "Hojas de hierbabuena opcionales"
    ],
    steps: [
      "Exprime los limones y retira las semillas.",
      "Mezcla el zumo con el agua fría.",
      "Añade azúcar al gusto y remueve.",
      "Sirve con hielo y hierbabuena si deseas."
    ]
  },
  {
    id: 9,
    name: "Ensalada arcoíris",
    category: "Almuerzo",
    time: 15,
    difficulty: "Fácil",
    emoji: "🥗",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
    description: "Verduras frescas, colores bonitos y una preparación sencilla.",
    ingredients: [
      "2 tazas de lechuga",
      "1 tomate",
      "1 zanahoria",
      "1/2 pepino",
      "Aceite de oliva",
      "Limón, sal y pimienta"
    ],
    steps: [
      "Lava cuidadosamente todas las verduras.",
      "Corta la lechuga, el tomate y el pepino.",
      "Ralla la zanahoria.",
      "Mezcla los ingredientes en un recipiente.",
      "Aliña con limón, aceite de oliva, sal y pimienta."
    ]
  }
];

const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const resetFilters = document.getElementById("resetFilters");
const recipeDialog = document.getElementById("recipeDialog");
const dialogContent = document.getElementById("dialogContent");
const closeDialog = document.getElementById("closeDialog");
const toast = document.getElementById("toast");

let activeCategory = "Todas";
let favorites = new Set();

try {
  const savedFavorites = JSON.parse(
    localStorage.getItem("sazonMagicaFavorites") || "[]"
  );

  if (Array.isArray(savedFavorites)) {
    favorites = new Set(
      savedFavorites.filter(id =>
        recipes.some(recipe => recipe.id === id)
      )
    );
  }
} catch (error) {
  favorites = new Set();
}

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

function saveFavorites() {
  try {
    localStorage.setItem(
      "sazonMagicaFavorites",
      JSON.stringify([...favorites])
    );
  } catch (error) {
    showToast("No se pudo guardar en este navegador.");
  }
}

function getFilteredRecipes() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");

  return recipes.filter(recipe => {
    const matchesCategory =
      activeCategory === "Todas" ||
      (activeCategory === "Favoritos" &&
        favorites.has(recipe.id)) ||
      recipe.category === activeCategory;

    const searchableText = [
      recipe.name,
      recipe.category,
      recipe.description,
      recipe.ingredients.join(" ")
    ].join(" ").toLocaleLowerCase("es");

    const matchesSearch = searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });
}

function renderRecipes() {
  const filteredRecipes = getFilteredRecipes();

  resultsCount.textContent =
    `${filteredRecipes.length} ` +
    (filteredRecipes.length === 1 ? "receta encontrada" : "recetas encontradas");

  emptyState.hidden = filteredRecipes.length !== 0;
  recipeGrid.hidden = filteredRecipes.length === 0;

  recipeGrid.innerHTML = filteredRecipes.map((recipe, index) => {
    const isFavorite = favorites.has(recipe.id);

    return `
      <article class="recipe-card" style="animation-delay:${index * 60}ms">
        <div class="recipe-photo">
          <img
            src="${recipe.image}"
            alt="${recipe.name}"
            loading="lazy"
          >
          <span class="category-tag">${recipe.emoji} ${recipe.category}</span>
          <button
            class="favorite-button ${isFavorite ? "is-favorite" : ""}"
            data-action="favorite"
            data-id="${recipe.id}"
            type="button"
            aria-label="${isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}: ${recipe.name}"
            aria-pressed="${isFavorite}"
            title="${isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}"
          >${isFavorite ? "❤️" : "🤍"}</button>
        </div>

        <div class="recipe-body">
          <h4>${recipe.name}</h4>
          <p>${recipe.description}</p>

          <div class="recipe-meta">
            <span>⏱️ ${recipe.time} min</span>
            <span>👨‍🍳 ${recipe.difficulty}</span>
          </div>

          <div class="recipe-actions">
            <button data-action="details" data-id="${recipe.id}" type="button"
              class="details-button">Ver receta 🍴</button>
            <button data-action="favorite" data-id="${recipe.id}" type="button">
              ${isFavorite ? "❤️ Guardada" : "♡ Guardar"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function showRecipeDetails(id) {
  const recipe = recipes.find(item => item.id === id);

  if (!recipe) return;

  dialogContent.innerHTML = `
    <div class="dialog-content">
      <img class="dialog-photo" src="${recipe.image}" alt="${recipe.name}">
      <span class="eyebrow">${recipe.emoji} ${recipe.category.toUpperCase()}</span>
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <p>⏱️ ${recipe.time} minutos · 👨‍🍳 Dificultad: ${recipe.difficulty}</p>

      <h3>🛒 Ingredientes</h3>
      <ul>
        ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h3>👩‍🍳 Preparación</h3>
      <ol>
        ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
      </ol>

      <p style="margin-top:20px">💛 ¡Prepara, disfruta y comparte!</p>
    </div>
  `;

  if (!recipeDialog.open) {
    recipeDialog.showModal();
  }
}

function toggleFavorite(id) {
  const recipe = recipes.find(item => item.id === id);

  if (!recipe) return;

  if (favorites.has(id)) {
    favorites.delete(id);
    showToast(`💔 ${recipe.name} se quitó de favoritos.`);
  } else {
    favorites.add(id);
    showToast(`❤️ ¡${recipe.name} se guardó en favoritos!`);
  }

  saveFavorites();
  renderRecipes();
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll(".filter").forEach(filter => {
      const isActive = filter === button;
      filter.classList.toggle("active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });

    renderRecipes();
  });
});

searchInput.addEventListener("input", renderRecipes);

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  renderRecipes();
  searchInput.focus();
});

recipeGrid.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");

  if (!button) return;

  const id = Number(button.dataset.id);

  if (button.dataset.action === "favorite") {
    toggleFavorite(id);
  }

  if (button.dataset.action === "details") {
    showRecipeDetails(id);
  }
});

resetFilters.addEventListener("click", () => {
  activeCategory = "Todas";
  searchInput.value = "";

  document.querySelectorAll(".filter").forEach(button => {
    const isActive = button.dataset.category === "Todas";
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderRecipes();
});

closeDialog.addEventListener("click", () => {
  recipeDialog.close();
});

recipeDialog.addEventListener("click", event => {
  if (event.target === recipeDialog) {
    recipeDialog.close();
  }
});

document.getElementById("year").textContent =
  new Date().getFullYear();

renderRecipes();
