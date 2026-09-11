import { useEffect, useState } from "react";
import { t } from "./i18n";

/* ──────────────────────────────────────────────────────────────
   AgentFlow — the hero's live governance pipeline.

   HTML cards carry the text (crisp, translatable, themeable) and
   sit on top of an SVG layer that draws the connecting edges and
   the travelling light pulses. Both share the same coordinate
   space: the container is locked to the viewBox aspect ratio, so
   percentage-positioned cards land exactly on the SVG anchors.
   ────────────────────────────────────────────────────────────── */

const VB = { w: 440, h: 470 };

// Node centres in viewBox units.
const NODES = [
  { x: 150, y: 52 },
  { x: 288, y: 178 },
  { x: 150, y: 304 },
  { x: 290, y: 424 },
];

const CARD_W = 232;
const CARD_H = 72;

// Edge curves, drawn card-edge to card-edge.
const EDGES = [
  "M150,88 C150,118 288,114 288,142",
  "M288,214 C288,244 150,240 150,268",
  "M150,340 C150,368 290,362 290,388",
];

/* Stage machine — one event per full cycle. */
const STAGES = [
  { key: "ingest", ms: 950 },
  { key: "route", ms: 950 },
  { key: "inspect", ms: 800 },
  { key: "verdict", ms: 1150 },
  { key: "settle", ms: 700 },
];

const pct = (v, total) => `${(v / total) * 100}%`;

/* ── Icons ────────────────────────────────────────────────────── */

function Icon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    "aria-hidden": true,
  };
  if (name === "ingest")
    return (
      <svg {...common}>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-3.9-.9L3 20.5l1.6-4.6A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4Z" />
      </svg>
    );
  if (name === "route")
    return (
      <svg {...common}>
        <circle cx="5" cy="12" r="2.2" />
        <circle cx="19" cy="6" r="2.2" />
        <circle cx="19" cy="18" r="2.2" />
        <path d="M7.2 11.2 16.9 6.7M7.2 12.8l9.7 4.5" />
      </svg>
    );
  if (name === "shield")
    return (
      <svg {...common}>
        <path d="M12 3 5 6v5.5c0 4.2 2.9 8.1 7 9.4 4.1-1.3 7-5.2 7-9.4V6l-7-3Z" />
        <path d="M9.3 12.2l1.9 1.9 3.6-3.7" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" />
      <path d="m8.8 12 2.3 2.3 4.2-4.3" />
    </svg>
  );
}

/* ── Node card ────────────────────────────────────────────────── */

function NodeCard({ node, index, label, sub, active, state, children }) {
  const tone =
    state === "blocked"
      ? "border-amber-400/45 shadow-[0_0_40px_-12px_rgba(251,191,36,0.55)]"
      : state === "passed"
        ? "border-accent/50 shadow-[0_0_40px_-12px_var(--color-accent)]"
        : active
          ? "border-cyan/45 shadow-[0_0_40px_-14px_var(--color-cyan)]"
          : "border-white/[0.08]";

  const iconTone =
    state === "blocked"
      ? "text-amber-300"
      : state === "passed"
        ? "text-accent"
        : active
          ? "text-cyan"
          : "text-zinc-500";

  return (
    <div
      className={`glass absolute -translate-x-1/2 -translate-y-1/2 rounded-xl transition-all duration-500 ${tone}`}
      style={{
        left: pct(node.x, VB.w),
        top: pct(node.y, VB.h),
        width: pct(CARD_W, VB.w),
        minHeight: pct(CARD_H, VB.h),
        padding: "clamp(8px,2.3cqw,14px)",
      }}
    >
      <div className="flex items-start gap-[0.6em]" style={{ fontSize: "clamp(11px,2.9cqw,15px)" }}>
        <span className={`mt-[0.1em] shrink-0 transition-colors duration-500 ${iconTone}`}>
          <Icon name={["ingest", "route", "shield", "action"][index]} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold leading-tight text-white">{label}</p>
          <p
            className="mt-[0.25em] truncate leading-tight text-zinc-500"
            style={{ fontSize: "clamp(8px,2.05cqw,11px)" }}
          >
            {sub}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Component ────────────────────────────────────────────────── */

export default function AgentFlow({ locale }) {
  const f = t(locale).hero.flow;

  const [stage, setStage] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Advance the stage machine; each wrap counts one processed event.
  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => {
      setStage((s) => {
        const next = (s + 1) % STAGES.length;
        if (next === 0) setCycle((c) => c + 1);
        return next;
      });
    }, STAGES[stage].ms);
    return () => clearTimeout(id);
  }, [stage, reduced, cycle]);

  // Every fourth event is held at the gate. The block cadence (4) is
  // deliberately coprime with the event and agent cadences (3), so the
  // same event type isn't the one always rejected.
  const blocked = !reduced && cycle % 4 === 3;
  const key = STAGES[stage].key;
  const eventLabel = f.events[cycle % f.events.length];
  const reason = f.blockReasons[Math.floor(cycle / 4) % f.blockReasons.length];
  const activeAgent = cycle % f.agents.length;

  const settled = key === "verdict" || key === "settle";
  const gateState = reduced
    ? "passed"
    : settled
      ? blocked
        ? "blocked"
        : "passed"
      : "idle";
  const actionState = reduced ? "passed" : settled && !blocked ? "passed" : "idle";

  // Which edge carries a pulse right now.
  const pulseEdge =
    reduced || blocked
      ? key === "ingest"
        ? 0
        : key === "route"
          ? 1
          : -1
      : key === "ingest"
        ? 0
        : key === "route"
          ? 1
          : key === "verdict"
            ? 2
            : -1;

  return (
    <div
      className="relative w-full"
      style={{ containerType: "inline-size", aspectRatio: `${VB.w} / ${VB.h}` }}
      role="img"
      aria-label={`${f.title}. ${f.caption}`}
    >
      {/* Ambient light, tinted by the current verdict */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[4%] top-[2%] h-[52%] w-[58%] rounded-full bg-accent/[0.16] blur-[90px]" />
        <div className="absolute bottom-[4%] right-[2%] h-[52%] w-[58%] rounded-full bg-cyan/[0.16] blur-[90px]" />
        <div
          className={`absolute left-[6%] top-[52%] h-[34%] w-[52%] rounded-full blur-[80px] transition-colors duration-700 ${
            gateState === "blocked" ? "bg-amber-400/20" : "bg-accent/[0.12]"
          }`}
        />
      </div>

      {/* Edges + pulses */}
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="af-edge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-cyan)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {EDGES.map((d, i) => {
          const dimmed = i === 2 && (gateState === "blocked" || gateState === "idle");
          return (
            <g key={d}>
              <path
                d={d}
                stroke="url(#af-edge)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray={dimmed ? "4 6" : undefined}
                className="transition-opacity duration-500"
                opacity={dimmed ? 0.3 : 0.75}
              />
              {pulseEdge === i && (
                <path
                  key={`pulse-${i}-${cycle}-${key}`}
                  d={d}
                  pathLength="100"
                  stroke={i === 2 ? "var(--color-accent)" : "var(--color-cyan)"}
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  className="edge-pulse"
                  style={{ filter: "drop-shadow(0 0 5px currentColor)" }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      <NodeCard
        node={NODES[0]}
        index={0}
        label={f.nodes[0].label}
        sub={f.nodes[0].sub}
        active={key === "ingest"}
      >
        <div
          className="mt-[0.5em] inline-flex max-w-full items-center gap-[0.45em] rounded-md border border-cyan/25 bg-cyan/10 px-[0.5em] py-[0.2em] text-cyan"
          style={{ fontSize: "clamp(8px,1.95cqw,10.5px)" }}
        >
          <span className="h-[0.35em] w-[0.35em] shrink-0 rounded-full bg-cyan" />
          <span className="truncate font-mono">{eventLabel}</span>
        </div>
      </NodeCard>

      <NodeCard
        node={NODES[1]}
        index={1}
        label={f.nodes[1].label}
        sub={f.nodes[1].sub}
        active={key === "route"}
      >
        <div className="mt-[0.5em] flex flex-wrap gap-[0.3em]">
          {f.agents.map((a, i) => (
            <span
              key={a}
              className={`rounded font-mono transition-colors duration-500 ${
                i === activeAgent
                  ? "border border-cyan/40 bg-cyan/15 text-cyan"
                  : "border border-white/[0.07] text-zinc-500"
              }`}
              style={{ fontSize: "clamp(7.5px,1.85cqw,10px)", padding: "0.18em 0.42em" }}
            >
              {a}
            </span>
          ))}
        </div>
      </NodeCard>

      <NodeCard
        node={NODES[2]}
        index={2}
        label={f.nodes[2].label}
        sub={f.nodes[2].sub}
        active={key === "inspect"}
        state={gateState}
      >
        <div
          className="mt-[0.5em] flex items-center gap-[0.45em] font-mono"
          style={{ fontSize: "clamp(8px,1.95cqw,10.5px)" }}
        >
          {gateState === "blocked" ? (
            <>
              <span className="h-[0.35em] w-[0.35em] shrink-0 rounded-full bg-amber-400" />
              <span className="truncate text-amber-300">
                {f.block} · {reason}
              </span>
            </>
          ) : gateState === "passed" ? (
            <>
              <span className="h-[0.35em] w-[0.35em] shrink-0 rounded-full bg-accent" />
              <span className="truncate text-accent">{f.pass}</span>
            </>
          ) : (
            <>
              <span className="h-[0.35em] w-[0.35em] shrink-0 animate-pulse rounded-full bg-cyan" />
              <span className="truncate text-zinc-400">{f.inspecting}…</span>
            </>
          )}
        </div>
      </NodeCard>

      <NodeCard
        node={NODES[3]}
        index={3}
        label={f.nodes[3].label}
        sub={f.nodes[3].sub}
        state={actionState}
      >
        {gateState === "blocked" && (
          <div
            className="mt-[0.5em] truncate font-mono text-amber-300/80"
            style={{ fontSize: "clamp(8px,1.95cqw,10.5px)" }}
          >
            {f.held}
          </div>
        )}
      </NodeCard>
    </div>
  );
}
