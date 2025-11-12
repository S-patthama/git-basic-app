import React from "react";

/**
 * About Us page component
 * Save as /c:/git-patthama/git-basic-app/about.js
 */

export default function About() {
    const team = [
        { name: "Alesdfx Morgan", role: "Founder & CEO", bio: "Product visionary focused on simplicity." },
        { name: "Prasfiya Singh", role: "CTO", bio: "Builds reliable, scalable systems." },
        { name: "Saasfm Rivera", role: "Head of Design", bio: "Designs human-centered experiences." }
    ];

    const styles = {
        container: {
            fontFamily: "'Segoe UI', Roboto, system-ui, -apple-system, sans-serif",
            color: "#1f2937",
            padding: "32px",
            maxWidth: 960,
            margin: "0 auto",
            lineHeight: 1.5
        },
        header: { marginBottom: 24 },
        title: { fontSize: 28, margin: 0 },
        subtitle: { color: "#6b7280", marginTop: 8 },
        section: { marginTop: 28 },
        grid: { display: "flex", gap: 16, flexWrap: "wrap" },
        card: {
            borderRadius: 8,
            padding: 16,
            background: "#ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            minWidth: 220,
            flex: "1 1 220px"
        },
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 999,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
            background: "#eef2ff",
            color: "#3730a3",
            fontWeight: 600
        },
        footer: { marginTop: 40, color: "#6b7280", fontSize: 13 }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>About Us</h1>
                <p style={styles.subtitle}>
                    We build simple, reliable software that helps teams move faster and focus on what matters.
                </p>
            </header>

            <main>
                <section style={styles.section} aria-labelledby="mission">
                    <h2 id="mission">Our Mission</h2>
                    <p>
                        Deliver clear, maintainable tools and delightful user experiences. We believe great
                        software solves real problems with minimal friction.
                    </p>
                </section>

                <section style={styles.section} aria-labelledby="values">
                    <h2 id="values">Core Values</h2>
                    <ul>
                        <li>Clarity — make decisions visible and predictable.</li>
                        <li>Craftsmanship — ship thoughtfully engineered solutions.</li>
                        <li>Empathy — design with real people in mind.</li>
                    </ul>
                </section>

                <section style={styles.section} aria-labelledby="team">
                    <h2 id="team">Meet the Team</h2>
                    <div style={styles.grid}>
                        {team.map((m) => (
                            <article key={m.name} style={styles.card}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={styles.avatar} aria-hidden>
                                        {m.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
                                    </div>
                                    <div>
                                        <strong>{m.name}</strong>
                                        <div style={{ color: "#6b7280", fontSize: 13 }}>{m.role}</div>
                                    </div>
                                </div>
                                <p style={{ marginTop: 12, marginBottom: 0, color: "#374151" }}>{m.bio}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section style={styles.section} aria-labelledby="contact">
                    <h2 id="contact">Contact</h2>
                    <p>
                        Email: <a href="mailto:hello@example.com">hello@example.com</a>
                    </p>
                </section>
            </main>

            <footer style={styles.footer}>
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </footer>
        </div>
    );
}