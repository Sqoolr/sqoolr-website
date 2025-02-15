
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eextrvidcxsgzjpbryvw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVleHRydmlkY3hzZ3pqcGJyeXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTgyMzgsImV4cCI6MjAyMTUzNDIzOH0.ZG2YqsYBQyxBXwU9HLGj45J5GqVe_5J6NIQcXhRmktE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
