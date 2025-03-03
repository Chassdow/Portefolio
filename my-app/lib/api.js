import { supabase } from './supabaseClient';

export async function getProjects() {
  let { data, error } = await supabase.from('projects').select('*');
  if (error) {
    console.error('Erreur lors de la récupération des projets:', error);
    return [];
  }
  return data;
}
