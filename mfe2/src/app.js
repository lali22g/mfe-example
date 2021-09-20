import React from "react";

const MFE1_Button = React.lazy(() => import('MFE1/Button'))

const App = props => {
  return (
    <div>
      <h4>MFE2</h4>
      <React.Suspense fallback='Loading Button from MFE1'>
        <MFE1_Button />
      </React.Suspense>
    </div>
  )
}

export default App
