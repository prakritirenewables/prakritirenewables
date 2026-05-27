import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xnwxxkjcawnupxbeebmc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhud3h4a2pjYXdudXB4YmVlYm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4ODgyMTIsImV4cCI6MjA5NTQ2NDIxMn0.Ck6QnVcSl6928xfjKCPMnBFYGsjayfAktSyFKzKoqyo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)