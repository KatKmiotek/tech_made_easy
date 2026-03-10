import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';

export default function HomeRedirect(): JSX.Element {
  useEffect(() => {
    // Client-side redirect to the docs intro page
    if (typeof window !== 'undefined') {
      window.location.replace('/docs/intro');
    }
  }, []);

  return (
    <div style={{padding: '3rem', textAlign: 'center'}}>
      <h1>Redirecting to documentation…</h1>
      <p>
        If you are not redirected automatically, <Link to="/docs/intro">click here</Link>.
      </p>
    </div>
  );
}

