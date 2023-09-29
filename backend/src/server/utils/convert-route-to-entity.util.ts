const mapping: Record<string, string> = {
  /* start route-mapping-variables */
  /* end route-mapping-variables */
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
