import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hctvopeouuimekbbrfhp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjdHZvcGVvdXVpbWVrYmJyZmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNzM0MjgsImV4cCI6MjA4ODY0OTQyOH0.V2nOevdB6Wurz6iZy1vivCBYI1chLq7TCGmNqTowKTk"

export const supabase = createClient(supabaseUrl, supabaseKey)