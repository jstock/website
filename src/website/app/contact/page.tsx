import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
};

export default function ContactMe() {
  return (
    <>
      <form className="mt-4">
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input name="email" type="email" className="form-control" required />
        </div>

        <div className="form-group mt-4">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            rows={10}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-5">
          <i className="bi bi-envelope-fill me-2" />
          Send
        </button>
      </form>
    </>
  );
}
