import "./App.css";

const App = () => {
  return (
    <nav
      class="relative flex w-full flex-wrap items-center justify-between bg-zinc-200 py-2 shadow-lg shadow-zinc-500/50 dark:bg-neutral-700 lg:py-4">
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <span class="ms-2 text-xl text-black dark:text-white">Navbar</span>
        <div class="ms-5 flex w-[30%] items-center justify-between">
          <input
            type="search"
            class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-zinc-400 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal transition duration-300 ease-in-out focus:text-gray-700 focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2" />
          <span
            class="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-5"
            id="basic-addon2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Connect Wallet</span>
            </button>
        </div>
      </div>
    </nav>
  )
}

export default App