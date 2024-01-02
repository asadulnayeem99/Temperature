/* eslint-disable react/prop-types */
// import React from 'react';

const BoilingVerdict = ({ celsius = 0 }) => {
  if (celsius >= 100 && celsius <= 500) {
    return <p>The Water Would Boil</p>;
  } else if (celsius >= 500) {
    return (
      <div>
        <p>Have A Blast 🧨🔥</p>
        <p>Please Call Firefighter 🚒</p>
      </div>
    );
  }
  return <p>The Water would not boil</p>;
};

export default BoilingVerdict;
