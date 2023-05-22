import './styles.css';

function NavItem({ to = '/', ico, children }) {
  return (
    <a className="a-nav-item" href={to} target="_blank" rel="noreferrer">
      <div className="nav-item">
        <img src={ico} alt={children} />
        <span>{children}</span>
      </div>
    </a>
  );
}

export default NavItem;