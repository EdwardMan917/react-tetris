import { useState, useCallback } from 'react';
import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  });

  const rotate = ( matrix, dir ) => {
    // make row become columns (transpose)
    const rotatedTetro = matrix.map((_, index) => 
      matrix.map(col => col[index]),
    );

    // reverse each row to get a rotated matrix
    if ( dir > 0 ) return rotatedTetro.map( row => row.reverse() );
  };

  const playerRotate = ( stage, dir ) => {
    const clonedPlayer = JSON.parse( JSON.stringify( player ));
    clonedPlayer.tetromino = rotate( clonedPlayer.tetromino, dir );
    setPlayer( clonedPlayer );
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    console.log(x, y);
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x + x), y: (prev.pos.y + y)},
      collided
    }))
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};