import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProjectC } from '../Project/Project';

const API_URL = 'http://localhost:1337/api/projects';

const State = () => {
  const [projects, setProjects] = useState([]);
  const [state, setState] = useState(ProjectC);

  useEffect(() => {
    const getData = async () => {
      const response = await axios(API_URL);
      setProjects(response.data);
    };

    getData();
  }, []);

  return {
    projects
  };
};

export default State;