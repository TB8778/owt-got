export const queryHelper = (params: any) => {
  const queryStr = Object.keys(params)
    .filter(key => params[key] !== undefined)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');

  return queryStr && `?${queryStr}` || '';
};
