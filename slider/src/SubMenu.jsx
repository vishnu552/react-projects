import { useGlobalContext } from "./context";
import sublinks from "./data";

function SubMenu() {
  const { pageId } = useGlobalContext();
  const currentId = sublinks.find((item) => item.pageId === pageId);
  return (
    <div className={currentId ? "submenu show-submenu" : "submenu"}>
      <h5>{currentId?.page}</h5>
      <div className="submenu-links">
        {currentId?.links.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SubMenu;
