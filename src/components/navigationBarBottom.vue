<template>
  <div class="fixed z-50 w-[90%] h-16 -translate-x-1/2 bottom-4 left-1/2">
    <div class="dark:border-gray-600 shadow-lg rounded-lg mb-5" style="background: url(https://coin.ccsjr.com/app/navbar-image.02a851d3.svg); border-color: gap:(255,255,255,.1);">
      <div class="flex">
        <div class="flex-auto hover:w-full group">
          <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500">
            <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
              <i class="far fa-home text-2xl pt-1"></i>
              <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">Home</span>
            </span>
          </a>
        </div>
        <div class="flex-auto hover:w-full group">
          <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500">
            <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
              <i class="far fa-compass text-2xl pt-1"></i>
              <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">Explore</span>
            </span>
          </a>
        </div>
        <div class="flex-auto hover:w-full group">
          <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500">
            <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
              <i class="far fa-search text-2xl pt-1"></i>
              <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">Search</span>
            </span>
          </a>
        </div>
        <div class="flex-auto hover:w-full group">
          <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500">
            <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
              <i class="far fa-cog text-2xl pt-1"></i>
              <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">Settings</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style>
@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap");
body {
  font-family: "Poppins", sans-serif;
}
@media only screen and (max-width: 500px) {
  .hover\:w-full:hover {
    width: 100%;
  }
}

@media only screen and (min-width: 500px) {
  .hover\:w-full:hover {
    width: 5%;
  }
}
.group:hover .group-hover\:w-full {
  width: 100%;
}
.group:hover .group-hover\:inline-block {
  display: inline-block;
}
.group:hover .group-hover\:flex-grow {
  flex-grow: 1;
}
</style>
