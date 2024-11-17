// /**
//  * This route is responsible for the built-in authoring environment using Sanity Studio.
//  * All routes under your studio path is handled by this file using Next.js' catch-all routes:
//  * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
//  *
//  * You can learn more about the next-sanity package here:
//  * https://github.com/sanity-io/next-sanity
//  */

// import { NextStudio } from "next-sanity/studio";
// import config from "../../../sanity.config";
// import { useEffect, useState } from "react";
// import { auth } from "@/auth";

// export const dynamic = "force-static";

// export { metadata, viewport } from "next-sanity/studio";

// export default async function StudioPage() {
//   const session = await auth();

//   if (
//     session &&
//     session?.user?.email === process.env.SANITY_STUDIO_AUTHORIZED_EMAIL
//   ) {
//     return <NextStudio config={config} />;
//   } else {
//     return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>You are not authorized to access this page</h1>
//         <p>Please log in with the correct credentials to access the studio.</p>
//       </div>
//     );
//   }
// }

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { auth } from "@/auth"; // assuming `auth` is a function that checks the session

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default async function StudioPage() {
  // Fetch session information on the server side
  const session = await auth();

  // Check if the session exists and if the email matches the authorized one
  if (
    session &&
    session?.user?.email === process.env.SANITY_STUDIO_AUTHORIZED_EMAIL
  ) {
    return <NextStudio config={config} />;
  } else {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>You are not authorized to access this page</h1>
        <p>Please log in with the correct credentials to access the studio.</p>
      </div>
    );
  }
}
