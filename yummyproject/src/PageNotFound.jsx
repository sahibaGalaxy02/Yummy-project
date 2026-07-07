import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3"
      aria-labelledby="not-found-title"
    >
      <div
        className="text-center bg-white shadow rounded-4 p-4 p-md-5"
        style={{ maxWidth: '650px', width: '100%' }}
      >
        <div
          className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10"
          style={{ width: '90px', height: '90px', fontSize: '2rem' }}
        >
          🚫
        </div>

        <p className="text-danger fw-bold text-uppercase small mb-2">404 Error</p>

        <h1 id="not-found-title" className="fw-bold display-6 mb-3">
          Page not found
        </h1>

        <p className="text-muted mb-3">
          Sorry, the page you are looking for does not exist, was moved, or the URL is incorrect.
        </p>

        <p className="fst-italic text-secondary mb-4">
          Try going back to the homepage and continue browsing from there.
        </p>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <Link to="/" className="btn btn-danger btn-lg fw-semibold px-4">
            Go to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-outline-dark btn-lg px-4"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound
