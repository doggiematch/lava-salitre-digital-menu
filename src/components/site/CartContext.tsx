import { createContext, useContext, useState, type ReactNode } from "react";

type Item = { id: string; name: string; price: number; qty: number };
type Ctx = {
  items: Item[];
  add: (i: Omit<Item, "qty">) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
};

const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const add: Ctx["add"] = (i) =>
    setItems((prev) => {
      const ex = prev.find((p) => p.id === i.id);
      if (ex) return prev.map((p) => (p.id === i.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...i, qty: 1 }];
    });
  const remove: Ctx["remove"] = (id) =>
    setItems((prev) =>
      prev.flatMap((p) => (p.id === id ? (p.qty > 1 ? [{ ...p, qty: p.qty - 1 }] : []) : [p]))
    );
  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return <CartCtx.Provider value={{ items, add, remove, clear, total, count }}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
