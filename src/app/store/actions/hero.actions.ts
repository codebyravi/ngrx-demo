import { Action } from '@ngrx/store';

import { Hero } from '../../core';
import { DataServiceError } from '../config';
import { DataAction, DataErrorAction } from './data.actions';

export const ADD_HERO = '[Hero] ADD_HERO';
export const ADD_HERO_ERROR = '[Hero] ADD_HERO_ERROR';
export const ADD_HERO_SUCCESS = '[Hero] ADD_HERO_SUCCESS';

export const GET_HERO = '[Hero] GET_HERO';
export const GET_HERO_SUCCESS = '[Hero] GET_HERO_SUCCESS';
export const GET_HERO_ERROR = '[Hero] GET_HERO_ERROR';

export const UPDATE_HERO = '[Hero] UPDATE_HERO';
export const UPDATE_HERO_SUCCESS = '[Hero] UPDATE_HERO_SUCCESS';
export const UPDATE_HERO_ERROR = '[Hero] UPDATE_HERO_ERROR';

export const GET_HEROES = '[Hero] GET_HEROES';
export const GET_HEROES_SUCCESS = '[Hero] GET_HEROES_SUCCESS';
export const GET_HEROES_ERROR = '[Hero] GET_HEROES_ERROR';

export const DELETE_HERO = '[Hero] DELETE_HERO';
export const DELETE_HERO_SUCCESS = '[Hero] DELETE_HERO_SUCCESS';
export const DELETE_HERO_ERROR = '[Hero] DELETE_HERO_ERROR';

export const SET_HERO_LOADING = '[Hero] SET_HERO_LOADING';

export abstract class HeroAction implements DataAction<Hero> {
  readonly type: string;
  constructor(public readonly payload: Hero) {}
}

export abstract class HeroErrorAction implements DataErrorAction<Hero> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Hero>) {}
}

export class GetHeroes implements Action {
  readonly type = GET_HEROES;
}

export class GetHeroesSuccess implements Action {
  readonly type = GET_HEROES_SUCCESS;
  constructor(public readonly payload: Hero[]) {}
}

export class GetHeroesError implements Action {
  readonly type = GET_HEROES_ERROR;
  constructor(public readonly payload: any) {}
}

export class AddHero extends HeroAction {
  readonly type = ADD_HERO;
}

export class AddHeroSuccess extends HeroAction {
  readonly type = ADD_HERO_SUCCESS;
}

export class AddHeroError extends HeroErrorAction {
  readonly type = ADD_HERO_ERROR;
}

export class GetHero implements Action {
  readonly type = GET_HERO;
  constructor(public readonly payload: string) {}
}

export class GetHeroSuccess extends HeroAction {
  readonly type = GET_HERO_SUCCESS;
}

export class GetHeroError extends HeroErrorAction {
  readonly type = GET_HERO_ERROR;
}

export class UpdateHero extends HeroAction {
  readonly type = UPDATE_HERO;
}

export class UpdateHeroSuccess extends HeroAction {
  readonly type = UPDATE_HERO_SUCCESS;
}

export class UpdateHeroError extends HeroErrorAction {
  readonly type = UPDATE_HERO_ERROR;
}

export class DeleteHero extends HeroAction {
  readonly type = DELETE_HERO;
}

export class DeleteHeroSuccess extends HeroAction {
  readonly type = DELETE_HERO_SUCCESS;
}

export class DeleteHeroError extends HeroErrorAction {
  readonly type = DELETE_HERO_ERROR;
}

export class SetHeroLoading {
  readonly type = SET_HERO_LOADING;
  constructor(public payload = true) {}
}

export type AllHeroActions =
  | GetHero
  | GetHeroSuccess
  | GetHeroError
  | UpdateHero
  | UpdateHeroSuccess
  | UpdateHeroError
  | GetHeroes
  | GetHeroesSuccess
  | GetHeroesError
  | AddHero
  | AddHeroSuccess
  | AddHeroError
  | DeleteHero
  | DeleteHeroSuccess
  | DeleteHeroError
  | SetHeroLoading;
