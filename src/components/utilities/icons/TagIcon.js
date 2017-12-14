import React from 'react';

const TagIcon = ({className}) => {
  return(
    <svg className={`tag-icon ${className}`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 94 93.976" enableBackground="new 0 0 94 93.976" xmlSpace="preserve">
      {/* <ellipse opacity="0.2" fill="#FF2E55" cx="47" cy="46.988" rx="47" ry="46.988"/> */}
      {/* <ellipse opacity="0.4" fill="#FF2E55" cx="47" cy="46.988" rx="36.976" ry="36.967"/> */}
      <ellipse fill="#FF2E55" cx="46.999" cy="46.988" rx="25.679" ry="25.672"/>
    </svg>
  );
};

export default TagIcon;
