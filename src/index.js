import React from "react";
import { render } from "react-dom";
import UniversalRouter from "universal-router";
import { createBrowserHistory } from "history";
import "./app.css";

const history = createBrowserHistory();

/****** VERSION NEXT PB REDIRECT *********/
const NavNext = ({ children }) => {
  function hand(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }
  return (
    <div>
      <a href="/" onClick={hand}>
        A
      </a>{" "}
      |{" "}
      <a href="/b" onClick={hand}>
        B
      </a>
      <hr />
      {children}
    </div>
  );
};

const routes = [
  {
    path: "",
    async action({ next }) {
      const component = await next(true);
      if (component.redirect) {
        return component;
        /*-> the "router.resolve" will get "{redirect: "/"}"
        so the history.listener will make "/" render.
        */
      }
      return component && <NavNext>{component}</NavNext>;
    },
    children: [
      {
        path: "/",
        async action() {
          return (
            <>
              <br />
              <p>A</p>
            </>
          );
        },
      },
      {
        path: "/b",
        async action({ mode }) {
          if (mode === "A") {
            return { redirect: "/" };
          }
          return fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
              return (
                <>
                  {data.map((user) => (
                    <p key={user.id}> {user.email}</p>
                  ))}
                </>
              );
            });
        },
      },
    ],
  },
];

/*************/

// change the value of mode: protected if "A"
const routerNext = new UniversalRouter(routes, { context: { mode: "B" } });

const root = document.getElementById("root");

async function renderRoute(location) {
  try {
    const page = await routerNext.resolve({ pathname: location.pathname });
    if (page.redirect) {
      return history.push({ pathname: page.redirect });
    }
    return render(page, root);
  } catch (err) {
    console.log(err);
  }
}

history.listen(({ location }) => renderRoute(location));
renderRoute(history.location);

/*************** VERSION NORMAL *********/
/*
const Nav = () => {
  function hand(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }
  return (
    <>
      <a href="/" onClick={hand}>
        A
      </a>{" "}
      |{" "}
      <a href="/b" onClick={hand}>
        B
      </a>
      <hr />
    </>
  );
};

const routes = [
  {
    path: "/",
    action: () => (
      <>
        <Nav />
        <br />
        <p>A</p>
      </>
    ),
  },
  {
    path: "/b",
    // to protect the results
    async action({ mode }) {
      if (mode === "A") {
        return { redirect: "/" };
      }
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          return (
            <>
              <Nav />
              <br />
              {data.map((user) => (
                <p key={user.id}> {user.email}</p>
              ))}
            </>
          );
        });
    },
  },
];
*/
