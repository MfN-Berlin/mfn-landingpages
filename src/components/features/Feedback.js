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
    1: "Das tut uns sehr leid! Ihre Erfahrung ist wichtig für uns - was können wir verbessern?",
    2: "Das können wir besser! Wir würden gerne verstehen, was Sie enttäuscht hat.",
    3: "Danke für Ihre ausgewogene Bewertung! Was hat Ihnen gefallen und wo sehen Sie Verbesserungspotenzial?",
    4: "Schön, dass Ihnen die Seite gefällt! Wir sind neugierig zu erfahren, was Sie überzeugt hat.",
    5: "Wow, das freut uns sehr! Mögen Sie uns erzählen, was Ihnen besonders gut gefallen hat?"
  };

  const submitFeedback = async (rating, feedback) => {
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzxzXHGFOGdlBVqOTXdh-0JRPn_P6FSNotc8YPrd96ORs6sNHSh4CiA-sooOZZpevM9rA/exec';
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'no-cache',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          rating,
          feedback: feedback.trim(),
          date: new Date().toISOString(),
          url: window.location.href,
        }),
      });

      if (response.type === 'opaque') {
        return true;
      }
      return true;
    } catch (error) {
      if (error.name !== 'TypeError' || !error.message.includes('opaque')) {
        console.error('Error submitting feedback:', error);
      }
      return false;
    }
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setShowModal(true);
  };

  const submitInBackground = async (rating, feedbackText = '', isFullSubmission = false) => {
    try {
      const submissionData = {
        rating,
        feedback: isFullSubmission ? feedbackText.trim() : '',
        date: new Date().toISOString(),
      };
      
      const success = await submitFeedback(submissionData.rating, submissionData.feedback);
      if (!success && isFullSubmission) {
        console.log('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Optionally show a toast notification for failed submission
    }
  };

  const handleClose = () => {
    const currentRating = rating; // Capture current rating value
    
    // Immediately close modal and reset states
    setShowModal(false);
    setFeedback('');
    
    // Submit only rating in background
    submitInBackground(currentRating);
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = () => {
    const currentFeedback = feedback; // Capture current feedback value
    const currentRating = rating; // Capture current rating value
    
    setIsSubmitting(true);
    setShowModal(false);
    setFeedback('');
    
    // Submit full feedback in background
    submitInBackground(currentRating, currentFeedback, true);
  };

  return (
    <>
      <div className="flex-grow bg-white p-12">
        <div className="flex items-center justify-between gap-12 flex-col md:flex-row ">
          <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
            <h2 className="text-Black-900">
              Finden Sie diese Seite hilfreich?
            </h2>
            <p className="text-Black-500">
              Mit Ihrer Bewertung helfen Sie uns, dieses Angebot für Sie zu verbessern. <br/>
              Für diese Befragung erheben wir keine persönlichen Daten. (
              <a 
                href="https://www.museumfuernaturkunde.berlin/de/datenschutzerklaerung"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hinweise zum Datenschutz
              </a>
              )
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
                aria-label={`Rate ${star} star${star === 1 ? '' : 's'}`}
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 w-full h-full"
          onClick={handleClickOutside}
          role="dialog"
          aria-modal="true"
          aria-labelledby="feedback-modal-title"
        >
          <div 
            className="bg-white rounded-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close feedback modal"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h3 id="feedback-modal-title" className="text-xl font-bold mb-4">
              {rating} {rating === 1 ? 'Stern' : 'Sterne'}
            </h3>
            <p className="mb-4">{RATING_MESSAGES[rating]}</p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4 h-32"
              placeholder="Ihr Feedback (optional)"
              aria-label="Feedback text"
            />
            <div className="flex justify-end">
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Kommentar senden
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
