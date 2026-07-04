/**
 * Mapa de proximidade: Google Maps real centrado na REGIÃO (bairro), não no
 * endereço exato. Um círculo translúcido reforça que a área é aproximada —
 * a localização exata é tratada no atendimento. Usa o embed do Google Maps
 * (sem necessidade de API key).
 */
export function MapaProximidade({
  neighborhood,
  zoom = 14,
}: {
  neighborhood: string;
  zoom?: number;
}) {
  const query = encodeURIComponent(`${neighborhood}, São Paulo, SP`);
  const src = `https://maps.google.com/maps?q=${query}&z=${zoom}&output=embed`;

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-2xl)] border border-border shadow-[var(--shadow-soft)]">
      <iframe
        title={`Região de ${neighborhood}, São Paulo`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
      />

      {/* Overlay de área aproximada (não bloqueia o mapa) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="aspect-square w-1/2 rounded-full border-2 border-dashed border-gold-500/70 bg-gold-500/10" />
      </div>

      {/* Selo */}
      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-surface/90 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-text-muted shadow-sm backdrop-blur">
        Localização aproximada
      </span>
    </div>
  );
}
