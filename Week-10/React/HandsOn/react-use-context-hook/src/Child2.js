import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Child2() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme }}>
            <h2>Child Component</h2>
            <p>Theme:{theme}</p>
        </div>
    );
}
export default Child2;