// Backend.js
import { createClient } from "https://esm.sh/@supabase/supabase-js";

// Replace with my own project URL and anon key (from Supabase Settings → API)
const supabaseUrl = "https://dzaumxbflepbicflsehj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YXVteGJmbGVwYmljZmxzZWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NDcxMzQsImV4cCI6MjA3NzQyMzEzNH0.xMC2WtkMXwKdybzAqN1HhYxCR1xJ9NTrHnQNcIcedxs";
const supabase = createClient(supabaseUrl, supabaseKey);

// ========================
// 🎯 Quiz Logic
// ========================
let preScore = 0;
let postScore = 0;

const checkAnswersBtn = document.getElementById("checkAnswersBtn");
const continueBtn = document.getElementById("continueToGameBtn");

// When user clicks "Check Answers" (simulate quiz scoring)
checkAnswersBtn.addEventListener("click", () => {
  // TODO: Replace this with your actual score calculation logic
  preScore = Math.floor(Math.random() * 10) + 1; // random score 1–10

  alert(`Your pre-quiz score is ${preScore}`);

  // Show the Continue button
  continueBtn.classList.remove("hidden");
});

// When user clicks "Continue", generate post-score & save to Supabase
continueBtn.addEventListener("click", async () => {
  // TODO: Replace this with your actual post-quiz/game score logic
  postScore = Math.floor(Math.random() * 10) + 1;

  // Send data to Supabase
  const { data, error } = await supabase
    .from("scores")
    .insert([{ pre_score: preScore, post_score: postScore }])
    .select();

  if (error) {
    console.error("❌ Error saving to Supabase:", error);
    alert("Something went wrong while saving your scores.");
  } else {
    console.log("✅ Scores saved:", data);
    alert(`Scores saved successfully! Record ID: ${data[0].id}`);
  }

  // Optionally, hide buttons or move to next page
  continueBtn.classList.add("hidden");
});
