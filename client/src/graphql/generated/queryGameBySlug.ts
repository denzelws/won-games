/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: queryGameBySlug
// ====================================================

export interface queryGameBySlug_games_gallery {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface queryGameBySlug_games_cover {
  __typename: "UploadFile";
  src: string;
}

export interface queryGameBySlug_games_developers {
  __typename: "Developer";
  name: string;
}

export interface queryGameBySlug_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface queryGameBySlug_games_categories {
  __typename: "Category";
  name: string;
}

export interface queryGameBySlug_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface queryGameBySlug_games {
  __typename: "Game";
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING;
  release_date: any | null;
  gallery: queryGameBySlug_games_gallery[];
  cover: queryGameBySlug_games_cover | null;
  developers: queryGameBySlug_games_developers[];
  publisher: queryGameBySlug_games_publisher | null;
  categories: queryGameBySlug_games_categories[];
  platforms: queryGameBySlug_games_platforms[];
}

export interface queryGameBySlug {
  games: queryGameBySlug_games[];
}

export interface queryGameBySlugVariables {
  slug: string;
}
