<template>
  <form class="w-full flex md:ml-0" action="#" method="GET">
    <label for="search-field" class="sr-only">Search</label>
    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
      <div
        class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
        aria-hidden="true"
      >
        <BaseIconSolid name="search" />
      </div>
      <input
        id="search-field"
        name="search-field"
        class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
        placeholder="Search..."
        type="search"
      />
    </div>
  </form>
</template>
