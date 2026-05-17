import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/reservas")({
  component: Reservas,
  head: () => ({
    meta: [
      { title: "Reservas — Lava & Salitre" },
      { name: "description", content: "Solicita tu reserva en Lava & Salitre, Puerto de las Nieves, Agaete." },
    ],
  }),
});

function Reservas() {
  const [form, setForm] = useState({ date: "", time: "20:30", people: 2, table: "" });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    toast.success("Solicitud enviada", { description: "Te confirmaremos por email en breve." });
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <SectionTitle eyebrow="Reservas" title="Reserva tu mesa" subtitle="Lorem ipsum dolor sit amet. Te confirmaremos disponibilidad por email." align="center" />

      <form onSubmit={submit} className="mt-10 space-y-5 rounded-md border border-border bg-card/60 p-6 lg:p-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Field label="Fecha">
            <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input" />
          </Field>
          <Field label="Hora">
            <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="input">
              {["13:00","13:30","14:00","14:30","20:00","20:30","21:00","21:30","22:00"].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Personas">
            <input type="number" min={1} max={12} value={form.people} onChange={(e) => setForm({ ...form, people: +e.target.value })} className="input" />
          </Field>
          <Field label="Mesa (opcional)">
            <input type="text" value={form.table} onChange={(e) => setForm({ ...form, table: e.target.value })} placeholder="Ej. terraza" className="input" />
          </Field>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-foreground py-3 text-xs uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-stone-volcanic"
        >
          Solicitar reserva
        </button>

        {done && (
          <div className="rounded-md border border-accent/40 bg-accent/10 p-4 text-sm">
            <p className="font-serif text-base">Reserva solicitada ✦</p>
            <p className="text-muted-foreground">Lorem ipsum: en breve recibirás la confirmación.</p>
          </div>
        )}
      </form>

      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);border-radius:.375rem;padding:.65rem .8rem;font-size:.875rem;outline:none}.input:focus{border-color:var(--accent)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
