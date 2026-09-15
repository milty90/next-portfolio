"use client";

import Link from "next/link";
import { useState } from "react";

export function RequestCV() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/send-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus(`error`);
    }
  };

  return (
    <div
      id="requestcv"
      className="overflow-hidden min-h-dvh flex flex-col transition-all duration-700"
    >
      <header className="sticky top-0 z-50 bg-bg-alt/20 backdrop-blur-md border-b border-line">
        <nav className="flex flex-row items-center font-bold justify-between py-4.5 max-w-160 mx-auto">
          <a className="flex font-space text-ink text-[1.1rem] pl-2 gap-0.5">
            Milan<span className="text-blue">.</span>Tyopity
          </a>

          <div className="hidden md:block">
            <Link href="/" passHref>
              <button className="bg-transparent font-monospace flex items-center gap-1.5 text-[0.82rem] font-light text-ink-soft hover:text-ink px-5 py-2.5">
                ← Zurück zum Portfolio
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <section className="overflow-hidden flex flex-1 max-h-full pt-5 md:py-15 transition-all duration-700">
        <div className="flex flex-col text-ink-soft text-[0.96rem] mb-0  mx-auto">
          <p className="text-blue font-mono pl-2 mb-3.5 tracking-wide">
            {"// request CV"}
          </p>
          <h1 className="text-ink text-[2.4rem] font-trafont font-bold tracking-tight mb-10">
            Lebenslauf anfordern{" "}
          </h1>

          <p className="text-ink text-[1.0rem] font-inter mb-6">
            E-Mail-Adresse eintragen, um meinen Lebenslauf zu erhalten.{" "}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 gap-4 flex flex-col">
              <input
                className="border-2 border-line rounded-xl px-4 py-2.5 mb-3 w-fit text-ink text-[0.96rem] focus:outline-none focus:border-blue"
                type="email"
                required
                placeholder="deine@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
              />

              <button
                className="bg-transparent max-w-fit px-5 text-ink py-2.5 border-2 border-blue font-semibold text-[0.86rem] rounded-4xl whitespace-nowrap  hover:bg-ink hover:border-ink hover:text-bg transition-color duration-300 "
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Wird gesendet..." : "Senden"}
              </button>
            </div>
          </form>
          {status === "success" && (
            <p>
              Lebenslauf wurde gesendet! Bitte prüfe deinen Posteingang (auch
              Spam).
            </p>
          )}
          {status === "error" && (
            <p>Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
          )}
          <div className="mt-auto">
            <div className="border-t border-line w-160 mt-14 mb-3.5"></div>
            <p className="text-ink-soft/60 text-[0.78rem] font-mono tracking-wide">
              © 2026 Milan Tyopity. gebaut mit Vite, Tailwind &amp; TS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
