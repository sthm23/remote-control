import { Button, centerOf, mouse, Region, straightTo } from "@nut-tree/nut-js";

export async function drawCircle(x:number, y:number, radius:number) {
  await mouse.click(Button.LEFT);
  for (let i = 0; i <= (Math.PI * 2); i += 0.1) {    
    const newX = x + (radius * Math.cos(i))/2;
    const newY = y + (radius * Math.sin(i))/2;    
    await mouse.drag(straightTo(centerOf(new Region(newX, newY, 0-radius, 0))));
  };
}