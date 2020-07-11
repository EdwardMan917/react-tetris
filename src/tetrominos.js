export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' }, //clear tetronmino
  I: { 
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0]
    ],
    color: '80, 227, 230'
  }, //I tetromino
  J: { 
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0]
    ],
    color: '36, 95, 223'
  }, //J tetromino
  L: { 
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L']
    ],
    color: '223, 173, 36'
  }, //L tetromino
  O: { 
    shape: [
      ['O', 'O'],
      ['O', 'O']
    ],
    color: '223, 217, 36'
  }, //O tetromino
  S: { 
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0]
    ],
    color: '223, 173, 36'
  }, //S tetromino
  T: { 
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0]
    ],
    color: '172, 61, 198'
  }, //T tetromino
  Z: { 
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0]
    ],
    color: '223, 173, 36'
  }, //Z tetromino
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino = 
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
