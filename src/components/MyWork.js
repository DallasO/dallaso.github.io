import React from 'react';

import { ReactComponent as IittalaLogo} from '../img/iittala-logo.svg';
import iittala from '../img/iittala.png';
import crucibleBrewing from '../img/crucible-brewing.png';

export default () => {
  return (
    <div className="item large">
      <div>
        <h2>My Work</h2>
        <p>Check out some of my work!</p>
      </div>
      <div className="showcase">
        <a href="https://iittala.com.au" target="_blank" rel="noopener noreferrer">
            <IittalaLogo alt="Iittala" className="img-responsive logo" />
        </a>
        <p>
          Completely redesigned and custom coded the frontend. From the header to the footer, and the homepage to the checkout, almost everything you see was coded by me.
        </p>
        <p>
          Cleaned up unused CSS from older themes. Integrated with existing XCart AJAX logic for easy future updates.
        </p>
        <a href="https://iittala.com.au" target="_blank" rel="noopener noreferrer">
          <img src={iittala} alt="Iittala" className="img-responsive screengrab" />
        </a>
      </div>
      <div className="showcase">
        <a href="https://cruciblebrewing.com" target="_blank" rel="noopener noreferrer">
          <h3>Crucible Brewing</h3>
        </a>
        <p>
          Installed WordPress and customized a theme to be mobile responsive. Added <a href="https://cruciblebrewing.com/index.php/our-beer/" target="_blank" rel="noopener noreferrer">JS&nbsp;API&nbsp;call</a> to load a menu that's always up to date.
        </p>
        <a href="https://cruciblebrewing.com" target="_blank" rel="noopener noreferrer">
          <img src={crucibleBrewing} alt="Crucible Brewing" className="img-responsive screengrab" />
        </a>
      </div>
    </div>
  );
};
