import { useState, useEffect } from 'react'

const TypingEffect = ({ strings, typeSpeed = 50, backSpeed = 30, loop = true }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed)

  useEffect(() => {
    const currentString = strings[currentStringIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.substring(0, currentText.length + 1))
          setTypingSpeed(typeSpeed)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
          setTypingSpeed(backSpeed)
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false)
          if (loop) {
            setCurrentStringIndex((prev) => (prev + 1) % strings.length)
          } else if (currentStringIndex < strings.length - 1) {
            setCurrentStringIndex((prev) => prev + 1)
          }
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, loop, typingSpeed])

  return (
    <span className="text-primary-yellow">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingEffect

