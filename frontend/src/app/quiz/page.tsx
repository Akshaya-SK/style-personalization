"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    face_ratio: "",
    jaw_shape: "",
    widest_area: "",
    shoulder_hip_ratio: "",
    waist_definition: "",
    body_build: "",
    undertone_veins: "",
    jewelry_preference: "",
    contrast_level: "",
    silhouette_preference: "",
    vibe: "",
    color_pattern_comfort: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8000/api/generate-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    localStorage.setItem("result", JSON.stringify(data));
    router.push("/result");
  };

  return (
    <div className="p-10 space-y-4">
      {/* FACE */}
      <select name="face_ratio" onChange={handleChange}>
        <option value="">Face Ratio</option>
        <option value="longer">Longer</option>
        <option value="equal">Equal</option>
        <option value="shorter">Shorter</option>
      </select>

      <select name="jaw_shape" onChange={handleChange}>
        <option value="">Jaw Shape</option>
        <option value="sharp">Sharp</option>
        <option value="soft">Soft</option>
        <option value="pointed">Pointed</option>
      </select>

      <select name="widest_area" onChange={handleChange}>
        <option value="">Widest Area</option>
        <option value="forehead">Forehead</option>
        <option value="cheekbones">Cheekbones</option>
        <option value="jaw">Jaw</option>
      </select>

      {/* BODY */}
      <select name="shoulder_hip_ratio" onChange={handleChange}>
        <option value="">Shoulders vs Hips</option>
        <option value="shoulders_wider">Shoulders Wider</option>
        <option value="equal">Equal</option>
        <option value="hips_wider">Hips Wider</option>
      </select>

      <select name="waist_definition" onChange={handleChange}>
        <option value="">Waist Definition</option>
        <option value="defined">Defined</option>
        <option value="slight">Slight</option>
        <option value="none">None</option>
      </select>

      <select name="body_build" onChange={handleChange}>
        <option value="">Body Build</option>
        <option value="lean">Lean</option>
        <option value="average">Average</option>
        <option value="full">Full</option>
      </select>

      {/* COLOR */}
      <select name="undertone_veins" onChange={handleChange}>
        <option value="">Vein Color</option>
        <option value="green">Green</option>
        <option value="blue_purple">Blue/Purple</option>
        <option value="mixed">Mixed</option>
      </select>

      <select name="jewelry_preference" onChange={handleChange}>
        <option value="">Jewelry Preference</option>
        <option value="gold">Gold</option>
        <option value="silver">Silver</option>
        <option value="both">Both</option>
      </select>

      <select name="contrast_level" onChange={handleChange}>
        <option value="">Contrast Level</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      {/* STYLE */}
      <select name="silhouette_preference" onChange={handleChange}>
        <option value="">Silhouette</option>
        <option value="flowy">Flowy</option>
        <option value="structured">Structured</option>
        <option value="minimal">Minimal</option>
        <option value="bold">Bold</option>
        <option value="feminine">Feminine</option>
      </select>

      <select name="vibe" onChange={handleChange}>
        <option value="">Vibe</option>
        <option value="effortless">Effortless</option>
        <option value="elegant">Elegant</option>
        <option value="edgy">Edgy</option>
        <option value="soft">Soft</option>
        <option value="sporty">Sporty</option>
      </select>

      <select name="color_pattern_comfort" onChange={handleChange}>
        <option value="">Color Comfort</option>
        <option value="neutral">Neutral</option>
        <option value="soft_colors">Soft Colors</option>
        <option value="bright">Bright</option>
        <option value="dark">Dark</option>
        <option value="mixed">Mixed</option>
      </select>

      {/* SUBMIT */}
      <button onClick={handleSubmit} className="px-4 py-2 bg-black text-white">
        Submit
      </button>
    </div>
  );
}
