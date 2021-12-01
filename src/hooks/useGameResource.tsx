import { useState, useEffect } from 'react';
import { GameResource, getStarships, getPersons } from '../helpers/api';

export enum ResourceKind {
  Person = 'Person',
  Starship = 'Starship'
}

export const useGameResource = (resourceType: ResourceKind) => {
  const [data, setData] = useState<GameResource[]>([])

  const getData = async (resourceType: ResourceKind) => {
    switch (resourceType) {
      case ResourceKind.Starship:
        setData(await getStarships())
        break;
      case ResourceKind.Person:
        setData(await getPersons())
        break;
    }
  }

  useEffect(() => {
    getData(resourceType)

  }, [resourceType])

  return data
}