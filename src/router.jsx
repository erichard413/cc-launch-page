// import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
// import { Products } from "./pages/Products";
// import App from "./App";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         // children: [{ index: true, element: <Navigate to="/home" /> }],
//         path: "home",
//         children: [
//           {
//             index: true,
//             element: <App />,
//           },
//         ],
//       },
//       {
//         path: "products",
//         children: [
//           {
//             index: true,
//             element: <Products />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// function ErrorPage() {
//   const error = useRouteError();

//   return (
//     <>
//       <h1>Error - Something went wrong</h1>
//       {import.meta.env.MODE !== "production" && (
//         <>
//           <pre>{error.message}</pre>
//           <pre>{error.stack}</pre>
//         </>
//       )}
//     </>
//   );
// }
