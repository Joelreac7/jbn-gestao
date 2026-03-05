
"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{display:"flex", minHeight:"100vh"}}>
      <div style={{width:220, background:"#111827", color:"white", padding:20}}>
        <h2>JBN Gestão</h2>
        <hr/>
        <p><Link href="/">Dashboard</Link></p>
        <p><Link href="/clientes">Clientes</Link></p>
      </div>

      <div style={{flex:1, padding:40}}>
        <h1>Dashboard</h1>
        <p>Sistema de gestão da JBN Eventos</p>
      </div>
    </div>
  );
}
