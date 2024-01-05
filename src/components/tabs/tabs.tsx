import {TabEnum} from '../../constants.ts';
import {useState} from 'react';
import cn from 'classnames';
import {Film} from '../../types/film.ts';
import {MovieOverview, MovieDetails, MovieReviews} from '../movie';


type TabProps = {
  isActive: boolean;
  onClick: () => void;
  text: string;
}

function Tab({isActive, onClick, text}: TabProps) {
  return (
    <li className={cn('film-nav__item', {'film-nav__item--active': isActive})}>
      <button className="film-nav__link" onClick={onClick}>{text}</button>
    </li>
  );
}

export type TabsProps = {
  film: Film;
}

export function Tabs({film}: TabsProps) {
  const [currentTab, setCurrentTab] = useState(TabEnum.Overview);

  const setTab = () => {
    switch (currentTab) {
      case TabEnum.Details:
        return <MovieDetails film={film}/>;
      case TabEnum.Overview:
        return <MovieOverview film={film}/>;
      case TabEnum.Reviews:
        return <MovieReviews/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <Tab isActive={currentTab === TabEnum.Overview} onClick={() => setCurrentTab(TabEnum.Overview)} text={'Overview'}/>
          <Tab isActive={currentTab === TabEnum.Details} onClick={() => setCurrentTab(TabEnum.Details)} text={'Details'}/>
          <Tab isActive={currentTab === TabEnum.Reviews} onClick={() => setCurrentTab(TabEnum.Reviews)} text={'Reviews'}/>
        </ul>
      </nav>
      {setTab()}
    </div>
  );
}
