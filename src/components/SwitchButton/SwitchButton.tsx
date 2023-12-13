import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Style from './SwitchButton.module.css';

const SwitchButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialToggleState = location.pathname === '/class';
  const [isToggled, setIsToggled] = useState(initialToggleState);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
    navigate(!isToggled ? '/class' : '/');
  };

  useEffect(() => {
    setIsToggled(location.pathname === '/class');
  }, [location]);

  return (
    <div className={Style.switchContainer}>
      <label className={Style.switch}>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={toggleSwitch}
        />
        <span className={Style.slider}></span>
      </label>
    </div>
  );
};

export default SwitchButton;
