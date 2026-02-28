// Function to check if an object is empty or invalid
export function isEmptyObject(obj) {
  return !obj || typeof obj !== "object" || Object.keys(obj).length === 0;
}

// Function to safely check if a value is empty
export function isEmptyValue(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length === 0
  )
    return true;
  return false;
}

// Function to remove empty/null/undefined values with deep cleaning
export function removeEmptyValues(obj) {
  // Check if input is valid
  if (isEmptyObject(obj)) {
    return {};
  }

  const cleaned = Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => !isEmptyValue(value)),
  );

  // Recursively clean nested objects if any
  Object.keys(cleaned).forEach((key) => {
    if (
      typeof cleaned[key] === "object" &&
      !Array.isArray(cleaned[key]) &&
      cleaned[key] !== null
    ) {
      cleaned[key] = removeEmptyValues(cleaned[key]);
    }
  });

  return cleaned;
}

// Function to split instructions into an array of steps
export function splitInstructions(instructions) {
  // Handle invalid input
  if (!instructions || typeof instructions !== "string") {
    return [];
  }

  let steps = [];

  // Try multiple splitting strategies
  if (instructions.includes("step") || instructions.includes("Step")) {
    // Split by "step X" pattern (case insensitive)
    steps = instructions
      .split(/step\s*\d+\s*\r?\n/i)
      .filter((step) => step.trim() !== "");
  }

  // If no steps found or splitting didn't work, try double line breaks
  if (steps.length === 0) {
    steps = instructions
      .split(/\r?\n\s*\r?\n/)
      .filter((step) => step.trim() !== "");
  }

  // If still no steps, try single line breaks
  if (steps.length === 0) {
    steps = instructions.split(/\r?\n/).filter((step) => step.trim() !== "");
  }

  // Clean each step
  return steps
    .map((step) => step.replace(/^\s*step\s*\d+\s*/i, "").trim())
    .filter((step) => step !== "");
}

// Function to pair ingredients with measures
export function pairIngredientsAndMeasures(mealObj) {
  // Check if mealObj is valid
  if (isEmptyObject(mealObj)) {
    return [];
  }

  const ingredients = [];

  // Extract ingredients and measures
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealObj[`strIngredient${i}`];
    const measure = mealObj[`strMeasure${i}`];

    if (
      ingredient &&
      typeof ingredient === "string" &&
      ingredient.trim() !== "" &&
      measure &&
      typeof measure === "string" &&
      measure.trim() !== ""
    ) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure.trim(),
      });
    }
  }

  return ingredients;
}

// Function to validate and clean the final result
