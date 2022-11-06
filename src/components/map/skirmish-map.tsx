import React from 'react';
import './skirmish-map.css';
import { Hexagon as Hex, HexagonType } from 'src/interfaces/hexagon.model';
import { Hexagon } from 'src/components/map/hexagon/hexagon';

export class SkirmishMap extends React.Component {
    private hexList: Hex[] = [];

    constructor(props: any) {
      super(props);
      this.hexList = [
        { q: 0, r: 0, type: HexagonType.GRASS },
        { q: 1, r: 0, type: HexagonType.SAND },
        { q: -1, r: 1, type: HexagonType.GRASS },
        { q: 1, r: -1, type: HexagonType.ROCK },
        { q: -1, r: 0, type: HexagonType.GRASS },
        { q: 0, r: 1, type: HexagonType.ROCK },
        { q: 0, r: -1, type: HexagonType.GRASS }
      ];
    }

    render() {
      return (
        <div className='skirmish-map'>
          {
            this.hexList.map(hex => <Hexagon value={hex}></Hexagon>)
          }
        </div>
      );
    }
  }