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

  const RATING_MESSAGES = {
    1: "Das tut uns sehr leid! Ihre Erfahrung ist wichtig für uns - erzählen Sie uns bitte, was wir verbessern können.",
    2: "Das können wir besser! Wir würden gerne verstehen, was Sie enttäuscht hat.",
    3: "Danke für Ihre ausgewogene Bewertung! Was hat Ihnen gefallen und wo sehen Sie Verbesserungspotenzial?",
    4: "Schön, dass Ihnen die Seite gefällt! Wir sind neugierig zu erfahren, was Sie besonders überzeugt hat.",
    5: "Wow, das freut uns sehr! Mögen Sie uns erzählen, was Ihnen besonders gut gefallen hat?"
  };

  const submitFeedback = async (rating, feedback) => {
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzxzXHGFOGdlBVqOTXdh-0JRPn_P6FSNotc8YPrd96ORs6sNHSh4CiA-sooOZZpevM9rA/exec';
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          feedback: feedback.trim(),
          date: new Date().toISOString(),
        }),
      });

      if (!response) {
        throw new Error('Network error');
      }

      return true;
    } catch (error) {
      console.error('Error submitting feedback:', error);
      throw error;
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
      alert('Es gab einen Fehler beim Senden des Feedbacks. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <div className="flex-grow bg-white p-12">
        <div className="flex items-center justify-between gap-12">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-Black-900">
              Finden Sie diese Seite hilfreich?
            </h2>
            <p className="text-Black-700">
            Ihre Meinung hilft uns, unser Angebot zu verbessern. Ihre Wünsche, Tipps und Beschwerden nehmen wir ernst. Das Feedback ist anonym, wir erheben keine persönlichen Daten. (
              <a href="#" className="text-Red underline">
                Hinweise zum Datenschutz
              </a>
            </p>
          </div>

          <div className="flex gap-2 pt-1">
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
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
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
