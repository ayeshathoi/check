import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://dzaumxbflepbicflsehj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YXVteGJmbGVwYmljZmxzZWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NDcxMzQsImV4cCI6MjA3NzQyMzEzNH0.xMC2WtkMXwKdybzAqN1HhYxCR1xJ9NTrHnQNcIcedxs";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveScoreToSupabase(score1, score2) {
  const randomId = Math.random().toString(36).substring(2, 10);

  const { data, error } = await supabase
    .from("scores")
    .insert([{ id: randomId, score1, score2 }]);

  if (error) {
    console.error("Error saving score:", error);
  } else {
    console.log("Score saved to Supabase:", data);
  }
}
