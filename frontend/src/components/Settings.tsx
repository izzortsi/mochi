"use client";
import { useState } from "react";
import { X } from "lucide-react";
import {
  loadConfig,
  saveConfig,
  modelsForProvider,
  defaultModelForProvider,
} from "@/lib/settings";
import type { LlmConfig, LlmProvider } from "@/lib/types";

interface Props { onClose: () => void; }

export function Settings({ onClose }: Props) {
  const [config, setConfig] = useState<LlmConfig>(loadConfig());

  const submit = () => { saveConfig(config); onClose(); };

  const onProviderChange = (provider: LlmProvider) => {
    const models = modelsForProvider(provider);
    const model = models.some(m => m.id === config.model)
      ? config.model
      : defaultModelForProvider(provider);
    setConfig({ ...config, provider, model });
  };

  const models = modelsForProvider(config.provider);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#121222] border border-[#2a2a3f] rounded-xl p-6 w-96" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-display text-xl">LLM Settings</h2>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>
        <label className="block mb-3">
          <span className="text-sm opacity-70">Provider</span>
          <select
            value={config.provider}
            onChange={e => onProviderChange(e.target.value as LlmProvider)}
            className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
          >
            <option value="zai">z.ai (API key)</option>
            <option value="anthropic-oauth">Anthropic (Claude Pro/Max OAuth)</option>
          </select>
        </label>
        {config.provider === "zai" && (
          <label className="block mb-3">
            <span className="text-sm opacity-70">z.ai API key</span>
            <input
              type="password"
              value={config.apiKey}
              onChange={e => setConfig({ ...config, apiKey: e.target.value })}
              className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2 font-mono text-sm"
            />
          </label>
        )}
        {config.provider === "anthropic-oauth" && (
          <p className="mb-3 text-xs opacity-60 leading-relaxed">
            Tokens live server-side. If unauthenticated, run{" "}
            <code className="font-mono text-[#f5f0e8]">anthropic-oauth auth</code>{" "}
            in the backend shell once.
          </p>
        )}
        <label className="block mb-3">
          <span className="text-sm opacity-70">Model</span>
          <select
            value={config.model}
            onChange={e => setConfig({ ...config, model: e.target.value })}
            className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
          >
            {models.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
          </select>
        </label>
        <button
          onClick={submit}
          className="mt-2 w-full bg-phase1 hover:bg-phase2 rounded px-3 py-2 font-semibold transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
}
