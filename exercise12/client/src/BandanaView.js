import Main from "./Main.js";

// Data

import { MAIN_DATA } from "./data.js";

function BandanaView() {
  return (
    <>
      <Main content={MAIN_DATA[2].content} />
    </>
  );
}

export default BandanaView;