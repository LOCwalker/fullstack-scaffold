import React, {useEffect, useState} from 'react';

enum LoadingStates {
  Loading,
  Loaded,
  Error,
}

function App() {
  const [loadingState, setLoadingState] = useState(LoadingStates.Loading);
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const httpResponse = await fetch( '/api/greeting', {headers: {Accept: 'application/json'}});
        if (httpResponse.ok) {
          const json = await httpResponse.json();
          setGreeting(json.message);
          setLoadingState(LoadingStates.Loaded);
        } else {
          setLoadingState(LoadingStates.Error);
        }
      } catch (e) {
        setLoadingState(LoadingStates.Error);
      }
    }
    fetchGreeting();
  });
  return (
    <div className="App">
      { loadingState === LoadingStates.Loading && <div> Fetching from backend ... </div> }
      { loadingState === LoadingStates.Error && <div> ERROR: Could not fetch from backend </div> }
      { loadingState === LoadingStates.Loaded && <div> Backend says: {greeting} </div> }
    </div>
  );
}

export default App;
