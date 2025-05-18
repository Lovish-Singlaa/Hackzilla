"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, Clock } from "lucide-react"

export default function RunningNotification() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = "2025-05-16T23:59:59"

  useEffect(() => {
    if (!contentRef.current || !containerRef.current) return

    const updateWidths = () => {
      if (contentRef.current && containerRef.current) {
        setContentWidth(contentRef.current.offsetWidth)
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidths()
    window.addEventListener("resize", updateWidths)

    return () => {
      window.removeEventListener("resize", updateWidths)
    }
  }, [])

  const animationDuration = 20 // seconds

  return (
    <div
      ref={containerRef}
      className="bg-red-900 text-white py-2 overflow-hidden whitespace-nowrap w-full"
      style={{ position: "relative" }}
    >
      <div
        ref={contentRef}
        className="inline-block animate-marquee"
        style={{
          animation: `marquee ${animationDuration}s linear infinite`,
          paddingLeft: "100%",
        }}
      >
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-300" />
          <span className="font-bold">URGENT:</span>
          <span>
            Shortlisted teams will be announced on May 21st!{" "}  
          </span>
        </div>
      </div>

      {/* Duplicate for seamless looping */}
      <div
        className="inline-block animate-marquee2"
        style={{
          animation: `marquee2 ${animationDuration}s linear infinite`,
          paddingLeft: "100%", // Start from right edge
          animationDelay: `${animationDuration / 2}s`,
        }}
      >
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-300" />
          <span className="font-bold">URGENT:</span>
          <span>
            Registrations close on May 16th! Only{" "}
            <span className="font-bold">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>{" "}
            left to register your team.
          </span>
          <Clock className="h-5 w-5 text-yellow-300 ml-3" />
          <span className="font-bold">Don't miss out!</span>
          <span className="mx-12">•</span>
        </div>
      </div>
    </div>
  )
}
