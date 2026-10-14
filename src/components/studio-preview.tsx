const layers = ["Overview", "Navigation", "Hero section", "Activity panel", "Project cards"];

export default function StudioPreview() {
  return (
    <div className="studio-preview" aria-label="Illustrative design workspace concept">
      <div className="studio-toolbar">
        <div className="studio-product">
          <span className="studio-product-mark" aria-hidden="true">N</span>
          <span className="studio-product-chevron" aria-hidden="true">⌄</span>
        </div>
        <div className="studio-toolbar-center">
          <div className="device-switch" aria-label="Desktop preview selected">
            <span className="device-active" aria-hidden="true">▣</span>
            <span aria-hidden="true">▯</span>
          </div>
          <div className="zoom-control"><span>W 1440px</span><i /> <span>⌕ 100%</span></div>
        </div>
        <div className="studio-people" aria-label="Two collaborators">
          <span>AM</span><span>RK</span>
        </div>
      </div>

      <div className="studio-workspace">
        <aside className="studio-sidebar" aria-label="Page layers">
          <div className="studio-tabs"><span>Pages</span><b>Layers</b><span>Assets</span></div>
          <div className="studio-page-select"><span aria-hidden="true">⌂</span> Overview <span className="select-chevron">⌄</span></div>
          <div className="layer-list">
            <p className="panel-caption">LAYERS <span>＋</span></p>
            {layers.map((layer, index) => (
              <div className={`layer-row${index === 0 ? " selected" : ""}`} key={layer}>
                <span className="layer-caret" aria-hidden="true">›</span>
                <span className="layer-icon" aria-hidden="true">▱</span>
                {layer}
              </div>
            ))}
          </div>
          <div className="sidebar-foot"><span className="green-dot" /> All changes saved</div>
        </aside>

        <section className="studio-canvas" aria-label="Design canvas">
          <div className="canvas-meta">
            <span>Northstar / Workspace</span>
            <span className="concept-tag">ILLUSTRATIVE CONCEPT</span>
          </div>
          <div className="artboard-row hero-designs" aria-label="Website design previews">
            <div className="hero-design hero-design-featured">
              <img src="/hero/pragya-foundation.jpg" alt="Pragya Foundation website design preview" />
            </div>
            <div className="hero-design">
              <img src="/hero/mosaic-figma.jpg" alt="Mosaic Figma automation website design preview" />
            </div>
          </div>
        </section>

        <aside className="studio-inspector" aria-label="Design properties">
          <div className="inspector-tools"><span>⊣</span><span>＋</span><span>⊢</span><span>↕</span><span>＋</span><span>⊥</span></div>
          <div className="inspector-section"><h3>Selection</h3><div className="property-row"><span>Type</span><b>Frame</b></div></div>
          <div className="inspector-section"><h3>Size <span>＋</span></h3><div className="property-row"><span>Width</span><b>1440</b></div><div className="property-row"><span>Height</span><b>Auto</b></div><div className="property-row"><span>Max width</span><b>1200</b></div></div>
          <div className="inspector-section"><h3>Layout <span>＋</span></h3><div className="property-row"><span>Direction</span><b>↔ &nbsp;↕</b></div><div className="property-row"><span>Gap</span><b>24 px</b></div></div>
          <div className="inspector-section"><h3>Appearance <span>＋</span></h3><div className="property-row"><span>Fill</span><b><i className="swatch" /> #080B10</b></div></div>
        </aside>
      </div>
    </div>
  );
}
