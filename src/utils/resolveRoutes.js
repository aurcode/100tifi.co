const resolveRoutes = (route) => {
  if (route.lenght <= 3) {
    let validRoute = route === '/' ? route : '/';
    return validRoute
  }
  return '/${route}'; //about
}

export default resolveRoutes;
