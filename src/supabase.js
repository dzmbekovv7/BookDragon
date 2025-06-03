// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pxrxasnkqsftfmmyhovm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4cnhhc25rcXNmdGZtbXlob3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NjUzNDQsImV4cCI6MjA2NDQ0MTM0NH0.PLzZP5QGgSuh0E9dUlQHd3oIhaO3DaSUfOAa2p83lME'

export const supabase = createClient(supabaseUrl, supabaseKey)
