import React from "react";
import { render } from "react-dom";
import UniversalRouter from "universal-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

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
    action: ({ mode }) => {
      if (mode === "A") {
        console.log("redirected to /A");
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

// change the value of mode: if "A", B -> A, else B->B
const router = new UniversalRouter(routes, { context: { mode: "B" } });

const root = document.getElementById("root");

async function renderRoute(location) {
  try {
    const page = await router.resolve({ pathname: location.pathname });
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
