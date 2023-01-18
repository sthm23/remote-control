import { mouse, left, right, up, down } from "@nut-tree/nut-js";

export function socketHandling(str:string) {
    const command = str.split(' ');
    const pos = +command[1];
    console.log(command);

    if(command[0] === 'mouse_up') {
        mouse.move(up(pos))
    } else if (command[0] === 'mouse_left') {
        mouse.move(left(pos))
    } else if (command[0] === 'mouse_down') {
        mouse.move(down(pos))
    } else if (command[0] === 'mouse_right') {
        mouse.move(right(pos))
    } else if (command[0] === 'draw_square') {
        
    } else if (command[0] === 'draw_rectangle') {
        
    } else if (command[0] === 'draw_circle') {
        
    } else if (command[0] === 'mouse_position') {
        // const pos = mouse.getPosition()
        // console.log(pos);
    } else {

    }
    
    
}