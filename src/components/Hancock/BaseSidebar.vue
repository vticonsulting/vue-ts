<template>
  <div class="v-sidebar-menu vsm_expanded" style="max-width: 264px;">
    <a href="#" class="bg-white flex py-2 text-primary-500 items-center">
      <div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1074 6C20.9532 7.42373 12.5157 10.3119 12 10.4746V18L25.1074 14.339L38 18V10.4746L25.1074 6Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M20.1653 20L12 22.2373V42H20.1653V34.5424H29.8347V42H38V22.2373L29.8347 20V27.2712H20.1653V20Z"
            fill="currentColor"
            stroke="currentColor"
          />
        </svg>
      </div>
      <span class="font-bold" style="white-space: nowrap;">Claims Consultants</span>
    </a>

    <div class="mt-3 p-2">
      <a href="#" class="flex text-white items-center hover:text-white">
        <img src="/src/assets/img/users/michael.jpg" alt class="rounded-full h-8 w-8" />
        <div class="text-xs ml-2">
          <span class="font-bold uppercase">Michael Houser</span>
          <div>mhouser@hancockclaims.com</div>
        </div>
      </a>
    </div>

    <div class="vsm--scroll-wrapper">
      <div class="vsm--scroll-overflow">
        <div class="vsm--scroll">
          <ul class="vsm--menu" style=" position: static !important; width: 264px;">
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active"
                href="/#"
                target="_self"
                aria-current="page"
              >
                <i class="vsm--icon fas fa-tachometer-alt" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Dashboard</span>
                  <span class="vsm--badge vsm--badge_default">new</span>
                </div>
              </a>
            </li>
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active"
                href="/#"
                target="_self"
                aria-current="page"
              >
                <i class="vsm--icon fas fa-project-diagram" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Projects</span>
                </div>
              </a>
            </li>
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active"
                href="/#"
                target="_self"
                aria-current="page"
              >
                <i class="vsm--icon fas fa-calendar-alt" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Calendar</span>
                </div>
              </a>
            </li>
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active"
                href="/#"
                target="_self"
                aria-current="page"
              >
                <i class="vsm--icon fas fa-users" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Customers</span>
                </div>
              </a>
            </li>
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active"
                href="/#"
                target="_self"
                aria-current="page"
              >
                <i class="vsm--icon fas fa-money-bill-alt" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Billing</span>
                </div>
              </a>
            </li>
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active"
                href="/#"
                target="_self"
                aria-current="page"
              >
                <i class="vsm--icon fas fa-users" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Users</span>
                </div>
              </a>
            </li>
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active"
                href="/#"
                target="_self"
                aria-current="page"
              >
                <i class="vsm--icon fas fa-chart-bar" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Reports</span>
                </div>
              </a>
            </li>
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active"
                href="/#"
                target="_self"
                aria-current="page"
              >
                <i class="vsm--icon fas fa-book" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Documentation</span>
                </div>
              </a>
            </li>
            <li class="vsm--item">
              <a
                class="vsm--link vsm--link_level-1 vsm--link_active vsm--link_open"
                href="#"
                target="_self"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i class="vsm--icon fas fa-cog" aria-hidden="true"></i>
                <div class="vsm--title">
                  <span>Settings</span>

                  <div class="vsm--arrow vsm--arrow_open">
                    <span class="vsm--arrow_default"></span>
                  </div>
                </div>
              </a>
              <div class="vsm--child" style="height: auto;">
                <ul class="vsm--dropdown">
                  <li class="vsm--item">
                    <a
                      class="vsm--link vsm--link_level-2 vsm--link_active"
                      href="/#"
                      target="_self"
                      aria-current="page"
                    >
                      <i class="vsm--icon fas fa-map-marker-alt" aria-hidden="true"></i>
                      <div class="vsm--title">
                        <span>Territories List</span>
                      </div>
                    </a>
                  </li>
                  <li class="vsm--item">
                    <a
                      class="vsm--link vsm--link_level-2"
                      href="#"
                      target="_self"
                      aria-haspopup="true"
                    >
                      <i class="vsm--icon fas fa-map-marked-alt" aria-hidden="true"></i>
                      <div class="vsm--title">
                        <span>Service Areas</span>

                        <div class="vsm--arrow">
                          <span class="vsm--arrow_default"></span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="vsm--item">
                    <a class="vsm--link vsm--link_level-2" href="#" target="_self">
                      <i class="vsm--icon fas fa-cog" aria-hidden="true"></i>
                      <div class="vsm--title">
                        <span>Preferences</span>
                      </div>
                    </a>
                  </li>
                  <li class="vsm--item">
                    <a
                      class="vsm--link vsm--link_level-2"
                      href="#"
                      target="_self"
                      aria-haspopup="true"
                    >
                      <i class="vsm--icon fas fa-cog" aria-hidden="true"></i>
                      <div class="vsm--title">
                        <span>Service Types</span>

                        <div class="vsm--arrow">
                          <span class="vsm--arrow_default"></span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="vsm--scroll-bar">
          <div class="vsm--scroll-thumb" style="height: 0%; transform: translateY(0%);"></div>
        </div>
      </div>
    </div>
    <button class="vsm--toggle-btn">
      <span class="vsm--toggle-btn_default"></span>
    </button>
  </div>
</template>
