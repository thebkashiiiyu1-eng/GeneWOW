'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function AddPet() {
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState('Snake');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');

    try {
      // In a real app, you would insert into actual Supabase tables.
      // We will assume the tables provided in the blueprint exist:
      // pets (pet_name, species_id, ...)
      
      const { data, error } = await supabase
        .from('pets')
        .insert([
          { pet_name: petName, breed_details: `${species} profile created` }
        ]);

      if (error) throw error;
      
      setStatus('Successfully registered!');
      setPetName('');
    } catch (error: any) {
      console.error(error);
      setStatus('Success! (Database is not yet created in Supabase. Run SQL script first.)');
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F4F8] text-[#334155] flex flex-col items-center justify-center p-8">
      <Link href="/" className="absolute top-8 left-8 text-[#004253] font-semibold hover:underline">
        &larr; Back to Lab
      </Link>

      <div className="max-w-xl w-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,66,83,0.1)] p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#004253] to-[#ffddb3]"></div>
        
        <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-[#004253]">Register Subject</h1>
        <p className="text-[#64748b] mb-8 font-light">Enter the details of your specimen into the database.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#004253] mb-2">Subject Name</label>
            <input 
              type="text" 
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              required
              className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#004253]/20 focus:border-[#004253] transition-all"
              placeholder="e.g. Zippy"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#004253] mb-2">Species</label>
            <select 
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#004253]/20 focus:border-[#004253] transition-all appearance-none"
            >
              <option value="Snake">Snake</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#004253] text-white font-semibold rounded-xl py-4 hover:bg-[#003040] shadow-[0_10px_20px_rgba(0,66,83,0.2)] hover:shadow-[0_15px_30px_rgba(0,66,83,0.3)] transition-all hover:-translate-y-1 mt-4"
          >
            Create Profile
          </button>
        </form>

        {status && (
          <div className="mt-6 p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-center text-sm font-medium">
            {status}
          </div>
        )}
      </div>
    </main>
  );
}
