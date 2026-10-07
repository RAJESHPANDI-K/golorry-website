const SUPABASE_URL = "https://bghwyhigkvglaorgosqc.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_r20IXg4HvZvmWeU9UBn6VA_OrvE_nIp";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
