import React from 'react';
import './movie-form.css';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const MovieForm = ({ initialMovieInfo = {}, onSubmit, successMessage }) => {

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    release_date: Yup.date().required('Release Year is required'),
    poster_path: Yup.string().required('Movie URL is required'),
    vote_average: Yup.number().required('Rating is required'),
    overview: Yup.string().required('Overview is required'),
  });

  return (
    <Formik
      initialValues={initialMovieInfo || {
        poster_path: '',
        title: '',
        release_date: '',
        genres: [],
        overview: '',
        runtime: '',
        vote_average: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
      <Form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <div className="form-row">
          <div className="form-col">
            <label className="item-title" htmlFor="title">Title</label><br/>
            <Field
              type="text"
              id="title"
              name="title"
              className="input-item"
              placeholder="Enter title"
              required
            />
            {errors.title && touched.title ? (
              <div className='error-message'>{errors.title}</div>
            ) : null}
          </div>
          <div className="form-col">
            <label className="item-title" htmlFor="release_date">Release Year</label>
            <Field
              type="date"
              id="release_date"
              name="release_date"
              className="input-item"
              required
            />
            {errors.date && touched.date ? (
              <div className='error-message'>{errors.date}</div>
            ) : null}
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label className="item-title" htmlFor="poster_path">Movie URL</label>
            <Field
              type="text"
              id="poster_path"
              name="poster_path"
              className="input-item"
              placeholder="Enter movie URL"
              required
            />
            {errors.poster_path && touched.poster_path ? (
              <div className='error-message'>{errors.poster_path}</div>
            ) : null}
          </div>
          <div className="form-col">
            <label className="item-title" htmlFor="vote_average">Rating</label>
            <Field
              type="text"
              id="vote_average"
              name="vote_average"
              className="input-item"
              placeholder="Enter movie rating"
              required
            />
            {errors.vote_average && touched.vote_average ? (
              <div className='error-message'>{errors.vote_average}</div>
            ) : null}
          </div>
        </div>
        
        <label className="item-title" htmlFor="overview">Overview</label><br/>
        <Field
          as="textarea"
          id="overview"
          name="overview"
          className="movie-overview"
          required
        />
        {errors.overview && touched.overview ? (
          <div className='error-message'>{errors.overview}</div>
        ) : null}
        
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  );
}

export default MovieForm;