import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useAuthSession } from './plugin@auth';

export default component$(() => {
  const session = useAuthSession();
  return <>Email: {session.value?.user?.email}</>;
});

export const head: DocumentHead = {
  title: 'Qwik Voting',
  meta: [],
};
