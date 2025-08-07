import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [comments, setComments] = useState('');
  const [wantsSub, setWantsSub] = useState(false);
  const [howDidYouHear, setHowDidYouHear] = useState('Google Search');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubChange = (event) => {
    setWantsSub(event.target.checked);
  };

  const handleHowDidYouHearChange = (event) => {
    setHowDidYouHear(event.target.value);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          value={username}
          type="text"
          name="username"
          id="username"
          className="form-control"
          onChange={handleUsernameChange}
          // onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="comments" className="form-label">
          Comments:
        </label>
        <textarea
          value={comments}
          id="comments"
          name="comments"
          className="form-control"
          onChange={handleCommentsChange}
        />
      </div>
      <div className="form-check mb-3">
        <input
          checked={wantsSub}
          type="checkbox"
          id="newsletter"
          name="newsletter"
          className="form-check-input"
          onChange={handleSubChange}
        />
        <label className="form-check-label" htmlFor="newsletter">
          Check to sign up
        </label>
      </div>
      <div className="mb-3">
        <fieldset>
          <legend>How did you hear about us?</legend>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="howDidYouHear"
              id="googleSearch"
              value="Google Search"
              checked={howDidYouHear === 'Google Search'}
              onChange={handleHowDidYouHearChange}
            />
            <label className="form-check-label" htmlFor="googleSearch">
              Google Search
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="howDidYouHear"
              id="wordOfMouth"
              value="Word of Mouth"
              checked={howDidYouHear === 'Word of Mouth'}
              onChange={handleHowDidYouHearChange}
            />
            <label className="form-check-label" htmlFor="wordOfMouth">
              Word of Mouth
            </label>
          </div>
        </fieldset>
      </div>
    </form>
  );
}

export default LoginForm;
