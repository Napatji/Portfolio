import React, { useState, useEffect, useRef } from 'react'
import './Home.css'

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>,HTMLCanvasElement>

const Home: React.FC<CanvasProps> = ({...props }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [active,setActive] = useState(false);

    function setCanvas() {
        const canvas = canvasRef.current
        if(!canvas){
            return;
        }
        const context = canvas.getContext('2d')
        return context
    }

    function updateCanvas() {
        const context = setCanvas()
        if(!context){
            return;
        }
        context.clearRect(0,0,800,600)
        context.fillStyle = 'black'
        context.fillRect(0,0,800,600)
    }

    class Sprite {
        position = {
            x : 0,
            y : 0
        }
        velocity = {
            x : 0,
            y : 0
        }

        constructor(position : any,velocity: any){
            this.position = position
            this.velocity = velocity
        }

        draw(){
            const context = setCanvas()
            if(!context){
                return;
            }
            context.fillStyle = 'red'
            context.fillRect(this.position.x,this.position.y,100,100)
        }

        update(){
            this.draw()
        }
    }
    
    const player = new Sprite({x:100,y:100},{x:0,y:0})
    useEffect(() => {
        updateCanvas()
        player.draw()
        window.addEventListener('keydown',(event)=>{
            player.position.x += 50
            updateCanvas()
            player.update()
            console.log(event)
        })

    }, [])

    return <canvas className='canvas' width={props.width} height={props.height} ref={canvasRef}/>
}

export default Home;