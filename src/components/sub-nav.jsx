import './aubNav.css';

function SubNav({ links }) {
  return (
    <div className="sub-nav">
      {links.map((link) => (
        <a href={link.href}>
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default SubNav;