export async function initMSW() {
  if (!__DEV__) {
    return;
  }
  await import('./msw.polyfills');
  const {server} = await import('./server');
  server.listen();
}
