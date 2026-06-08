import { useId } from 'react';
const NotificationToggleSwitch = ({
  title,
  description,
  defaultChecked
}) => {
  const switchId = useId();
  return <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <label htmlFor={switchId} className="heading-color fw-bold mb-0 d-block">{title}</label>
        <small>{description}</small>
      </div>
      <div className="form-check form-switch form-check-md mb-0 ms-3">
        <input className="form-check-input" type="checkbox" defaultChecked={defaultChecked} id={switchId} />
      </div>
    </div>;
};
export default NotificationToggleSwitch;