const pages = import.meta.glob("pages/*.vue");

function resource(path, option = {}) {
  let routes = ["index", "show", "store", "update"].filter((v) => {
    if (option?.only?.includes(v) == false) {
      return false;
    }
    if (option?.except?.includes(v) == true) {
      return false;
    }
    return true;
  });

  return routes.map((r) => {
    const filename = r.charAt(0).toUpperCase() + r.slice(1);
    let routePath = path;
    const singular = path.slice(0, -1);
    switch (r) {
      case "show":
        routePath = `${path}/:${singular}`;
        break;
      case "store":
        routePath = `${path}/create`;
        break;
      case "update":
        routePath = `${path}/edit/:${singular}`;
        break;
    }
    return {
      path: routePath,
      name: `${path}.${r}`,
      component: pages[`../pages/${path}/${filename}.vue`],
    };
  });
}

function addRoute(path, filePath, name, meta = {}) {
  return {
    path: path,
    name: name,
    component: pages[`../pages/${filePath}.vue`],
    meta: meta,
  };
}

const routes = [
  // addRoute("/login", "auth/Login", "auth.login"),
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      addRoute("/login", "Login", "login.index"),
      addRoute("/register_agree", "RegisterAgree", "register.agree"),
      addRoute("/register", "Register", "register.index"),
      addRoute("/", "Home", "homes.index"),
      addRoute("/accounts", "Account", "accounts.index", {
        requiresAuth: true,
      }),
      addRoute("/bests", "Best", "bests.index"),
      addRoute("/categories/:category", "Category", "categories.index"),
      addRoute("/tos", "TOS", "tos.index"),
      addRoute("/pdpa", "PDPA", "pdpa.index"),
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/404.vue"),
  },
];

export default routes;
