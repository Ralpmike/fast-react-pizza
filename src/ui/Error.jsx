import {
  // isRouteErrorResponse,
  useRouteError,
} from 'react-router';

import LinkButton from './LinkButton';

function NotFound() {
  const error = useRouteError();
  console.log(error);

  // if (isRouteErrorResponse(error)) {
  //   return (
  //     <div>
  //       <h1>Oops!</h1>
  //       <p>
  //         <i>{error.error.message}</i>
  //       </p>
  //       <p>{error.statusText}</p>
  //       <button onClick={() => navigate(-1)}>&larr; Go back</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Something went wrong </h1>
      <p>{error.message || error.error?.message || error.data}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
