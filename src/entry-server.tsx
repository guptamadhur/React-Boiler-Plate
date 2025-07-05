import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <App url={url} />
    </StaticRouter>
  );
}
