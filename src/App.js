import React, {useState} from 'react';
import AllCards from './AllCards';
import './App.css';
import FilterSection from './FilterSection';

function App() {
  const [filteredRole, setFilteredRole] = useState([]);
  const [filteredLevel, setFilteredLevel] = useState([]);
  const [filteredLanguage, setFilteredLanguage] = useState([]);
  const [filterBy, setFilterBy] = useState([])
  return (
    <div className="App">
      {(filteredRole.length !== 0 || filteredLevel.length !== 0 || filteredLanguage.length !== 0) && (
        <FilterSection
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          filteredRole={filteredRole}
          setFilteredRole={setFilteredRole}
          filteredLevel={filteredLevel}
          setFilteredLevel={setFilteredLevel}
          filteredLanguage={filteredLanguage}
          setFilteredLanguage={setFilteredLanguage}
        />
      )}
      <AllCards
        filteredRole={filteredRole}
        setFilteredRole={setFilteredRole}
        filteredLevel={filteredLevel}
        setFilteredLevel={setFilteredLevel}
        filteredLanguage={filteredLanguage}
        setFilteredLanguage={setFilteredLanguage}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </div>
  );
}

export default App;
