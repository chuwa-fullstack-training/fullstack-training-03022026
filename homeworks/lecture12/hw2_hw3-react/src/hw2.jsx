function Layout() {
  return (
    <div className="layout">
      <header className="box header">Header</header>
      <nav className="box nav">Nav</nav>

      <div className="middle">
        <aside className="box aside">Aside</aside>
        <section className="box section">Section</section>
      </div>

      <footer className="box footer">Footer</footer>
    </div>
  );
}

export default Layout;