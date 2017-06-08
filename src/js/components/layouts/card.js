import React from 'react';

const Card = ({children}) => (
  <div className="card mui-panel col-1-2">
    <div className="card-inner">
      { children }
    </div>
  </div>
)
export default Card;
