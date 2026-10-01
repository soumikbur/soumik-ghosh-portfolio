import React from "react";

interface SpecTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export function SpecTable({ headers, rows }: SpecTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950/60 font-mono text-xs">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900/60 text-zinc-400">
            {headers.map((header, i) => (
              <th key={i} className="py-3 px-4 uppercase text-[11px] tracking-wider font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-850 text-zinc-300">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-zinc-900/40 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="py-3 px-4 font-sans text-xs">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
