import axios from 'axios';

const URL = 'https://swapi.dev/api';

export type GameResource = Person | Starship;

interface ApiResponse {
  count: number;
}

interface ApiResponsePerson extends ApiResponse {
  results: PeopleResponse[];
}

interface PeopleResponse {
  name: string;
  mass: string;
}

export interface Person {
  name: string;
  attribute: string;
  attributeName: string;
}

interface ApiResponseStarship extends ApiResponse {
  results: StarshipResponse[];
}

interface StarshipResponse {
  name: string;
  crew: string;
}

export interface Starship {
  name: string;
  attribute: string;
  attributeName: string;
}

export const getPersons = async (): Promise<Person[]> => {
  const {
    data: { results },
  } = await axios.get<ApiResponsePerson>(`${URL}/people`);

  const people = results.map(
    (el): Person => ({
      name: el.name,
      attribute: el.mass,
      attributeName: 'Mass',
    })
  );

  return people;
};

export const getStarships = async (): Promise<Starship[]> => {
  const {
    data: { results },
  } = await axios.get<ApiResponseStarship>(`${URL}/starships`);

  const starships = results.map(
    (el): Starship => ({
      name: el.name,
      attribute: el.crew,
      attributeName: 'Crew',
    })
  );

  return starships;
};
