const facts = [
  "🌋 Taal Volcano is the smallest active volcano in the world.",
  "🎄 Filipinos celebrate the longest Christmas season, starting in September!",
  "🛺 Jeepneys were made from WWII US military jeeps.",
  "🌊 The Puerto Princesa Underground River is a UNESCO World Heritage Site.",
  "🌴 The Philippines has 7,641 islands—only about 2,000 are inhabited.",
  "🎉 Each town has its own fiesta celebrating local culture and patron saints.",
  "🥚 Balut is a famous delicacy: a fertilized duck egg!",
  "🎭 Filipinos are known for their warm hospitality and colorful festivals."
];

function showFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = fact;
}
