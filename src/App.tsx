import { useEffect, useState } from 'react';
import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { Guerra1 } from './components/Guerra1';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface NomeCompletoProps {
  primeiro: string,
  segundo: string,
  terceiro: string,
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);  
  
  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  const [nome, setNome] = useState<NomeCompletoProps>({primeiro:'Eduardo',segundo:'jacobsen',terceiro:'guerra'} as NomeCompletoProps)
  const [index, setIndex] = useState<number>(1);
  function handleNome() {
    if (index === 1)
    {
      setNome({primeiro:'Eduardo',segundo:'Jacobsen',terceiro:'Guerra'});
      setIndex(2);
    }
    else if (index === 2)
    {
      setNome({primeiro:'Jacobsen',segundo:'Guerra',terceiro:'Eduardo'});
      setIndex(3)
    }
    else
    {
      setNome({primeiro:'Guerra',segundo:'Eduardo',terceiro:'Jacobsen'});
      setIndex(1)
    }
  }  

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton}/>
        <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId}/>    
      </div>
      <br></br>
      
     <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Guerra1 nome={nome.primeiro} handleNome={handleNome}/>        
        <Guerra1 nome={nome.segundo} handleNome={handleNome}/>        
        <Guerra1 nome={nome.terceiro} handleNome={handleNome}/>        
      </div> 


    </>
  )
}