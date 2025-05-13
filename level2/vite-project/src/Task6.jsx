import React from "react";
import PropTypes from "prop-types";

function Task6({ name = "VIJAY" }) {
    return <h3>This is {name} (Task6)</h3>;
}

// Prop Types Validation
Task6.propTypes = {
    name: PropTypes.number,
};

export default Task6;

