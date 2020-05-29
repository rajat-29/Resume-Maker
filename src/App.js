import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar>
        <ToolBar>
          <Typography variant="h4">
            Build Your Resume
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default App;
