<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center -ml-8 space-x-4 list-none">
      <li>
        <div>
          <router-link to="/" class="text-gray-400 hover:text-gray-500">
            <BaseIconSolid name="home" class="flex-shrink-0" />
            <span class="sr-only">Home</span>
          </router-link>
        </div>
      </li>

      <li class="hidden">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
          <router-link
            to="/reports"
            class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          >Reports</router-link>
        </div>
      </li>

      <li class="hidden">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
          <a
            href="#"
            class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            aria-current="page"
          >Allstate HIC Form</a>
        </div>
      </li>
    </ol>
  </nav>
</template>
