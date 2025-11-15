import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const square = "/Portfolio/assets/square-BRw8QFGO.jpg";
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  const [state, setState] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return /* @__PURE__ */ jsxs("body", {
    className: "flex flex-1 flex-col items-center justify-center pb-5 gap-5",
    children: [/* @__PURE__ */ jsx("div", {
      style: {
        backgroundImage: `url(${square})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        // Full viewport height
        width: "100%",
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center"
        // Full width
      },
      children: /* @__PURE__ */ jsxs("div", {
        className: `bg-black w-200 border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5 ${fadeIn ? "animate-fade-in" : "opacity-0"}`,
        children: [/* @__PURE__ */ jsxs("header", {
          className: "flex flex-row items-center gap-2",
          children: [/* @__PURE__ */ jsx("div", {
            className: "bg-red-400 w-3 h-3 rounded-full"
          }), /* @__PURE__ */ jsx("div", {
            className: "bg-yellow-400 w-3 h-3 rounded-full"
          }), /* @__PURE__ */ jsx("div", {
            className: "bg-green-400 w-3 h-3 rounded-full"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-1 flex-col gap-1",
          children: [/* @__PURE__ */ jsx("p", {
            className: "text-green-400",
            children: "$ whoami"
          }), /* @__PURE__ */ jsx("h1", {
            className: "font-mono font-bold text-5xl",
            children: "Fernando Parra"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-gray-400",
            children: "Computer engenieer"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-1 flex-col gap-2 ",
          children: [/* @__PURE__ */ jsx("p", {
            className: "text-green-400",
            children: "$ Skills"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row gap-2 flex-wrap",
            children: [/* @__PURE__ */ jsx("div", {
              className: "bg-green-950 text-center rounded-md border border-green-800 p-2 mb-2",
              children: /* @__PURE__ */ jsx("p", {
                children: "Node.js"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-green-950 text-center rounded-md border border-green-800 p-2 mb-2",
              children: /* @__PURE__ */ jsx("p", {
                children: "Express.js"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2",
              children: /* @__PURE__ */ jsx("p", {
                children: "React"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2",
              children: /* @__PURE__ */ jsx("p", {
                children: "React Native"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2",
              children: /* @__PURE__ */ jsx("p", {
                children: "Angular"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2",
              children: /* @__PURE__ */ jsx("p", {
                children: "MongoDB"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-green-950 text-center items-center rounded-md border border-green-800 p-2 mb-2",
              children: /* @__PURE__ */ jsx("p", {
                children: "PostgreSQL"
              })
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("h1", {
      className: "text-3xl mt-10",
      children: "System Architecture & Projects"
    }), /* @__PURE__ */ jsxs("div", {
      style: {
        backgroundColor: "rgba(22, 25, 33, 1)"
      },
      className: "w-300 border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex flex-1 flex-col gap-2",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "font-mono font-bold text-3xl",
          children: "Fingerprint recognition"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-md text-gray-400",
          children: "Development of a fingerprint recognition system for recording employee flow in an institution."
        })]
      }), /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("h1", {
          className: "font-mono font-bold text-2xl",
          children: "Key Achievements:"
        }), /* @__PURE__ */ jsxs("ul", {
          children: [/* @__PURE__ */ jsx("li", {
            className: "text-gray-400",
            children: "• Designed and implemented a fingerprint recognition system using Python and OpenCV."
          }), /* @__PURE__ */ jsx("li", {
            className: "text-gray-400",
            children: "• Developed a user-friendly interface for employee check-in and check-out."
          }), /* @__PURE__ */ jsx("li", {
            className: "text-gray-400",
            children: "• Ensured data security and privacy compliance."
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex flex-1 flex-col gap-2 ",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row gap-2 flex-wrap",
          children: [/* @__PURE__ */ jsx("div", {
            style: {
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            },
            className: "bg-green-950 text-center rounded-md border p-2 mb-2",
            children: /* @__PURE__ */ jsx("p", {
              children: "React"
            })
          }), /* @__PURE__ */ jsx("div", {
            style: {
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            },
            className: "bg-green-950 text-center rounded-md border p-2 mb-2",
            children: /* @__PURE__ */ jsx("p", {
              children: "TypeScript"
            })
          }), /* @__PURE__ */ jsx("div", {
            style: {
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            },
            className: "bg-green-950 text-center rounded-md border p-2 mb-2",
            children: /* @__PURE__ */ jsx("p", {
              children: "MongoDB"
            })
          }), /* @__PURE__ */ jsx("div", {
            style: {
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            },
            className: "bg-green-950 text-center rounded-md border p-2 mb-2",
            children: /* @__PURE__ */ jsx("p", {
              children: "Arduino"
            })
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      style: {
        backgroundColor: "rgba(22, 25, 33, 1)"
      },
      className: "w-300 border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex flex-1 flex-col gap-2",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "font-mono font-bold text-3xl",
          children: "Fingerprint recognition"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-md text-gray-400",
          children: "Development of a fingerprint recognition system for recording employee flow in an institution."
        })]
      }), /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("h1", {
          className: "font-mono font-bold text-2xl",
          children: "Key Achievements:"
        }), /* @__PURE__ */ jsxs("ul", {
          children: [/* @__PURE__ */ jsx("li", {
            className: "text-gray-400",
            children: "• Designed and implemented a fingerprint recognition system using Python and OpenCV."
          }), /* @__PURE__ */ jsx("li", {
            className: "text-gray-400",
            children: "• Developed a user-friendly interface for employee check-in and check-out."
          }), /* @__PURE__ */ jsx("li", {
            className: "text-gray-400",
            children: "• Ensured data security and privacy compliance."
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex flex-1 flex-col gap-2 ",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row gap-2 flex-wrap",
          children: [/* @__PURE__ */ jsx("div", {
            style: {
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            },
            className: "bg-green-950 text-center rounded-md border p-2 mb-2",
            children: /* @__PURE__ */ jsx("p", {
              children: "React"
            })
          }), /* @__PURE__ */ jsx("div", {
            style: {
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            },
            className: "bg-green-950 text-center rounded-md border p-2 mb-2",
            children: /* @__PURE__ */ jsx("p", {
              children: "TypeScript"
            })
          }), /* @__PURE__ */ jsx("div", {
            style: {
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            },
            className: "bg-green-950 text-center rounded-md border p-2 mb-2",
            children: /* @__PURE__ */ jsx("p", {
              children: "MongoDB"
            })
          }), /* @__PURE__ */ jsx("div", {
            style: {
              backgroundColor: "rgba(26, 36, 55, 1)",
              borderColor: "rgba(33, 53, 91, 1)"
            },
            className: "bg-green-950 text-center rounded-md border p-2 mb-2",
            children: /* @__PURE__ */ jsx("p", {
              children: "Arduino"
            })
          })]
        })
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "w-300 border border-gray-700 rounded-lg p-5 mt-10 mb-5 flex flex-1 flex-col gap-5",
      style: {
        backgroundColor: "rgba(14, 21, 18, 1)"
      },
      children: /* @__PURE__ */ jsxs("header", {
        className: "flex flex-row items-center gap-2",
        children: [/* @__PURE__ */ jsx("div", {
          className: "bg-red-400 w-3 h-3 rounded-full"
        }), /* @__PURE__ */ jsx("div", {
          className: "bg-yellow-400 w-3 h-3 rounded-full"
        }), /* @__PURE__ */ jsx("div", {
          className: "bg-green-400 w-3 h-3 rounded-full"
        })]
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/Portfolio/assets/entry.client-CMiCKmW-.js", "imports": ["/Portfolio/assets/chunk-4WY6JWTD-CgRXpLqU.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/Portfolio/assets/root-C1C5ueFV.js", "imports": ["/Portfolio/assets/chunk-4WY6JWTD-CgRXpLqU.js"], "css": ["/Portfolio/assets/root-Bj708TRB.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/Portfolio/assets/home-CxnhPRbt.js", "imports": ["/Portfolio/assets/chunk-4WY6JWTD-CgRXpLqU.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/Portfolio/assets/manifest-b94aa119.js", "version": "b94aa119", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/Portfolio/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
