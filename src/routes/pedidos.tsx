import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SectionTitle } from "@/components/site/SectionTitle";
import { useCart } from "@/components/site/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/pedidos")({
  component: Pedidos,
  head: () => ({
    meta: [
      { title: "Pedidos para llevar — Lava & Salitre" },
      { name: "description", content: "Pide nuestra cocina para llevar. Selecciona tus platos y finaliza el pedido." },
    ],
  }),
});

const products = [
  { id: "tw-1", name: "Bienmesabe Lunar", price: 14, d: "Lorem ipsum dolor sit amet." },
  { id: "tw-2", name: "Frangollo Volcánico", price: 12, d: "Lorem ipsum dolor sit amet." },
  { id: "tw-3", name: "Quesillo Atlántico", price: 16, d: "Lorem ipsum dolor sit amet." },
  { id: "tw-4", name: "Almendra de Tejeda", price: 11, d: "Lorem ipsum dolor sit amet." },
  { id: "tw-5", name: "Miel de Palma Ahumada", price: 9, d: "Lorem ipsum dolor sit amet." },
  { id: "tw-6", name: "Gofio en Nube", price: 8, d: "Lorem ipsum dolor sit amet." },
];

function Pedidos() {
  const { items, add, remove, clear, total, count } = useCart();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle eyebrow="Take away" title="Pedidos para llevar" subtitle="Una selección curada de nuestra cocina, lista para disfrutar en casa." />

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {products.map((p) => (
            <div key={p.id} className="flex flex-col rounded-md border border-border bg-card/60 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg">{p.name}</h3>
                <span className="font-serif text-accent">{p.price}€</span>
              </div>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.d}</p>
              <button
                onClick={() => add({ id: p.id, name: p.name, price: p.price })}
                className="mt-4 self-start rounded-full border border-foreground px-4 py-2 text-xs uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground"
              >
                Añadir
              </button>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-md border border-border bg-background p-6 lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl">Tu pedido</h3>
            {items.length > 0 && (
              <button onClick={clear} className="text-muted-foreground hover:text-destructive">
                <Trash2 size={16} />
              </button>
            )}
          </div>
          <div className="my-4 hairline" />
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aún no has añadido platos.</p>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li key={i.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p>{i.name}</p>
                    <p className="text-xs text-muted-foreground">{i.price}€ · ud</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => remove(i.id)} className="rounded-full border border-border p-1"><Minus size={12} /></button>
                    <span className="w-5 text-center text-xs">{i.qty}</span>
                    <button onClick={() => add({ id: i.id, name: i.name, price: i.price })} className="rounded-full border border-border p-1"><Plus size={12} /></button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
            <span className="uppercase tracking-widest text-muted-foreground">Total</span>
            <span className="font-serif text-2xl">{total.toFixed(2)}€</span>
          </div>
          <button
            disabled={count === 0}
            onClick={() => {
              toast.success("Pedido confirmado", { description: "Recibirás un email con los detalles." });
              clear();
            }}
            className="mt-5 w-full rounded-full bg-foreground py-3 text-xs uppercase tracking-[0.3em] text-primary-foreground transition disabled:opacity-40 hover:bg-stone-volcanic"
          >
            Finalizar pedido
          </button>
        </aside>
      </div>
    </div>
  );
}
