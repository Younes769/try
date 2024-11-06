import React, { useState } from 'react';
import logo from './assets/logo.png';
import react from './assets/react.svg';



function App() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(null);
    const [hasTeam, setHasTeam] = useState(false);

    return (
        <div className="App">
            <img src={logo} alt="Arena Logo" className="logo" />
           

            <h1 className="title"> Registration</h1>
            {submissionSuccess && <p className="success-message">Registration successful! Thank you for joining Arena.</p>}
            {submissionSuccess === false && <p className="error-message">There was an error with your submission. Please try again.</p>}

            <form 
                className="form"
                action="https://send.pageclip.co/vASBJvGlsoZtFuqI7KzeIMP6ga4mdjU1/arena" 
                method="POST"
                onSubmit={() => setIsSubmitting(true)}
                target="_blank"
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
                    Preferred Programming Languages
                    <input type="text" name="languages" placeholder="e.g., Python, JavaScript" required className="input" />
                </label>

                <label className="label">
                    Do you have a team?
                    <select onChange={(e) => setHasTeam(e.target.value === "yes")} required className="select">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </label>

                {hasTeam && (
                    <>
                        <label className="label">
                            Team Name
                            <input type="text" name="teamName" required className="input" />
                        </label>

                        <label className="label">Additional Team Members (up to 3)</label>
                        {[1, 2, 3].map((member) => (
                            <input
                                type="text"
                                name={`teamMember${member}`}
                                placeholder={`Team Member ${member}`}
                                key={member}
                                className="input"
                                required={false} 
                            />
                        ))}
                    </>
                )}

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
