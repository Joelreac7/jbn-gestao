"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <div style={{
        width: "220px",
        background: "#111827",
        color: "white",
        padding: "20px"
      }}>
        <h2>JBN Gestão</h2>
        <hr />

        <p><Link href="/">Dashboard</Link></p>
        <p><Link href="/clientes">Clientes</Link></p>
        <p><Link href="/produtos">Produtos</Link></p>
        <p><Link href="/orcamentos">Orçamentos</Link></p>
        <p><Link href="/faturas">Faturas</Link></p>
        <p><Link href="/financeiro">Financeiro</Link></p>
      </div>

      <div style={{ flex: 1, padding: "40px" }}>
        <h1>Dashboard</h1>
        <p>Sistema de Gestão JBN Eventos</p>
      </div>

    </div>
  );
}
