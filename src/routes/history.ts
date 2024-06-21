import { Location, NavigateFunction } from 'react-router-dom';

export const history: IHistory = {
  navigate: null,
  location: null,
};

type IHistory = {
  navigate: NavigateFunction | null;
  location: Location | null;
};
