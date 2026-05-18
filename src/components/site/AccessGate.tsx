import { FormEvent, useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ACCESS_PASSWORD = "lava2026";
const ACCESS_STORAGE_KEY = "lava-salitre-access";

export function AccessGate({ children }: { children: React.ReactNode }) {
  const isPublicPresentation = useRouterState({
    select: (state) => state.location.pathname === "/proyecto/presentacion",
  });
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isPublicPresentation) {
      setIsCheckingAccess(false);
      return;
    }

    setIsAllowed(window.localStorage.getItem(ACCESS_STORAGE_KEY) === "granted");
    setIsCheckingAccess(false);
  }, [isPublicPresentation]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.trim() !== ACCESS_PASSWORD) {
      setError("Contrasena incorrecta");
      setPassword("");
      return;
    }

    window.localStorage.setItem(ACCESS_STORAGE_KEY, "granted");
    setIsAllowed(true);
  }

  if (isPublicPresentation || isAllowed) {
    return <>{children}</>;
  }

  if (isCheckingAccess) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <main className="paper flex min-h-screen items-center justify-center px-5 py-12">
      <section className="w-full max-w-md rounded-sm border border-border/70 bg-background/85 p-6 text-center shadow-xl backdrop-blur lg:p-8">
        <div className="mx-auto grid size-12 place-items-center rounded-md border border-accent/40 bg-accent/10 text-accent">
          <LockKeyhole className="size-5" />
        </div>
        <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-accent">Acceso privado</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground">Lava & Salitre</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Esta version esta protegida hasta la presentacion. Introduce la contrasena para consultar
          la web.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4 text-left">
          <label
            htmlFor="access-password"
            className="text-[10px] uppercase tracking-[0.24em] text-accent"
          >
            Contrasena
          </label>
          <Input
            id="access-password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            className="h-11 bg-background text-center text-base"
          />
          {error ? <p className="text-center text-xs text-destructive">{error}</p> : null}
          <Button type="submit" className="h-11 w-full uppercase tracking-[0.2em]">
            Entrar
          </Button>
        </form>
      </section>
    </main>
  );
}
