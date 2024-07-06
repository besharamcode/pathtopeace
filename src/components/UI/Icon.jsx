import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
function Icon({ icon, className }) {
  return <FontAwesomeIcon className={className} icon={icon} />;
}

export default Icon;
