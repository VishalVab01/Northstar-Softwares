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
          <div className="artboard-row">
            <article className="product-artboard" aria-label="Project dashboard concept">
              <div className="product-topbar">
                <span className="mini-brand"><i /> northstar</span>
                <span className="topbar-nav">Overview&nbsp;&nbsp; Projects&nbsp;&nbsp; Reports</span>
                <span className="mini-avatar">AM</span>
              </div>
              <div className="product-heading">
                <div><span className="date-label">MONDAY, OCTOBER 14</span><h2>Good morning, Alex.</h2><p>Here’s what’s moving across your projects.</p></div>
                <span className="new-project">＋ <span>New project</span></span>
              </div>
              <div className="metric-row">
                <div className="metric-card"><span>Active projects</span><strong>08</strong><small><i /> 2 on track this week</small></div>
                <div className="metric-card"><span>Tasks completed</span><strong>64%</strong><small><b>+12%</b> from last week</small></div>
                <div className="metric-card"><span>Next milestone</span><strong>Oct 24</strong><small>Atlas product launch</small></div>
              </div>
              <div className="project-panel">
                <div className="project-panel-heading"><strong>Project activity</strong><span>Last 7 days&nbsp;⌄</span></div>
                <div className="activity-chart" aria-hidden="true">
                  <div className="chart-labels"><span>12</span><span>8</span><span>4</span><span>0</span></div>
                  <div className="chart-bars"><i style={{ height: "28%" }} /><i style={{ height: "43%" }} /><i style={{ height: "35%" }} /><i style={{ height: "65%" }} /><i style={{ height: "51%" }} /><i style={{ height: "82%" }} /><i style={{ height: "72%" }} /><i style={{ height: "96%" }} /><i style={{ height: "66%" }} /><i style={{ height: "88%" }} /><i style={{ height: "76%" }} /><i style={{ height: "100%" }} /></div>
                </div>
                <div className="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
              </div>
            </article>

            <article className="insight-artboard" aria-label="Product insight page concept">
              <div className="insight-topbar"><span>FIELDNOTES <i>BY NORTHSTAR</i></span><span>Ideas&nbsp;&nbsp; Research&nbsp;&nbsp; About</span><b>↗</b></div>
              <div className="insight-visual" aria-hidden="true">
                <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core" />
                <span className="orbit-label label-one">01 / OBSERVE</span><span className="orbit-label label-two">02 / CONNECT</span>
              </div>
              <div className="insight-copy"><span className="insight-kicker">DESIGNING FOR CLARITY</span><h2>Make complex work feel simple.</h2><p>Bring your people, projects, and decisions into focus with software shaped around how you work.</p><span className="insight-link">Explore the approach <b>↗</b></span></div>
              <div className="insight-footer"><span>PRODUCT THINKING / 04 MIN READ</span><span>01 — 03</span></div>
            </article>
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
