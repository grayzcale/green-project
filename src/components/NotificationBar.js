import { notifications } from "../assets/notifications";
import Notifications from "./Notifications";

const NotificationBar = (props) => {
  return (
    <nav>
      <ul className={`${props.additionalStyles}`}>
        {notifications.map((notification, index) => {
          return (
            <Notifications item={notification} index={index} key={index} />
          );
        })}
      </ul>
    </nav>
  );
};

export default NotificationBar;
