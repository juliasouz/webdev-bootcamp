import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
    return (
        <header className="app-header">
            <HighlightIcon fontSize="medium" style={{ marginRight: 8 }} htmlColor="#fff" />
            <h1>Keeper</h1>
        </header>
    );
}
export default Header;