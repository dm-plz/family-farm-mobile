type OptionType = string | number | boolean;

interface Options {
  param?: { [key: string]: OptionType };
  query?: { [key: string]: OptionType };
}
export function createUrl(path: string, options?: Options) {
  const pathTokens = path.split('/');
  const replacedPathTokens = pathTokens.map(token => {
    const paramKey = token.slice(1);
    const optionsParam = options?.param ?? {};
    const matchedParam = optionsParam[paramKey];

    if (token[0] === ':' && matchedParam) {
      return matchedParam;
    }
    return token;
  });

  const queryPairs = Object.entries(options?.query ?? []).map(
    ([key, value]) => `${key}=${value}`,
  );

  const apiPath = replacedPathTokens.join('/');
  const query = queryPairs.length === 0 ? '' : '?' + queryPairs.join('&');

  return apiPath + query;
}
