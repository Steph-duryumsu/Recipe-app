import {useState} from 'react';
import './ReviewSection.css'

const ReviewSection = () => {
  const [review, setReview] = useState('');
  const [emoji, setEmoji] = useState('');
  const [textBox, settextBox] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([]);

 const submitHandler = () => {
  if(review.trim() && emoji){
    setSubmittedReviews(prev => [...prev, {review, emoji}]);
    setReview('');
    setEmoji('');
    settextBox(false);
  }
 };

  return (
    <div className='reviewContainer'>
      <h2>Leave a review</h2>
      <button className="review-toggle-btn" onClick={() => settextBox(!textBox)}>
        {textBox ? 'Close' : 'Write a Review'}
      </button>

      {textBox && (
        <div className='review-box'>
        <textarea className='textarea'
        value={review}
        onChange ={(e) => setReview(e.target.value)}
        placeholder='How was the recipe???'
      />

      <select value={emoji} onChange={(e) => setEmoji(e.target.value)} className='select'>
        <option value="">Select an emoji</option>
        <option value="😁">Loved it</option>
        <option value="🙃">Pretty good</option>
        <option value="🤔">Not so good</option>
        <option value="👎">It was poor</option>
        <option value="😶">No comment</option>
      </select>

      <button className='SubmitReview' onClick={submitHandler}> Submit Review</button>
        </div>
      )}
      
      <div className='submittedReviews'>
        {submittedReviews.map((entry, index) => (
          <div key={index} className='reviewEntry'>
            <span className='reviewEmoji'>{entry.emoji}</span>
            <p>{entry.review}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
};
export default ReviewSection;