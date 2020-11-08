import React, { useState } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Card from "../molecules/Card";
import { Link } from "react-router-dom"

export default function HomePage({ information }) {
  // We render multiple components using map function
  const [query, setQuery] = useState("");

  return (
    <div className="home-page">
      <Header />
      <section className="enter-tid">
        <h2>Enter your Tracking id: </h2>
        
        <div className="tid-bar">
        <input
          placeholder="Tracking ID"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Link className="button" to="/results">Click</Link>
        
      </div>
      </section>
    </div>


  );
}




