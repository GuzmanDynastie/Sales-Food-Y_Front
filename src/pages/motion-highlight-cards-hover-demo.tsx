import { Blocks } from "lucide-react";
import { Layers2 } from "@/components/animate-ui/icons/layers-2";
import { Shrink } from "@/components/animate-ui/icons/shrink";
import { MotionHighlight } from "@/components/animate-ui/effects/motion-highlight";
import { RadixDialogDemo } from "./radix-dialog-demo";
import { useState } from "react";

const CARDS = [
  {
    value: "1",
    icon: Layers2,
    title: "Registrar venta",
    description:
      "Agrega una nueva venta al sistema de forma rápida y sencilla.",
  },
  {
    value: "2",
    icon: Blocks,
    title: "Mi inventario",
    description:
      "Consulta y administra tus productos y sus existencias fácilmente.",
  },
  {
    value: "3",
    icon: Shrink,
    title: "Ingresos",
    description:
      "Filtra ingresos por fecha y programa reportes automáticos según tus necesidades.",
  },
];

export const MotionHighlightCardsHoverDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MotionHighlight hover className="rounded-xl">
          {CARDS.map((card) => (
            <div
              key={card.value}
              data-value={card.value}
              onClick={() => setOpen(true)}
            >
              <div className="p-4 flex flex-col border rounded-xl">
                <div className="flex items-center justify-around size-10 rounded-lg bg-blue-500/10 mb-2">
                  <card.icon className="size-5 text-blue-500" />
                </div>
                <p className="text-base font-medium mb-1">{card.title}</p>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </MotionHighlight>
      </div>

      <RadixDialogDemo open={open} onOpenChange={setOpen}/>
      {/* <TabsDemo /> */}
    </>
  );
};
