import React from "react";
import { connect } from "react-redux";
import { getNotifications } from "./selectors";

function Notifications({ notifications }) {
  return (
    <div>
      {notifications.map(note => (
        <div key={note}>{note}</div>
      ))}
    </div>
  );
}

const mapStateToPropsNotifications = (state, props) => ({
  notifications: getNotifications(state)
});

const ConnectedNotifications = connect(mapStateToPropsNotifications)(
  Notifications
);
export default ConnectedNotifications;
