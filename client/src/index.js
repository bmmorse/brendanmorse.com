import React, { createRef, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation, useOutlet } from 'react-router-dom';
import GlobalCSS from './Globals/GlobalCSS';
import { Home, Contact } from './components/index';
import Lingo from './components/Lingo/index';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, [pathname]);

  return null;
}

const routes = [
  {
    path: '/',
    index: true,
    name: 'Home',
    element: <Home />,
    nodeRef: createRef(),
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef(),
    index: false,
  },
  {
    path: '/lingo',
    name: 'Lingo',
    element: <Lingo />,
    nodeRef: createRef(),
    index: false,
  },
];

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <div id='App'>
      <ScrollToTop />
      <GlobalCSS />

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={500}
          classNames='page'
          unmountOnExit
        >
          {(state) => (
            <div ref={nodeRef} className='page'>
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>ERROR ERROR</h1>,
    children: routes,
  },
]);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1>ERROR ERROR</h1>,
//     children: routes.map((route) => ({
//       index: route.path === '/',
//       path: route.path === '/' ? undefined : route.path,
//       element: route.element,
//     })),
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
