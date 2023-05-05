import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/header';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: 'hello',
  };
});

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
    </>
  );
});
