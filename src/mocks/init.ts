export async function initMSW() {
  if (!__DEV__) {
    return;
  }
  await import('./msw.polyfills');
  const { server } = await import('./server');

  server.listen({ onUnhandledRequest: 'bypass' });
  server.events.on('response:mocked', ({ request, response }) => {
    // console.log(
    //   '%s %s received %s %s',
    //   request.method,
    //   request.url,
    //   response.status,
    //   response.statusText,
    // );
  });
}
