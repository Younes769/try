import React, { useState } from 'react';

function App() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(null);

    const handleSubmit = (e) => {
        setIsSubmitting(true);
        setSubmissionSuccess(null);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmissionSuccess(true);
            e.target.reset();
        }, 500);
    };

    return (
        <div className="App">
            <h1 className="title">Arena Coding Challenge Registration</h1>
            {submissionSuccess && <p className="success-message">Registration successful! Welcome to Arena.</p>}
            {submissionSuccess === false && <p className="error-message">There was an error with your submission. Please try again.</p>}

            <form 
                className="form"
                action="https://send.pageclip.co/vASBJvGlsoZtFuqI7KzeIMP6ga4mdjU1/arena" 
                method="POST"
                onSubmit={handleSubmit}
            >
                <label className="label">
                    Full Name
                    <input type="text" name="name" required className="input" />
                </label>

                <label className="label">
                    Email
                    <input type="email" name="email" required className="input" />
                </label>

                <label className="label">
                    University Year
                    <select name="universityYear" required className="select">
                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                    </select>
                </label>

                <label className="label">
                    Coding Experience
                    <select name="experience" required className="select">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </label>

                <label className="label">
                    Preferred Programming Languages
                    <input type="text" name="languages" placeholder="e.g., Python, JavaScript" required className="input" />
                </label>

                <label className="checkbox-label">
                    <input type="checkbox" name="terms" required className="checkbox" />
                    I agree to the terms and conditions
                </label>

                <button type="submit" disabled={isSubmitting} className="submit-button">
                    {isSubmitting ? "Submitting..." : "Register"}
                </button>
            </form>
        </div>
    );
}

export default App;
