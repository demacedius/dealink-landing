import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vagiudvofcosmjovxwuf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhZ2l1ZHZvZmNvc21qb3Z4d3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTQ5NDYsImV4cCI6MjA2NjY3MDk0Nn0.j8CeeatL7LpJI0Hzc5lax5Wt1o9LTfiyJwvH8GBKUbc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)