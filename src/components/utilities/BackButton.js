import React          from 'react';
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => {
  return (
    <div>
      <button onClick={history.goBack} className="grey-button-button">back</button>
    </div>
  );
};

export default withRouter(BackButton);
