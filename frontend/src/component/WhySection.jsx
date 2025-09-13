import React from 'react'

function WhySection() {
  return (
   <section id="why" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-medium text-zinc-100">Minimal by design</div>
              <p className="mt-2 text-sm text-zinc-400">No clutter. Just the signal you need to move faster and with confidence.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-100">Locally empowered</div>
              <p className="mt-2 text-sm text-zinc-400">Works with local models like Mistral via Ollama for privacy and control.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-100">Crafted for teams</div>
              <p className="mt-2 text-sm text-zinc-400">Shareable insights that fit into your workflow—clean, consistent, dependable.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhySection
