let name = "  Hissee  ";
console.log("Original:", name);
console.log("Trimmed:", name.trim());
console.log("Uppercase:", name.toUpperCase());

// Loop through characters
let cleanedName = name.trim();
for (let i = 0; i < cleanedName.length; i++) {
  console.log(`Character ${i + 1}:`, cleanedName[i]);
}
