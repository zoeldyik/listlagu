import SearchButton from "./SearchButton";

export default function SearchBar({ searchAction }) {
  return (
    <form action={searchAction} className="mb-5 flex md:justify-end md:mb-8">
      <input
        name="input"
        type="search"
        placeholder="Type here"
        className="input input-sm input-neutral w-full max-w-xs mr-2"
        required
      />
      <SearchButton />
    </form>
  );
}
