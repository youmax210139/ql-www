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

function addRoute(path, filePath, name) {
  return {
    path: path,
    name: name,
    component: pages[`../pages/${filePath}.vue`],
  };
}

const routes = [
  // addRoute("/login", "auth/Login", "auth.login"),
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      addRoute("/", "Home", "homes.index"),
      addRoute("/bests", "Best", "bests.index"),
      addRoute("/express", "Express", "express.index"),
      addRoute("/qanda", "Qanda", "qanda.index"),
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
