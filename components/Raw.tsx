import React from "react";

const Raw = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <blockquote>
        <pre>
          <code>{children}</code>
        </pre>
      </blockquote>
    </div>
  );
};

export default Raw;
