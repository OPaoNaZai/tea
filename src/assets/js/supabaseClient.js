// src/js/supabaseClient.js
const SUPABASE_URL = "https://gfvzqdydcjynxseiswwh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmdnpxZHlkY2p5bnhzZWlzd3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NDI0MDksImV4cCI6MjA3ODMxODQwOX0.n0gaMxtldCFEw0PkH_NKyN6J_e1vKJ5s8GwsKOGq0Q0";

// 初始化 Supabase 客户端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 导出客户端，供其他页面使用
export { supabase };