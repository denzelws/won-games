
import React from 'react';

import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by
        <A key="website" href="https://github.com/denzelws" target="_blank" rel="noopener noreferrer">
          Denzel
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
