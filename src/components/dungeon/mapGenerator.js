const CAVE = 'cave';

const generateMap = function() {
    const floors = [];
    floors[0] = {
        type: CAVE,
        next: [1, 2],
        previous: -1
    }
    floors[1] = {
        type: CAVE,
        previous: 0
    }
    floors[2] = {
        type: CAVE,
        next: [3],
        previous: 0
    }

    floors[3] = {
        type: CAVE,
        previous: 2
    }

    return floors;
}

export default generateMap;