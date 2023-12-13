import { useState } from 'react';
import Style from './SwitchButton.module.css'
import { useNavigate } from 'react-router-dom';

const SwitchButton = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
    navigate(isToggled ? '/': '/class');
  };

  return (
    <div className={Style.switchContainer}>
      <p className={Style.paragraph}>Functional components</p>
      <label className={Style.switch}>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={toggleSwitch}
        />
        <span className={Style.slider}></span>
      </label>
      <p className={Style.paragraph}>Class Components</p>
    </div>
  );
};

export default SwitchButton;
