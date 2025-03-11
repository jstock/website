export function HeaderButtonsSkeleton() {
  return (
    <div className="d-inline-flex">
      <button
        type="button"
        className="btn"
        style={{
          border: '0',
          backgroundColor: 'transparent',
          color: 'var(--bs-navbar-color)',
        }}
      >
        <i className={`bi bi-github`} />
      </button>
      <button
        type="button"
        className="btn"
        style={{
          border: '0',
          backgroundColor: 'transparent',
          color: 'var(--bs-navbar-color)',
        }}
      >
        <i className={`bi bi-linkedin`} />
      </button>
      <div className="vr ms-1"></div>
      <button
        type="button"
        className="btn"
        style={{
          border: '0',
          backgroundColor: 'transparent',
          color: 'var(--bs-navbar-color)',
        }}
        title="Toggle Dark Mode"
      >
        <i className="bi bi-lightbulb-fill"></i>
      </button>
    </div>
  );
}
