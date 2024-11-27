'use client';

import { Content } from 'flotiq-components-react';

export default function BlogContent({ content }) {
  return (<Content blocks={content.blocks} />)
}
