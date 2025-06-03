import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const ScrollOrNavLink = ({ to, children, ...props }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    // Use react-scroll when already on homepage
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        offset={-70} // optional: adjust for sticky headers
        {...props}
      >
        {children}
      </ScrollLink>
    );
  } else {
    // Go to homepage normally (no query params)
    return (
      <RouterLink to="/" {...props}>
        {children}
      </RouterLink>
    );
  }
};


