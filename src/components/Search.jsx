import { SearchIcon } from "./SearchIcon";

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
      <SearchIcon className="search__icon"></SearchIcon>
    </div>
  );
}
