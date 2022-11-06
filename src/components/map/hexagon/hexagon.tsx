import React from 'react';
import { Hexagon as Hex, HexagonType } from 'src/interfaces/hexagon.model';
import './hexagon.css';

interface IProps {
  value: Hex
}

export class Hexagon extends React.Component<IProps> {
    SIZE = 100;
    q: number;
    r: number;
    s: number;
    type: HexagonType

    constructor(props:any) {
      super(props);
      this.r = props.value.r;
      this.q = props.value.q;
      this.s = (-1 * this.r) - this.q;
      this.type = props.value.type;
    }

    render() {
      const ring = (Math.abs(this.r) + Math.abs(this.s) + Math.abs(this.q)) / 2;
      const dx = (this.SIZE / ring / 2) * (this.s - this.q);
      const dy = (this.SIZE / ring * Math.sqrt(3) / 4) * (this.r - this.q - this.s);
      const props = {
        className: `hex ${this.type}`,
        style: { 
          transform: `translate(${dx}px, ${dy}px)`
        }
      };
      console.log(this.r, this.s, this.q, ring);
      const hex = React.createElement('div', props);
      return (hex);
    }
  }