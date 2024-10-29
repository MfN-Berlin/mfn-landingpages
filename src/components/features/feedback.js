import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../elements/Button';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Move messages outside component
  const RATING_MESSAGES = {
    1: "Das tut uns sehr leid! Deine Erfahrung ist wichtig für uns - erzähle uns bitte, was wir verbessern können.",
    2: "Das können wir besser! Wir würden gerne verstehen, was dich enttäuscht hat.",
    3: "Danke für deine ausgewogene Bewertung! Was hat dir gefallen und wo siehst du Verbesserungspotenzial?",
    4: "Schön, dass dir die Seite gefällt! Wir sind neugierig zu erfahren, was dich besonders überzeugt hat.",
    5: "Wow, das freut uns sehr! Magst du uns erzählen, was dir besonders gut gefallen hat?"
  };

  // Separate API call
  const submitFeedback = async (rating, feedback) => {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating,
        feedback: feedback.trim(),
        date: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setShowModal(true);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      await submitFeedback(rating, feedback);
      setFeedback('');
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Es gab einen Fehler beim Senden des Feedbacks. Bitte versuche es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = async () => {
    // Save only the rating when closing without submitting
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          feedback: '',
          date: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <div className="flex-grow bg-white p-12 flex flex-col justify-center items-start gap-4">
        <h2 className="text-[#1a1a1a] text-[21.60px] font-bold font-['Trade Gothic Next LT Pro']">
          Findest du diese Seite hilfreich?
        </h2>
        <p className="text-[#8c8c8c] text-lg font-normal font-['Trade Gothic Next LT Pro'] leading-[27px]">
          Deine Meinung hilft uns, unser Angebot zu verbessern. Deine Wünsche, Tips, und Beschwerden nehmen wir ernst. Das Feedback ist anonym, wir erheben keine persönlichen Daten. (
          <a href="#" className="text-[#e80029] underline">
            Hinweise zum Datenschutz
          </a>
          )
        </p>
        
        {/* Star Rating */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              onClick={() => handleStarClick(star)}
              className="text-yellow-400 w-8 h-8"
            >
              {star <= (hoveredRating || rating) ? (
                <StarIcon className="w-full h-full" />
              ) : (
                <StarOutline className="w-full h-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Updated Feedback Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            {/* Close button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold mb-4">
              {rating} {rating === 1 ? 'Stern' : 'Sterne'}
            </h3>
            <p className="mb-4">{RATING_MESSAGES[rating]}</p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4 h-32"
              placeholder="Dein Feedback (optional)"
            />
            <div className="flex justify-end">
              <Button
                variant="primary"
                onClick={() => handleSubmit()}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Kommentar senden'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
