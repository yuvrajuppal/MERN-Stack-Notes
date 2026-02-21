```jsx
import React from 'react';

const ExternalLink = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.focus();
  };

  return (
    <button onClick={() => openInNewTab('https://www.google.com')}>
      Open Google
    </button>
  );
};
```

