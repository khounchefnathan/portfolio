"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/content/site";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!siteConfig.web3formsAccessKey) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", siteConfig.web3formsAccessKey);
    data.append("subject", `Nouveau message depuis le portfolio — ${data.get("name")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Téléphone" name="phone" type="tel" />
      <div>
        <label className="mb-2 block text-sm text-muted" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          placeholder="Parlez-moi de votre projet…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-400">
          Merci, votre message a bien été envoyé ! Je vous réponds au plus vite.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-accent">
          Le formulaire n&rsquo;est pas encore activé — contactez-moi directement par téléphone ou email en
          attendant.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-muted" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
