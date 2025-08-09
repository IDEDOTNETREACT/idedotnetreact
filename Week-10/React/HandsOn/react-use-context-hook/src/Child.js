import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Child() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ color: theme }}>
            <h2>Child Component</h2>
            <p>Theme:{theme}</p>
        </div>
    );
}
export default Child;