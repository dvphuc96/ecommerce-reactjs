import { AuthLayout } from "components";
import { PATH } from "constant";
import { LoginPage } from "pages";
import { Suspense } from "react";
import { RouteObject } from "react-router-dom";

export const router: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<>...Loading</>}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
        {
            path: PATH.LOGIN,
            element: <LoginPage />
        }
    ]
  },
];
