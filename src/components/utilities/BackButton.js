import React          from 'react';
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => {
  return (
    <div>
      <a onClick={history.goBack} className="grey-button">Back</a>
    </div>
  );
};

export default withRouter(BackButton);
