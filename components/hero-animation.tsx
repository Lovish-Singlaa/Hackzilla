"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Triangle class
    class Triangle {
      x: number
      y: number
      size: number
      color: string
      speed: number
      angle: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 30 + 10
        this.color = `rgba(${Math.floor(Math.random() * 100 + 155)}, 0, 0, ${Math.random() * 0.5 + 0.1})`
        this.speed = Math.random() * 0.5 + 0.1
        this.angle = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.01
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.angle += this.rotationSpeed

        // Wrap around screen
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.moveTo(0, -this.size / 2)
        ctx.lineTo(-this.size / 2, this.size / 2)
        ctx.lineTo(this.size / 2, this.size / 2)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }
    }

    // Create triangles
    const triangles: Triangle[] = []
    const triangleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000))

    for (let i = 0; i < triangleCount; i++) {
      triangles.push(new Triangle())
    }

    // Animation loop
    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#000000")
      gradient.addColorStop(1, "#300000")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw triangles
      triangles.forEach((triangle) => {
        triangle.update()
        triangle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
