import { faCartPlus, faCircleStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Appbar = () => {
  return (
    <div className="flex items-center h-14 bg-slate-200 sticky top-0 z-appbar">
      <section className="flex shrink-0 gap-2">
        <button className="btn btn-primary btn-sm">
          {"LOGIN"}
          <FontAwesomeIcon icon={faCircleStop} />
        </button>
        <button className="btn btn-primary btn-sm">{"Register"}</button>
        <button className="btn btn-primary btn-sm">
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </section>
    </div>
  );
};

export default Appbar;
