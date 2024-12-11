import React from 'react';

export default function renderDropdownToggle(label, stateKey, dropdownContent, state, setState) {
    return (
      <div>
        <span
          className="filter-toggle"
          onClick={() =>
            setState({ [stateKey]: !state[stateKey] })
          }
          style={{
            cursor: "pointer",
            marginBottom: "10px",
            display: "inline-block",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: state[stateKey]
                ? "rotate(90deg)"
                : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            ▶
          </span>
          {" "} {label}
        </span>
        {state[stateKey] && (
          <div className="dropdown">
            {dropdownContent}
          </div>
        )}
      </div>
    );
}