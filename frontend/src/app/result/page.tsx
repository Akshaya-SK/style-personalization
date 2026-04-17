"use client";

import { useEffect, useState } from "react";

export default function Result() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("result");
    if (stored) setData(JSON.parse(stored));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-10">
      {" "}
      <h1 className="text-2xl font-bold">Your Style Profile</h1>
      <p>Face Shape: {data.face_shape}</p>
      <p>Body Type: {data.body_type}</p>
      <p>Color Profile: {data.color_profile}</p>
      <p>Aesthetic: {data.aesthetic}</p>
    </div>
  );
}
