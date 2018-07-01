import React from 'react';
import PropTypes from 'prop-types';

const Control = ({
  label, added, removed, disabled,
}) => (
  <div className="Control">
    <div className="Label">
      {label}
    </div>
    <button type="button" onClick={removed} disabled={disabled} className="Less">
      Less
    </button>
    <button type="button" onClick={added} className="More">
      More
    </button>
  </div>
);

Control.propTypes = {
  label: PropTypes.string.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  added: PropTypes.func.isRequired,
};

export default Control;
