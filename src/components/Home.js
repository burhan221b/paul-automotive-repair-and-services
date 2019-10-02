import React from 'react'
import "../scss/Home.scss";

export default function Home() {
    return (
        <div className="main-grid">
            {/* Hero-image */}
            <section className="grid-1 hero-image"></section>
            {/* Services */}
            <section className="grid-2"></section>
            {/* Location & About */}
            <section className="grid-3"></section>
            {/* Footer & Footer-image */}
            <footer className="grid-4 main-footer">
                <section className="footer-1 footer-image"></section>
                <section className="footer-2"></section>
            </footer>
        </div>
    )
}

