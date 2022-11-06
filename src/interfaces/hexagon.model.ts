export enum HexagonType {
    GRASS = 'grass',
    ROCK = 'rock',
    SAND = 'sand',
};

export interface Hexagon {
    q: number;
    r: number;
    type: HexagonType;
}