import { GameCardProps } from "../components/GameCard";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutePropGame{
      home: undefined,
      game: GameCardProps
    }
  }
}