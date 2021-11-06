import React from "react";
import md5 from "md5";

function Gravatar({ email, alt }) {
  const hash = md5(email);

  return (
    <div className="Badge__content-avatar">
      <img
        className="Badge__avatar"
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt={alt}
      />
    </div>
  );
}

export default Gravatar;
