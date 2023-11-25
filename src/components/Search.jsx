import { CiSearch } from "react-icons/ci";
import "../styles/Search.scss";
export default function Search({ query, setQuery, isDisabled }) {
  return (
    <div className="search">
      <input
        disabled={isDisabled}
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text"
        placeholder="Search for a country..."
        required
      />
      <CiSearch className="search__icon"></CiSearch>
    </div>
  );
}
