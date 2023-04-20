import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  navigate("/", { replace: true });
  return null;
}

export default NotFound;